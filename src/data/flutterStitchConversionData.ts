/**
 * Flutter Widget Code Library converted from Google Stitch Web UI Layout
 * Medical App: MedQuest (Clinical Dashboard for ECN & USMLE Step 2 CK)
 * 
 * Features:
 * - Soft Neumorphic styling (#F8FAFF background, soft dual shadows, glassmorphism)
 * - Modern Flutter best practices (StatelessWidget / StatefulWidget, null-safety)
 * - Modular reusable sub-components (Streaks, Progress bars, Chart, Quests, Cards)
 * - Newly designed missing components:
 *    1. QcmCard (Interactive clinical vignette question player with rationales & XP)
 *    2. SmartFlashcardDeck (Anki-style 3D flip card with spaced repetition intervals)
 *    3. DiagnosticSimulationSheet (Timed exam simulator modal)
 *    4. AiConsultantSheet (Instant differential diagnosis chat sheet)
 *    5. CurriculaScreen (Specialty progression & systems overview)
 */

export interface FlutterCodeFile {
  id: string;
  fileName: string;
  path: string;
  title: string;
  category: 'core' | 'widgets' | 'new_designs' | 'screens';
  isNewDesign?: boolean;
  description: string;
  widgetType: 'StatelessWidget' | 'StatefulWidget' | 'Theme/Constants' | 'CustomPainter' | 'App Entrypoint';
  code: string;
}

export const FLUTTER_THEME_CODE = `import 'package:flutter/material.dart';

/// MedQuest Theme Constants & Neumorphic Design Tokens
/// Converted from Google Stitch Tailwind tokens & custom CSS variables
class MedQuestTheme {
  // Brand Palette
  static const Color background = Color(0xFFF8FAFF);
  static const Color surface = Colors.white;
  static const Color primary = Color(0xFF4648D4);
  static const Color primaryLight = Color(0xFF6366F1);
  static const Color primaryGradientStart = Color(0xFF4F46E5);
  static const Color primaryGradientEnd = Color(0xFF6366F1);
  static const Color primaryContainer = Color(0xFFE0E7FF);

  // Secondary (Emerald / Mastery)
  static const Color emerald = Color(0xFF10B981);
  static const Color emeraldDark = Color(0xFF059669);
  static const Color emeraldLight = Color(0xFFD1FAE5);
  static const Color emeraldBorder = Color(0xFFA7F3D0);

  // Tertiary (Amber / Quests / High-Yield)
  static const Color amber = Color(0xFFF59E0B);
  static const Color amberDark = Color(0xFFD97706);
  static const Color amberLight = Color(0xFFFEF3C7);
  static const Color amberBorder = Color(0xFFFDE68A);

  // Accent / Alert (Rose)
  static const Color rose = Color(0xFFF43F5E);
  static const Color roseLight = Color(0xFFFFF1F2);
  static const Color roseBorder = Color(0xFFFECDD3);

  // Neutral Slate Tones
  static const Color textDark = Color(0xFF0B1C30);
  static const Color textMuted = Color(0xFF64748B);
  static const Color textSubtle = Color(0xFF94A3B8);
  static const Color trackBackground = Color(0xFFEEF2F6);
  static const Color borderSubtle = Color(0xFFF1F5F9);

  // Gradients
  static const LinearGradient primaryGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [primaryGradientStart, primaryGradientEnd],
  );

  static const LinearGradient emeraldGradient = LinearGradient(
    begin: Alignment.centerLeft,
    end: Alignment.centerRight,
    colors: [emerald, emeraldDark],
  );

  static const LinearGradient amberGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFFD97706), Color(0xFFB45309)],
  );

  // Soft Neumorphic Box Decorations
  static BoxDecoration softNeumorphicCard({
    Color backgroundColor = Colors.white,
    double borderRadius = 20,
    Border? border,
  }) {
    return BoxDecoration(
      color: backgroundColor.withValues(alpha: 0.92),
      borderRadius: BorderRadius.circular(borderRadius),
      border: border ?? Border.all(color: Colors.white.withValues(alpha: 0.95), width: 1.5),
      boxShadow: [
        BoxShadow(
          color: primary.withValues(alpha: 0.08),
          blurRadius: 28,
          offset: const Offset(0, 10),
          spreadRadius: -4,
        ),
        BoxShadow(
          color: const Color(0xFF0F172A).withValues(alpha: 0.03),
          blurRadius: 6,
          offset: const Offset(0, 2),
        ),
      ],
    );
  }

  // Soft Inset Pill Decoration for Progress & Inputs
  static BoxDecoration softTrackDecoration({double borderRadius = 999}) {
    return BoxDecoration(
      color: trackBackground,
      borderRadius: BorderRadius.circular(borderRadius),
      boxShadow: [
        BoxShadow(
          color: Colors.black.withValues(alpha: 0.04),
          blurRadius: 2,
          offset: const Offset(0, 1),
        ),
      ],
    );
  }

  // App ThemeData
  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      scaffoldBackgroundColor: background,
      primaryColor: primary,
      fontFamily: 'DM Sans',
      colorScheme: ColorScheme.fromSeed(
        seedColor: primary,
        surface: surface,
        primary: primary,
        secondary: emerald,
      ),
    );
  }
}
`;

export const FLUTTER_STREAK_COUNTER_CODE = `import 'package:flutter/material.dart';
import '../theme/medquest_theme.dart';

/// Reusable Streak Counter Badge Widget
/// Converted from Google Stitch header streak counter pill
class StreakCounterBadge extends StatelessWidget {
  final int streakDays;
  final VoidCallback? onTap;

  const StreakCounterBadge({
    super.key,
    required this.streakDays,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(999),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          color: Colors.white.withValues(alpha: 0.9),
          borderRadius: BorderRadius.circular(999),
          border: Border.all(
            color: const Color(0xFFFDE68A).withValues(alpha: 0.8),
            width: 1,
          ),
          boxShadow: [
            BoxShadow(
              color: MedQuestTheme.amber.withValues(alpha: 0.12),
              blurRadius: 8,
              offset: const Offset(0, 2),
            ),
          ],
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(
              Icons.local_fire_department_rounded,
              color: Color(0xFFF59E0B),
              size: 18,
            ),
            const SizedBox(width: 5),
            Text(
              '\$streakDays Days',
              style: const TextStyle(
                fontSize: 12.5,
                fontWeight: FontWeight.w800,
                color: MedQuestTheme.textDark,
                letterSpacing: -0.2,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
`;

export const FLUTTER_DAILY_XP_GOAL_CARD_CODE = `import 'package:flutter/material.dart';
import '../theme/medquest_theme.dart';

/// Reusable Daily XP & Progress Ribbon Widget
/// Converted from Google Stitch Section 1: Daily Progress & XP Hero Ribbon
class DailyXpGoalCard extends StatelessWidget {
  final int currentXp;
  final int targetXp;
  final int streakBonusXp;
  final String highYieldTitle;
  final String highYieldContent;
  final VoidCallback? onMoreInfo;

  const DailyXpGoalCard({
    super.key,
    required this.currentXp,
    required this.targetXp,
    this.streakBonusXp = 50,
    required this.highYieldTitle,
    required this.highYieldContent,
    this.onMoreInfo,
  });

  double get progressPercentage => (currentXp / targetXp).clamp(0.0, 1.0);
  int get percentageInt => (progressPercentage * 100).round();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: MedQuestTheme.softNeumorphicCard(),
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          // Ambient Emerald Ambient Glow Orb (Top Right)
          Positioned(
            right: -24,
            top: -24,
            child: Container(
              width: 110,
              height: 110,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    MedQuestTheme.emerald.withValues(alpha: 0.15),
                    Colors.transparent,
                  ],
                ),
              ),
            ),
          ),

          // Main Column
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header Row: Bolt Icon + Label + XP Streak Active Tag
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      Container(
                        width: 30,
                        height: 30,
                        decoration: BoxDecoration(
                          color: MedQuestTheme.emeraldLight.withValues(alpha: 0.8),
                          borderRadius: BorderRadius.circular(8),
                          border: Border.all(
                            color: MedQuestTheme.emerald.withValues(alpha: 0.25),
                          ),
                        ),
                        child: const Icon(
                          Icons.bolt_rounded,
                          color: MedQuestTheme.emeraldDark,
                          size: 18,
                        ),
                      ),
                      const SizedBox(width: 8),
                      const Text(
                        'DAILY GOAL',
                        style: TextStyle(
                          fontSize: 11.5,
                          fontWeight: FontWeight.w800,
                          letterSpacing: 0.8,
                          color: Color(0xFF334155),
                        ),
                      ),
                    ],
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: MedQuestTheme.emeraldLight.withValues(alpha: 0.7),
                      borderRadius: BorderRadius.circular(999),
                      border: Border.all(
                        color: MedQuestTheme.emeraldBorder.withValues(alpha: 0.8),
                      ),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Icon(
                          Icons.stars_rounded,
                          color: MedQuestTheme.emeraldDark,
                          size: 14,
                        ),
                        const SizedBox(width: 4),
                        Text(
                          '+\$streakBonusXp XP Streak Active',
                          style: const TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.w700,
                            color: MedQuestTheme.emeraldDark,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 12),

              // XP Numbers & Percentage Badge
              Row(
                crossAxisAlignment: CrossAxisAlignment.baseline,
                textBaseline: TextBaseline.alphabetic,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.baseline,
                    textBaseline: TextBaseline.alphabetic,
                    children: [
                      Text(
                        '\$currentXp',
                        style: const TextStyle(
                          fontSize: 30,
                          fontWeight: FontWeight.w900,
                          color: MedQuestTheme.textDark,
                          letterSpacing: -0.8,
                        ),
                      ),
                      const SizedBox(width: 6),
                      Text(
                        '/ \$targetXp XP',
                        style: const TextStyle(
                          fontSize: 13.5,
                          fontWeight: FontWeight.w600,
                          color: MedQuestTheme.textMuted,
                        ),
                      ),
                    ],
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    decoration: BoxDecoration(
                      color: const Color(0xFFECFDF5),
                      borderRadius: BorderRadius.circular(6),
                      border: Border.all(color: const Color(0xFFA7F3D0)),
                    ),
                    child: Text(
                      '\$percentageInt% Complete',
                      style: const TextStyle(
                        fontSize: 11.5,
                        fontWeight: FontWeight.w800,
                        color: MedQuestTheme.emeraldDark,
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10),

              // Neumorphic Inset Progress Bar
              Container(
                width: double.infinity,
                height: 12,
                padding: const EdgeInsets.all(2),
                decoration: MedQuestTheme.softTrackDecoration(),
                child: LayoutBuilder(
                  builder: (context, constraints) {
                    return Stack(
                      children: [
                        AnimatedContainer(
                          duration: const Duration(milliseconds: 800),
                          curve: Curves.easeOutCubic,
                          width: constraints.maxWidth * progressPercentage,
                          decoration: BoxDecoration(
                            gradient: MedQuestTheme.emeraldGradient,
                            borderRadius: BorderRadius.circular(999),
                            boxShadow: [
                              BoxShadow(
                                color: MedQuestTheme.emerald.withValues(alpha: 0.35),
                                blurRadius: 10,
                                offset: const Offset(0, 1),
                              ),
                            ],
                          ),
                        ),
                      ],
                    );
                  },
                ),
              ),
              const SizedBox(height: 12),

              // High Yield Clinical Tip Banner
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [
                      const Color(0xFFFEF3C7).withValues(alpha: 0.55),
                      const Color(0xFFFFFBEB).withValues(alpha: 0.75),
                    ],
                  ),
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(
                    color: const Color(0xFFFDE68A).withValues(alpha: 0.7),
                  ),
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      width: 24,
                      height: 24,
                      decoration: const BoxDecoration(
                        color: MedQuestTheme.amber,
                        shape: BoxShape.circle,
                      ),
                      child: const Icon(
                        Icons.lightbulb_rounded,
                        color: Colors.white,
                        size: 15,
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: RichText(
                        text: TextSpan(
                          style: const TextStyle(
                            fontSize: 12,
                            height: 1.35,
                            color: Color(0xFF334155),
                            fontFamily: 'DM Sans',
                          ),
                          children: [
                            TextSpan(
                              text: '\$highYieldTitle: ',
                              style: const TextStyle(
                                fontWeight: FontWeight.w800,
                                color: Color(0xFF92400E),
                              ),
                            ),
                            TextSpan(text: highYieldContent),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
`;

