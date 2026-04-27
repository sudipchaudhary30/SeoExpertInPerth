# 🎨 Design Brief - Color & Typography Reference

This document serves as a complete reference for the design implementation matching your original brief.

---

## 📋 Color Palette

### Primary Colors

| Name | Hex | RGB | Usage | Tailwind Class |
|------|-----|-----|-------|-----------------|
| Light Background | `#F0F2F5` | 240, 242, 245 | Page background | `bg-light-bg` |
| Cyan Accent | `#00D4D8` | 0, 212, 216 | Primary highlights, links, buttons | `text-cyan-accent`, `border-cyan-accent` |
| Cyan Dark | `#00A8B5` | 0, 168, 181 | Gradient secondary | `text-cyan-dark` |
| Blue Secondary | `#2979FF` | 41, 121, 255 | Gradient accent, secondary text | `text-blue-secondary` |
| Blue Blob | `#1565C0` | 21, 101, 192 | Decorative elements | `text-blue-blob` |

### Text Colors

| Name | Hex | RGB | Usage | Tailwind Class |
|------|-----|-----|-------|-----------------|
| Heading Text | `#1A1A2E` | 26, 26, 46 | All headings, bold text | `text-heading-text` |
| Body Text | `#555570` | 85, 85, 112 | Paragraphs, body content | `text-body-text` |
| Button Background | `#2E3A4E` | 46, 58, 78 | Buttons, dark elements | `bg-button-bg` |

---

## 🔠 Typography System

### Font Families

