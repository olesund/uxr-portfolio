# Instagram Reels Video Editor Research - Slide Deck Export

> **Export Date:** January 2025  
> **Author:** Erik Olesund, Lead UX Researcher  
> **Purpose:** Complete specification for rebuilding this presentation as a slide deck

---

## Design System

### Color Palette (HSL Values)

```css
/* Light Mode - Warm Neutral Theme */
--background: 40 33% 97%        /* Warm cream background #FAF8F5 */
--foreground: 220 20% 15%       /* Charcoal text */
--card: 40 30% 99%              /* Slightly lighter cream */
--primary: 15 60% 50%           /* Terracotta/rust accent */
--primary-foreground: 40 30% 99%
--secondary: 30 15% 92%         /* Warm gray */
--muted: 30 15% 94%             /* Muted warm tone */
--muted-foreground: 220 10% 45% /* Muted text */
--accent: 15 50% 95%            /* Light terracotta */
--accent-foreground: 15 60% 40%
--border: 30 20% 88%

/* Dark Slides (The Pivot & Lessons Learned) */
--dark-bg: 220 10% 20%          /* Charcoal background */
--dark-card: 220 10% 28%        /* Slightly lighter charcoal */
--dark-text: 40 30% 95%         /* Cream text */
--dark-muted: 40 30% 85%        /* Muted cream */
--dark-accent: 25 70% 55%       /* Warm terracotta accent */
```

### Typography

- **Font Family:** Inter (Google Fonts)
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Section Headers:** Uppercase, small text, letter-spacing wider, primary color
- **Headings:** Semibold, foreground color
- **Body:** Regular weight, muted-foreground color
- **Leading:** Relaxed line-height for readability

### Visual Style

- **Corners:** Highly rounded (rounded-2xl / 1rem radius)
- **Cards:** Subtle muted backgrounds with generous padding
- **Accent Boxes:** Light terracotta background (accent/50)
- **Dark Slides:** Use charcoal background with cream text
- **Shadows:** Warm-toned, subtle shadows
- **Borders:** Left border accent (border-l-4 border-primary) for callout boxes

---

## Slide Content

---

### SLIDE 0: Title

**Type:** Hero/Title Slide  
**Background:** Subtle gradient from background to primary/5

**Content:**
```
# Instagram Reels Video Editor Research

Three phases of mixed-methods research that led to a major redesign of Instagram's video editor

---
Erik Olesund, Lead UX Researcher
```

**Interactions:**
- Password-protected entry (password gate before viewing rest of presentation)
- "Start Reading" button to scroll to first content slide

---

### SLIDE 1: Introduction

**Header Label:** INTRODUCTION

**Layout:** 60/40 grid - text left, image right

**Content:**
```
I'm Erik – a UX researcher with 10+ years driving product decisions through fast-moving research. I combine strong data analysis skills with deep expertise in understanding what users need. I'm an enthusiastic early adopter of AI and thrilled about the possibility of joining Lovable.

I'm currently at The New York Times, but today I'm sharing a case study from my time at Instagram that's particularly relevant to this role.

*Due to confidentiality, I can't share real documents or data—instead I'll provide reconstructed examples.*
```

**Visual Element:**
- Circular/rounded headshot photo (erik-headshot.png)
- 48x48 to 56x56 size, object-contain

---

### SLIDE 2: Problem + Key Constraints

**Header Label:** PROBLEM + KEY CONSTRAINTS

**Content:**

**Business Context:**
```
Instagram Reels had recently launched as the company's top priority. But we faced a critical problem: a lot of users were watching our short-form videos, but we didn't have enough creators making them! Demand outpaced supply! If viewers couldn't find enough entertaining videos, we worried that they'd stop using Reels altogether and visit TikTok instead.
```

**Accent Cards:**
| Label | Content |
|-------|---------|
| Business Goal | Increase the production of short-form videos. |
| Core Question | How do we make it easier for users to make short-form videos on Instagram? |

**Scope Note (smaller, centered):**
```
Another team focused on motivating people to make videos. My team focused on making the process easier.
```

**Team Info Card (3-column grid):**
| My Role | Team | Stakeholders |
|---------|------|--------------|
| Lead UX Researcher | Cross-functional | Senior Leadership |
| Designed, ran, and presented all research | Product Manager, Product Designer, Data Scientist, iOS Engineer | Including the Head of Instagram |

---

### SLIDE 3: Research Overview

