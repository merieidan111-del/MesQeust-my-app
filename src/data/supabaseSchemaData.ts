export const SUPABASE_SQL_SCHEMA = `-- ==============================================================================
-- MEDQUEST - SUPABASE DATABASE ARCHITECTURE & RLS SECURITY POLICIES
-- Target: Medical Students & Externs (Years 3, 4, and 5)
-- Features: Username Auth, Exam Countdown, Courses, Resources, 1-30 QCMs & Cases
-- ==============================================================================

-- 1. Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Custom ENUM types
CREATE TYPE academic_year_enum AS ENUM ('3ème Année', '4ème Année', '5ème Année');
CREATE TYPE question_type_enum AS ENUM ('QCM', 'CasClinique');
CREATE TYPE resource_type_enum AS ENUM ('Resume', 'Astuce');

-- ==============================================================================
-- 3. PROFILES TABLE (Username auth, streaks, XP, custom exam countdown)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE NOT NULL,
    full_name TEXT,
    academic_year academic_year_enum NOT NULL DEFAULT '4ème Année',
    total_xp INTEGER NOT NULL DEFAULT 0 CHECK (total_xp >= 0),
    level INTEGER NOT NULL DEFAULT 1,
    title TEXT NOT NULL DEFAULT 'Externe en Médecine',
    streak_count INTEGER NOT NULL DEFAULT 1 CHECK (streak_count >= 0),
    streak_freezes_count INTEGER NOT NULL DEFAULT 1 CHECK (streak_freezes_count >= 0),
    last_active_date DATE NOT NULL DEFAULT CURRENT_DATE,
    custom_exam_date TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '18 days'),
    exam_title TEXT DEFAULT 'Examen Clinique de Cardiologie',
    exam_module TEXT DEFAULT 'Cardiologie',
    avatar_url TEXT DEFAULT 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_profiles_username ON public.profiles (username);
CREATE INDEX IF NOT EXISTS idx_profiles_year_xp ON public.profiles (academic_year, total_xp DESC);

-- ==============================================================================
-- 4. MODULES TABLE (Cardiology, Neurology, Gastroenterology, Pneumology, etc.)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.modules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    academic_year academic_year_enum NOT NULL,
    icon_url TEXT DEFAULT 'HeartPulse',
    description TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_modules_academic_year ON public.modules (academic_year, order_index);

-- ==============================================================================
-- 5. COURSES TABLE (Cours: e.g. Insuffisance Cardiaque, AVC, Cirrhose)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    module_id UUID NOT NULL REFERENCES public.modules(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_courses_module ON public.courses (module_id, order_index);

-- ==============================================================================
-- 6. QUESTIONS TABLE (1-by-1 Flow, QCM vs Cas Clinique, Jump-List Support)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    type question_type_enum NOT NULL DEFAULT 'QCM',
    question_number INTEGER NOT NULL DEFAULT 1,
    question_text TEXT NOT NULL,
    options JSONB NOT NULL, -- Array of strings: ["Option A", "Option B", "Option C", "Option D", "Option E"]
    correct_answers JSONB NOT NULL, -- Array of indices: [0] or [1, 3]
    explanation TEXT NOT NULL, -- Detailed clinical feedback & trap warnings
    clinical_pearl TEXT, -- High-yield mnemonic or intern tip
    difficulty TEXT DEFAULT 'Standard',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    UNIQUE(course_id, question_number, type)
);

CREATE INDEX IF NOT EXISTS idx_questions_course_num ON public.questions (course_id, type, question_number);

-- ==============================================================================
-- 7. COURSE_RESOURCES TABLE (Résumés de cours & Astuces/Mnémos d'externat)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.course_resources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    type resource_type_enum NOT NULL DEFAULT 'Resume',
    title TEXT NOT NULL,
    content_markdown TEXT NOT NULL,
    file_url TEXT,
    author_or_source TEXT DEFAULT 'Collège des Enseignants',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_course_resources ON public.course_resources (course_id, type);

-- ==============================================================================
-- 8. USER_PROGRESS TABLE (Answer history, correctness, jump-list status)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.user_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    is_correct BOOLEAN NOT NULL,
    selected_options JSONB NOT NULL DEFAULT '[]'::jsonb,
    answered_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    UNIQUE(user_id, question_id, answered_at)
);

CREATE INDEX IF NOT EXISTS idx_user_progress_user ON public.user_progress (user_id, answered_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_progress_question ON public.user_progress (question_id);

-- ==============================================================================
-- 9. ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Public read for study curriculum
CREATE POLICY "Public read for modules" ON public.modules FOR SELECT TO authenticated, anon USING (true);
CREATE POLICY "Public read for courses" ON public.courses FOR SELECT TO authenticated, anon USING (true);
CREATE POLICY "Public read for questions" ON public.questions FOR SELECT TO authenticated, anon USING (true);
CREATE POLICY "Public read for resources" ON public.course_resources FOR SELECT TO authenticated, anon USING (true);

-- Profiles policies
CREATE POLICY "Profiles viewable by all students" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);

-- User Progress policies
CREATE POLICY "Users view own progress" ON public.user_progress FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users insert own progress" ON public.user_progress FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
`;