export const FLUTTER_EXAM_MILESTONE_CARD_CODE = `import 'package:flutter/material.dart';
import 'dart:math' as math;
import '../theme/medquest_theme.dart';

/// Reusable Exam Milestone Card with Animated Ring & Simulation CTA
/// Converted from Google Stitch Section 2: Exam Countdown Hero Card
class ExamMilestoneCard extends StatelessWidget {
  final String milestoneTitle;
  final int daysLeft;
  final double coveragePercentage; // e.g. 0.74
  final int targetPercentile; // e.g. 92
  final int simulatedPercentile; // e.g. 86
  final double monthlyDeltaPercentile; // e.g. 4.0
  final VoidCallback onTakeDiagnostic;

  const ExamMilestoneCard({
    super.key,
    this.milestoneTitle = 'ECN & USMLE Step 2 CK',
    this.daysLeft = 42,
    this.coveragePercentage = 0.74,
    this.targetPercentile = 92,
    this.simulatedPercentile = 86,
    this.monthlyDeltaPercentile = 4.0,
    required this.onTakeDiagnostic,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: MedQuestTheme.softNeumorphicCard(),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header: Target Pulse Pill + Title + Days Left Pill
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Container(
                          width: 8,
                          height: 8,
                          decoration: const BoxDecoration(
                            color: MedQuestTheme.primary,
                            shape: BoxShape.circle,
                          ),
                        ),
                        const SizedBox(width: 6),
                        const Text(
                          'EXAM TARGET MILESTONE',
                          style: TextStyle(
                            fontSize: 10.5,
                            fontWeight: FontWeight.w800,
                            letterSpacing: 0.6,
                            color: Color(0xFF4338CA),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 4),
                    Text(
                      milestoneTitle,
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w900,
                        color: MedQuestTheme.textDark,
                        letterSpacing: -0.3,
                      ),
                      overflow: TextOverflow.ellipsis,
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: MedQuestTheme.roseLight,
                  borderRadius: BorderRadius.circular(999),
                  border: Border.all(color: MedQuestTheme.roseBorder),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Icon(
                      Icons.timer_outlined,
                      color: Color(0xFFBE123C),
                      size: 14,
                    ),
                    const SizedBox(width: 4),
                    Text(
                      '\$daysLeft Days Left',
                      style: const TextStyle(
                        fontSize: 11.5,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFFBE123C),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 14),

          // Central Progress Box: Circular Ring + Percentile Bar
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [
                  const Color(0xFFF8FAFC),
                  const Color(0xFFF1F5F9).withValues(alpha: 0.8),
                ],
              ),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFE2E8F0)),
            ),
            child: Row(
              children: [
                // Circular Progress Ring
                SizedBox(
                  width: 76,
                  height: 76,
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      CustomPaint(
                        size: const Size(76, 76),
                        painter: _CircularProgressPainter(
                          progress: coveragePercentage,
                          progressColor: MedQuestTheme.primary,
                          backgroundColor: const Color(0xFFE2E8F0),
                          strokeWidth: 6.5,
                        ),
                      ),
                      Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            '\${(coveragePercentage * 100).round()}%',
                            style: const TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.w900,
                              color: MedQuestTheme.textDark,
                            ),
                          ),
                          const Text(
                            'Covered',
                            style: TextStyle(
                              fontSize: 9.5,
                              fontWeight: FontWeight.w600,
                              color: MedQuestTheme.textMuted,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 16),

                // Percentile Progress & Simulated Stat
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text(
                            'Percentile Target',
                            style: TextStyle(
                              fontSize: 11.5,
                              color: Color(0xFF475569),
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                          Text(
                            '\${targetPercentile}th %ile',
                            style: const TextStyle(
                              fontSize: 12.5,
                              fontWeight: FontWeight.w800,
                              color: MedQuestTheme.textDark,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 6),

                      // Bar Track
                      Container(
                        height: 8,
                        decoration: MedQuestTheme.softTrackDecoration(),
                        child: FractionallySizedBox(
                          alignment: Alignment.centerLeft,
                          widthFactor: (simulatedPercentile / targetPercentile).clamp(0.0, 1.0),
                          child: Container(
                            decoration: BoxDecoration(
                              gradient: MedQuestTheme.primaryGradient,
                              borderRadius: BorderRadius.circular(999),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 8),

                      // Simulated delta indicator
                      Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.all(2),
                            decoration: const BoxDecoration(
                              color: Color(0xFFD1FAE5),
                              shape: BoxShape.circle,
                            ),
                            child: const Icon(
                              Icons.trending_up_rounded,
                              color: Color(0xFF047857),
                              size: 13,
                            ),
                          ),
                          const SizedBox(width: 5),
                          RichText(
                            text: TextSpan(
                              style: const TextStyle(
                                fontSize: 11,
                                color: Color(0xFF475569),
                                fontFamily: 'DM Sans',
                              ),
                              children: [
                                const TextSpan(text: 'Simulated: '),
                                TextSpan(
                                  text: '\${simulatedPercentile}th %ile ',
                                  style: const TextStyle(
                                    fontWeight: FontWeight.w800,
                                    color: Color(0xFF047857),
                                  ),
                                ),
                                TextSpan(
                                  text: '(+\${monthlyDeltaPercentile.toStringAsFixed(0)}% mo)',
                                  style: const TextStyle(
                                    fontWeight: FontWeight.w700,
                                    color: Color(0xFF059669),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // Primary Simulation CTA Button
          ElevatedButton(
            onPressed: onTakeDiagnostic,
            style: ElevatedButton.styleFrom(
              minimumSize: const Size.fromHeight(50),
              backgroundColor: Colors.transparent,
              shadowColor: Colors.transparent,
              padding: EdgeInsets.zero,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(14),
              ),
            ),
            child: Ink(
              decoration: BoxDecoration(
                gradient: MedQuestTheme.primaryGradient,
                borderRadius: BorderRadius.circular(14),
                boxShadow: [
                  BoxShadow(
                    color: MedQuestTheme.primary.withValues(alpha: 0.38),
                    blurRadius: 16,
                    offset: const Offset(0, 5),
                  ),
                ],
              ),
              child: Container(
                alignment: Alignment.center,
                padding: const EdgeInsets.symmetric(vertical: 14),
                child: const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.assignment_turned_in_rounded, color: Colors.white, size: 19),
                    SizedBox(width: 8),
                    Text(
                      'Take Diagnostic Simulation',
                      style: TextStyle(
                        fontSize: 13.5,
                        fontWeight: FontWeight.w800,
                        color: Colors.white,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _CircularProgressPainter extends CustomPainter {
  final double progress;
  final Color progressColor;
  final Color backgroundColor;
  final double strokeWidth;

  _CircularProgressPainter({
    required this.progress,
    required this.progressColor,
    required this.backgroundColor,
    required this.strokeWidth,
  });

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = (size.width - strokeWidth) / 2;

    // Background circle
    final bgPaint = Paint()
      ..color = backgroundColor
      ..style = PaintingStyle.stroke
      ..strokeWidth = strokeWidth;
    canvas.drawCircle(center, radius, bgPaint);

    // Progress arc
    final progressPaint = Paint()
      ..color = progressColor
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round
      ..strokeWidth = strokeWidth;

    const startAngle = -math.pi / 2;
    final sweepAngle = 2 * math.pi * progress;
    canvas.drawArc(
      Rect.fromCircle(center: center, radius: radius),
      startAngle,
      sweepAngle,
      false,
      progressPaint,
    );
  }

  @override
  bool shouldRepaint(_CircularProgressPainter oldDelegate) =>
      oldDelegate.progress != progress;
}
`;