**Header Label:** RESEARCH OVERVIEW

**Content:**

**Intro:**
```
## A Three-Phase Research Strategy

This started as a small study with 20 creators but grew to include two larger projects. Each phase built on the previous, moving from exploration to experimentation.
```

**Phase Cards:**

| Phase | Type | Title | Description |
|-------|------|-------|-------------|
| 01 | Qualitative | Online Community of Reels Creators | Talked to 20 Reels creators. Discovered they were using third-party apps (like CapCut) instead of Instagram to edit their videos. |
| 02 | Quantitative | Large-Scale Video Content Analysis | Analyzed 2,000 videos to identify what makes videos successful. Found that high-quality videos use multiple clips synced to music with text overlaid. |
| 03 | Experimental | Usability Testing Experiment | Tested which editor design works best for simple vs. complex videos. Proved that different designs work better for different video types; more complex videos require a more advanced editor. |

---

### SLIDE 4: Phase 1 - Online Community of Reels Creators

**Header Label:** PHASE 1: ONLINE COMMUNITY OF REELS CREATORS

**Structure:** Objective → Methodology → Data Collection → Data Analysis → Key Finding → Recommendation

**Objective:**
```
Understand why some small-scale creators were seeing initial success with their Reels (to see if we can help more users adopt similar tactics). Test new editing features to see which tools creators find most useful.
```

**Methodology Card (2x2 grid):**
| Field | Value |
|-------|-------|
| Method | Online Community Research |
| Duration | Six Weeks |
| Sample | 20 Non-Professional Reels Creators |
| Criteria | US, 18-35, 10+ Reels, 1,000+ views |

**Data Collection:**
```
Over the course of six weeks 20 Reels creators were part of a private Facebook group. Three days a week I would ask them to complete a different activity. Examples included:
• Testing prototypes of new features and giving feedback the same day
• Rating entertainment value of example videos created by our new features
• Sharing creative process in 1-on-1 interviews with me
• Discussing with one another and sharing tips and tricks for video creation

Because the study ran for six weeks I had the opportunity to observe many real-life moments of short-form video creations; more revealing than the sometimes artificial feedback received during one-off research sessions.
```

**Data Analysis:**
```
Throughout the six weeks I was analyzing the data (Facebook posts, videos that the creators made and posted, notes from interviews) in real time and informed several smaller feature launches. At the end of the study we reviewed all data again to look for patterns and this is where our greatest insight emerged.
```

**Key Finding Card (accent background):**
```
Most creators actively avoided Instagram's native editor for actual video creation. Instead, they used third-party apps (like CapCut), then uploaded finished videos to Instagram.

• Creators preferred "stacked timeline" editors where video, audio, and text layers are all visible at once on a single screen. Instagram's step-by-step flow forced them to edit video on one screen, then switch to separate screens for audio, text, and effects—constantly jumping back and forth to line things up.

• Making any video was easy on Instagram. But making a good video was hard. Creators felt they needed to reach a quality bar before posting—unlike TikTok where the culture was more relaxed. Instagram's bar for polish was much higher.
```

**Visual Element:**
- Side-by-side editor comparison image (editor-comparison.png)
- Shows: Step-by-step editor (Instagram Stories style) vs. Stacked timeline editor (CapCut style)

**Recommendation Card (accent background):**
```
RECOMMENDATION TO LEADERSHIP

It's not enough to make it easy to create any video—users want to create good videos. We should redesign the editor from a step-by-step flow to a stacked timeline where video, audio, and text are all on one screen in different layers.
```

---

### SLIDE 5: The Pivot

**Header Label:** THE PIVOT  
**Background:** DARK CHARCOAL (special slide)  
**Text Color:** Cream/light

**Outcome Card (dark card background):**
```
OUTCOME: INITIAL REJECTION

Leadership pushed back hard. They wanted Instagram to 'feel simple' and worried that a stacked timeline was 'too complex.'

• The Reels editor was based on Instagram Stories and TikTok. Why change a flow what works so well on TikTok?
• Quality is subjective. How do we know advanced videos are better for viewers?
• A complete redesign would require massive resources. How can we be sure a different layout is actually easier to use?
```