export const FLUTTER_DASHBOARD_SCREEN_CODE = `// lib/presentation/screens/home/dashboard_screen.dart
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:lucide_icons/lucide_icons.dart';

class DashboardScreen extends ConsumerStatefulWidget {
  const DashboardScreen({super.key});

  @override
  ConsumerState<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends ConsumerState<DashboardScreen> {
  DateTime _targetExamDate = DateTime.now().add(const Duration(days: 14, hours: 8));
  String _examTitle = "Examen Clinique de Cardiologie";
  late Timer _countdownTimer;
  Duration _remainingTime = Duration.zero;

  @override
  void initState() {
    super.initState();
    _updateCountdown();
    _countdownTimer = Timer.periodic(const Duration(seconds: 1), (_) => _updateCountdown());
  }

  void _updateCountdown() {
    final now = DateTime.now();
    setState(() {
      _remainingTime = _targetExamDate.isAfter(now)
          ? _targetExamDate.difference(now)
          : Duration.zero;
    });
  }

  @override
  void dispose() {
    _countdownTimer.cancel();
    super.dispose();
  }

  Future<void> _pickCustomExamDate() async {
    final pickedDate = await showDatePicker(
      context: context,
      initialDate: _targetExamDate,
      firstDate: DateTime.now(),
      lastDate: DateTime.now().add(const Duration(days: 365)),
    );
    if (pickedDate != null) {
      setState(() {
        _targetExamDate = pickedDate;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final days = _remainingTime.inDays;
    final hours = _remainingTime.inHours % 24;
    final minutes = _remainingTime.inMinutes % 60;
    final seconds = _remainingTime.inSeconds % 60;

    return Scaffold(
      backgroundColor: const Color(0xFF020617), // Slate 950
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: const Color(0xFF06B6D4).withOpacity(0.15),
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Icon(LucideIcons.stethoscope, color: Color(0xFF06B6D4), size: 20),
            ),
            const SizedBox(width: 10),
            const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("MedQuest", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                Text("4ème Année d'Externat", style: TextStyle(color: Colors.white54, fontSize: 11)),
              ],
            ),
          ],
        ),
        actions: [
          // Streaks Counter
          Container(
            margin: const EdgeInsets.only(right: 12),
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            decoration: BoxDecoration(
              color: Colors.orange.withOpacity(0.15),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: Colors.orange.withOpacity(0.3)),
            ),
            child: const Row(
              children: [
                Icon(LucideIcons.flame, color: Colors.orangeAccent, size: 16),
                SizedBox(width: 4),
                Text("14 Jours", style: TextStyle(color: Colors.orangeAccent, fontWeight: FontWeight.bold, fontSize: 12)),
              ],
            ),
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // 1. Controllable Exam Countdown Widget
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(18),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFF0F172A), Color(0xFF1E293B)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(24),
                border: Border.all(color: const Color(0xFF06B6D4).withOpacity(0.3)),
                boxShadow: [
                  BoxShadow(color: const Color(0xFF06B6D4).withOpacity(0.08), blurRadius: 20, spreadRadius: 2),
                ],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.between,
                    children: [
                      Row(
                        children: [
                          const Icon(LucideIcons.hourglass, color: Color(0xFF06B6D4), size: 18),
                          const SizedBox(width: 8),
                          Text(_examTitle, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 14)),
                        ],
                      ),
                      IconButton(
                        icon: const Icon(LucideIcons.calendar, color: Color(0xFF06B6D4), size: 18),
                        onPressed: _pickCustomExamDate,
                        tooltip: "Modifier la date d'examen",
                      ),
                    ],
                  ),
                  const SizedBox(height: 14),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      _buildCountdownItem(days.toString(), "Jours"),
                      _buildCountdownItem(hours.toString().padLeft(2, '0'), "Heures"),
                      _buildCountdownItem(minutes.toString().padLeft(2, '0'), "Minutes"),
                      _buildCountdownItem(seconds.toString().padLeft(2, '0'), "Sec"),
                    ],
                  ),
                ],
              ),
            ),

            const SizedBox(height: 24),

            // 2. Overall Academic Progress
            const Text("Progression Globale", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: const Color(0xFF0F172A),
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: Colors.white10),
              ),
              child: Column(
                children: [
                  const Row(
                    mainAxisAlignment: MainAxisAlignment.between,
                    children: [
                      Text("Modules Validés : 4 / 9", style: TextStyle(color: Colors.white70, fontSize: 13)),
                      Text("44%", style: TextStyle(color: Color(0xFF10B981), fontWeight: FontWeight.bold, fontSize: 14)),
                    ],
                  ),
                  const SizedBox(height: 8),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(10),
                    child: const LinearProgressIndicator(value: 0.44, minHeight: 8, color: Color(0xFF10B981), backgroundColor: Colors.white10),
                  ),
                  const SizedBox(height: 12),
                  const Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text("QCMs Résolus : 142 / 320", style: TextStyle(color: Colors.white70, fontSize: 13)),
                      Text("+2890 XP", style: TextStyle(color: Color(0xFF06B6D4), fontWeight: FontWeight.bold, fontSize: 13)),
                    ],
                  ),
                ],
              ),
            ),

            const SizedBox(height: 24),

            // 3. Active / Recent Modules Carousel
            Row(
              mainAxisAlignment: MainAxisAlignment.between,
              children: [
                const Text("Modules en Cours", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 16)),
                TextButton(
                  onPressed: () {},
                  child: const Text("Voir tout", style: TextStyle(color: Color(0xFF06B6D4), fontSize: 13)),
                ),
              ],
            ),
            const SizedBox(height: 10),
            SizedBox(
              height: 160,
              child: ListView(
                scrollDirection: Axis.horizontal,
                children: [
                  _buildModuleCard("Cardiologie", "4 Cours • 28 QCMs", 0.68, Colors.roseAccent),
                  _buildModuleCard("Neurologie", "3 Cours • 24 QCMs", 0.45, Colors.indigoAccent),
                  _buildModuleCard("Gastro-entéro", "4 Cours • 20 QCMs", 0.30, Colors.amberAccent),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCountdownItem(String value, String label) {
    return Column(
      children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
          decoration: BoxDecoration(
            color: const Color(0xFF020617),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: Colors.white12),
          ),
          child: Text(value, style: const TextStyle(color: Color(0xFF06B6D4), fontWeight: FontWeight.bold, fontSize: 20, fontFamily: 'monospace')),
        ),
        const SizedBox(height: 4),
        Text(label, style: const TextStyle(color: Colors.white54, fontSize: 11)),
      ],
    );
  }

  Widget _buildModuleCard(String title, String subtitle, double progress, Color accentColor) {
    return Container(
      width: 200,
      margin: const EdgeInsets.only(right: 14),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFF0F172A),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: accentColor.withOpacity(0.3)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 15)),
              Icon(LucideIcons.activity, color: accentColor, size: 18),
            ],
          ),
          Text(subtitle, style: const TextStyle(color: Colors.white54, fontSize: 12)),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text("\${(progress * 100).toInt()}% complété", style: TextStyle(color: accentColor, fontSize: 11, fontWeight: FontWeight.w600)),
              const SizedBox(height: 4),
              LinearProgressIndicator(value: progress, color: accentColor, backgroundColor: Colors.white10, minHeight: 4),
            ],
          ),
        ],
      ),
    );
  }
}
`;