export const FLUTTER_RETENTION_TRAJECTORY_CHART_CODE = `import 'package:flutter/material.dart';
import '../theme/medquest_theme.dart';

/// Reusable Clinical Mastery & Retention Trajectory Chart Widget
/// Converted from Google Stitch Section 2.5: Vector Retention Curve & Predictive Analytics
class RetentionTrajectoryChart extends StatefulWidget {
  final VoidCallback? onFilterChanged;

  const RetentionTrajectoryChart({super.key, this.onFilterChanged});

  @override
  State<RetentionTrajectoryChart> createState() => _RetentionTrajectoryChartState();
}

class _RetentionTrajectoryChartState extends State<RetentionTrajectoryChart> {
  String _selectedRange = '30D'; // '7D' | '30D' | 'All'

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: MedQuestTheme.softNeumorphicCard(),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header with Time Filter Pills
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Icon(Icons.query_stats_rounded, color: MedQuestTheme.primary, size: 17),
                      SizedBox(width: 6),
                      Text(
                        'PREDICTIVE ANALYTICS',
                        style: TextStyle(
                          fontSize: 10.5,
                          fontWeight: FontWeight.w800,
                          letterSpacing: 0.6,
                          color: Color(0xFF4338CA),
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 2),
                  Text(
                    'Mastery Trajectory & Retention',
                    style: TextStyle(
                      fontSize: 14.5,
                      fontWeight: FontWeight.w800,
                      color: MedQuestTheme.textDark,
                    ),
                  ),
                ],
              ),

              // Segmented Range Selector
              Container(
                padding: const EdgeInsets.all(2.5),
                decoration: BoxDecoration(
                  color: const Color(0xFFF1F5F9),
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: const Color(0xFFE2E8F0)),
                ),
                child: Row(
                  children: ['7D', '30D', 'All'].map((range) {
                    final isSelected = range == _selectedRange;
                    return GestureDetector(
                      onTap: () {
                        setState(() => _selectedRange = range);
                        widget.onFilterChanged?.call();
                      },
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 200),
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        decoration: BoxDecoration(
                          color: isSelected ? MedQuestTheme.primary : Colors.transparent,
                          borderRadius: BorderRadius.circular(6),
                          boxShadow: isSelected
                              ? [
                                  BoxShadow(
                                    color: MedQuestTheme.primary.withValues(alpha: 0.3),
                                    blurRadius: 4,
                                    offset: const Offset(0, 1),
                                  )
                                ]
                              : null,
                        ),
                        child: Text(
                          range,
                          style: TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.w800,
                            color: isSelected ? Colors.white : const Color(0xFF64748B),
                          ),
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),

          // Custom Paint Vector Graph Box
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  const Color(0xFFF8FAFF).withValues(alpha: 0.9),
                  Colors.white.withValues(alpha: 0.98),
                ],
              ),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFE2E8F0)),
            ),
            child: Column(
              children: [
                // Legend Row
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        _buildLegendItem(
                          color: MedQuestTheme.primary,
                          label: 'Simulated Score',
                        ),
                        const SizedBox(width: 12),
                        _buildLegendItem(
                          color: MedQuestTheme.emerald,
                          label: 'Target (85%)',
                          isDashed: true,
                        ),
                      ],
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                      decoration: BoxDecoration(
                        color: const Color(0xFFECFDF5),
                        borderRadius: BorderRadius.circular(4),
                        border: Border.all(color: const Color(0xFFA7F3D0)),
                      ),
                      child: const Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.verified_rounded, size: 12, color: Color(0xFF047857)),
                          SizedBox(width: 3),
                          Text(
                            '+1.4% Target Delta',
                            style: TextStyle(
                              fontSize: 10,
                              fontWeight: FontWeight.w800,
                              color: Color(0xFF047857),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),

                // Custom Painter for Bezier Curve
                SizedBox(
                  height: 140,
                  width: double.infinity,
                  child: CustomPaint(
                    painter: _RetentionSplinePainter(),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // Micro-Metrics 3-Column Row
          Row(
            children: [
              Expanded(
                child: _buildMetricTile(
                  title: 'PROJECTED',
                  value: '254',
                  delta: '+18',
                  deltaColor: const Color(0xFF047857),
                  subText: 'ECN / USMLE Est.',
                  icon: Icons.school_rounded,
                  iconColor: MedQuestTheme.primary,
                  bgColor: const Color(0xFFEEF2FF),
                  borderColor: const Color(0xFFC7D2FE),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: _buildMetricTile(
                  title: 'RETENTION',
                  value: '91.2%',
                  delta: 'OK',
                  deltaColor: const Color(0xFF059669),
                  subText: 'Optimal Tier',
                  icon: Icons.verified_user_rounded,
                  iconColor: MedQuestTheme.emerald,
                  bgColor: const Color(0xFFECFDF5),
                  borderColor: const Color(0xFFA7F3D0),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: _buildMetricTile(
                  title: 'VELOCITY',
                  value: '+4.2%',
                  delta: '/wk',
                  deltaColor: const Color(0xFFB45309),
                  subText: 'Accelerating',
                  icon: Icons.speed_rounded,
                  iconColor: MedQuestTheme.amberDark,
                  bgColor: const Color(0xFFFEF3C7),
                  borderColor: const Color(0xFFFDE68A),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildLegendItem({
    required Color color,
    required String label,
    bool isDashed = false,
  }) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 10,
          height: 4,
          decoration: BoxDecoration(
            color: color,
            borderRadius: BorderRadius.circular(2),
          ),
        ),
        const SizedBox(width: 4),
        Text(
          label,
          style: const TextStyle(
            fontSize: 10.5,
            fontWeight: FontWeight.w600,
            color: Color(0xFF64748B),
          ),
        ),
      ],
    );
  }

  Widget _buildMetricTile({
    required String title,
    required String value,
    required String delta,
    required Color deltaColor,
    required String subText,
    required IconData icon,
    required Color iconColor,
    required Color bgColor,
    required Color borderColor,
  }) {
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: bgColor.withValues(alpha: 0.6),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: borderColor.withValues(alpha: 0.8)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                title,
                style: const TextStyle(
                  fontSize: 9.5,
                  fontWeight: FontWeight.w800,
                  letterSpacing: 0.5,
                  color: Color(0xFF475569),
                ),
              ),
              Icon(icon, size: 14, color: iconColor),
            ],
          ),
          const SizedBox(height: 4),
          Row(
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            children: [
              Text(
                value,
                style: const TextStyle(
                  fontSize: 14.5,
                  fontWeight: FontWeight.w900,
                  color: MedQuestTheme.textDark,
                ),
              ),
              const SizedBox(width: 4),
              Text(
                delta,
                style: TextStyle(
                  fontSize: 10.5,
                  fontWeight: FontWeight.w800,
                  color: deltaColor,
                ),
              ),
            ],
          ),
          const SizedBox(height: 2),
          Text(
            subText,
            style: const TextStyle(
              fontSize: 9.5,
              fontWeight: FontWeight.w500,
              color: Color(0xFF64748B),
            ),
            overflow: TextOverflow.ellipsis,
          ),
        ],
      ),
    );
  }
}

class _RetentionSplinePainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    const leftPad = 32.0;
    const rightPad = 16.0;
    final graphWidth = size.width - leftPad - rightPad;
    const graphHeight = 110.0;

    // Grid lines for 100%, 80%, 60%
    final gridPaint = Paint()
      ..color = const Color(0xFFE2E8F0)
      ..strokeWidth = 0.8;

    final yLines = [20.0, 55.0, 90.0];
    for (final y in yLines) {
      canvas.drawLine(
        Offset(leftPad, y),
        Offset(size.width - rightPad, y),
        gridPaint,
      );
    }

    // Y Axis Text
    final textPainter = TextPainter(textDirection: TextDirection.ltr);
    final labels = ['100%', '80%', '60%'];
    for (var i = 0; i < labels.length; i++) {
      textPainter.text = TextSpan(
        text: labels[i],
        style: const TextStyle(fontSize: 8.5, color: Color(0xFF94A3B8), fontWeight: FontWeight.bold),
      );
      textPainter.layout();
      textPainter.paint(canvas, Offset(2, yLines[i] - 5));
    }

    // 85% Target Guideline (Emerald Dashed)
    const targetY = 46.0;
    final targetPaint = Paint()
      ..color = MedQuestTheme.emerald
      ..strokeWidth = 1.2;
    canvas.drawLine(
      Offset(leftPad, targetY),
      Offset(size.width - rightPad, targetY),
      targetPaint,
    );

    // Score Trajectory Curve Path
    final path = Path();
    final p0 = Offset(leftPad + 5, 88);
    final p1 = Offset(leftPad + graphWidth * 0.35, 68);
    final p2 = Offset(leftPad + graphWidth * 0.70, 48);
    final p3 = Offset(leftPad + graphWidth - 5, 34);

    path.moveTo(p0.dx, p0.dy);
    path.cubicTo(
      p0.dx + 40, p0.dy - 6,
      p1.dx - 40, p1.dy + 4,
      p1.dx, p1.dy,
    );
    path.cubicTo(
      p1.dx + 40, p1.dy - 6,
      p2.dx - 30, p2.dy + 4,
      p2.dx, p2.dy,
    );
    path.cubicTo(
      p2.dx + 30, p2.dy - 6,
      p3.dx - 20, p3.dy + 2,
      p3.dx, p3.dy,
    );

    // Gradient fill area
    final fillPath = Path.from(path)
      ..lineTo(p3.dx, graphHeight)
      ..lineTo(p0.dx, graphHeight)
      ..close();

    final gradientPaint = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          MedQuestTheme.primary.withValues(alpha: 0.28),
          MedQuestTheme.primary.withValues(alpha: 0.0),
        ],
      ).createShader(Rect.fromLTWH(leftPad, 0, graphWidth, graphHeight));
    canvas.drawPath(fillPath, gradientPaint);

    // Primary Line Stroke with shadow
    final linePaint = Paint()
      ..color = MedQuestTheme.primary
      ..strokeWidth = 2.6
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;
    canvas.drawPath(path, linePaint);

    // Draw Data Markers
    final points = [p0, p1, p2];
    for (final pt in points) {
      canvas.drawCircle(pt, 3.2, Paint()..color = Colors.white);
      canvas.drawCircle(pt, 3.2, linePaint..strokeWidth = 1.8);
    }

    // Current Day Anchor (Today)
    canvas.drawCircle(
      p3,
      7.0,
      Paint()..color = MedQuestTheme.primary.withValues(alpha: 0.2),
    );
    canvas.drawCircle(p3, 4.2, Paint()..color = MedQuestTheme.primary);
    canvas.drawCircle(p3, 2.0, Paint()..color = Colors.white);

    // Floating Tooltip Badge ("86.4% Today")
    final tooltipRect = RRect.fromRectAndRadius(
      Rect.fromLTWH(p3.dx - 55, p3.dy - 26, 68, 20),
      const Radius.circular(6),
    );
    canvas.drawRRect(tooltipRect, Paint()..color = const Color(0xFF1E1B4B));
    textPainter.text = const TextSpan(
      text: '86.4% Today',
      style: TextStyle(fontSize: 9.5, color: Colors.white, fontWeight: FontWeight.bold),
    );
    textPainter.layout();
    textPainter.paint(canvas, Offset(p3.dx - 50, p3.dy - 22));

    // X Axis Dates
    final xDates = ['Oct 01', 'Oct 10', 'Oct 20', 'Today'];
    final xPositions = [p0.dx, p1.dx, p2.dx, p3.dx];
    for (var i = 0; i < xDates.length; i++) {
      final isToday = i == xDates.length - 1;
      textPainter.text = TextSpan(
        text: xDates[i],
        style: TextStyle(
          fontSize: 8.5,
          color: isToday ? MedQuestTheme.primary : const Color(0xFF64748B),
          fontWeight: isToday ? FontWeight.w800 : FontWeight.w600,
        ),
      );
      textPainter.layout();
      textPainter.paint(
        canvas,
        Offset(xPositions[i] - textPainter.width / 2, graphHeight + 6),
      );
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
`;