**The New Core Question Card (terracotta-tinted background):**
```
THE NEW CORE QUESTION

~~How do we make it easier for users to make short-form videos on Instagram?~~

How do we make it easier for users to make **good** short-form videos on Instagram?

---

We didn't give up. Me and my team — who made short-form videos ourselves all the time — had developed a strong perspective that our current editing flow was simply too difficult to use to make high-quality videos with your phone. But we understood that to convince our senior leadership team we needed to rigorously answer two additional questions:

**A.** What makes a video high-quality? (Because we knew Instagram users cared about their videos being good.)
**B.** Which video editor design makes it easier to create high-quality videos?
```

---

### SLIDE 6: Phase 2 - Large-Scale Video Content Analysis

**Header Label:** PHASE 2: LARGE-SCALE VIDEO CONTENT ANALYSIS

**Structure:** Objective → Methodology → Data Collection → Data Analysis → Key Finding → Outcome

**Objective:**
```
Determine the attributes that set high-quality videos apart from less engaging ones.
```

**Methodology Card (2x3 grid):**
| Field | Value |
|-------|-------|
| Method | Content Analysis |
| Duration | Three weeks |
| Sample | 2,000 Videos (1,000 each group) |
| Success Threshold | >1,000 views (top 10% in US) |
| Coders | Internal colleagues (blinded) |

**Data Collection (with sidebar):**

Main content:
```
• Recruited internal colleagues to watch 50-100 videos each, randomly assigned from both the low and high-quality pools
• Coders marked which attributes were present in each video (yes=1/no=0)
• Coders didn't know if a video was high or low-quality (blinded) to keep their responses unbiased
• Coders completed a training session with example videos and a coding manual defining each attribute
• 10% of videos were coded by multiple coders to assess inter-rater reliability (κ > 0.80)
```

**Sidebar Callout (left border accent):**
```
EXAMPLES OF ATTRIBUTES CODED
• Presence of humor, humans, animals
• Genre (sports, fashion, travel, dance)
• Music usage, number of clips, text on screen
• Cuts-to-music synchronization
• Etc.
```

**Interactive Element:**
- Button: "View example coding sheet"
- Opens modal with embedded PDF (Video_Coding_Sheet_Example.pdf)

**Data Analysis:**
```
• Compared attribute frequency in high vs. low-quality videos
• Ran chi-square tests for statistical significance
• Ran logistic regression to find strongest predictors
```

**Visual Elements (2-column grid, clickable to enlarge):**
- Bar chart comparing attributes (video-attributes-chart.png)
- Regression results chart (regression-chart.png)
- Caption: "Example charts using dummy data."

**Key Finding Card:**
```
Three attributes strongly predicted if a video was high-quality (received > 1,000 views):

**1. Multiple Clips** — Videos used more than one clip (vs. single-shot)
**2. Music Sync** — Clips synced to beat/rhythm of music
**3. Text Sync** — Text elements precisely timed to match video and music
```

**Outcome Card:**
```
We had an objective definition of what makes videos high-quality. Next, we tested which editor design makes it easier to create these kinds of videos.
```

---

### SLIDE 7: Phase 3 - Comparative Usability Study

**Header Label:** PHASE 3: COMPARATIVE USABILITY STUDY

**Objective:**
```
Test which editing architecture makes it easier to create different types of videos.
```

**Methodology Card (2x3 grid):**
| Field | Value |
|-------|-------|
| Method | Randomized Between-Subjects Study |
| Duration | Six weeks |
| Sample | 200 Non-Professional Creators |
| Criteria | US, Canada, UK, India (18-35) |
| Partner | MeasuringU (Usability Vendor) |

**Study Design:**
```
We partnered with a research vendor to run an experiment in which 200 testers tried to recreate an example video using a randomly assigned video editing app. Afterwards they indicated if they felt like they completed the task and rated how easy the task was.

• **Independent Variables:** Video complexity (basic vs. advanced), Editing apps (step-by-step flows vs. stacked timelines)
• **Dependent Variables:** Task completion success, Ease of use ratings, Time on task
• **Apps Tested:**
  — Step-by-step flow: Instagram Reels, TikTok
  — Stacked timeline editors: CapCut, InShot
```

**Interactive Element - Tester Experience Simulation:**
```
Button: "See what this experiment looked like for the participant"
Subtext: You will be randomly assigned an app to download and a video to re-create (the "basic" or "advanced" example).
```

**Tester Experience Modal (multi-step):**
1. **Step 1 - Task Assignment:**
   - Shows randomly assigned app (Instagram Reels, TikTok, CapCut, or InShot)
   - Displays either basic or advanced reference video
   - User clicks "I've Finished the Task"

