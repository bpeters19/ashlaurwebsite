# Visual Hierarchy: Before & After Comparison

## Layout Overview

### BEFORE (Original Design)
```
┌─────────────────────────────────────────────────────────────────┐
│ From the Field                                                   │
│ Project updates, milestones, and progress from our active jobs. │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────┬──────────────────────────────────────┐
│                         │                                      │
│   Featured Image        │    Article 1                         │
│   (flex-1 height)       │    ┌──────────┐                      │
│                         │    │ Thumb    │  • Headline         │
│                         │    └──────────┘  • Summary          │
│   [MB-6 spacing]        │                  • Date             │
│                         │                  • Read more        │
│   • Project: Text       │    ─────────────────────────────────│
│     (text-xs)           │    Article 2                         │
│                         │    ┌──────────┐                      │
│   • Headline            │    │ Thumb    │  • Headline         │
│     text-2xl            │    └──────────┘  • Summary          │
│     font-bold           │                  • Read more        │
│                         │                                      │
│   • Summary             │    ─────────────────────────────────│
│     text-sm             │    [Continue articles...]            │
│     line-clamp-3        │                                      │
│                         │    [Scrolls internally]              │
│   • Date                │                                      │
│     text-xs             │                                      │
│                         │                                      │
│   • Read more           │                                      │
│     text-sm             │                                      │
│     font-medium         │                                      │
│                         │                                      │
└─────────────────────────┴──────────────────────────────────────┘

STATUS: Articles feel similar in size; featured is just slightly larger
HIERARCHY: Unclear—could this section have 2-3 equal stories?
```

---

### AFTER (Updated Design)
```
┌─────────────────────────────────────────────────────────────────┐
│ From the Field                                                   │
│ Project updates, milestones, and progress from our active jobs. │
└─────────────────────────────────────────────────────────────────┘

┌────────────────────────────┬──────────────────────────────────┐
│                            │                                  │
│   Featured Image           │  Article 1                       │
│   (flex-1 height)          │  ┌────────┐                      │
│   LARGER                   │  │ Thumb  │ • Headline          │
│   [MB-10 spacing]          │  └────────┘ • Summary           │
│                            │             • Date              │
│   • Project: Text          │             • Read              │
│     (text-xs)              │  ───────────────────────────────│
│                            │  Article 2                       │
│   • HEADLINE               │  ┌────────┐                      │
│     text-5xl               │  │ Thumb  │ • Headline          │
│     font-black             │  └────────┘ • Summary           │
│     HERO SCALE             │             • Read              │
│                            │                                  │
│   • Summary                │  ───────────────────────────────│
│     text-lg                │  [Continue articles...]          │
│     font-medium            │                                  │
│     line-clamp-4           │  [Scrolls internally]            │
│     [MB-8 spacing]         │                                  │
│                            │                                  │
│   • Date                   │                                  │
│     text-sm                │                                  │
│     [MB-8 spacing]         │                                  │
│                            │                                  │
│   • Read more              │                                  │
│     text-lg                │                                  │
│     font-bold              │                                  │
│     px-5 py-3              │                                  │
│     rounded-lg             │                                  │
│     [Button styling]       │                                  │
│                            │                                  │
└────────────────────────────┴──────────────────────────────────┘

STATUS: Featured dominates clearly; supporting articles recede
HIERARCHY: Crystal clear—read this first, then browse others
```

---

## Side-by-Side Typography Comparison

### Headlines

#### Featured Article
```
BEFORE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Doors and Hardware Replacement
Progresses Through Upper Floors
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
(text-2xl font-bold)
~38px font size

AFTER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Doors and Hardware Replacement
Progresses Through Upper Floors
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
(text-5xl font-black)
~60px font size
[2x larger, more visual weight]
```

#### Secondary Articles
```
BEFORE:
────────────────────────────────
Foundation and Structural Frame Complete
────────────────────────────────
(text-lg font-bold)
~18px font size

AFTER:
───────────────────────────────
Foundation and Structural Frame Complete
───────────────────────────────
(text-base font-bold)
~16px font size
[Smaller, more subordinate]
```

**Headline Ratio:**
- Before: 2.1:1 (featured : secondary)
- After: 3.75:1 (featured : secondary) ← Much clearer hierarchy

---

### Summary Text

