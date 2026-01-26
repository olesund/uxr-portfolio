# Instagram Reels Video Editor Research

**Three phases of mixed-methods research that led to a major redesign of Instagram's video editor**

*Erik Olesund, Lead UX Researcher*

---

## Introduction

I'm Erik – a UX researcher with 10+ years driving product decisions through fast-moving research. I combine strong data analysis skills with deep expertise in understanding what users need. I'm an enthusiastic early adopter of AI and thrilled about the possibility of joining Lovable.

I'm currently at The New York Times, but today I'm sharing a case study from my time at Instagram that's particularly relevant to this role.

*Due to confidentiality, I can't share real documents or data—instead I'll provide reconstructed examples.*

---

## Problem + Key Constraints

### Business Context

Instagram Reels had recently launched as the company's top priority. But we faced a critical problem: a lot of users were watching our short-form videos, but we didn't have enough creators making them! Demand outpaced supply! If viewers couldn't find enough entertaining videos, we worried that they'd stop using Reels altogether and visit TikTok instead.

**Business Goal:** Increase the production of short-form videos.

**Core Question:** How do we make it easier for users to make short-form videos on Instagram?

*Another team focused on motivating people to make videos. My team focused on making the process easier.*

### Team Info

- **My Role:** Lead UX Researcher — Designed, ran, and presented all research
- **Team:** Cross-functional — Product Manager, Product Designer, Data Scientist, iOS Engineer
- **Stakeholders:** Senior Leadership — Including the Head of Instagram

---

## Research Overview

### A Three-Phase Research Strategy

This started as a small study with 20 creators but grew to include two larger projects. Each phase built on the previous, moving from exploration to experimentation.

**Phase 01 — Qualitative: Online Community of Reels Creators**
Talked to 20 Reels creators. Discovered they were using third-party apps (like CapCut) instead of Instagram to edit their videos.

**Phase 02 — Quantitative: Large-Scale Video Content Analysis**
Analyzed 2,000 videos to identify what makes videos successful. Found that high-quality videos use multiple clips synced to music with text overlaid.

**Phase 03 — Experimental: Usability Testing Experiment**
Tested which editor design works best for simple vs. complex videos. Proved that different designs work better for different video types; more complex videos require a more advanced editor.

---

## Phase 1: Online Community of Reels Creators

### Objective

Understand why some small-scale creators were seeing initial success with their Reels (to see if we can help more users adopt similar tactics). Test new editing features to see which tools creators find most useful.

### Methodology

- **Method:** Online Community Research
- **Duration:** Six Weeks
- **Sample:** 20 Non-Professional Reels Creators
- **Criteria:** US, 18-35, 10+ Reels, 1,000+ views

### Data Collection

Over the course of six weeks 20 Reels creators were part of a private Facebook group. Three days a week I would ask them to complete a different activity. Examples included:

- Testing prototypes of new features and giving feedback the same day
- Rating entertainment value of example videos created by our new features
- Sharing creative process in 1-on-1 interviews with me
- Discussing with one another and sharing tips and tricks for video creation

Because the study ran for six weeks I had the opportunity to observe many real-life moments of short-form video creations; more revealing than the sometimes artificial feedback received during one-off research sessions.

### Data Analysis

Throughout the six weeks I was analyzing the data (Facebook posts, videos that the creators made and posted, notes from interviews) in real time and informed several smaller feature launches. At the end of the study we reviewed all data again to look for patterns and this is where our greatest insight emerged.

### Key Finding

Most creators actively avoided Instagram's native editor for actual video creation. Instead, they used third-party apps (like CapCut), then uploaded finished videos to Instagram.

- Creators preferred "stacked timeline" editors where video, audio, and text layers are all visible at once on a single screen. Instagram's step-by-step flow forced them to edit video on one screen, then switch to separate screens for audio, text, and effects—constantly jumping back and forth to line things up.

- Making any video was easy on Instagram. But making a good video was hard. Creators felt they needed to reach a quality bar before posting—unlike TikTok where the culture was more relaxed. Instagram's bar for polish was much higher.