2. **Step 2 - Questions:**
   - Q1: "Were you able to complete the video editing task?" (Yes/Partially/No)
   - Q2: "How easy or difficult was it to complete the task using [App]?" (1-5 scale)

3. **Step 3 - Results:**
   - Thank you message
   - Shows example response data (app type, video type, completion, ease rating, time on task)
   - Options to "Try Again" or "Close"

**Reference Videos Section (2-column):**
| Basic Video | Advanced Video |
|-------------|----------------|
| Single clip + music + one text element | Three clips synced to music + three text elements synced to video |
| (basic-video-example.mov) | (advanced-video-example.mov) |

**Data Analysis:**
```
For each participant we measured how long it took to complete the video editing task. We also asked them to rate the difficulty of the task on a 5-point likert scale.

• Compared ease-of-use ratings, task completion rates, and time on task across video types and editor types
• Statistical tests to detect significant differences
```

**Key Finding Card:**
```
There wasn't a single design that was always better: Different editors worked better for different video types.

**Basic Videos:** Step-by-step editors performed better with faster completion rates and rated easier to use

**Advanced Videos:** Stacked timeline editors performed better, with much faster completion times, better usability rating, and fewer instances of users getting stuck (in observed videos)
```

**Visual Element:**
- Ease-of-use interaction chart (ease-of-use-chart.png)
- Shows interaction plot by editor type and video complexity

---

### SLIDE 8: Final Recommendation

**Header Label:** FINAL RECOMMENDATION

**Key Message Card (accent background, prominent):**
```
KEY MESSAGE TO LEADERSHIP

> 'Simple' doesn't always mean 'easy.'

The right editor depends on what you're trying to make.

Leadership assumed 'simple = easy,' but our data showed simplicity becomes a barrier for complex tasks. For videos people actually want to watch (videos with the three success attributes), the 'simple' step-by-step editor was harder to use than the 'complex' stacked timeline.
```

**Three Pieces of Evidence:**
```
The final presentation synthesized findings from all three research phases:
```

| Evidence | Finding |
|----------|---------|
| 1. User Feedback (Phase 1) | Creators avoided our editor because the step-by-step flow couldn't support the editing they wanted |
| 2. Video Analysis (Phase 2) | Popular videos are complex: multiple clips, synced to music with text overlaid |
| 3. Usability Testing (Phase 3) | High-quality videos require precise timing across layers—nearly impossible with a step-by-step flow |

**The Flywheel Effect:**
```
## The Flywheel Effect

We should prioritize high-quality videos because they create a healthy cycle: Good videos → More viewers → More creator reach → More production → More good videos. Good content is key to getting the flywheel spinning.
```

**Visual Element:**
- Flywheel diagram (flywheel-diagram.png)
- Circular diagram showing the virtuous cycle

---

### SLIDE 9: Impact

**Header Label:** IMPACT

**Leadership Decision Card (accent):**
```
LEADERSHIP DECISION

Leadership approved the redesign—a decision they had initially rejected.
```

**Product Outcomes:**

**1. Shipped the New Editor:**
```
A/B testing confirmed our findings: significantly more video production overall, especially high-quality videos (measured by views and likes).
```

**Before/After Comparison (2-column, clickable):**
| Before | After |
|--------|-------|
| (reels-editor-before.png) | (reels-editor-after.png) |
| Only video clips can be edited on this screen. Text and audio is edited elsewhere. | Clips, audio, text and other effects are all edited from one surface. |

**2. PR Campaign:**
```
When the feature finally rolled out to all users there was major press release and PR campaign (a rare instance for product features)
```

**Quote + Screenshot (2-column):**
```
> "We're making it easier for you to edit your reels on Instagram by bringing together video clips, audio, stickers, and text on a unified editing screen. This makes it easier to align and time elements of your reel to the right moments in a more visual way."
> — [Instagram Press Release](https://about.fb.com/news/2023/04/instagram-reels-trending-audio-and-gifts-updates/)
```
- Screenshot: reels-editor-screenshot.webp

**3. Instagram "Edits" App:**
```
About a year later, Instagram released 'Edits'—a standalone editing app fully built around the stacked timeline design. This represented a major shift toward positioning Instagram as a serious creative platform.
```

**Quote + Screenshot (2-column):**
```
> "Today, we're launching Edits, a new video creation app that helps you make great videos directly on your phone. If you're passionate about making videos, Edits has the tools you need to support your creation process, all in one place."
> — [Instagram Press Release](https://about.fb.com/news/2025/04/introducing-edits-streamlined-video-creation-app/)
```
- Screenshot: edits-app-screenshot.webp