export const FLUTTER_CLINICAL_QUESTS_CODE = `import 'package:flutter/material.dart';
import '../theme/medquest_theme.dart';

/// Reusable Clinical Quest Item Widget
/// Converted from Google Stitch Section 3: Daily Quests & Clinical Objectives
class ClinicalQuestItem extends StatelessWidget {
  final IconData icon;
  final Color iconColor;
  final Color containerBg;
  final Color containerBorder;
  final String title;
  final int xpReward;
  final String? subtitle;
  final int? currentProgress;
  final int? totalProgress;
  final Widget actionWidget;
  final VoidCallback? onTap;

  const ClinicalQuestItem({
    super.key,
    required this.icon,
    required this.iconColor,
    required this.containerBg,
    required this.containerBorder,
    required this.title,
    required this.xpReward,
    this.subtitle,
    this.currentProgress,
    this.totalProgress,
    required this.actionWidget,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: MedQuestTheme.softNeumorphicCard(borderRadius: 16),
        child: Row(
          children: [
            // Icon Container
            Container(
              width: 42,
              height: 42,
              decoration: BoxDecoration(
                color: containerBg,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: containerBorder),
              ),
              child: Icon(icon, color: iconColor, size: 22),
            ),
            const SizedBox(width: 12),

            // Text & Progress Details
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Expanded(
                        child: Text(
                          title,
                          style: const TextStyle(
                            fontSize: 13,
                            fontWeight: FontWeight.w800,
                            color: MedQuestTheme.textDark,
                          ),
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                      const SizedBox(width: 6),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                        decoration: BoxDecoration(
                          color: containerBg,
                          borderRadius: BorderRadius.circular(6),
                          border: Border.all(color: containerBorder),
                        ),
                        child: Text(
                          '+\$xpReward XP',
                          style: TextStyle(
                            fontSize: 10.5,
                            fontWeight: FontWeight.w800,
                            color: iconColor,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 4),

                  if (currentProgress != null && totalProgress != null) ...[
                    Row(
                      children: [
                        Expanded(
                          child: Container(
                            height: 6,
                            decoration: MedQuestTheme.softTrackDecoration(),
                            child: FractionallySizedBox(
                              alignment: Alignment.centerLeft,
                              widthFactor: (currentProgress! / totalProgress!).clamp(0.0, 1.0),
                              child: Container(
                                decoration: BoxDecoration(
                                  gradient: MedQuestTheme.primaryGradient,
                                  borderRadius: BorderRadius.circular(999),
                                ),
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(width: 8),
                        Text(
                          '\$currentProgress / \$totalProgress',
                          style: const TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.w600,
                            color: Color(0xFF64748B),
                          ),
                        ),
                      ],
                    ),
                  ] else if (subtitle != null) ...[
                    Text(
                      subtitle!,
                      style: const TextStyle(
                        fontSize: 11.5,
                        color: Color(0xFF64748B),
                      ),
                      overflow: TextOverflow.ellipsis,
                    ),
                  ],
                ],
              ),
            ),
            const SizedBox(width: 10),

            // Action Button
            actionWidget,
          ],
        ),
      ),
    );
  }
}
`;

export const FLUTTER_RAPID_MODULES_CODE = `import 'package:flutter/material.dart';
import '../theme/medquest_theme.dart';

/// Reusable Rapid Training Modules Tray
/// Converted from Google Stitch Section 4: Quick Actions Tray
class RapidModulesTray extends StatelessWidget {
  final VoidCallback onResumeModule;
  final VoidCallback onOpenSmartDeck;
  final VoidCallback onOpenAiConsultant;

  const RapidModulesTray({
    super.key,
    required this.onResumeModule,
    required this.onOpenSmartDeck,
    required this.onOpenAiConsultant,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 4),
          child: Text(
            'Rapid Training Modules',
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.w900,
              color: MedQuestTheme.textDark,
              letterSpacing: -0.3,
            ),
          ),
        ),
        const SizedBox(height: 10),

        // 1. Full-Width Resume Module Banner
        InkWell(
          onTap: onResumeModule,
          borderRadius: BorderRadius.circular(16),
          child: Container(
            padding: const EdgeInsets.all(14),
            decoration: MedQuestTheme.softNeumorphicCard(borderRadius: 16),
            child: Row(
              children: [
                Container(
                  width: 46,
                  height: 46,
                  decoration: BoxDecoration(
                    gradient: MedQuestTheme.primaryGradient,
                    borderRadius: BorderRadius.circular(14),
                  ),
                  child: const Icon(Icons.psychology_alt_rounded, color: Colors.white, size: 24),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                            decoration: BoxDecoration(
                              color: const Color(0xFFEEF2FF),
                              borderRadius: BorderRadius.circular(4),
                              border: Border.all(color: const Color(0xFFC7D2FE)),
                            ),
                            child: const Text(
                              'RESUME',
                              style: TextStyle(
                                fontSize: 9.5,
                                fontWeight: FontWeight.w800,
                                color: MedQuestTheme.primary,
                              ),
                            ),
                          ),
                          const SizedBox(width: 6),
                          const Text(
                            '2h ago',
                            style: TextStyle(fontSize: 11, color: Color(0xFF94A3B8)),
                          ),
                        ],
                      ),
                      const SizedBox(height: 4),
                      const Text(
                        'Cranial Nerve Palsies',
                        style: TextStyle(
                          fontSize: 13.5,
                          fontWeight: FontWeight.w800,
                          color: MedQuestTheme.textDark,
                        ),
                        overflow: TextOverflow.ellipsis,
                      ),
                      const SizedBox(height: 6),
                      Row(
                        children: [
                          Expanded(
                            child: Container(
                              height: 6,
                              decoration: MedQuestTheme.softTrackDecoration(),
                              child: FractionallySizedBox(
                                alignment: Alignment.centerLeft,
                                widthFactor: 0.68,
                                child: Container(
                                  decoration: BoxDecoration(
                                    gradient: MedQuestTheme.primaryGradient,
                                    borderRadius: BorderRadius.circular(999),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          const SizedBox(width: 8),
                          const Text(
                            '68%',
                            style: TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.w800,
                              color: MedQuestTheme.primary,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 10),
                Container(
                  width: 36,
                  height: 36,
                  decoration: BoxDecoration(
                    gradient: MedQuestTheme.primaryGradient,
                    borderRadius: BorderRadius.circular(10),
                    boxShadow: [
                      BoxShadow(
                        color: MedQuestTheme.primary.withValues(alpha: 0.3),
                        blurRadius: 8,
                        offset: const Offset(0, 2),
                      ),
                    ],
                  ),
                  child: const Icon(Icons.play_arrow_rounded, color: Colors.white, size: 20),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 10),

        // 2. Two-Column Grid: Smart Deck & AI Consultant
        Row(
          children: [
            Expanded(
              child: _buildActionTile(
                icon: Icons.layers_rounded,
                iconColor: const Color(0xFF047857),
                iconBg: const Color(0xFFD1FAE5),
                title: 'Smart Deck',
                subtitle: 'Anki algorithm • 15m',
                buttonLabel: 'Review',
                buttonGradient: null,
                isSecondary: true,
                onTap: onOpenSmartDeck,
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: _buildActionTile(
                icon: Icons.smart_toy_rounded,
                iconColor: const Color(0xFF92400E),
                iconBg: const Color(0xFFFEF3C7),
                title: 'AI Consultant',
                subtitle: 'Instant case review',
                buttonLabel: 'Chat',
                buttonGradient: MedQuestTheme.amberGradient,
                isSecondary: false,
                onTap: onOpenAiConsultant,
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildActionTile({
    required IconData icon,
    required Color iconColor,
    required Color iconBg,
    required String title,
    required String subtitle,
    required String buttonLabel,
    LinearGradient? buttonGradient,
    required bool isSecondary,
    required VoidCallback onTap,
  }) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: MedQuestTheme.softNeumorphicCard(borderRadius: 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 34,
              height: 34,
              decoration: BoxDecoration(
                color: iconBg,
                borderRadius: BorderRadius.circular(10),
              ),
              child: Icon(icon, color: iconColor, size: 18),
            ),
            const SizedBox(height: 8),
            Text(
              title,
              style: const TextStyle(
                fontSize: 13,
                fontWeight: FontWeight.w800,
                color: MedQuestTheme.textDark,
              ),
              overflow: TextOverflow.ellipsis,
            ),
            const SizedBox(height: 2),
            Text(
              subtitle,
              style: const TextStyle(
                fontSize: 10.5,
                color: Color(0xFF64748B),
              ),
              overflow: TextOverflow.ellipsis,
            ),
            const SizedBox(height: 10),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 7),
              decoration: BoxDecoration(
                gradient: buttonGradient,
                color: isSecondary ? const Color(0xFFF8FAFC) : null,
                borderRadius: BorderRadius.circular(8),
                border: isSecondary ? Border.all(color: const Color(0xFFE2E8F0)) : null,
              ),
              child: Center(
                child: Text(
                  buttonLabel,
                  style: TextStyle(
                    fontSize: 11.5,
                    fontWeight: FontWeight.w800,
                    color: isSecondary ? const Color(0xFF334155) : Colors.white,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
`;

export const FLUTTER_RECENT_ACCURACY_CODE = `import 'package:flutter/material.dart';
import '../theme/medquest_theme.dart';

/// Reusable Recent Performance & Accuracy Pill
/// Converted from Google Stitch Section 5: Recent Performance Pill
class RecentAccuracyCard extends StatelessWidget {
  final double accuracyPercentage; // e.g. 84.6
  final double trendDelta; // e.g. 3.2
  final int totalQuestions; // e.g. 142
  final int daysWindow; // e.g. 7
  final VoidCallback? onOpenInsights;

  const RecentAccuracyCard({
    super.key,
    this.accuracyPercentage = 84.6,
    this.trendDelta = 3.2,
    this.totalQuestions = 142,
    this.daysWindow = 7,
    this.onOpenInsights,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: MedQuestTheme.softNeumorphicCard(borderRadius: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: [
              Container(
                width: 38,
                height: 38,
                decoration: BoxDecoration(
                  gradient: const LinearGradient(
                    colors: [Color(0xFFD1FAE5), Color(0xFFA7F3D0)],
                  ),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: const Color(0xFF6EE7B7)),
                ),
                child: const Icon(
                  Icons.trending_up_rounded,
                  color: Color(0xFF047857),
                  size: 20,
                ),
              ),
              const SizedBox(width: 12),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Text(
                        '\${accuracyPercentage.toStringAsFixed(1)}% Accuracy',
                        style: const TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.w800,
                          color: MedQuestTheme.textDark,
                        ),
                      ),
                      const SizedBox(width: 6),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 1.5),
                        decoration: BoxDecoration(
                          color: const Color(0xFFECFDF5),
                          borderRadius: BorderRadius.circular(4),
                          border: Border.all(color: const Color(0xFFA7F3D0)),
                        ),
                        child: Text(
                          '+\${trendDelta.toStringAsFixed(1)}%',
                          style: const TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.w800,
                            color: Color(0xFF047857),
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 2),
                  Text(
                    'Last \$daysWindow days • \$totalQuestions clinical questions',
                    style: const TextStyle(
                      fontSize: 11,
                      color: Color(0xFF64748B),
                    ),
                  ),
                ],
              ),
            ],
          ),
          InkWell(
            onTap: onOpenInsights,
            borderRadius: BorderRadius.circular(8),
            child: const Padding(
              padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              child: Row(
                children: [
                  Text(
                    'Insights',
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w800,
                      color: MedQuestTheme.primary,
                    ),
                  ),
                  Icon(
                    Icons.arrow_forward_rounded,
                    size: 14,
                    color: MedQuestTheme.primary,
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
`;