| Font | Weight | Usage | Size Range | Google Fonts Link |
|------|--------|-------|------------|-------------------|
| **Montserrat** | 500, 600, 700, 800 | Headings, logo, nav, buttons | 18px - 64px | [Link](https://fonts.google.com/specimen/Montserrat) |
| **Inter** | 400, 500, 600 | Body text, descriptions | 14px - 20px | [Link](https://fonts.google.com/specimen/Inter) |
| **Lato** | 300, 400 | Accent text (greeting) | 12px - 16px | [Link](https://fonts.google.com/specimen/Lato) |

### Typography Hierarchy

```
H1 (Hero)        Montserrat ExtraBold (800) - 48-64px - text-heading-text
H2 (Sections)    Montserrat Bold (700) - 36-48px - text-heading-text
H3 (Subsections) Montserrat Bold (700) - 24-32px - text-heading-text
Body             Inter Regular (400) - 14-18px - text-body-text
Accent           Lato Light (300) - 12-16px - text-body-text italic
Buttons          Montserrat Semibold (600) - 14-16px - uppercase
```

---

## 🎨 Gradient Definitions

### Gradient: Cyan to Blue
Used for: Hero headline highlights, technology badges, decorative elements

```css
background: linear-gradient(135deg, #00D4D8 0%, #2979FF 100%);
```

**Tailwind Usage:**
```tailwind
bg-gradient-to-br from-cyan-accent to-blue-secondary
```

### Gradient: Blue to Cyan (Reverse)
Used for: Blob decorations, bottom accents

```css
background: linear-gradient(135deg, #1565C0 0%, #00D4D8 100%);
```

**Tailwind Usage:**
```tailwind
bg-gradient-to-br from-blue-blob to-cyan-accent
```

---

## 🫧 Decorative Elements

### Blob Shapes (CSS-Generated, No Images)

Three organic blob shapes in the Hero section:

```css
/* Top-center blob - Teal circle */
border-radius: 50%;
background: linear-gradient(to bottom-right, #00D4D8, #00A8B5);
opacity: 0.2;

/* Right blob - Painterly splash */
border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
background: linear-gradient(to bottom-left, #1565C0, #00D4D8);
opacity: 0.3;

/* Left blob - Partial circle */
border-radius: 50%;
background: linear-gradient(to top-right, #2979FF, #00D4D8);
opacity: 0.15;
```

---

## ✨ Animation Specifications

### Cursor Blink
- **Element**: After "Designer" text in Hero
- **Duration**: 1 second
- **Pattern**: 50% on, 50% off
- **Color**: `#00D4D8` (cyan-accent)
- **Character**: `|` (pipe symbol)

```css
@keyframes cursor-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
animation: cursor-blink 1s infinite;
```

### Float Animation (Blobs)
- **Duration**: 6 seconds per blob
- **Delays**: 0s, 2s, 4s (staggered)
- **Movement**: Vertical float ±30px + subtle rotate
- **Easing**: ease-in-out

```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(2deg); }
}
animation: float 6s ease-in-out infinite;
```

### Page Load Fade-In
- **Duration**: 0.5 seconds
- **Effect**: Fade in + slide up 10px

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 🔘 Component Styling

### Buttons

**Primary Button** (Get My Resume)
```css
Background: #2E3A4E
Text: White
Border: None
Padding: 12px 32px
Border-radius: 8px
Font: Montserrat Semibold
Hover: Cyan border (2px) + subtle shadow
```

**Secondary Button** (Book Talent)
```css
Background: Transparent
Border: 2px #2E3A4E
Text: #2E3A4E
Border-radius: 8px
Font: Montserrat Semibold
Hover: Fill with dark bg, white text
```

### Form Inputs

```css
Background: White
Border: 2px #D1D5DB (gray-300)
Border-radius: 8px
Padding: 12px 16px
Font: Inter Regular
Focus: Border becomes #00D4D8 (cyan-accent)
Placeholder: #555570 (body-text)
```

### Cards (Portfolio, Blog)

```css
Background: White
Border: 1px #D1D5DB (gray-300)
Border-radius: 8px
Padding: 24px
Box-shadow: None (flat)
Hover: Border becomes #00D4D8, shadow adds
Transition: 300ms ease-in-out
```

---

## 📐 Layout Specifications

### Hero Section Layout
```
┌─────────────────────────────────────────┐
│              HEADER/NAV                 │
├─────────────────────────────────────────┤
│  ┌─ 40% ─┬────── 60% ──────┐           │
│  │ TEXT  │  PHOTO + BLOBS   │           │
│  │ + BTN │  (Right aligned) │           │
│  │       │                  │           │
│  └───────┴──────────────────┘           │
└─────────────────────────────────────────┘
```

### Responsive Breakpoints
- **Mobile**: < 768px (full width, stacked)
- **Tablet**: 768px - 1024px (2-column)
- **Desktop**: > 1024px (3-column portfolio)

---

## 🎯 Implementation Checklist

### Colors ✅
- [x] Light gray background (#F0F2F5)
- [x] Cyan accent primary (#00D4D8)
- [x] Blue secondary (#2979FF)
- [x] Dark text (#1A1A2E)
- [x] Muted text (#555570)
- [x] Dark buttons (#2E3A4E)

### Typography ✅
- [x] Montserrat for headings
- [x] Inter for body
- [x] Lato for accents
- [x] All imported from Google Fonts
- [x] Proper font weights applied

### Components ✅
- [x] Header with centered nav
- [x] Hero with blobs + cursor
- [x] Bio section with light theme
- [x] Portfolio with gradient badges
- [x] Contact form with cyan focus
- [x] Footer with cyan links

### Animations ✅
- [x] Cursor blink (1s)
- [x] Blob float (6s staggered)
- [x] Page fade-in (0.5s)
- [x] Hover effects (300ms)

### Responsive ✅
- [x] Mobile-first approach
- [x] All breakpoints tested
- [x] Touch-friendly buttons
- [x] Readable on all screens

---

## 📚 Related Files

- `DESIGN_IMPLEMENTATION_COMPLETE.md` - Full implementation details
- `DESIGN_TEST_GUIDE.md` - How to test locally
- `tailwind.config.ts` - Custom color definitions
- `src/styles/globals.css` - Animations & theme
- All component files in `src/components/`

---

## 🎨 Color Swatches (For Reference)

```
┌──────────────────────────────────────┐
│ Background: #F0F2F5 (Soft Gray)      │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Primary: #00D4D8 (Bright Cyan)       │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Secondary: #2979FF (Electric Blue)   │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Heading: #1A1A2E (Charcoal)          │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Body: #555570 (Muted Gray)           │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Button: #2E3A4E (Dark Slate)         │
└──────────────────────────────────────┘
```

---

**Design Brief Status**: ✅ FULLY IMPLEMENTED  
**Ready for**: Testing → Deployment  
**Last Updated**: 2024  