---

### SLIDE 10: Lessons Learned

**Header Label:** LESSONS LEARNED  
**Background:** DARK CHARCOAL (special slide)  
**Text Color:** Cream/light

**Heading:**
```
## What This Project Taught Me
```

**Lesson Cards (dark card backgrounds):**

| # | Lesson | Detail |
|---|--------|--------|
| 01 | Misalignment often comes from different assumptions | Our team and leadership both wanted an easy-to-use editor—but we hadn't aligned on what types of videos to prioritize. |
| 02 | Consider cost vs. benefit of large studies | Phase 3 could maybe have been skipped if we'd just had leadership try editing complex videos themselves in different apps. |
| 03 | Study what people make to understand your product | Analyzing user-created content in phase 2 showed us what makes videos successful. This was before AI—it was manual and tedious. With AI, I now use this method at much larger scale and speed. |

**What I'd Do Differently Card (terracotta-tinted background):**
```
WHAT I'D DO DIFFERENTLY

Have leadership experience the problem firsthand—ask them to create both simple and complex videos using different editors. My team made videos every week, so we felt the limitations intuitively. Leadership wasn't using the product and assumed 'simple = easy' without testing it. Hands-on experience could have saved weeks of research.
```

---

### SLIDE 11: Final Note

**Header Label:** FINAL NOTE

**Content:**
```
It was a joy – and sometimes a pain – to make this case study using Lovable. Can't wait to share my thoughts on areas that could be immediately improved and to hopefully join the team to continuously improve the product!

If you have any questions I'm at erik.olesund@gmail.com

**Thanks for reading!**
```

**Link Buttons (pill-shaped):**
- LinkedIn: https://linkedin.com/in/erik-olesund
- Portfolio: https://olesund.com

---

## Assets Reference

### Images
| Filename | Description | Dimensions |
|----------|-------------|------------|
| erik-headshot.png | Professional headshot | ~200x200 |
| editor-comparison.png | Step-by-step vs stacked timeline comparison | ~1400px wide |
| video-attributes-chart.png | Bar chart of attribute frequencies | ~700px wide |
| regression-chart.png | Logistic regression results | ~700px wide |
| ease-of-use-chart.png | Interaction plot for usability study | ~1400px wide |
| flywheel-diagram.png | Good Video Flywheel cycle | ~1400px wide |
| reels-editor-before.png | Instagram editor before redesign | ~400px wide |
| reels-editor-after.png | Instagram editor after redesign | ~400px wide |
| reels-editor-screenshot.webp | New Reels editor interface | ~600px wide |
| edits-app-screenshot.webp | Instagram Edits app interface | ~600px wide |

### Videos
| Filename | Description |
|----------|-------------|
| basic-video-example.mov | Simple video: single clip + music + text |
| advanced-video-example.mov | Complex video: 3 clips + music sync + 3 text elements |

### Documents
| Filename | Description |
|----------|-------------|
| Video_Coding_Sheet_Example.pdf | Sample coding sheet for Phase 2 |

---

## Interactive Elements Summary

1. **Password Gate (Slide 0):** Requires password to access presentation
2. **Image Lightboxes:** Charts and before/after images expand on click
3. **PDF Modal (Slide 6):** "View example coding sheet" opens embedded PDF
4. **Tester Experience Modal (Slide 7):** Multi-step simulation of usability study
5. **Video Players (Slide 7):** Embedded video examples with playback controls
6. **External Links (Slide 9, 11):** Press release links, LinkedIn, Portfolio

---

## Navigation & UX Features

- **Scroll-snap:** Each slide snaps into view
- **Progress Indicator:** Fixed position showing current slide
- **Mobile Dot Navigation:** Touch-friendly navigation dots
- **Keyboard Navigation:** Arrow keys for slide navigation
- **Smooth Scroll:** Animated transitions between slides
- **Responsive Design:** Adapts to mobile, tablet, desktop

---

## Slide Backgrounds

| Slides | Background |
|--------|------------|
| 0 (Title) | Gradient: background → primary/5 |
| 1, 3, 5, 7, 9, 11 (Odd) | bg-background (warm cream) |
| 2, 4, 6, 8 (Even) | bg-secondary/50 (slightly muted) |
| 5 (The Pivot) | Dark charcoal override |
| 10 (Lessons) | Dark charcoal override |