export const FLUTTER_QCM_CARD_NEW_DESIGN_CODE = `import 'package:flutter/material.dart';
import '../theme/medquest_theme.dart';

/// MISSING COMPONENT DESIGN: Reusable Interactive QCM Question Card
/// Provides:
/// - Clinical Case Vignette
/// - Neumorphic Option Selection (A, B, C, D, E)
/// - Instant Validation & Feedback with color transitions
/// - Comprehensive Clinical Rationale & Explanation
/// - High-Yield Pearl Box
/// - XP Reward trigger upon correct completion
class QcmCard extends StatefulWidget {
  final int questionNumber;
  final int totalQuestions;
  final String specialty;
  final String vignette;
  final String questionText;
  final List<String> options;
  final int correctIndex;
  final String explanation;
  final String highYieldPearl;
  final void Function(bool isCorrect, int xpAwarded)? onAnswered;
  final VoidCallback? onNextQuestion;

  const QcmCard({
    super.key,
    required this.questionNumber,
    required this.totalQuestions,
    required this.specialty,
    required this.vignette,
    required this.questionText,
    required this.options,
    required this.correctIndex,
    required this.explanation,
    required this.highYieldPearl,
    this.onAnswered,
    this.onNextQuestion,
  });

  @override
  State<QcmCard> createState() => _QcmCardState();
}

class _QcmCardState extends State<QcmCard> {
  int? _selectedIndex;
  bool _isSubmitted = false;

  void _submitAnswer() {
    if (_selectedIndex == null || _isSubmitted) return;
    setState(() => _isSubmitted = true);

    final isCorrect = _selectedIndex == widget.correctIndex;
    final xp = isCorrect ? 30 : 5;
    widget.onAnswered?.call(isCorrect, xp);
  }

  @override
  Widget build(BuildContext context) {
    final letters = ['A', 'B', 'C', 'D', 'E'];

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(18),
      decoration: MedQuestTheme.softNeumorphicCard(borderRadius: 22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header: Specialty Badge + Question Counter + Timer
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: MedQuestTheme.primaryContainer.withValues(alpha: 0.6),
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: const Color(0xFFC7D2FE)),
                ),
                child: Text(
                  widget.specialty.toUpperCase(),
                  style: const TextStyle(
                    fontSize: 10.5,
                    fontWeight: FontWeight.w800,
                    letterSpacing: 0.6,
                    color: MedQuestTheme.primary,
                  ),
                ),
              ),
              Row(
                children: [
                  const Icon(Icons.timer_outlined, size: 14, color: Color(0xFF64748B)),
                  const SizedBox(width: 4),
                  Text(
                    'Q \${widget.questionNumber} / \${widget.totalQuestions}',
                    style: const TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w800,
                      color: MedQuestTheme.textDark,
                    ),
                  ),
                ],
              ),
            ],
          ),
          const SizedBox(height: 14),

          // Clinical Vignette Card
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: const Color(0xFFF8FAFC),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFE2E8F0)),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Icon(
                  Icons.assignment_ind_rounded,
                  color: MedQuestTheme.primary,
                  size: 20,
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Text(
                    widget.vignette,
                    style: const TextStyle(
                      fontSize: 13,
                      height: 1.45,
                      color: Color(0xFF1E293B),
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 14),

          // Question Prompt
          Text(
            widget.questionText,
            style: const TextStyle(
              fontSize: 14.5,
              fontWeight: FontWeight.w800,
              color: MedQuestTheme.textDark,
              height: 1.3,
            ),
          ),
          const SizedBox(height: 14),

          // Options List (A, B, C, D)
          Column(
            children: List.generate(widget.options.length, (index) {
              final isSelected = _selectedIndex == index;
              final isCorrectChoice = index == widget.correctIndex;

              Color borderColor = const Color(0xFFE2E8F0);
              Color bgColor = Colors.white;
              Color letterBg = const Color(0xFFF1F5F9);
              Color letterColor = const Color(0xFF475569);

              if (_isSubmitted) {
                if (isCorrectChoice) {
                  borderColor = MedQuestTheme.emerald;
                  bgColor = const Color(0xFFECFDF5);
                  letterBg = MedQuestTheme.emerald;
                  letterColor = Colors.white;
                } else if (isSelected && !isCorrectChoice) {
                  borderColor = MedQuestTheme.rose;
                  bgColor = const Color(0xFFFFF1F2);
                  letterBg = MedQuestTheme.rose;
                  letterColor = Colors.white;
                }
              } else if (isSelected) {
                borderColor = MedQuestTheme.primary;
                bgColor = const Color(0xFFEEF2FF);
                letterBg = MedQuestTheme.primary;
                letterColor = Colors.white;
              }

              return Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: InkWell(
                  onTap: _isSubmitted ? null : () => setState(() => _selectedIndex = index),
                  borderRadius: BorderRadius.circular(14),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 200),
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: bgColor,
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: borderColor, width: isSelected || (_isSubmitted && isCorrectChoice) ? 1.8 : 1),
                      boxShadow: [
                        BoxShadow(
                          color: const Color(0xFF0F172A).withValues(alpha: 0.03),
                          blurRadius: 4,
                          offset: const Offset(0, 1),
                        ),
                      ],
                    ),
                    child: Row(
                      children: [
                        Container(
                          width: 28,
                          height: 28,
                          decoration: BoxDecoration(
                            color: letterBg,
                            shape: BoxShape.circle,
                          ),
                          child: Center(
                            child: Text(
                              letters[index % letters.length],
                              style: TextStyle(
                                fontSize: 12,
                                fontWeight: FontWeight.w800,
                                color: letterColor,
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text(
                            widget.options[index],
                            style: TextStyle(
                              fontSize: 13,
                              fontWeight: isSelected ? FontWeight.w700 : FontWeight.w500,
                              color: MedQuestTheme.textDark,
                            ),
                          ),
                        ),
                        if (_isSubmitted && isCorrectChoice)
                          const Icon(Icons.check_circle_rounded, color: MedQuestTheme.emerald, size: 20)
                        else if (_isSubmitted && isSelected && !isCorrectChoice)
                          const Icon(Icons.cancel_rounded, color: MedQuestTheme.rose, size: 20),
                      ],
                    ),
                  ),
                ),
              );
            }),
          ),
          const SizedBox(height: 8),

          // Submit / Validate Button
          if (!_isSubmitted)
            ElevatedButton(
              onPressed: _selectedIndex != null ? _submitAnswer : null,
              style: ElevatedButton.styleFrom(
                minimumSize: const Size.fromHeight(48),
                backgroundColor: MedQuestTheme.primary,
                disabledBackgroundColor: const Color(0xFFCBD5E1),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: const Text(
                'Validate Answer',
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w800,
                  color: Colors.white,
                ),
              ),
            ),

          // Rationale & Explanation Section (Revealed after submission)
          if (_isSubmitted) ...[
            const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: const Color(0xFFF8FAFC),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: const Color(0xFFCBD5E1)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Icon(
                        _selectedIndex == widget.correctIndex
                            ? Icons.check_circle_rounded
                            : Icons.info_rounded,
                        color: _selectedIndex == widget.correctIndex
                            ? MedQuestTheme.emerald
                            : MedQuestTheme.primary,
                        size: 18,
                      ),
                      const SizedBox(width: 6),
                      const Text(
                        'Clinical Explanation & Mechanism',
                        style: TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.w800,
                          color: MedQuestTheme.textDark,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Text(
                    widget.explanation,
                    style: const TextStyle(
                      fontSize: 12.5,
                      height: 1.45,
                      color: Color(0xFF334155),
                    ),
                  ),
                  const SizedBox(height: 10),

                  // High Yield Pearl Box
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFEF3C7).withValues(alpha: 0.7),
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: const Color(0xFFFDE68A)),
                    ),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Icon(Icons.lightbulb_rounded, color: Color(0xFFD97706), size: 16),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(
                            'High-Yield Pearl: \${widget.highYieldPearl}',
                            style: const TextStyle(
                              fontSize: 11.5,
                              fontWeight: FontWeight.w700,
                              color: Color(0xFF78350F),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 12),

            // Next Question Action Button
            ElevatedButton(
              onPressed: widget.onNextQuestion,
              style: ElevatedButton.styleFrom(
                minimumSize: const Size.fromHeight(48),
                backgroundColor: MedQuestTheme.emeraldDark,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Next Question (+30 XP)',
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w800,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(width: 6),
                  Icon(Icons.arrow_forward_rounded, color: Colors.white, size: 18),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}
`;

