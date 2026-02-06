# From the Field Section - Visual Design Summary

## Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    From the Field                            │
│                 (Section Header)                             │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────────────────────┐
│   LEFT COLUMN        │      RIGHT COLUMN                     │
│   (1/3 width)        │      (2/3 width)                      │
│   STICKY             │      SCROLLABLE                       │
├──────────────────────┼──────────────────────────────────────┤
│                      │                                       │
│  ┌────────────────┐  │  ┌─────────────────────────────────┐ │
│  │                │  │  │  Article 1                      │ │
│  │   Featured     │  │  │  ┌──────┐  Headline            │ │
│  │   Image        │  │  │  │Thumb │  Summary             │ │
│  │   (4:5)        │  │  │  │      │  Date | Read more    │ │
│  │                │  │  │  └──────┘                       │ │
│  │  [Hover Zoom]  │  │  └─────────────────────────────────┘ │
│  └────────────────┘  │                                       │
│                      │  ┌─────────────────────────────────┐ │
│  Project Name        │  │  Article 2                      │ │
│  Headline            │  │  ┌──────┐  Headline            │ │
│                      │  │  │Thumb │  Summary             │ │
│  Summary             │  │  │      │  Date | Read more    │ │
│  Paragraph           │  │  └──────┘                       │ │
│                      │  └─────────────────────────────────┘ │
│  Date                │                                       │
│  [Read more →]       │  ┌─────────────────────────────────┐ │
│  [Arrow animates]    │  │  Article 3                      │ │
│                      │  │  ┌──────┐  Headline            │ │
│                      │  │  │Thumb │  Summary             │ │
│                      │  │  │      │  Date | Read more    │ │
│                      │  │  └──────┘                       │ │
│                      │  └─────────────────────────────────┘ │
│                      │                                       │
│                      │  [Scroll ↓ for more articles]       │
│                      │                                       │
└──────────────────────┴──────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              [View all updates →]                            │
│                  (CTA Link)                                  │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
On screens < lg (1024px):

┌──────────────────────────────────────┐
│     From the Field                   │
│   (Section Header)                   │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  Featured Image (4:5)                │
│  ┌──────────────────────────────────┐│
│  │                                   ││
│  │                                   ││
│  │        [FEATURED IMAGE]           ││
│  │                                   ││
│  │                                   ││
│  └──────────────────────────────────┘│
│                                       │
│  Project Name                         │
│  Featured Headline                    │
│  Featured Summary Text                │
│  Date                                 │
│  [Read more →]                        │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│                                       │
│  Article 1                            │
│  ┌────────────────────────────────┐  │
│  │      Image Thumbnail (Square)  │  │
│  └────────────────────────────────┘  │
│  Headline                             │
│  Summary snippet                      │
│  Date | [Read more]                  │
│                                       │
├──────────────────────────────────────┤
│  Article 2                            │
│  ┌────────────────────────────────┐  │
│  │      Image Thumbnail (Square)  │  │
│  └────────────────────────────────┘  │
│  Headline                             │
│  Summary snippet                      │
│  Date | [Read more]                  │
│                                       │
└──────────────────────────────────────┘

[Scroll indicator showing ⬇]

┌──────────────────────────────────────┐
│   [View all updates →]               │
│       (CTA Link)                     │
└──────────────────────────────────────┘
```

## Typography Scale

```
Section Header (h2)
├─ Desktop:  text-5xl (3rem / 48px)  |  font-bold  |  line-height: 1.2
└─ Mobile:   text-4xl (2.25rem / 36px) |  font-bold  |  line-height: 1.2

Featured Headline (h3)
├─ Desktop:  text-3xl (1.875rem / 30px) |  font-bold  |  line-height: 1.25
└─ Mobile:   text-2xl (1.5rem / 24px)   |  font-bold  |  line-height: 1.25

Article Headline (h4)
├─ Desktop:  text-xl (1.25rem / 20px)  |  font-bold  |  line-height: 1.25
└─ Mobile:   text-lg (1.125rem / 18px) |  font-bold  |  line-height: 1.25

Body/Summary Text
├─ Featured:  text-base (1rem / 16px)  |  font-normal |  line-height: 1.6
└─ Articles:  text-sm (0.875rem / 14px) |  font-normal |  line-height: 1.6

Project Name / Labels
├─ text-xs (0.75rem / 12px)  |  font-semibold  |  uppercase  |  tracking: 0.1em

Date / Metadata
├─ text-xs (0.75rem / 12px)  |  font-medium  |  color: gray-500
```

## Color Palette

```
Primary Accent:
└─ Blue:  #2563EB  (text-blue-600)
   └─ Used for: Project names, Headlines on hover, CTA links, Emphasis

Background:
└─ White:  #FFFFFF  (bg-white)

Text Colors:
├─ Headline:   #1A1A1A  (text-gray-900)  - Confident, high contrast
├─ Body:       #4B5563  (text-gray-700)  - Readable, warm
├─ Muted:      #64748B  (text-gray-600)  - Secondary info
└─ Disabled:   #9CA3AF  (text-gray-500)  - Dates, metadata