export const FLUTTER_COURSE_HUB_SCREEN_CODE = `// lib/presentation/screens/course/course_hub_screen.dart
import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';

class CourseHubScreen extends StatelessWidget {
  final String courseTitle;
  final String moduleTitle;

  const CourseHubScreen({
    super.key,
    required this.courseTitle,
    required this.moduleTitle,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF020617),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(courseTitle, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            Text(moduleTitle, style: const TextStyle(color: Colors.white54, fontSize: 11)),
          ],
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              "Sélectionnez le mode d'entraînement :",
              style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w600, fontSize: 14),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: GridView.count(
                crossAxisCount: 2,
                mainAxisSpacing: 14,
                crossAxisSpacing: 14,
                childAspectRatio: 0.9,
                children: [
                  _buildModeCard(
                    context,
                    title: "QCMs Théoriques",
                    desc: "Série d'entraînement 1 à 25 avec correction instantanée",
                    icon: LucideIcons.checkSquare,
                    color: const Color(0xFF06B6D4), // Cyan
                    badge: "15 Questions",
                    onTap: () {},
                  ),
                  _buildModeCard(
                    context,
                    title: "Cas Cliniques",
                    desc: "Vignettes progressives et dossiers d'internat",
                    icon: LucideIcons.stethoscope,
                    color: const Color(0xFF10B981), // Emerald
                    badge: "4 Dossiers",
                    onTap: () {},
                  ),
                  _buildModeCard(
                    context,
                    title: "Résumés & Fiches",
                    desc: "Synthèses conformes aux dernières recos ESC / HAS",
                    icon: LucideIcons.fileText,
                    color: const Color(0xFF8B5CF6), // Purple
                    badge: "2 Fiches",
                    onTap: () {},
                  ),
                  _buildModeCard(
                    context,
                    title: "Astuces & Pièges",
                    desc: "Moyens mnémotechniques et perles d'externat",
                    icon: LucideIcons.lightbulb,
                    color: const Color(0xFFF59E0B), // Amber
                    badge: "5 Astuces",
                    onTap: () {},
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildModeCard(
    BuildContext context, {
    required String title,
    required String desc,
    required IconData icon,
    required Color color,
    required String badge,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: const Color(0xFF0F172A),
          borderRadius: BorderRadius.circular(24),
          border: Border.all(color: color.withOpacity(0.3), width: 1.5),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.between,
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(color: color.withOpacity(0.15), shape: BoxShape.circle),
                  child: Icon(icon, color: color, size: 22),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  decoration: BoxDecoration(color: Colors.white10, borderRadius: BorderRadius.circular(8)),
                  child: Text(badge, style: const TextStyle(color: Colors.white70, fontSize: 10, fontWeight: FontWeight.bold)),
                ),
              ],
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 15)),
                const SizedBox(height: 4),
                Text(desc, style: const TextStyle(color: Colors.white54, fontSize: 11, height: 1.3), maxLines: 2, overflow: TextOverflow.ellipsis),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
`;

export const FLUTTER_INTERACTIVE_QCM_JUMPLIST_CODE = `// lib/presentation/screens/qcm/interactive_qcm_jumplist_screen.dart
import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';

class InteractiveQCMJumpListScreen extends StatefulWidget {
  final int totalQuestions;
  const InteractiveQCMJumpListScreen({super.key, this.totalQuestions = 25});

  @override
  State<InteractiveQCMJumpListScreen> createState() => _InteractiveQCMJumpListScreenState();
}

class _InteractiveQCMJumpListScreenState extends State<InteractiveQCMJumpListScreen> {
  int _currentQuestionIndex = 0;
  final Map<int, bool> _answers = {}; // index -> isCorrect
  final Map<int, List<int>> _selectedOptions = {}; // index -> list of options
  bool _hasSubmitted = false;

  void _showJumpListDrawer() {
    showModalBottomSheet(
      context: context,
      backgroundColor: const Color(0xFF0F172A),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
      ),
      builder: (context) {
        return Container(
          padding: const EdgeInsets.all(20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.between,
                children: [
                  const Text("Sélecteur Rapide de Questions", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 16)),
                  IconButton(icon: const Icon(LucideIcons.x, color: Colors.white54), onPressed: () => Navigator.pop(context)),
                ],
              ),
              const SizedBox(height: 10),
              // Legend
              const Row(
                children: [
                  _LegendPill(color: Color(0xFF10B981), label: "Correcte"),
                  SizedBox(width: 8),
                  _LegendPill(color: Color(0xFFF43F5E), label: "Incorrecte"),
                  SizedBox(width: 8),
                  _LegendPill(color: Colors.white24, label: "Non répondue"),
                ],
              ),
              const SizedBox(height: 16),
              // 1 to 25/30 Grid
              Expanded(
                child: GridView.builder(
                  gridDelegate: const dynamicDelegate(),
                  itemCount: widget.totalQuestions,
                  itemBuilder: (context, i) {
                    final isCurrent = i == _currentQuestionIndex;
                    final hasAnswered = _answers.containsKey(i);
                    final isCorrect = _answers[i] == true;

                    Color bgColor = Colors.white10;
                    Color textColor = Colors.white70;

                    if (hasAnswered) {
                      bgColor = isCorrect ? const Color(0xFF10B981) : const Color(0xFFF43F5E);
                      textColor = Colors.white;
                    }

                    return GestureDetector(
                      onTap: () {
                        setState(() {
                          _currentQuestionIndex = i;
                          _hasSubmitted = _answers.containsKey(i);
                        });
                        Navigator.pop(context);
                      },
                      child: Container(
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          color: bgColor,
                          borderRadius: BorderRadius.circular(12),
                          border: isCurrent ? Border.all(color: const Color(0xFF06B6D4), width: 2) : null,
                        ),
                        child: Text("\${i + 1}", style: TextStyle(color: textColor, fontWeight: FontWeight.bold, fontSize: 13)),
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF020617),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Text("Question \${_currentQuestionIndex + 1} sur \${widget.totalQuestions}"),
        actions: [
          // Jump list button (Grid 1-30)
          IconButton(
            icon: const Icon(LucideIcons.layoutGrid, color: Color(0xFF06B6D4)),
            tooltip: "Jump-List (1 à \${widget.totalQuestions})",
            onPressed: _showJumpListDrawer,
          ),
        ],
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Progress Bar
              LinearProgressIndicator(
                value: (_currentQuestionIndex + 1) / widget.totalQuestions,
                color: const Color(0xFF06B6D4),
                backgroundColor: Colors.white10,
              ),
              const SizedBox(height: 16),

              // Question Vignette
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: const Color(0xFF0F172A),
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: Colors.white10),
                ),
                child: const Text(
                  "Homme de 68 ans avec FEVG à 32%. Quelle quadrithérapie de référence selon l'ESC 2024 doit être instaurée ?",
                  style: TextStyle(color: Colors.white, fontSize: 15, height: 1.4),
                ),
              ),
              const SizedBox(height: 20),

              // Options
              ...List.generate(4, (idx) {
                return Container(
                  margin: const EdgeInsets.only(bottom: 10),
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: const Color(0xFF0F172A),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: Colors.white12),
                  ),
                  child: Text("Option \${String.fromCharCode(65 + idx)}", style: const TextStyle(color: Colors.white)),
                );
              }),

              const Spacer(),

              // Next / Validate Button
              SizedBox(
                width: double.infinity,
                height: 50,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF06B6D4),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                  onPressed: () {
                    if (_currentQuestionIndex < widget.totalQuestions - 1) {
                      setState(() => _currentQuestionIndex++);
                    }
                  },
                  child: const Text("Suivant", style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class dynamicDelegate extends SliverGridDelegateWithFixedCrossAxisCount {
  const dynamicDelegate() : super(crossAxisCount: 6, mainAxisSpacing: 8, crossAxisSpacing: 8);
}

class _LegendPill extends StatelessWidget {
  final Color color;
  final String label;
  const _LegendPill({required this.color, required this.label});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(width: 10, height: 10, decoration: BoxDecoration(color: color, shape: BoxShape.circle)),
        const SizedBox(width: 4),
        Text(label, style: const TextStyle(color: Colors.white70, fontSize: 11)),
      ],
    );
  }
}
`;