export const FLUTTER_SMART_FLASHCARD_NEW_DESIGN_CODE = `import 'package:flutter/material.dart';
import 'dart:math' as math;
import '../theme/medquest_theme.dart';

/// MISSING COMPONENT DESIGN: Spaced Repetition Smart Deck Flashcard
/// Implements Anki algorithm grading with 3D Flip animation
class SmartFlashcardDeckWidget extends StatefulWidget {
  final String title;
  final String questionPrompt;
  final String answerDetail;
  final String mnemonic;
  final void Function(String intervalRating)? onGradeCard;

  const SmartFlashcardDeckWidget({
    super.key,
    required this.title,
    required this.questionPrompt,
    required this.answerDetail,
    required this.mnemonic,
    this.onGradeCard,
  });

  @override
  State<SmartFlashcardDeckWidget> createState() => _SmartFlashcardDeckWidgetState();
}

class _SmartFlashcardDeckWidgetState extends State<SmartFlashcardDeckWidget>
    with SingleTickerProviderStateMixin {
  late AnimationController _flipController;
  late Animation<double> _flipAnimation;
  bool _isFront = true;

  @override
  void initState() {
    super.initState();
    _flipController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 500),
    );
    _flipAnimation = Tween<double>(begin: 0, end: 1).animate(
      CurvedAnimation(parent: _flipController, curve: Curves.easeInOutBack),
    );
  }

  @override
  void dispose() {
    _flipController.dispose();
    super.dispose();
  }

  void _flipCard() {
    if (_isFront) {
      _flipController.forward();
    } else {
      _flipController.reverse();
    }
    setState(() => _isFront = !_isFront);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: MedQuestTheme.softNeumorphicCard(borderRadius: 22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  const Icon(Icons.layers_rounded, color: MedQuestTheme.emerald, size: 18),
                  const SizedBox(width: 6),
                  Text(
                    widget.title,
                    style: const TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w800,
                      color: MedQuestTheme.textDark,
                    ),
                  ),
                ],
              ),
              const Text(
                'Tap card to reveal',
                style: TextStyle(fontSize: 11, color: Color(0xFF64748B)),
              ),
            ],
          ),
          const SizedBox(height: 14),

          // 3D Flip Card Container
          GestureDetector(
            onTap: _flipCard,
            child: AnimatedBuilder(
              animation: _flipAnimation,
              builder: (context, child) {
                final angle = _flipAnimation.value * math.pi;
                final isUnder = angle > (math.pi / 2);

                return Transform(
                  transform: Matrix4.identity()
                    ..setEntry(3, 2, 0.001)
                    ..rotateY(angle),
                  alignment: Alignment.center,
                  child: isUnder
                      ? Transform(
                          transform: Matrix4.identity()..rotateY(math.pi),
                          alignment: Alignment.center,
                          child: _buildBackFace(),
                        )
                      : _buildFrontFace(),
                );
              },
            ),
          ),
          const SizedBox(height: 16),

          // Spaced Repetition Rating Buttons
          Row(
            children: [
              _buildRatingButton('Again (<1m)', const Color(0xFFF43F5E), 'again'),
              const SizedBox(width: 6),
              _buildRatingButton('Hard (1d)', const Color(0xFFD97706), 'hard'),
              const SizedBox(width: 6),
              _buildRatingButton('Good (3d)', MedQuestTheme.primary, 'good'),
              const SizedBox(width: 6),
              _buildRatingButton('Easy (7d)', MedQuestTheme.emerald, 'easy'),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildFrontFace() {
    return Container(
      height: 160,
      width: double.infinity,
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: const Color(0xFFF8FAFC),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFCBD5E1)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.03),
            blurRadius: 8,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Icon(Icons.touch_app_rounded, color: MedQuestTheme.primary, size: 24),
          const SizedBox(height: 8),
          Text(
            widget.questionPrompt,
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w800,
              color: MedQuestTheme.textDark,
              height: 1.35,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBackFace() {
    return Container(
      height: 160,
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFFECFDF5),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFA7F3D0)),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            widget.answerDetail,
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontSize: 13.5,
              fontWeight: FontWeight.w800,
              color: Color(0xFF065F46),
              height: 1.3,
            ),
          ),
          const SizedBox(height: 8),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(6),
              border: Border.all(color: const Color(0xFFA7F3D0)),
            ),
            child: Text(
              '[Astuce] Mnemonic: \${widget.mnemonic}',
              style: const TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.w700,
                color: Color(0xFF047857),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildRatingButton(String label, Color color, String rating) {
    return Expanded(
      child: InkWell(
        onTap: () => widget.onGradeCard?.call(rating),
        borderRadius: BorderRadius.circular(8),
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 8),
          decoration: BoxDecoration(
            color: color.withValues(alpha: 0.12),
            borderRadius: BorderRadius.circular(8),
            border: Border.all(color: color.withValues(alpha: 0.4)),
          ),
          child: Center(
            child: Text(
              label,
              style: TextStyle(
                fontSize: 10,
                fontWeight: FontWeight.w800,
                color: color,
              ),
              overflow: TextOverflow.ellipsis,
            ),
          ),
        ),
      ),
    );
  }
}
`;

export const FLUTTER_DIAGNOSTIC_SIMULATION_NEW_DESIGN_CODE = `import 'package:flutter/material.dart';
import '../theme/medquest_theme.dart';

/// MISSING COMPONENT DESIGN: Diagnostic Simulation Bottom Sheet Modal
/// Triggered by the "Take Diagnostic Simulation" button in ExamMilestoneCard
class DiagnosticSimulationSheet extends StatelessWidget {
  final VoidCallback onStartExam;
  final VoidCallback onClose;

  const DiagnosticSimulationSheet({
    super.key,
    required this.onStartExam,
    required this.onClose,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(22),
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Center(
            child: Container(
              width: 44,
              height: 4,
              decoration: BoxDecoration(
                color: const Color(0xFFCBD5E1),
                borderRadius: BorderRadius.circular(2),
              ),
            ),
          ),
          const SizedBox(height: 18),

          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Row(
                children: [
                  Icon(Icons.assignment_turned_in_rounded, color: MedQuestTheme.primary, size: 24),
                  SizedBox(width: 8),
                  Text(
                    'Diagnostic Simulation',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w900,
                      color: MedQuestTheme.textDark,
                    ),
                  ),
                ],
              ),
              IconButton(
                icon: const Icon(Icons.close_rounded),
                onPressed: onClose,
              ),
            ],
          ),
          const SizedBox(height: 8),
          const Text(
            'Calibrate your predicted percentile with a 40-question timed clinical block modeled after ECN & USMLE Step 2 CK.',
            style: TextStyle(fontSize: 13, color: Color(0xFF64748B), height: 1.4),
          ),
          const SizedBox(height: 16),

          // Specs Grid
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: const Color(0xFFF8FAFC),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFE2E8F0)),
            ),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                _SpecItem(icon: Icons.timelapse_rounded, label: 'Time Limit', value: '45 Mins'),
                _SpecItem(icon: Icons.quiz_rounded, label: 'Questions', value: '40 QCMs'),
                _SpecItem(icon: Icons.analytics_rounded, label: 'Analytics', value: 'Instant %ile'),
              ],
            ),
          ),
          const SizedBox(height: 20),

          ElevatedButton(
            onPressed: onStartExam,
            style: ElevatedButton.styleFrom(
              minimumSize: const Size.fromHeight(50),
              backgroundColor: MedQuestTheme.primary,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            ),
            child: const Text(
              'Begin Diagnostic Block',
              style: TextStyle(fontSize: 14.5, fontWeight: FontWeight.w800, color: Colors.white),
            ),
          ),
          const SizedBox(height: 10),
        ],
      ),
    );
  }
}

class _SpecItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;

  const _SpecItem({required this.icon, required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Icon(icon, color: MedQuestTheme.primary, size: 20),
        const SizedBox(height: 4),
        Text(value, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w800, color: MedQuestTheme.textDark)),
        Text(label, style: const TextStyle(fontSize: 10.5, color: Color(0xFF64748B))),
      ],
    );
  }
}
`;

export const FLUTTER_AI_CONSULTANT_NEW_DESIGN_CODE = `import 'package:flutter/material.dart';
import '../theme/medquest_theme.dart';

/// MISSING COMPONENT DESIGN: AI Clinical Consultant Chat Sheet
/// Triggered by the "AI Consultant" button in RapidModulesTray
class AiConsultantSheet extends StatefulWidget {
  final VoidCallback onClose;

  const AiConsultantSheet({super.key, required this.onClose});

  @override
  State<AiConsultantSheet> createState() => _AiConsultantSheetState();
}

class _AiConsultantSheetState extends State<AiConsultantSheet> {
  final TextEditingController _promptController = TextEditingController();
  final List<Map<String, String>> _messages = [
    {
      'sender': 'ai',
      'text': 'Hello Doctor. Ask me anything regarding clinical differential diagnoses, ECG triage, or high-yield pharmacology mnemonics.',
    },
  ];

  void _sendMessage() {
    final text = _promptController.text.trim();
    if (text.isEmpty) return;

    setState(() {
      _messages.add({'sender': 'user', 'text': text});
      _promptController.clear();
      // Simulated clinical consultant reply
      _messages.add({
        'sender': 'ai',
        'text': 'Clinical Pearl: In this scenario, prioritize evaluating ST-elevations in reciprocal leads. Pericarditis typically shows PR depression with diffuse concave STE.',
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height * 0.75,
      padding: const EdgeInsets.all(18),
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
      ),
      child: Column(
        children: [
          Center(
            child: Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(
                color: const Color(0xFFCBD5E1),
                borderRadius: BorderRadius.circular(2),
              ),
            ),
          ),
          const SizedBox(height: 12),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Row(
                children: [
                  Icon(Icons.smart_toy_rounded, color: MedQuestTheme.amberDark, size: 22),
                  SizedBox(width: 8),
                  Text(
                    'AI Clinical Consultant',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w900,
                      color: MedQuestTheme.textDark,
                    ),
                  ),
                ],
              ),
              IconButton(icon: const Icon(Icons.close_rounded), onPressed: widget.onClose),
            ],
          ),
          const Divider(),
          Expanded(
            child: ListView.builder(
              itemCount: _messages.length,
              itemBuilder: (context, index) {
                final msg = _messages[index];
                final isUser = msg['sender'] == 'user';

                return Align(
                  alignment: isUser ? Alignment.centerRight : Alignment.centerLeft,
                  child: Container(
                    margin: const EdgeInsets.symmetric(vertical: 4),
                    padding: const EdgeInsets.all(12),
                    constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width * 0.78),
                    decoration: BoxDecoration(
                      color: isUser ? MedQuestTheme.primary : const Color(0xFFF1F5F9),
                      borderRadius: BorderRadius.circular(14),
                    ),
                    child: Text(
                      msg['text']!,
                      style: TextStyle(
                        fontSize: 12.5,
                        color: isUser ? Colors.white : MedQuestTheme.textDark,
                        height: 1.35,
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _promptController,
                  decoration: InputDecoration(
                    hintText: 'e.g. Differentiate STEMI vs Pericarditis...',
                    hintStyle: const TextStyle(fontSize: 12),
                    contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                    filled: true,
                    fillColor: const Color(0xFFF8FAFC),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: const BorderSide(color: Color(0xFFCBD5E1)),
                    ),
                  ),
                ),
              ),
              const SizedBox(width: 8),
              IconButton.filled(
                icon: const Icon(Icons.send_rounded, size: 18),
                style: IconButton.styleFrom(backgroundColor: MedQuestTheme.amberDark),
                onPressed: _sendMessage,
              ),
            ],
          ),
        ],
      ),
    );
  }
}
`;