Borders & Dividers:
├─ Light:      #E5E7EB  (border-gray-200)  - Article separators
└─ Subtle:     #F3F4F6  (border-gray-100)  - Internal dividers

Hover States:
├─ Image:      Scale 1.05 (featured) / 1.10 (articles)  - Subtle zoom
├─ Text:       Change to blue-600 on article hover
└─ Link:       Arrow slides right on hover
```

## Spacing & Sizing

```
Section Padding:
├─ Vertical:   py-20 (5rem) | lg:py-32 (8rem)
└─ Horizontal: px-4 sm:px-6 lg:px-8

Column Gap:
├─ Mobile:  gap-8 (2rem)
└─ Desktop: lg:gap-16 (4rem)

Featured Image:
├─ Aspect Ratio:  4/5 (portrait)
├─ Rounded:       rounded-lg
└─ Margin Below:  mb-8 (2rem)

Featured Content:
├─ Project Label: mb-3 (0.75rem)
├─ Headline:      mb-4 (1rem)
├─ Summary:       mb-8 (2rem)
└─ Date:          mb-6 (1.5rem)

Article Card:
├─ Padding:       pb-8 (2rem)
├─ Border Below:  border-b border-gray-200
├─ Image Width:   sm:w-32 (8rem) thumbnail
└─ Gap:           gap-6 (1.5rem) between thumb & content

Article List:
├─ Container Height:  lg:h-[600px]
├─ Gap Between:       gap-8 lg:gap-12
├─ Overflow:          lg:overflow-y-scroll
└─ Padding Right:     lg:pr-6 (scrollbar space)
```

## Interactive Elements

```
"Read more →" Links
├─ Color:           text-blue-600
├─ Font Weight:     font-medium
├─ Normal State:    gap-2 (8px between text & arrow)
├─ Hover State:     gap-3 (12px) - arrow slides away
├─ Arrow Icon:      w-4 h-4 | w-3.5 h-3.5 (smaller in articles)
└─ Transition:      duration-300 | ease-out

Image Hover Effects
├─ Featured Image:  scale-105 (5% zoom)
├─ Article Thumb:   scale-110 (10% zoom)
├─ Duration:        duration-700
└─ Easing:          ease-out | ease-in-out

Article Card Hover
├─ Headline Color:  Changes to text-blue-600
├─ Shadow:          Subtle shadow-lg on thumbnail
└─ Duration:        duration-300

Section Intro Animations
├─ Type:            Fade + Slide Up
├─ Duration:        0.8s
└─ Trigger:         On scroll into view (whileInView)
```

## Responsive Breakpoints

```
Mobile First (< 640px)
├─ Layout:        Single column stack
├─ Featured:      Full width
├─ Articles:      Full width, scroll with page
├─ Sticky:        Disabled
└─ Text Size:     Base sizes

Tablet (640px - 1024px)
├─ Layout:        Two columns (grid: grid-cols-1 lg:grid-cols-3)
├─ Featured:      1/3 width
├─ Articles:      2/3 width
├─ Sticky:        Enabled
└─ Text Size:     Slightly larger

Desktop (1024px+)
├─ Layout:        Full two-column layout
├─ Featured:      Sticky at top-20
├─ Articles:      Independent scroll container
├─ Max Width:     7xl (80rem)
└─ Text Size:     Largest sizes
```

## Animation Timeline

```
Page Load / Scroll into View:
│
├─ 0ms:    Section fades in from below
│
├─ 200ms:  Featured image fades in
│
├─ 400ms:  Articles list fades in (staggered)
│          - Article 1: 200ms delay
│          - Article 2: 250ms delay
│          - Article 3: 300ms delay
│          - etc.
│
└─ 800ms+: Animations complete, interactive elements ready

On Hover / Interaction:
│
├─ 0ms:    User hovers image
├─ 300-700ms: Image scales smoothly
│
├─ 0ms:    User hovers link
├─ 300ms:  Arrow slides right
│
└─ On scroll: Continuous scroll feedback
```

## Accessibility Features

```
✓ Semantic HTML:       All links are <a> tags
✓ Image Alt Text:      All images have descriptive alt text
✓ Color Contrast:      WCAG AA compliant (blue on white)
✓ Focus States:        Interactive elements have visible focus
✓ Keyboard Nav:        All elements keyboard accessible
✓ Font Sizing:         Relative units (rem) not fixed px
✓ Line Height:         Comfortable reading (1.6+)
✓ Touch Targets:       Mobile links 44px+ minimum
✓ Scroll Indicator:    Visual feedback for scrollable content
└─ Responsive:         Works on all screen sizes
```

## Design Principles

1. **Editorial**: News-driven, journalism-like presentation
2. **Premium**: Generous spacing, high-quality images, smooth interactions
3. **Focused**: Featured article stays visible (sticky) while exploring others
4. **Responsive**: Adapts gracefully from mobile to desktop
5. **Accessible**: Clear hierarchy, readable text, keyboard friendly
6. **Performant**: Smooth animations, optimized images, minimal jank
7. **Subtle**: Understated hover effects, no harsh transitions
8. **Professional**: Construction industry tone and content

---

**Design Version:** 1.0
**Created:** February 4, 2026
**Status:** ✅ Complete & Production Ready
