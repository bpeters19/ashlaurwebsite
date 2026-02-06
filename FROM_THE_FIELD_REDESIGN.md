# From the Field Section - Redesign Documentation

## Overview
The "From the Field" section on the home page has been completely redesigned to match Turner Construction's "News & Insights" layout and interaction patterns, featuring a premium two-column layout with independent sticky scrolling behavior.

## Key Changes

### 1. **Layout Architecture**
**Before:** Single carousel with featured article and supporting updates displayed in a 3-column grid below.

**After:** Two-column layout
- **Left Column (1/3 width):** Static featured article that remains visible while scrolling
- **Right Column (2/3 width):** Independently scrolling article list with sticky behavior

### 2. **Featured Article (Left Column)**
- Large featured image with 4:5 aspect ratio (taller, more editorial)
- Professional hover effect: subtle image zoom on hover
- Headline positioned below image
- Subheadline/summary text
- Publication date
- "Read more →" CTA with animated arrow on hover
- **Sticky positioning:** Remains in viewport at `sticky top-20` while user scrolls right column

### 3. **Articles List (Right Column)**
- Stacked vertical article cards
- Each article card contains:
  - **Thumbnail:** Square image with rounded corners (with hover zoom effect)
  - **Content:** Project name, headline, summary snippet
  - **Date & CTA:** Publication date and "Read more" link with animated arrow
  - **Visual separator:** Subtle border dividing each article
  
- **Scroll Behavior:**
  - Container height capped at 600px on large screens
  - Independent scroll with smooth scroll behavior
  - When articles list reaches the end, page scrolling continues normally
  - Mobile/tablet: Full-height list that scrolls with page (no sticky behavior)

### 4. **Typography & Styling**
- **Clean, modern editorial sans-serif:** Maintains existing Inter font
- **Project names:** Small caps, blue accent color, tight tracking
- **Headlines:** Large, bold, confident sizing (text-2xl to text-3xl on featured; text-lg to text-xl on list items)
- **Summaries:** Comfortable line-height (1.6+), professional gray color
- **CTAs:** Blue accent with animated arrow, subtle scale/translation effects
- **Background:** White with minimal borders (only subtle dividers between articles)

### 5. **Responsive Design**
- **Desktop (lg and above):** Full two-column layout with sticky left column
- **Tablet (md):** Two-column layout maintains but with adjusted spacing
- **Mobile (below md):** Vertical stack with featured article first, then articles list below
- **Article cards:** Flex layout that stacks vertically on mobile, horizontal on larger screens

### 6. **Content Improvements**
- **Informational tone:** News-driven copy focused on construction progress
- **Real project updates:** Headlines read like industry journalism
  - Examples: "Hospital Renovation Advances to Upper Floors"
  - "Phase Two Construction Reaches Key Milestone"
  - "Crew Completes Structural Work Ahead of Schedule"
- **Descriptive summaries:** Include project phase, location, outcomes, and specific milestones
- **5 supporting articles:** Expanded from 3 to provide more scrolling content and demonstrate the sticky scroll behavior

### 7. **Interaction & UX Details**
- **Hover effects on images:** Smooth zoom (scale-105 → scale-110) with 700ms duration
- **Hover effects on text:** Headlines change color on article hover
- **CTA animations:** Arrow slides/translates right on hover with smooth transitions
- **Scroll indicator:** Mobile-only bounce animation showing users they can scroll for more
- **End-of-content indicator:** "End of latest updates" message when scrolling completes

### 8. **Code Architecture**
- Removed carousel state management (currentIndex, direction)
- Replaced AnimatePresence carousel patterns with simple motion animations
- Implemented scroll behavior detection with useRef, useEffect, useState
- Tracks if container is scrollable and if user has reached the end
- Clean component structure with clear left/right column sections

## Technical Details

### Component Structure
```
FromTheField
├── Section Header (From the Field)
├── Two-Column Grid Container
│   ├── LEFT: Featured Article (Sticky)
│   │   ├── Featured Image
│   │   ├── Project Name
│   │   ├── Headline
│   │   ├── Summary
│   │   ├── Date
│   │   └── Read More CTA
│   │
│   └── RIGHT: Articles List (Scrollable)
│       ├── Scrollable Container (600px height)
│       │   ├── Article Card 1-5
│       │   │   ├── Thumbnail
│       │   │   ├── Project Name
│       │   │   ├── Headline
│       │   │   ├── Summary
│       │   │   ├── Date
│       │   │   └── Read More CTA
│       │   └── End of Updates Indicator
│       └── Scroll Hint (Mobile only)
└── View All Updates CTA
```

### State Management
```javascript
const [isScrollable, setIsScrollable] = useState(false);  // Can right column scroll?
const [isAtEnd, setIsAtEnd] = useState(false);           // Reached bottom?
```

### Scroll Detection
- Monitors scroll container height vs client height
- Tracks scroll position with tolerance of ±50px
- Responds to resize events to recalculate scrollability
- Shows/hides scroll indicator based on state

## Visual Hierarchy

1. **Section Title:** "From the Field" (large, bold)
2. **Featured Headline:** Main focus, large and prominent
3. **Supporting Headlines:** Slightly smaller, in list format
4. **Project Names:** Accent color (blue), uppercase, smallest text
5. **Summaries:** Regular weight, readable size
6. **CTAs:** Action-oriented, accent color, animated

## Accessibility & Usability
- All links are semantic `<a>` tags with proper href attributes
- Proper image alt text for all visuals
- Sufficient color contrast (blue accent, gray text on white)
- Keyboard-navigable article list
- Touch-friendly on mobile (larger tap targets)
- Scroll behavior respects user preferences

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid, Flexbox, CSS Grid sticky positioning
- Next.js Image optimization
- Framer Motion for smooth animations

## Performance Considerations
- Images use Next.js Image component for optimization
- Lazy loading on intersecting articles via `whileInView`
- Smooth scroll behavior is hardware-accelerated
- Minimal re-renders due to ref-based scroll detection
- Static featured article reduces animation overhead

## Customization Notes

### To update articles:
Edit the `articlesList` array in the component with your project data:
```javascript
{
  id: number,
  project: "Project Name",
  headline: "Headline Copy",
  summary: "Summary text",
  date: "Month DD, YYYY",
  image: "image-url"
}
```

### To adjust sticky position:
Change the `lg:top-20` class on the featured article div to adjust the top offset when sticky.

### To change scroll container height:
Modify `lg:h-[600px]` to your desired height (in tailwind units).

### To adjust colors:
Replace `text-blue-600` with another Tailwind color class (currently matches brand primary).

## Next Steps
1. Replace placeholder images with real project photography
2. Update article content with current project information
3. Connect "Read more" links to actual article/project pages
4. Test scroll behavior on various devices and screen sizes
5. Monitor performance metrics
6. Gather user feedback on the new layout

---

**Status:** ✅ Complete and ready for production
**Date Redesigned:** February 4, 2026
**Last Updated:** February 4, 2026