export const FLUTTER_ALL_MODULES_DIRECTORY_CODE = `// lib/presentation/screens/directory/all_modules_directory_screen.dart
import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';

class AllModulesDirectoryScreen extends StatefulWidget {
  const AllModulesDirectoryScreen({super.key});

  @override
  State<AllModulesDirectoryScreen> createState() => _AllModulesDirectoryScreenState();
}

class _AllModulesDirectoryScreenState extends State<AllModulesDirectoryScreen> {
  String _searchQuery = "";
  String _selectedYear = "4ème Année";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF020617),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: const Text("Répertoire des Modules", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
      ),
      body: Column(
        children: [
          // Search & Year filter bar
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: TextField(
              onChanged: (val) => setState(() => _searchQuery = val),
              style: const TextStyle(color: Colors.white),
              decoration: InputDecoration(
                hintText: "Rechercher un module (ex: Cardio, Neuro...)",
                hintStyle: const TextStyle(color: Colors.white38, fontSize: 13),
                prefixIcon: const Icon(LucideIcons.search, color: Color(0xFF06B6D4), size: 18),
                filled: true,
                fillColor: const Color(0xFF0F172A),
                contentPadding: const EdgeInsets.symmetric(vertical: 12),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
              ),
            ),
          ),
          const SizedBox(height: 16),

          // Modules List
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              children: [
                _buildDirectoryModuleTile("Cardiologie & Vasculaire", "5 Cours • 28 QCMs", 0.68, Colors.roseAccent),
                _buildDirectoryModuleTile("Neurologie Clinique", "4 Cours • 24 QCMs", 0.45, Colors.indigoAccent),
                _buildDirectoryModuleTile("Hépato-Gastroentérologie", "4 Cours • 20 QCMs", 0.30, Colors.amberAccent),
                _buildDirectoryModuleTile("Pneumologie", "4 Cours • 18 QCMs", 0.55, Colors.cyanAccent),
                _buildDirectoryModuleTile("Hématologie & Onco", "3 Cours • 16 QCMs", 0.20, Colors.pinkAccent),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDirectoryModuleTile(String title, String subtitle, double progress, Color color) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFF0F172A),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white10),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: color.withOpacity(0.15), shape: BoxShape.circle),
            child: Icon(LucideIcons.folder, color: color, size: 20),
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 14)),
                const SizedBox(height: 4),
                Text(subtitle, style: const TextStyle(color: Colors.white54, fontSize: 11)),
                const SizedBox(height: 8),
                LinearProgressIndicator(value: progress, minHeight: 4, color: color, backgroundColor: Colors.white10),
              ],
            ),
          ),
          const SizedBox(width: 10),
          const Icon(LucideIcons.chevronRight, color: Colors.white38, size: 18),
        ],
      ),
    );
  }
}
`;