export const FLUTTER_BOTTOM_NAV_BAR_CODE = `import 'package:flutter/material.dart';
import '../theme/medquest_theme.dart';

/// Meddiy Floating White Marshmallow Bottom Navigation Bar
/// Clean Light Dock with:
/// 1. Home (Heart icon)
/// 2. Modules (Calendar icon)
/// 3. Center Raised Pink Circular Action Button (Book/QCM quiz icon) for Practice (+5 XP)
/// 4. Progress (BarChart icon)
/// 5. Profile (User icon)
class MeddiyBottomNavBar extends StatelessWidget {
  final int currentIndex;
  final ValueChanged<int> onTabSelected;

  const MeddiyBottomNavBar({
    super.key,
    required this.currentIndex,
    required this.onTabSelected,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      child: SafeArea(
        top: false,
        child: Container(
          height: 64,
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
          decoration: BoxDecoration(
            color: Colors.white, // App Theme White
            borderRadius: BorderRadius.circular(999),
            border: Border.all(color: const Color(0xFFE2E8F0), width: 1.2),
            boxShadow: [
              BoxShadow(
                color: const Color(0xFF0F172A).withOpacity(0.08),
                blurRadius: 28,
                offset: const Offset(0, 10),
              ),
              BoxShadow(
                color: Colors.black.withOpacity(0.03),
                blurRadius: 6,
                offset: const Offset(0, 2),
              ),
            ],
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              // 1. Home / Accueil
              _buildNavButton(
                index: 0,
                icon: Icons.favorite_rounded,
                label: 'Home',
                activeColor: const Color(0xFFF43F5E), // Rose
              ),

              // 2. Modules / Curricula
              _buildNavButton(
                index: 1,
                icon: Icons.calendar_month_rounded,
                label: 'Modules',
                activeColor: const Color(0xFFD97706), // Amber
              ),

              // 3. Center Raised Circular Pink Action Button (QCM)
              Transform.translate(
                offset: const Offset(0, -10),
                child: GestureDetector(
                  onTap: () => onTabSelected(2),
                  child: Container(
                    width: 52,
                    height: 52,
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(
                        colors: [Color(0xFFF472B6), Color(0xFFFB7185), Color(0xFFFDA4AF)],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                      shape: BoxShape.circle,
                      border: Border.all(color: Colors.white, width: 3),
                      boxShadow: [
                        BoxShadow(
                          color: const Color(0xFFF472B6).withOpacity(0.45),
                          blurRadius: 16,
                          offset: const Offset(0, 6),
                        ),
                      ],
                    ),
                    child: const Icon(
                      Icons.assignment_turned_in_rounded,
                      color: Colors.white,
                      size: 26,
                    ),
                  ),
                ),
              ),

              // 4. Progress / Progression
              _buildNavButton(
                index: 3,
                icon: Icons.bar_chart_rounded,
                label: 'Progress',
                activeColor: const Color(0xFF059669), // Emerald
              ),

              // 5. Profile / Profil
              _buildNavButton(
                index: 4,
                icon: Icons.person_rounded,
                label: 'Profile',
                activeColor: const Color(0xFF4F46E5), // Indigo
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildNavButton({
    required int index,
    required IconData icon,
    required String label,
    required Color activeColor,
  }) {
    final isSelected = currentIndex == index;

    return GestureDetector(
      onTap: () => onTabSelected(index),
      behavior: HitTestBehavior.opaque,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          AnimatedContainer(
            duration: const Duration(milliseconds: 200),
            padding: const EdgeInsets.all(4),
            decoration: BoxDecoration(
              color: isSelected ? Colors.white.withOpacity(0.15) : Colors.transparent,
              shape: BoxShape.circle,
            ),
            child: Icon(
              icon,
              size: 20,
              color: isSelected ? activeColor : const Color(0xFF94A3B8),
            ),
          ),
          const SizedBox(height: 1),
          Text(
            label,
            style: TextStyle(
              fontSize: 9.5,
              fontWeight: FontWeight.w700,
              color: isSelected ? activeColor : const Color(0xFF94A3B8),
            ),
          ),
        ],
      ),
    );
  }
}
`;

export const FLUTTER_DASHBOARD_SCREEN_CODE = `import 'package:flutter/material.dart';
import '../theme/medquest_theme.dart';
import '../widgets/streak_counter_badge.dart';
import '../widgets/daily_xp_goal_card.dart';
import '../widgets/exam_milestone_card.dart';
import '../widgets/retention_trajectory_chart.dart';
import '../widgets/clinical_quest_item.dart';
import '../widgets/rapid_modules_tray.dart';
import '../widgets/recent_accuracy_card.dart';
import '../widgets/qcm_card.dart';
import '../widgets/smart_flashcard_deck.dart';
import '../widgets/diagnostic_simulation_sheet.dart';
import '../widgets/ai_consultant_sheet.dart';
import '../widgets/meddiy_bottom_nav_bar.dart';

/// MedQuest Main Dashboard Screen
/// Integrates all modular Flutter widgets converted from Google Stitch layout,
/// plus the interactive designed missing features (QCM Card, Smart Deck, Modals).
class MedQuestDashboardScreen extends StatefulWidget {
  const MedQuestDashboardScreen({super.key});

  @override
  State<MedQuestDashboardScreen> createState() => _MedQuestDashboardScreenState();
}

class _MedQuestDashboardScreenState extends State<MedQuestDashboardScreen> {
  int _currentBottomNavIndex = 0;
  int _currentXp = 340;
  final int _targetXp = 500;
  int _streakDays = 18;

  // Question state
  bool _showInteractiveQcmCard = false;
  bool _showSmartDeck = false;

  void _openDiagnosticModal() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => DiagnosticSimulationSheet(
        onStartExam: () {
          Navigator.pop(context);
          setState(() => _showInteractiveQcmCard = true);
        },
        onClose: () => Navigator.pop(context),
      ),
    );
  }

  void _openAiConsultantModal() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => AiConsultantSheet(
        onClose: () => Navigator.pop(context),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: MedQuestTheme.background,
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(68),
        child: Container(
          decoration: BoxDecoration(
            color: Colors.white.withValues(alpha: 0.88),
            border: const Border(bottom: BorderSide(color: Color(0xFFE2E8F0))),
            boxShadow: [
              BoxShadow(
                color: const Color(0xFF0F172A).withValues(alpha: 0.03),
                blurRadius: 18,
                offset: const Offset(0, 4),
              ),
            ],
          ),
          child: SafeArea(
            bottom: false,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  // App Brand Logo & Level Tag
                  Row(
                    children: [
                      Container(
                        width: 38,
                        height: 38,
                        decoration: BoxDecoration(
                          gradient: MedQuestTheme.primaryGradient,
                          borderRadius: BorderRadius.circular(12),
                          boxShadow: [
                            BoxShadow(
                              color: MedQuestTheme.primary.withValues(alpha: 0.3),
                              blurRadius: 8,
                              offset: const Offset(0, 2),
                            ),
                          ],
                        ),
                        child: const Icon(Icons.local_hospital_rounded, color: Colors.white, size: 22),
                      ),
                      const SizedBox(width: 10),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Row(
                            children: [
                              const Text(
                                'Meddiy',
                                style: TextStyle(
                                  fontSize: 16,
                                  fontWeight: FontWeight.w900,
                                  color: MedQuestTheme.textDark,
                                  letterSpacing: -0.4,
                                ),
                              ),
                              const SizedBox(width: 6),
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                                decoration: BoxDecoration(
                                  gradient: MedQuestTheme.primaryGradient,
                                  borderRadius: BorderRadius.circular(999),
                                ),
                                child: const Text(
                                  'LVL 14',
                                  style: TextStyle(
                                    fontSize: 9.5,
                                    fontWeight: FontWeight.w800,
                                    color: Colors.white,
                                  ),
                                ),
                              ),
                            ],
                          ),
                          const Text(
                            'Clinical Dashboard',
                            style: TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.w600,
                              color: Color(0xFF64748B),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),

                  // Streak Pill & Profile Avatar
                  Row(
                    children: [
                      StreakCounterBadge(streakDays: _streakDays),
                      const SizedBox(width: 8),
                      Container(
                        width: 36,
                        height: 36,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          border: Border.all(color: const Color(0xFFCBD5E1), width: 1.5),
                          color: const Color(0xFFEEF2FF),
                        ),
                        child: const Icon(Icons.person_rounded, color: MedQuestTheme.primary, size: 20),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // 1. Daily Progress & XP Hero Ribbon
            DailyXpGoalCard(
              currentXp: _currentXp,
              targetXp: _targetXp,
              streakBonusXp: 50,
              highYieldTitle: 'High Yield',
              highYieldContent:
                  'Anterior Cerebral Artery (ACA) stroke presents with contralateral lower limb sensorimotor deficit exceeding upper extremity weakness.',
            ),
            const SizedBox(height: 16),

            // 2. Exam Target Milestone Card
            ExamMilestoneCard(
              milestoneTitle: 'ECN & USMLE Step 2 CK',
              daysLeft: 42,
              coveragePercentage: 0.74,
              targetPercentile: 92,
              simulatedPercentile: 86,
              monthlyDeltaPercentile: 4.0,
              onTakeDiagnostic: _openDiagnosticModal,
            ),
            const SizedBox(height: 16),

            // 2.5 Clinical Mastery & Retention Trajectory Chart
            const RetentionTrajectoryChart(),
            const SizedBox(height: 16),

            // 3. Daily Clinical Quests
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Daily Clinical Quests',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w900,
                        color: MedQuestTheme.textDark,
                        letterSpacing: -0.3,
                      ),
                    ),
                    Text(
                      '1 / 3 Complete',
                      style: TextStyle(
                        fontSize: 11.5,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF64748B),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),

                // Quest 1: Neurology QCMs
                ClinicalQuestItem(
                  icon: Icons.psychology_rounded,
                  iconColor: const Color(0xFF4338CA),
                  containerBg: const Color(0xFFE0E7FF),
                  containerBorder: const Color(0xFFC7D2FE),
                  title: 'Solve 20 Neurology QCMs',
                  xpReward: 30,
                  currentProgress: 15,
                  totalProgress: 20,
                  actionWidget: IconButton.filledTonal(
                    icon: const Icon(Icons.play_arrow_rounded, size: 18),
                    onPressed: () => setState(() => _showInteractiveQcmCard = !_showInteractiveQcmCard),
                  ),
                ),
                const SizedBox(height: 10),

                // Quest 2: Acute Chest Pain Vignette
                ClinicalQuestItem(
                  icon: Icons.monitor_heart_rounded,
                  iconColor: const Color(0xFF92400E),
                  containerBg: const Color(0xFFFEF3C7),
                  containerBorder: const Color(0xFFFDE68A),
                  title: 'Vignette: Acute Chest Pain',
                  xpReward: 50,
                  subtitle: 'STEMI vs. Pericarditis triage protocol',
                  actionWidget: ElevatedButton(
                    onPressed: () => setState(() => _showInteractiveQcmCard = true),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFFD97706),
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                    ),
                    child: const Text('Start', style: TextStyle(fontSize: 11.5, color: Colors.white, fontWeight: FontWeight.bold)),
                  ),
                ),
                const SizedBox(height: 10),

                // Quest 3: Spaced Repetition Review
                ClinicalQuestItem(
                  icon: Icons.style_rounded,
                  iconColor: const Color(0xFF475569),
                  containerBg: const Color(0xFFF1F5F9),
                  containerBorder: const Color(0xFFE2E8F0),
                  title: 'Spaced Repetition Review',
                  xpReward: 20,
                  subtitle: '12 Cards due for retention refresh',
                  actionWidget: IconButton.tonal(
                    icon: const Icon(Icons.chevron_right_rounded, size: 18),
                    onPressed: () => setState(() => _showSmartDeck = !_showSmartDeck),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),

            // Newly Designed Missing Feature: Interactive QCM Card (Live Preview toggled)
            if (_showInteractiveQcmCard) ...[
              QcmCard(
                questionNumber: 16,
                totalQuestions: 20,
                specialty: 'Neurology • Vascular',
                vignette:
                    'A 64-year-old male presents with acute right lower extremity paralysis and hypesthesia. Cranial nerve examination and upper extremity strength are fully intact (5/5). Urinary incontinence is noted.',
                questionText: 'Which cerebral vascular territory infarction explains this selective deficit pattern?',
                options: const [
                  'Anterior Cerebral Artery (ACA)',
                  'Middle Cerebral Artery (MCA) superior division',
                  'Posterior Cerebral Artery (PCA)',
                  'Basilar Artery tip syndrome',
                ],
                correctIndex: 0,
                explanation:
                    'The Anterior Cerebral Artery (ACA) perfuses the medial surface of the frontal and parietal cortex, which maps somatotopically to the contralateral lower extremity and micturition center on the motor homunculus.',
                highYieldPearl: 'ACA = Leg > Arm deficit + incontinence. MCA = Face & Arm > Leg deficit + aphasia/neglect.',
                onAnswered: (isCorrect, xp) {
                  setState(() {
                    _currentXp += xp;
                  });
                },
                onNextQuestion: () {
                  setState(() {
                    _showInteractiveQcmCard = false;
                  });
                },
              ),
              const SizedBox(height: 16),
            ],

            // Newly Designed Missing Feature: Smart Deck Flashcard
            if (_showSmartDeck) ...[
              SmartFlashcardDeckWidget(
                title: 'High-Yield Clinical Pearl Deck',
                questionPrompt: 'What is the hallmark motor and sensory deficit difference between ACA and MCA stroke syndromes?',
                answerDetail: 'ACA strokes affect contralateral LEG > ARM/FACE. MCA strokes affect contralateral ARM & FACE > LEG.',
                mnemonic: 'ACA steps on the gas (Legs); MCA waves goodbye (Hands & Face).',
                onGradeCard: (rating) {
                  setState(() {
                    _currentXp += 20;
                    _showSmartDeck = false;
                  });
                },
              ),
              const SizedBox(height: 16),
            ],

            // 4. Rapid Training Modules Tray
            RapidModulesTray(
              onResumeModule: () => setState(() => _showInteractiveQcmCard = true),
              onOpenSmartDeck: () => setState(() => _showSmartDeck = true),
              onOpenAiConsultant: _openAiConsultantModal,
            ),
            const SizedBox(height: 16),

            // 5. Recent Performance Pill
            RecentAccuracyCard(
              accuracyPercentage: 84.6,
              trendDelta: 3.2,
              totalQuestions: 142,
              daysWindow: 7,
              onOpenInsights: () {},
            ),
            const SizedBox(height: 24),
          ],
        ),
      ),
      bottomNavigationBar: MeddiyBottomNavBar(
        currentIndex: _currentBottomNavIndex,
        onTabSelected: (index) => setState(() => _currentBottomNavIndex = index),
      ),
    );
  }
}
`;