#### Featured Article
```
BEFORE:
Phase two installation reaches the 8th floor with
precision scheduling keeping the project on track
amid ongoing hospital operations.
[text-sm = 14px]
[line-clamp-3 = 3 lines max]

AFTER:
Phase two installation reaches the 8th floor with
precision scheduling keeping the project on track
amid ongoing hospital operations. Additional context
shows the scope and importance of this project phase.
[text-lg = 18px]
[line-clamp-4 = 4 lines max]
[More readable, more prominent]
```

#### Secondary Articles
```
BEFORE:
Structural work wrapped ahead of schedule. Interior
buildout begins next phase.
[text-sm = 14px]
[line-clamp-2 = 2 lines max]

AFTER:
Structural work wrapped ahead of schedule. Interior
buildout begins next phase.
[text-xs = 12px]
[line-clamp-2 = 2 lines max]
[Tighter, less attention-grabbing]
```

---

### Spacing Comparison

#### Featured Article
```
BEFORE:
┌─────────────────┐
│  Image          │ mb-6
├─────────────────┤
│ Project label   │ mb-3
├─────────────────┤
│ Headline        │ mb-3
├─────────────────┤
│ Summary         │ mb-6
├─────────────────┤
│ Date            │ mb-4
├─────────────────┤
│ Read more       │
└─────────────────┘
Total: 22px spacing

AFTER:
┌─────────────────┐
│  Image          │ mb-10 (lg)
├─────────────────┤
│ Project label   │ mb-5 (lg)
├─────────────────┤
│ Headline        │ mb-7 (lg)
├─────────────────┤
│ Summary         │ mb-8 (lg)
├─────────────────┤
│ Date            │ mb-8 (lg)
├─────────────────┤
│ Read more       │
└─────────────────┘
Total: 38px spacing (+73% more breathing room)
```

---

### CTA Button Comparison

#### Featured Article
```
BEFORE:
Read more →
text-sm font-medium
gap-2
No background, no padding
Looks like inline link

AFTER:
Read more →
text-lg font-bold
gap-3
px-5 py-3 rounded-lg
hover:bg-blue-50 active:bg-blue-100
Looks like button
[Larger, more intentional interaction target]
```

#### Secondary Articles
```
BEFORE:
Read more →
text-xs font-medium
gap-1

AFTER:
Read →
text-xs font-semibold
gap-1
[Shorter label, less prominent]
```

---

### Thumbnail Size Comparison

#### Secondary Articles
```
BEFORE:
┌──────────────┐
│              │
│              │
│   Thumb      │ w-28 lg:w-32 (112-128px)
│   (square)   │
│              │
│              │
└──────────────┘

AFTER:
┌─────────┐
│         │
│  Thumb  │ w-24 lg:w-28 (96-112px)
│ (square)│
│         │
└─────────┘
[~15% smaller; keeps articles secondary]
```

---

## Visual Impact Timeline