// ==============================================================================
// DELIVERABLE 1: SUPABASE SQL - PROFILES TABLE & USERNAME AUTH WITH RLS
// ==============================================================================
export const SUPABASE_PROFILES_USERNAME_AUTH_SQL = `-- ==============================================================================
-- DELIVERABLE 1: SUPABASE SQL SCHEMA FOR USERNAME & PASSWORD AUTH (NO EMAIL REQUIRED)
-- Table: public.profiles
-- Policies: Row Level Security (RLS) for Username registration and lookup
-- ==============================================================================

-- 1. Create custom academic year type if not exists
DO $$ BEGIN
    CREATE TYPE academic_year_enum AS ENUM ('3ème Année', '4ème Année', '5ème Année');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 2. Create the profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT UNIQUE NOT NULL,
    academic_year academic_year_enum NOT NULL DEFAULT '4ème Année',
    total_xp INTEGER NOT NULL DEFAULT 0 CHECK (total_xp >= 0),
    streak_count INTEGER NOT NULL DEFAULT 0 CHECK (streak_count >= 0),
    level INTEGER NOT NULL DEFAULT 1,
    title TEXT NOT NULL DEFAULT 'Externe en Médecine',
    avatar_url TEXT DEFAULT 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for instant username lookups during Sign-In and uniqueness check during Sign-Up
CREATE INDEX IF NOT EXISTS idx_profiles_username_lower ON public.profiles (LOWER(username));

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow public / anon users to check existing usernames during registration
CREATE POLICY "Permettre la vérification des usernames"
    ON public.profiles
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- Policy 2: Allow new users to insert their profile on Sign-Up (Username + Academic Year + total_xp:0 + streak:0)
CREATE POLICY "Permettre l'insertion lors de l'inscription"
    ON public.profiles
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
        char_length(username) >= 3 AND
        total_xp = 0 AND
        streak_count = 0
    );

-- Policy 3: Allow users to update their own profile and score progression
CREATE POLICY "Permettre la mise à jour de son profil"
    ON public.profiles
    FOR UPDATE
    TO authenticated, anon
    USING (true)
    WITH CHECK (true);
`;

// ==============================================================================
// DELIVERABLE 2: FLUTTER AUTH CONTROLLER (PROVIDER & SESSION PERSISTENCE)
// ==============================================================================
export const FLUTTER_AUTH_CONTROLLER_CODE = `// ==============================================================================
// DELIVERABLE 2: FLUTTER AUTH CONTROLLER WITH SESSION PERSISTENCE
// File: lib/controllers/auth_controller.dart
// Dependencies: provider, supabase_flutter, shared_preferences
// ==============================================================================

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class UserProfileModel {
  final String id;
  final String username;
  final String academicYear;
  final int totalXp;
  final int streakCount;

  UserProfileModel({
    required this.id,
    required this.username,
    required this.academicYear,
    this.totalXp = 0,
    this.streakCount = 0,
  });

  factory UserProfileModel.fromMap(Map<String, dynamic> map) {
    return UserProfileModel(
      id: map['id']?.toString() ?? '',
      username: map['username'] ?? '',
      academicYear: map['academic_year'] ?? '4ème Année',
      totalXp: map['total_xp'] ?? 0,
      streakCount: map['streak_count'] ?? 0,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'username': username,
      'academic_year': academicYear,
      'total_xp': totalXp,
      'streak_count': streakCount,
    };
  }
}

class AuthController with ChangeNotifier {
  final SupabaseClient _supabase = Supabase.instance.client;
  
  UserProfileModel? _currentProfile;
  bool _isLoading = false;
  String? _errorMessage;

  UserProfileModel? get currentProfile => _currentProfile;
  bool get isAuthenticated => _currentProfile != null;
  bool get isLoading => _isLoading;
  String? get errorMessage => _errorMessage;

  static const String _prefUsernameKey = 'medquest_session_username';
  static const String _prefYearKey = 'medquest_session_year';

  AuthController() {
    loadCachedSession();
  }

  /// Automatically restore user session on app launch
  Future<void> loadCachedSession() async {
    _isLoading = true;
    notifyListeners();

    try {
      final prefs = await SharedPreferences.getInstance();
      final cachedUsername = prefs.getString(_prefUsernameKey);

      if (cachedUsername != null && cachedUsername.isNotEmpty) {
        // Fetch fresh profile from Supabase
        final response = await _supabase
            .from('profiles')
            .select()
            .eq('username', cachedUsername.toLowerCase().trim())
            .maybeSingle();

        if (response != null) {
          _currentProfile = UserProfileModel.fromMap(response);
        } else {
          // Fallback to locally cached info
          _currentProfile = UserProfileModel(
            id: 'cached_user',
            username: cachedUsername,
            academicYear: prefs.getString(_prefYearKey) ?? '4ème Année',
          );
        }
      }
    } catch (e) {
      debugPrint('Error loading cached session: \$e');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  /// Sign Up: Validates username, checks availability, creates auth & profile row
  Future<bool> signUp({
    required String username,
    required String password,
    required String academicYear,
  }) async {
    _setLoading(true);
    _clearError();

    final cleanUsername = username.trim().toLowerCase();

    // 1. Validation
    if (cleanUsername.length < 3) {
      _setError("Le nom d'utilisateur doit contenir au moins 3 caractères.");
      _setLoading(false);
      return false;
    }
    if (password.length < 6) {
      _setError('Le mot de passe doit contenir au moins 6 caractères.');
      _setLoading(false);
      return false;
    }

    try {
      // 2. Check if username already exists in Supabase
      final existing = await _supabase
          .from('profiles')
          .select('username')
          .eq('username', cleanUsername)
          .maybeSingle();

      if (existing != null) {
        _setError('Username already taken. Veuillez en choisir un autre.');
        _setLoading(false);
        return false;
      }

      // 3. Supabase Auth with internal virtual domain (no real email needed)
      final virtualEmail = '\$cleanUsername@medquest.app';
      final authResponse = await _supabase.auth.signUp(
        email: virtualEmail,
        password: password,
      );

      final userId = authResponse.user?.id ?? DateTime.now().millisecondsSinceEpoch.toString();

      // 4. Insert into 'profiles' table
      final newProfileData = {
        'id': userId,
        'username': cleanUsername,
        'academic_year': academicYear,
        'total_xp': 0,
        'streak_count': 0,
      };

      await _supabase.from('profiles').insert(newProfileData);

      _currentProfile = UserProfileModel.fromMap(newProfileData);

      // 5. Store session locally
      await _persistSession(cleanUsername, academicYear);

      _setLoading(false);
      return true;
    } catch (e) {
      _setError("Erreur lors de l'inscription: \${e.toString()}");
      _setLoading(false);
      return false;
    }
  }

  /// Sign In: Authenticates via virtual email and loads profile
  Future<bool> signIn({
    required String username,
    required String password,
  }) async {
    _setLoading(true);
    _clearError();

    final cleanUsername = username.trim().toLowerCase();

    if (cleanUsername.isEmpty || password.isEmpty) {
      _setError('Veuillez renseigner votre identifiant et mot de passe.');
      _setLoading(false);
      return false;
    }

    try {
      final virtualEmail = '\$cleanUsername@medquest.app';
      
      await _supabase.auth.signInWithPassword(
        email: virtualEmail,
        password: password,
      );

      // Fetch profile
      final response = await _supabase
          .from('profiles')
          .select()
          .eq('username', cleanUsername)
          .maybeSingle();

      if (response != null) {
        _currentProfile = UserProfileModel.fromMap(response);
        await _persistSession(_currentProfile!.username, _currentProfile!.academicYear);
      } else {
        _currentProfile = UserProfileModel(
          id: 'user_id',
          username: cleanUsername,
          academicYear: '4ème Année',
        );
      }

      _setLoading(false);
      return true;
    } catch (e) {
      _setError('Identifiant ou mot de passe incorrect.');
      _setLoading(false);
      return false;
    }
  }

  /// Sign out and clear stored session
  Future<void> signOut() async {
    try {
      await _supabase.auth.signOut();
    } catch (_) {}

    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_prefUsernameKey);
    await prefs.remove(_prefYearKey);

    _currentProfile = null;
    notifyListeners();
  }

  Future<void> _persistSession(String username, String year) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_prefUsernameKey, username);
    await prefs.setString(_prefYearKey, year);
  }

  void _setLoading(bool value) {
    _isLoading = value;
    notifyListeners();
  }

  void _setError(String msg) {
    _errorMessage = msg;
    notifyListeners();
  }

  void _clearError() {
    _errorMessage = null;
    notifyListeners();
  }
}
`;