### Recommendation to Leadership

It's not enough to make it easy to create any video—users want to create good videos. We should redesign the editor from a step-by-step flow to a stacked timeline where video, audio, and text are all on one screen in different layers.

---

## The Pivot

### Outcome: Initial Rejection

Leadership pushed back hard. They wanted Instagram to 'feel simple' and worried that a stacked timeline was 'too complex.'

- The Reels editor was based on Instagram Stories and TikTok. Why change a flow what works so well on TikTok?
- Quality is subjective. How do we know advanced videos are better for viewers?
- A complete redesign would require massive resources. How can we be sure a different layout is actually easier to use?

### The New Core Question

~~How do we make it easier for users to make short-form videos on Instagram?~~

**How do we make it easier for users to make *good* short-form videos on Instagram?**

We didn't give up. Me and my team — who made short-form videos ourselves all the time — had developed a strong perspective that our current editing flow was simply too difficult to use to make high-quality videos with your phone. But we understood that to convince our senior leadership team we needed to rigorously answer two additional questions:

**A.** What makes a video high-quality? (Because we knew Instagram users cared about their videos being good.)

**B.** Which video editor design makes it easier to create high-quality videos?

---

## Phase 2: Large-Scale Video Content Analysis

### Objective

Determine the attributes that set high-quality videos apart from less engaging ones.

### Methodology

- **Method:** Content Analysis
- **Duration:** Three weeks
- **Sample:** 2,000 Videos (1,000 each group)
- **Success Threshold:** >1,000 views (top 10% in US)
- **Coders:** Internal colleagues (blinded)

### Data Collection

- Recruited internal colleagues to watch 50-100 videos each, randomly assigned from both the low and high-quality pools
- Coders marked which attributes were present in each video (yes=1/no=0)
- Coders didn't know if a video was high or low-quality (blinded) to keep their responses unbiased
- Coders completed a training session with example videos and a coding manual defining each attribute
- 10% of videos were coded by multiple coders to assess inter-rater reliability (κ > 0.80)

**Examples of Attributes Coded:**
- Presence of humor, humans, animals
- Genre (sports, fashion, travel, dance)
- Music usage, number of clips, text on screen
- Cuts-to-music synchronization

### Data Analysis

- Compared attribute frequency in high vs. low-quality videos
- Ran chi-square tests for statistical significance
- Ran logistic regression to find strongest predictors

### Key Finding

Three attributes strongly predicted if a video was high-quality (received > 1,000 views):

1. **Multiple Clips** — Videos used more than one clip (vs. single-shot)
2. **Music Sync** — Clips synced to beat/rhythm of music
3. **Text Sync** — Text elements precisely timed to match video and music

### Outcome

We had an objective definition of what makes videos high-quality. Next, we tested which editor design makes it easier to create these kinds of videos.

---

## Phase 3: Comparative Usability Study

### Objective

Test which editing architecture makes it easier to create different types of videos.

### Methodology

- **Method:** Randomized Between-Subjects Study
- **Duration:** Six weeks
- **Sample:** 200 Non-Professional Creators
- **Criteria:** US, Canada, UK, India (18-35)
- **Partner:** MeasuringU (Usability Vendor)

### Study Design

We partnered with a research vendor to run an experiment in which 200 testers tried to recreate an example video using a randomly assigned video editing app. Afterwards they indicated if they felt like they completed the task and rated how easy the task was.

- **Independent Variables:** Video complexity (basic vs. advanced), Editing apps (step-by-step flows vs. stacked timelines)
- **Dependent Variables:** Task completion success, Ease of use ratings, Time on task
- **Apps Tested:**
  - Step-by-step flow: Instagram Reels, TikTok
  - Stacked timeline editors: CapCut, InShot

### Reference Videos

- **Basic Video:** Single clip + music + one text element
- **Advanced Video:** Three clips synced to music + three text elements synced to video

### Data Analysis