export const FLUTTER_MAIN_ENTRYPOINT_CODE = `import 'package:flutter/material.dart';
import 'theme/medquest_theme.dart';
import 'screens/medquest_dashboard_screen.dart';

void main() {
  runApp(const MeddiyApp());
}

class MeddiyApp extends StatelessWidget {
  const MeddiyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Meddiy - Clinical Dashboard',
      debugShowCheckedModeBanner: false,
      theme: MedQuestTheme.lightTheme,
      home: const MedQuestDashboardScreen(),
    );
  }
}
`;

export const ALL_FLUTTER_FILES: FlutterCodeFile[] = [
  {
    id: 'theme',
    fileName: 'medquest_theme.dart',
    path: 'lib/theme/medquest_theme.dart',
    title: '1. Theme & Neumorphic Tokens',
    category: 'core',
    widgetType: 'Theme/Constants',
    description: 'Exact color tokens, gradients, soft neumorphic box shadows & inset track styles extracted from Google Stitch layout.',
    code: FLUTTER_THEME_CODE,
  },
  {
    id: 'streak',
    fileName: 'streak_counter_badge.dart',
    path: 'lib/widgets/streak_counter_badge.dart',
    title: '2. Streak Counter Badge',
    category: 'widgets',
    widgetType: 'StatelessWidget',
    description: 'Reusable streak badge with amber fire icon, active day count, and soft neumorphic border & glow.',
    code: FLUTTER_STREAK_COUNTER_CODE,
  },
  {
    id: 'daily_xp',
    fileName: 'daily_xp_goal_card.dart',
    path: 'lib/widgets/daily_xp_goal_card.dart',
    title: '3. Daily XP Goal Hero Ribbon',
    category: 'widgets',
    widgetType: 'StatelessWidget',
    description: 'Hero ribbon displaying daily goal, +50 XP streak tag, animated emerald progress bar & high-yield medical tip.',
    code: FLUTTER_DAILY_XP_GOAL_CARD_CODE,
  },
  {
    id: 'exam_card',
    fileName: 'exam_milestone_card.dart',
    path: 'lib/widgets/exam_milestone_card.dart',
    title: '4. Exam Countdown Milestone Card',
    category: 'widgets',
    widgetType: 'StatelessWidget',
    description: 'Circular 74% covered ring painter, 42 days remaining badge, percentile tracker and simulation CTA.',
    code: FLUTTER_EXAM_MILESTONE_CARD_CODE,
  },
  {
    id: 'retention_chart',
    fileName: 'retention_trajectory_chart.dart',
    path: 'lib/widgets/retention_trajectory_chart.dart',
    title: '5. Retention Trajectory & Chart',
    category: 'widgets',
    widgetType: 'StatefulWidget',
    description: 'Interactive Bezier spline custom painter with glowing stroke, 85% target threshold, 7D/30D filter, and micro-metrics.',
    code: FLUTTER_RETENTION_TRAJECTORY_CHART_CODE,
  },
  {
    id: 'quests',
    fileName: 'clinical_quest_item.dart',
    path: 'lib/widgets/clinical_quest_item.dart',
    title: '6. Daily Clinical Quest Item',
    category: 'widgets',
    widgetType: 'StatelessWidget',
    description: 'Reusable quest card with icon container, dynamic XP tags, mini progress bar, and action buttons.',
    code: FLUTTER_CLINICAL_QUESTS_CODE,
  },
  {
    id: 'rapid_modules',
    fileName: 'rapid_modules_tray.dart',
    path: 'lib/widgets/rapid_modules_tray.dart',
    title: '7. Rapid Training Modules Tray',
    category: 'widgets',
    widgetType: 'StatelessWidget',
    description: 'Module resume banner (Cranial Nerve Palsies) and 2-column action cards for Smart Deck & AI Consultant.',
    code: FLUTTER_RAPID_MODULES_CODE,
  },
  {
    id: 'recent_accuracy',
    fileName: 'recent_accuracy_card.dart',
    path: 'lib/widgets/recent_accuracy_card.dart',
    title: '8. Recent Performance Card',
    category: 'widgets',
    widgetType: 'StatelessWidget',
    description: '84.6% accuracy pill with trending delta badge and detailed question statistics.',
    code: FLUTTER_RECENT_ACCURACY_CODE,
  },
  {
    id: 'qcm_card',
    fileName: 'qcm_card.dart',
    path: 'lib/widgets/qcm_card.dart',
    title: '9. Interactive QCM Card (Newly Designed)',
    category: 'new_designs',
    isNewDesign: true,
    widgetType: 'StatefulWidget',
    description: 'Designed missing feature: Clinical vignette question player with options A-E, rationales, takeaways and XP animations.',
    code: FLUTTER_QCM_CARD_NEW_DESIGN_CODE,
  },
  {
    id: 'smart_deck',
    fileName: 'smart_flashcard_deck.dart',
    path: 'lib/widgets/smart_flashcard_deck.dart',
    title: '10. Smart Flashcard Deck (Newly Designed)',
    category: 'new_designs',
    isNewDesign: true,
    widgetType: 'StatefulWidget',
    description: 'Designed missing feature: Anki-style 3D flip card with spaced repetition interval ratings (Again, Hard, Good, Easy).',
    code: FLUTTER_SMART_FLASHCARD_NEW_DESIGN_CODE,
  },
  {
    id: 'diagnostic_sim',
    fileName: 'diagnostic_simulation_sheet.dart',
    path: 'lib/widgets/diagnostic_simulation_sheet.dart',
    title: '11. Diagnostic Simulation Modal (Newly Designed)',
    category: 'new_designs',
    isNewDesign: true,
    widgetType: 'StatelessWidget',
    description: 'Designed missing feature: Timed 40-question exam simulation modal triggered from the exam countdown milestone.',
    code: FLUTTER_DIAGNOSTIC_SIMULATION_NEW_DESIGN_CODE,
  },
  {
    id: 'ai_consultant',
    fileName: 'ai_consultant_sheet.dart',
    path: 'lib/widgets/ai_consultant_sheet.dart',
    title: '12. AI Consultant Chat Sheet (Newly Designed)',
    category: 'new_designs',
    isNewDesign: true,
    widgetType: 'StatefulWidget',
    description: 'Designed missing feature: Rapid differential diagnosis and clinical consultant chat modal.',
    code: FLUTTER_AI_CONSULTANT_NEW_DESIGN_CODE,
  },
  {
    id: 'bottom_nav',
    fileName: 'meddiy_bottom_nav_bar.dart',
    path: 'lib/widgets/meddiy_bottom_nav_bar.dart',
    title: '13. Meddiy Bottom Nav Bar',
    category: 'widgets',
    widgetType: 'StatelessWidget',
    description: '4-tab floating bottom navigation bar with active gradient indicator pill matching the modern layout.',
    code: FLUTTER_BOTTOM_NAV_BAR_CODE,
  },
  {
    id: 'dashboard_screen',
    fileName: 'meddiy_dashboard_screen.dart',
    path: 'lib/screens/meddiy_dashboard_screen.dart',
    title: '14. Meddiy Dashboard Screen (Main Screen)',
    category: 'screens',
    widgetType: 'StatefulWidget',
    description: 'Complete Scaffold composing all modular sub-components, top header bar, and modal bottom sheet controllers.',
    code: FLUTTER_DASHBOARD_SCREEN_CODE,
  },
  {
    id: 'main',
    fileName: 'main.dart',
    path: 'lib/main.dart',
    title: '15. Main Flutter Entrypoint',
    category: 'core',
    widgetType: 'App Entrypoint',
    description: 'Clean main() entrypoint configured with DM Sans typography and MeddiyTheme.',
    code: FLUTTER_MAIN_ENTRYPOINT_CODE,
  },
];