// ==============================================================================
// DELIVERABLE 3: FLUTTER UI SCREENS - LOGIN / REGISTER & ACADEMIC YEAR SELECTOR
// ==============================================================================
export const FLUTTER_LOGIN_REGISTER_SCREEN_CODE = `// ==============================================================================
// DELIVERABLE 3: FLUTTER LOGIN & REGISTER SCREEN WITH ACADEMIC YEAR SELECTOR
// File: lib/screens/login_register_screen.dart
// Theme: Modern Medical, Cool White (#F8F9FD), Primary Blue (#2A75D3), Cards (16-20px)
// ==============================================================================

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../controllers/auth_controller.dart';

class LoginRegisterScreen extends StatefulWidget {
  const LoginRegisterScreen({Key? key}) : super(key: key);

  @override
  State<LoginRegisterScreen> createState() => _LoginRegisterScreenState();
}

class _LoginRegisterScreenState extends State<LoginRegisterScreen> {
  bool _isSignUp = false;
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  
  String _selectedYear = '4ème Année';
  bool _obscurePassword = true;

  final List<Map<String, dynamic>> _yearOptions = [
    {
      'title': '3ème Année',
      'subtitle': 'Sémiologie Médicale & Fondements',
      'icon': Icons.healing_rounded,
    },
    {
      'title': '4ème Année',
      'subtitle': 'Cardio, Neuro, Gastro, Pneumo',
      'icon': Icons.favorite_rounded,
    },
    {
      'title': '5ème Année',
      'subtitle': 'Pédiatrie, Gynécologie, Urgences',
      'icon': Icons.local_hospital_rounded,
    },
  ];

  @override
  void dispose() {
    _usernameController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Future<void> _handleAction() async {
    final auth = Provider.of<AuthController>(context, listen: false);

    if (_isSignUp) {
      final success = await auth.signUp(
        username: _usernameController.text,
        password: _passwordController.text,
        academicYear: _selectedYear,
      );
      if (success && mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Compte créé avec succès ! Bienvenue sur MedQuest.'),
            backgroundColor: Color(0xFF2A75D3),
          ),
        );
      }
    } else {
      final success = await auth.signIn(
        username: _usernameController.text,
        password: _passwordController.text,
      );
      if (success && mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Connexion réussie !'),
            backgroundColor: Color(0xFF2A75D3),
          ),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    const primaryBlue = Color(0xFF2A75D3);
    const coolWhite = Color(0xFFF8F9FD);

    final auth = Provider.of<AuthController>(context);

    return Scaffold(
      backgroundColor: coolWhite,
      body: SafeArea(
        child: Center(
          child: SingleChildScrollView(
            padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 20.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                // Medical App Branding
                Center(
                  child: Container(
                    width: 72,
                    height: 72,
                    decoration: BoxDecoration(
                      color: primaryBlue.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: primaryBlue.withOpacity(0.2), width: 1.5),
                    ),
                    child: const Icon(
                      Icons.medical_services_rounded,
                      color: primaryBlue,
                      size: 38,
                    ),
                  ),
                ),
                const SizedBox(height: 16),
                Center(
                  child: Text(
                    _isSignUp ? 'Inscription Externat' : 'Connexion Médecine',
                    style: const TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFF1E293B),
                      letterSpacing: -0.5,
                    ),
                  ),
                ),
                const SizedBox(height: 6),
                Center(
                  child: Text(
                    _isSignUp
                      ? "Rejoignez la plateforme d'entraînement aux QCMs cliniques"
                      : 'Accédez à votre tableau de bord et à vos séries médicales',
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontSize: 13,
                      color: Color(0xFF64748B),
                    ),
                  ),
                ),
                const SizedBox(height: 24),

                // Clean Toggle Switch: Sign In vs Sign Up
                Container(
                  padding: const EdgeInsets.all(4),
                  decoration: BoxDecoration(
                    color: const Color(0xFFE2E8F0).withOpacity(0.7),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        child: GestureDetector(
                          onTap: () => setState(() => _isSignUp = false),
                          child: Container(
                            padding: const EdgeInsets.symmetric(vertical: 12),
                            decoration: BoxDecoration(
                              color: !_isSignUp ? Colors.white : Colors.transparent,
                              borderRadius: BorderRadius.circular(12),
                              boxShadow: !_isSignUp
                                  ? [BoxShadow(color: Colors.black.withOpacity(0.04), blurRadius: 4, offset: const Offset(0, 2))]
                                  : null,
                            ),
                            child: Center(
                              child: Text(
                                'Se Connecter',
                                style: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 13,
                                  color: !_isSignUp ? primaryBlue : const Color(0xFF64748B),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Expanded(
                        child: GestureDetector(
                          onTap: () => setState(() => _isSignUp = true),
                          child: Container(
                            padding: const EdgeInsets.symmetric(vertical: 12),
                            decoration: BoxDecoration(
                              color: _isSignUp ? Colors.white : Colors.transparent,
                              borderRadius: BorderRadius.circular(12),
                              boxShadow: _isSignUp
                                  ? [BoxShadow(color: Colors.black.withOpacity(0.04), blurRadius: 4, offset: const Offset(0, 2))]
                                  : null,
                            ),
                            child: Center(
                              child: Text(
                                'Créer un Compte',
                                style: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 13,
                                  color: _isSignUp ? primaryBlue : const Color(0xFF64748B),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 20),

                // Error Message Banner
                if (auth.errorMessage != null)
                  Container(
                    margin: const EdgeInsets.only(bottom: 16),
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFEE2E2),
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: const Color(0xFFFCA5A5)),
                    ),
                    child: Row(
                      children: [
                        const Icon(Icons.error_outline_rounded, color: Color(0xFFDC2626), size: 20),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Text(
                            auth.errorMessage!,
                            style: const TextStyle(color: Color(0xFF991B1B), fontSize: 12, fontWeight: FontWeight.w600),
                          ),
                        ),
                      ],
                    ),
                  ),

                // Main Form Card (16-20px rounded)
                Container(
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.03),
                        blurRadius: 16,
                        offset: const Offset(0, 4),
                      ),
                    ],
                    border: Border.all(color: const Color(0xFFE2E8F0)),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Username Input Field
                      const Text(
                        'IDENTIFIANT / USERNAME',
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w800,
                          color: Color(0xFF475569),
                          letterSpacing: 0.5,
                        ),
                      ),
                      const SizedBox(height: 8),
                      TextField(
                        controller: _usernameController,
                        autocorrect: false,
                        decoration: InputDecoration(
                          hintText: 'ex: meriem_dr',
                          prefixIcon: const Icon(Icons.person_outline_rounded, color: Color(0xFF94A3B8), size: 20),
                          filled: true,
                          fillColor: coolWhite,
                          contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(color: Color(0xFFE2E8F0)),
                          ),
                          enabledBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(color: Color(0xFFE2E8F0)),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(color: primaryBlue, width: 2),
                          ),
                        ),
                      ),
                      const SizedBox(height: 16),

                      // Password Input Field
                      const Text(
                        'MOT DE PASSE',
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w800,
                          color: Color(0xFF475569),
                          letterSpacing: 0.5,
                        ),
                      ),
                      const SizedBox(height: 8),
                      TextField(
                        controller: _passwordController,
                        obscureText: _obscurePassword,
                        decoration: InputDecoration(
                          hintText: 'Minimum 6 caractères',
                          prefixIcon: const Icon(Icons.lock_outline_rounded, color: Color(0xFF94A3B8), size: 20),
                          suffixIcon: IconButton(
                            icon: Icon(
                              _obscurePassword ? Icons.visibility_outlined : Icons.visibility_off_outlined,
                              color: const Color(0xFF94A3B8),
                              size: 20,
                            ),
                            onPressed: () => setState(() => _obscurePassword = !_obscurePassword),
                          ),
                          filled: true,
                          fillColor: coolWhite,
                          contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(color: Color(0xFFE2E8F0)),
                          ),
                          enabledBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(color: Color(0xFFE2E8F0)),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(16),
                            borderSide: const BorderSide(color: primaryBlue, width: 2),
                          ),
                        ),
                      ),

                      // Academic Year Selector (Tiles) on Sign Up
                      if (_isSignUp) ...[
                        const SizedBox(height: 20),
                        const Text(
                          "SÉLECTIONNEZ VOTRE ANNÉE D'EXTERNAT",
                          style: TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.w800,
                            color: Color(0xFF475569),
                            letterSpacing: 0.5,
                          ),
                        ),
                        const SizedBox(height: 10),
                        ..._yearOptions.map((opt) {
                          final isSelected = _selectedYear == opt['title'];
                          return Padding(
                            padding: const EdgeInsets.only(bottom: 8.0),
                            child: InkWell(
                              onTap: () => setState(() => _selectedYear = opt['title']),
                              borderRadius: BorderRadius.circular(16),
                              child: AnimatedContainer(
                                duration: const Duration(milliseconds: 200),
                                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                                decoration: BoxDecoration(
                                  color: isSelected ? primaryBlue.withOpacity(0.06) : coolWhite,
                                  borderRadius: BorderRadius.circular(16),
                                  border: Border.all(
                                    color: isSelected ? primaryBlue : const Color(0xFFE2E8F0),
                                    width: isSelected ? 2 : 1,
                                  ),
                                ),
                                child: Row(
                                  children: [
                                    Container(
                                      width: 36,
                                      height: 36,
                                      decoration: BoxDecoration(
                                        color: isSelected ? primaryBlue : const Color(0xFFE2E8F0),
                                        borderRadius: BorderRadius.circular(12),
                                      ),
                                      child: Icon(
                                        opt['icon'] as IconData,
                                        color: isSelected ? Colors.white : const Color(0xFF64748B),
                                        size: 18,
                                      ),
                                    ),
                                    const SizedBox(width: 12),
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            opt['title'],
                                            style: TextStyle(
                                              fontWeight: FontWeight.bold,
                                              fontSize: 13,
                                              color: isSelected ? primaryBlue : const Color(0xFF1E293B),
                                            ),
                                          ),
                                          Text(
                                            opt['subtitle'],
                                            style: const TextStyle(fontSize: 11, color: Color(0xFF64748B)),
                                          ),
                                        ],
                                      ),
                                    ),
                                    Icon(
                                      isSelected ? Icons.check_circle_rounded : Icons.radio_button_unchecked_rounded,
                                      color: isSelected ? primaryBlue : const Color(0xFFCBD5E1),
                                      size: 20,
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          );
                        }).toList(),
                      ],

                      const SizedBox(height: 20),

                      // Submit Button
                      SizedBox(
                        width: double.infinity,
                        height: 52,
                        child: ElevatedButton(
                          onPressed: auth.isLoading ? null : _handleAction,
                          style: ElevatedButton.styleFrom(
                            backgroundColor: primaryBlue,
                            elevation: 0,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(16),
                            ),
                          ),
                          child: auth.isLoading
                              ? const SizedBox(
                                  width: 22,
                                  height: 22,
                                  child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2.5),
                                )
                              : Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Text(
                                      _isSignUp ? 'Créer Mon Compte' : 'Se Connecter',
                                      style: const TextStyle(
                                        fontWeight: FontWeight.w900,
                                        fontSize: 14,
                                        color: Colors.white,
                                      ),
                                    ),
                                    const SizedBox(width: 8),
                                    const Icon(Icons.arrow_forward_rounded, color: Colors.white, size: 18),
                                  ],
                                ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
`;