For each participant we measured how long it took to complete the video editing task. We also asked them to rate the difficulty of the task on a 5-point likert scale.

- Compared ease-of-use ratings, task completion rates, and time on task across video types and editor types
- Statistical tests to detect significant differences

### Key Finding

There wasn't a single design that was always better: Different editors worked better for different video types.

- **Basic Videos:** Step-by-step editors performed better with faster completion rates and rated easier to use
- **Advanced Videos:** Stacked timeline editors performed better, with much faster completion times, better usability rating, and fewer instances of users getting stuck (in observed videos)

---

## Final Recommendation

### Three Pieces of Evidence

The final presentation synthesized findings from all three research phases:

1. **User Feedback (Phase 1)** — Creators avoided our editor because the step-by-step flow couldn't support the editing they wanted
2. **Video Analysis (Phase 2)** — Popular videos are complex: multiple clips, synced to music with text overlaid
3. **Usability Testing (Phase 3)** — High-quality videos require precise timing across layers—nearly impossible with a step-by-step flow

### Key Message to Leadership

> "Simple" doesn't always mean "easy."

The right editor depends on what you're trying to make.

Leadership assumed 'simple = easy,' but our data showed simplicity becomes a barrier for complex tasks. For videos people actually want to watch (videos with the three success attributes), the 'simple' step-by-step editor was harder to use than the 'complex' stacked timeline.

### The Flywheel Effect

We should prioritize high-quality videos because they create a healthy cycle: Good videos → More viewers → More creator reach → More production → More good videos. Good content is key to getting the flywheel spinning.

---

## Impact

### Leadership Decision

Leadership approved the redesign—a decision they had initially rejected.

### Product Outcomes

**Shipped the New Editor**
A/B testing confirmed our findings: significantly more video production overall, especially high-quality videos (measured by views and likes).

**PR Campaign**
When the feature finally rolled out to all users there was major press release and PR campaign (a rare instance for product features)

> "We're making it easier for you to edit your reels on Instagram by bringing together video clips, audio, stickers, and text on a unified editing screen. This makes it easier to align and time elements of your reel to the right moments in a more visual way."
>
> — [Instagram Press Release](https://about.fb.com/news/2023/04/instagram-reels-trending-audio-and-gifts-updates/)

**Instagram "Edits" App**
About a year later, Instagram released 'Edits'—a standalone editing app fully built around the stacked timeline design. This represented a major shift toward positioning Instagram as a serious creative platform.

> "Today, we're launching Edits, a new video creation app that helps you make great videos directly on your phone. If you're passionate about making videos, Edits has the tools you need to support your creation process, all in one place."
>
> — [Instagram Press Release](https://about.fb.com/news/2025/04/introducing-edits-streamlined-video-creation-app/)

---

## Lessons Learned

### What This Project Taught Me

**01 — Misalignment often comes from different assumptions**
Our team and leadership both wanted an easy-to-use editor—but we hadn't aligned on what types of videos to prioritize.

**02 — Consider cost vs. benefit of large studies**
Phase 3 could maybe have been skipped if we'd just had leadership try editing complex videos themselves in different apps.

**03 — Study what people make to understand your product**
Analyzing user-created content in phase 2 showed us what makes videos successful. This was before AI—it was manual and tedious. With AI, I now use this method at much larger scale and speed.

### What I'd Do Differently

Have leadership experience the problem firsthand—ask them to create both simple and complex videos using different editors. My team made videos every week, so we felt the limitations intuitively. Leadership wasn't using the product and assumed 'simple = easy' without testing it. Hands-on experience could have saved weeks of research.

---

## Final Note

It was a joy – and sometimes a pain – to make this case study using Lovable. Can't wait to share my thoughts on areas that could be immediately improved and to hopefully join the team to continuously improve the product!

If you have any questions I'm at erik.olesund@gmail.com

**Thanks for reading!**

---

**Connect with me:**
- [LinkedIn](https://linkedin.com/in/erik-olesund)
- [Portfolio](https://olesund.com)