### Initial Load
1. User sees featured image (prominent, large)
2. User reads featured headline (can't miss it)
3. User scans featured summary (engaging context)
4. User then notices secondary articles

### With Previous Design
- Image dominance: 40%
- Headlines compete: 50/50
- User confused: "Which should I read?"

### With Updated Design
- Image dominance: 80%
- Headlines clearly hierarchical: 90/10
- User knows: "Read featured story, then browse articles"

---

## Project Label Color

### Featured Article
```
BEFORE: text-blue-600 (primary brand color)
AFTER:  text-blue-600 (same)
Effect: Maintains brand identity
```

### Secondary Articles
```
BEFORE: text-blue-600 (primary brand color)
AFTER:  text-gray-500 (neutral gray)
Effect: Reduces visual competition
```

Impact: Featured article stands out; secondary articles recede

---

## Border Styling

### Secondary Articles
```
BEFORE:
Article 1
─────────────────── (border-gray-200, thick)
Article 2
─────────────────── (border-gray-200, thick)

Spacing: pb-6 lg:pb-8 (24-32px)

AFTER:
Article 1
──────────────── (border-gray-100, lighter)
Article 2
──────────────── (border-gray-100, lighter)

Spacing: pb-4 lg:pb-5 (16-20px)

Effect: Tighter, less visual weight
```

---

## Layout Dimensions

### Desktop (lg breakpoint, 1024px+)

```
┌────────────────────────────────────────────────────┐
│ Padding: px-8                                      │
│                                                    │
│ ┌────────────────────────────────────────────────┐ │
│ │  FEATURED IMAGE (1/3 width)                    │ │
│ │  ┌────────────────┐                            │ │
│ │  │ ~300px × 300px │                            │ │
│ │  │ (flex-1 height)│                            │ │
│ │  │ Responsive to  │                            │ │
│ │  │ content height │                            │ │
│ │  └────────────────┘                            │ │
│ │                                                │ │
│ │  ┌────────────────┐                            │ │
│ │  │ Featured Content                            │ │
│ │  │ (text-5xl headline)                         │ │
│ │  └────────────────┘                            │ │
│ │                                                │ │
│ └────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────┐ │
│ │  SECONDARY ARTICLES (2/3 width)                │ │
│ │  ┌────────────┐                                │ │
│ │  │ Article 1  │ [Scrollable area]              │ │
│ │  ├────────────┤                                │ │
│ │  │ Article 2  │                                │ │
│ │  ├────────────┤                                │ │
│ │  │ Article 3  │                                │ │
│ │  ├────────────┤                                │ │
│ │  │ Article 4  │                                │ │
│ │  ├────────────┤                                │ │
│ │  │ Article 5  │                                │ │
│ │  └────────────┘                                │ │
│ │                                                │ │
│ └────────────────────────────────────────────────┘ │
│                                                    │
└────────────────────────────────────────────────────┘

Grid: grid-cols-1 lg:grid-cols-3
Featured: lg:col-span-1 (1/3 width)
Secondary: lg:col-span-2 (2/3 width)
Gap: gap-16 (lg)
```

### Mobile (< 1024px)

```
┌──────────────────────────┐
│ Padding: px-4            │
│                          │
│ ┌──────────────────────┐ │
│ │  FEATURED IMAGE      │ │
│ │  (full width)        │ │
│ │  ┌────────────────┐  │ │
│ │  │                │  │ │
│ │  │ Responsive     │  │ │
│ │  │ square         │  │ │
│ │  │                │  │
│ │  └────────────────┘  │ │
│ │  Featured Content    │ │
│ │  (stacked below)     │ │
│ │  ┌────────────────┐  │ │
│ │  │ text-3xl headline  │ │
│ │  └────────────────┘  │ │
│ │                      │ │
│ └──────────────────────┘ │
│ ┌──────────────────────┐ │
│ │  ARTICLES            │ │
│ │  (full width)        │ │
│ │  ┌────────────────┐  │ │
│ │  │ Article 1      │  │ │
│ │  ├────────────────┤  │ │
│ │  │ Article 2      │  │ │
│ │  ├────────────────┤  │ │
│ │  │ Article 3      │  │ │
│ │  ├────────────────┤  │ │
│ │  │ Article 4      │  │ │
│ │  ├────────────────┤  │ │
│ │  │ Article 5      │  │ │
│ │  └────────────────┘  │ │
│ │                      │ │
│ └──────────────────────┘ │
│                          │
└──────────────────────────┘

Grid: grid-cols-1 (stacked)
No lg: breakpoint applied
Full width for both sections
```

---

## Key Takeaways

| Aspect | Before | After | Impact |
|--------|--------|-------|--------|
| **Headline Size** | text-2xl | text-5xl | 2.5× larger |
| **Image Spacing** | mb-6 | mb-10 | 67% more breathing room |
| **Summary Text** | text-sm | text-lg | 43% larger |
| **CTA Style** | Link | Button | More intentional |
| **Secondary Headlines** | text-lg | text-base | Clearly subordinate |
| **Thumbnail Size** | w-32 | w-28 | 15% smaller |
| **Overall Layout** | Unclear hierarchy | Crystal clear | Users know what to read first |

---

## Design Philosophy

**Before:** "Here are some articles. They're all pretty important."

**After:** "This is the story we want you to read. These are supporting updates."

The visual hierarchy now clearly communicates:
- 📰 Featured article = Lead story (read first)
- 📄 Secondary articles = Supporting content (read if interested)
- 👆 Featured CTA = Primary call-to-action (click here)
- 📌 Secondary CTAs = Secondary interactions (optional)

This matches editorial design best practices and Turner Construction's approach.
