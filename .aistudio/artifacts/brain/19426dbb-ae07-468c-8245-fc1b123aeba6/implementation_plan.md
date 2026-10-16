# Pneumologie Course Header Icon Integration

Integrate the anatomical lungs icon from the user's reference photo sheet specifically as the hero insignia in the Pneumologie course header, maintaining crisp 1:1 framing, refined container styling, and persistent navigation.

## User Review & Critical Decisions

> [!IMPORTANT]
> Based on your confirmed selections during Phase 1 clarification:
> - **Confirmed Source Asset**: The cropped anatomical lungs from your reference photo sheet (exact trachea, bronchial bifurcation, right lung, and left lung with cardiac notch).
> - **Confirmed Target Placement**: Applied specifically to the **Pneumologie course header** (`CourseHub`), ensuring the course page hero greets students with this exact reference illustration.
> - **Other Modules & Views**: Preserves standard directory and dashboard icon mappings without unwanted overrides, while keeping the restored first-design bottom navigation dock anchored.

---

## 1. Overview & Core Concept

- **What It Does**: Targets the Pneumologie course header in `CourseHub.tsx` to render the anatomical lungs icon from the reference photo sheet, housed in an elevated, high-definition square tile with subtle border accents and theme tinting.
- **Target Audience**: Medical students revising Pneumologie courses (asthma, COPD, pulmonary embolism, pneumonia, respiratory failure) who need an immediate, recognizable visual anchor upon opening the module.
- **Key Value**: Delivers the visual identity requested for Pneumologie while respecting the user's preference to apply this icon to the course header.

---

## 2. User Experience & Visual Design

- **Course Header Hero Insignia**:
  - In `CourseHub.tsx`, when viewing the Pneumologie module (`mod-pneumo`), the header insignia renders the cropped anatomical lungs icon from the reference photo sheet.
  - Sized at `72px` with smooth corner rounding (`rounded-2xl`), a soft tinted backdrop (`bg-rose-50/80` or clean white card), and a micro-border (`border-rose-200/60`).
  - The insignia aligns alongside the module title ("PNEUMOLOGIE"), academic year tag, and specialty action controls.
- **Empty & Active Course States**:
  - Both standard course view and empty-state fallback in `CourseHub` will render this anatomical icon cleanly.
- **Navigation Dock Consistency**:
  - The dark marshmallow bottom navigation dock (Home, Modules, QCM, Progress, Profile) remains visible and undisturbed.

---

## 3. Key Product Decisions & Trade-Offs

- **Dedicated Header Override in CourseHub**:
  - *Chosen Approach*: Specifically detect `mod-pneumo` (or pneumologie titles) in `CourseHub.tsx` header insignia to display the photo-sheet anatomical lungs icon (`PhotoIconPneumologie` / cropped photo sheet representation).
  - *Why*: Directly satisfies the user's preference ("Only on the Pneumologie course header") without mutating unrelated module cards or global defaults.
- **Fidelity & Rendering**:
  - *Chosen Approach*: Render the reference photo sheet lungs with high-precision vector paths and clean color fills matching the photo cells (coral-pink lobes `#FB7185`, beige trachea `#EAD5C3`, and anatomical cardiac notch).
  - *Why*: Ensures zero pixelation on high-DPI and mobile screens while staying true to the physical photo sheet drawing.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                 Medical Photo Icons Library                 │
│              (src/data/medicalPhotoIcons.tsx)               │
│                  - PhotoIconPneumologie                     │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                          CourseHub                          │
│                 (src/components/CourseHub.tsx)              │
│                                                             │
│   if (isPneumo) ──► Render PhotoIconPneumologie (72px)      │
│   else          ──► Render Standard ModuleExactLogo         │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 Pneumologie Course Page Header              │
│      [ Anatomical Lungs ]  PNEUMOLOGIE • 4ème Année         │
│                            Item 200 à 210                   │
└─────────────────────────────────────────────────────────────┘
```

- **Component Integration**:
  - Import `PhotoIconPneumologie` from `../data/medicalPhotoIcons` in `CourseHub.tsx`.
  - In the `organIcon` definition within `CourseHub`:
    - Check if the active module is Pneumologie (`module.id === 'mod-pneumo'` or normalized title includes `'pneumo'`).
    - Render `PhotoIconPneumologie` with `size={72}`.
    - Otherwise, maintain the standard `ModuleExactLogo` for other modules.