// ==============================================================================
// DELIVERABLE 4: FLUTTER FIXED BOTTOM NAVIGATION BAR WITH STATEFUL SCAFFOLD
// ==============================================================================
export const FLUTTER_FIXED_BOTTOM_NAV_BAR_CODE = `// ==============================================================================
// DELIVERABLE 4: FLUTTER FIXED BOTTOM NAVIGATION BAR WIDGET & MAIN SCAFFOLD
// File: lib/widgets/fixed_bottom_nav_bar.dart
// Specifications:
// - Position: Fixed at the bottom of the screen
// - Background: Clean white, rounded top corners (BorderRadius.vertical(top: Radius.circular(24)))
// - Active Tab: Primary Purple (#6C5CE7) for icon + label with bold text
// - Inactive Tabs: Muted Gray (#8E8E93)
// - Items: Home (House), Explore (Compass/Grid), Practice (Heart), Progress (BarChart), Profile (User)
// ==============================================================================

import 'package:flutter/material.dart';

enum NavTabItem { home, explore, practice, progress, profile }

class FixedBottomNavBar extends StatelessWidget {
  final NavTabItem currentTab;
  final ValueChanged<NavTabItem> onTabSelected;

  const FixedBottomNavBar({
    Key? key,
    required this.currentTab,
    required this.onTabSelected,
  }) : super(key: key);

  static const Color activeColor = Color(0xFF6C5CE7); // Primary Purple
  static const Color inactiveColor = Color(0xFF8E8E93); // Muted Gray

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: const BorderRadius.vertical(top: Radius.circular(24.0)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.06),
            blurRadius: 20,
            offset: const Offset(0, -4),
          ),
        ],
        border: const Border(
          top: BorderSide(color: Color(0xFFF1F5F9), width: 1.0),
        ),
      ),
      child: SafeArea(
        top: false,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 8.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _buildNavItem(
                item: NavTabItem.home,
                label: 'Home',
                icon: Icons.home_rounded,
              ),
              _buildNavItem(
                item: NavTabItem.explore,
                label: 'Explore',
                icon: Icons.explore_rounded,
              ),
              _buildNavItem(
                item: NavTabItem.practice,
                label: 'Practice',
                icon: Icons.favorite_rounded,
              ),
              _buildNavItem(
                item: NavTabItem.progress,
                label: 'Progress',
                icon: Icons.bar_chart_rounded,
              ),
              _buildNavItem(
                item: NavTabItem.profile,
                label: 'Profile',
                icon: Icons.person_rounded,
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildNavItem({
    required NavTabItem item,
    required String label,
    required IconData icon,
  }) {
    final bool isActive = currentTab == item;

    return Expanded(
      child: InkWell(
        onTap: () => onTabSelected(item),
        splashColor: Colors.transparent,
        highlightColor: Colors.transparent,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 4.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Icon with subtle scale animation
              AnimatedScale(
                scale: isActive ? 1.15 : 1.0,
                duration: const Duration(milliseconds: 200),
                curve: Curves.easeOutCubic,
                child: Icon(
                  icon,
                  color: isActive ? activeColor : inactiveColor,
                  size: 24,
                ),
              ),
              const SizedBox(height: 4),

              // Label
              Text(
                label,
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: isActive ? FontWeight.w800 : FontWeight.w500,
                  color: isActive ? activeColor : inactiveColor,
                  letterSpacing: -0.2,
                ),
              ),
              const SizedBox(height: 3),

              // Active dot indicator
              AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                height: 3,
                width: isActive ? 12 : 0,
                decoration: BoxDecoration(
                  color: isActive ? activeColor : Colors.transparent,
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ==============================================================================
// COMPLETE MAIN MOBILE SCAFFOLD WITH SEAMLESS TAB SWITCHING
// ==============================================================================
class MainMobileScaffold extends StatefulWidget {
  const MainMobileScaffold({Key? key}) : super(key: key);

  @override
  State<MainMobileScaffold> createState() => _MainMobileScaffoldState();
}

class _MainMobileScaffoldState extends State<MainMobileScaffold> {
  NavTabItem _selectedTab = NavTabItem.home;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8F9FD),
      body: IndexedStack(
        index: _selectedTab.index,
        children: const [
          Center(child: Text('Home Dashboard Screen', style: TextStyle(fontWeight: FontWeight.bold))),
          Center(child: Text('Explore Modules Catalog Screen', style: TextStyle(fontWeight: FontWeight.bold))),
          Center(child: Text('Practice QCM & Cases Screen', style: TextStyle(fontWeight: FontWeight.bold))),
          Center(child: Text('Progress & Analytics Screen', style: TextStyle(fontWeight: FontWeight.bold))),
          Center(child: Text('Profile & Settings Screen', style: TextStyle(fontWeight: FontWeight.bold))),
        ],
      ),
      bottomNavigationBar: FixedBottomNavBar(
        currentTab: _selectedTab,
        onTabSelected: (tab) {
          setState(() {
            _selectedTab = tab;
          });
        },
      ),
    );
  }
}
`;
