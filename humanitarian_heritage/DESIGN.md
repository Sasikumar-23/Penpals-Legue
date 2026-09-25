---
name: Humanitarian Heritage
colors:
  surface: '#f6faff'
  surface-dim: '#d6dadf'
  surface-bright: '#f6faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f9'
  surface-container: '#eaeef3'
  surface-container-high: '#e4e9ed'
  surface-container-highest: '#dfe3e8'
  on-surface: '#171c20'
  on-surface-variant: '#424751'
  inverse-surface: '#2c3135'
  inverse-on-surface: '#edf1f6'
  outline: '#727782'
  outline-variant: '#c2c6d3'
  surface-tint: '#225ea9'
  primary: '#003f7c'
  on-primary: '#ffffff'
  primary-container: '#1456a0'
  on-primary-container: '#b1cdff'
  inverse-primary: '#a8c8ff'
  secondary: '#4d5f7d'
  on-secondary: '#ffffff'
  secondary-container: '#c8dbfe'
  on-secondary-container: '#4e607e'
  tertiary: '#503c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6d5200'
  on-tertiary-container: '#f5c549'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a8c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#00468a'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b5c7ea'
  on-secondary-fixed: '#071c36'
  on-secondary-fixed-variant: '#364764'
  tertiary-fixed: '#ffdf98'
  tertiary-fixed-dim: '#f0c044'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4300'
  background: '#f6faff'
  on-background: '#171c20'
  surface-variant: '#dfe3e8'
  surface-pure: '#FFFFFF'
  border-subtle: '#E5EAF0'
  text-primary: '#0B1F3A'
  text-muted: '#4B5D73'
  badge-gold-light: '#FCF7EB'
  accent-magenta: '#801475'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies the ethos of a prestigious, non-profit humanitarian collective established in 1995. Built to serve a diverse, intergenerational audience of philanthropists, volunteers, civic partners, and global penpals, the interface projects trust, institutional dignity, and warmth.

The aesthetic philosophy merges **Corporate / Modern** reliability with an elevated editorial sensibility. Dignified dark navy structures anchor key navigation zones and celebratory milestones, contrasted with warm luminous gold highlights that celebrate humanitarian impact. Visual rhythm is intentionally deliberate: expansive white space, structured content grids, crisp typography, and understated tactile cards reinforce civic credibility while inviting active community engagement.

## Colors

The color palette is architected to balance institutional authority with approachable social impact:

- **Primary (`#1456A0` - Royal Blue):** Commands primary interactions, dynamic links, focus outlines, and key call-to-actions. It conveys optimism, clarity, and dependable service.
- **Secondary (`#0B1F3A` - Deep Navy):** Deployed for high-gravity structural elements including global navigation bars, footers, section headings, and full-bleed thematic backdrops.
- **Tertiary (`#D4A72C` - Warm Gold):** Reserved for prestige accents, humanitarian honors, verified non-profit certifications (e.g., 80G Certified, Reg #F23778), anniversary marks, and subtle decorative trims.
- **Neutral (`#F3F7FC` - Soft Light Blue):** Forms alternate structural backgrounds, tinted panels, and subtle container fills, counterbalancing pure white canvas sections.

Text hierarchy relies on `#0B1F3A` for high-contrast legible headings and body copy, transitioning to `#4B5D73` for secondary descriptors. Surface containers default to `#FFFFFF` with borders framed in `#E5EAF0`.

## Typography

The type system blends the contemporary warmth and structural balance of **Plus Jakarta Sans** for headlines with the clean, highly legible functional clarity of **Inter** for sustained reading, UI controls, and data.

Headings leverage deliberate weight variations (600–700) to impart an authoritative yet welcoming tone. Paragraph text keeps a minimum line height of 1.5x to preserve comfort across dense civic documentation, letters, and community articles. Form fields, metrics, and accreditation tags use `label-md` and `label-sm` with letter spacing slightly opened (+0.02em) to ensure immediate legibility at small scale.

## Layout & Spacing

A 12-column responsive fluid grid anchors all page assemblies, maintaining strict visual rhythm across device viewports:

- **Desktop (1024px+):** 12 columns, 24px (`1.5rem`) gutters, with outer canvas margins starting at 32px (`2rem`) up to a max-width container of 1280px.
- **Tablet (768px - 1023px):** 8 columns, 24px (`1.5rem`) gutters, 24px outer margins.
- **Mobile (320px - 767px):** 4 columns, 16px (`1rem`) gutters, 16px (`1rem`) outer canvas margins.

Sections transition using rhythmic alternating backgrounds (pure white `#FFFFFF` into soft light blue `#F3F7FC`), buffered vertically with `space-xl` (40px) or `3.5rem` on desktop. Card groupings and data lists rely on internal padding of `space-md` to `space-lg` to create a calm, uncrowded reading environment.

## Elevation & Depth

Visual hierarchy employs a hybrid strategy of **ambient shadows** and **crisp low-contrast outlines**:

- **Resting Surfaces:** Elevated elements utilize a dual-layer treatment consisting of a hairline border (`1px solid #E5EAF0`) coupled with an ultra-soft, diffused navy-tinted drop shadow (`0 2px 8px -2px rgba(11, 31, 58, 0.04), 0 4px 16px -4px rgba(11, 31, 58, 0.06)`).
- **Interactive / Hover Surfaces:** Cards, feature blocks, and raised components lift smoothly with an expanded shadow (`0 10px 24px -4px rgba(11, 31, 58, 0.08), 0 4px 12px -2px rgba(11, 31, 58, 0.04)`) and subtle border enrichment.
- **Overlays & Modals:** Deep floating state (`0 20px 40px -8px rgba(11, 31, 58, 0.16)`) accompanied by an ambient `#0B1F3A` backdrop with 60% opacity to preserve context without visual clutter.

## Shapes

The interface adheres to a **Rounded** contour model (Base: 8px / `0.5rem`).

- Standard inputs, buttons, and badges carry `0.5rem` (`rounded-md`).
- Content cards, community spotlight modules, and media containers use `1rem` (`rounded-lg`).
- Feature showcases and hero presentation blocks utilize `1.5rem` (`rounded-xl`).
- Status pills, tags, and micro-badges use full-radius pill silhouettes to soften high-density metadata displays.

## Components

- **Buttons:**
  - *Primary:* Filled Royal Blue (`#1456A0`), white text, 8px radius, with 12px 24px padding (`space-sm` to `space-md`). On hover, transitions to a deeper blue (`#0F4480`).
  - *Secondary:* Transparent background with a 1.5px solid border in Deep Navy (`#0B1F3A`), pairing with `#0B1F3A` typography.
  - *Honorary / Special Action:* Warm Gold background (`#D4A72C`) with Deep Navy text, reserved for donations and annual membership drives.
- **Cards:**
  - Constructed on pure white canvas (`#FFFFFF`) with a 1px border (`#E5EAF0`), 16px corner radius, and subtle ambient navy drop shadow. Ample internal padding (`1.5rem` to `2rem`) prevents content crowding.
- **Chips & Badges:**
  - Trust and compliance pills (e.g., "80G Certified", "Reg #F23778") use a soft gold background (`#FCF7EB`), Warm Gold text (`#997316`), and a 1px border in `#E8B928`.
  - General categorical tags use soft light blue (`#F3F7FC`) with `#1456A0` label text.
- **Form Controls (Inputs, Checkboxes, Radios):**
  - Inputs feature an off-white or white fill, 1px `#E5EAF0` border, 8px border radius, and a 2px Royal Blue (`#1456A0`) focus ring with zero outline offset.
  - Checkboxes and radios utilize `#1456A0` as the active fill, framing clear white check glyphs.
- **Lists & Timeline Connectors:**
  - Humanitarian milestones since 1995 are mapped through a vertical spine system using Deep Navy indicator nodes framed by Warm Gold halos.
- **Trust Headers & Footers:**
  - Global footer framed in Deep Navy (`#0B1F3A`) with gold divider accents, crisp white primary text, and muted blue (`#A0B3C9`) navigational links.