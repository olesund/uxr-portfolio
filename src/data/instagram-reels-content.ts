/**
 * INSTAGRAM REELS CASE STUDY CONTENT
 *
 * Edit text here - changes will appear on both Read and Present modes.
 * Each slide has 'read' (full content) and 'present' (condensed) versions.
 */

export const instagramReelsContent = {
  // ============================================
  // META INFO (used in title slide)
  // ============================================
  meta: {
    title: "Instagram Reels Video Editor Research",
    subtitle: "Three phases of mixed-methods research that led to a major redesign of Instagram's video editor",
    // Shorter version for present mode
    subtitleShort: "Three phases of mixed-methods research that led to a major redesign",
    author: "Erik Olesund",
    role: "UX Researcher",
  },

  // ============================================
  // SLIDE 1: PROBLEM + KEY CONSTRAINTS
  // ============================================
  problem: {
    header: "Problem + Key Constraints",

    read: {
      businessContextTitle: "Business Context",
      businessContext: "Instagram Reels had recently launched as the company's top priority. But we faced a critical problem: a lot of users were watching our short-form videos, but we didn't have enough creators making them! Demand outpaced supply! If viewers couldn't find enough entertaining videos, we worried that they'd stop using Reels altogether and visit TikTok instead.",
      businessGoal: "Increase the production of short-form videos.",
      coreQuestion: "How do we make it easier for users to make short-form videos on Instagram?",
      scopeNote: "Another team focused on motivating people to make videos. My team focused on making the process easier.",
    },

    present: {
      title: "The Challenge",
      description: "Reels had launched as Instagram's top priority, but creator supply couldn't keep up with viewer demand.",
      businessGoal: "Increase short-form video production",
      coreQuestion: "How do we make it easier to create videos?",
    },

    team: {
      myRole: "UX Researcher",
      myRoleDescription: "Designed, ran, and presented all research",
      team: "Cross-functional",
      teamDescription: "Product Manager, Product Designer, Data Scientist, iOS Engineer",
      stakeholders: "Senior Leadership",
      stakeholdersDescription: "Including the Head of Instagram",
    },
  },

  // ============================================
  // SLIDE 2: RESEARCH OVERVIEW
  // ============================================
  researchOverview: {
    header: "Research Overview",
    title: "A Three-Phase Research Strategy",
    description: "This started as a small study with 20 creators but grew to include two larger projects. Each phase built on the previous, moving from exploration to experimentation.",

    phases: [
      {
        number: "01",
        title: "Online Community of Reels Creators",
        type: "Qualitative",
        description: "Talked to 20 Reels creators. Discovered they were using third-party apps (like CapCut) instead of Instagram to edit their videos.",
        // Shorter for present mode
        insight: "20 creators revealed they use third-party apps instead of Instagram",
      },
      {
        number: "02",
        title: "Large-Scale Video Content Analysis",
        type: "Quantitative",
        description: "Analyzed 2,000 videos to identify what makes videos successful. Found that high-quality videos use multiple clips synced to music with text overlaid.",
        insight: "2,000 videos analyzed to identify success factors",
      },
      {
        number: "03",
        title: "Usability Testing Experiment",
        type: "Experimental",
        description: "Tested which editor design works best for simple vs. complex videos. Proved that different designs work better for different video types; more complex videos require a more advanced editor.",
        insight: "200 participants proved different editors work for different video types",
      },
    ],
  },

  // ============================================
  // SLIDE 3: PHASE 1 - ONLINE COMMUNITY
  // ============================================
  phase1: {
    header: "Phase 1: Online Community of Reels Creators",

    objective: "Understand why some small-scale creators were seeing initial success with their Reels (to see if we can help more users adopt similar tactics). Test new editing features to see which tools creators find most useful.",

    methodology: {
      method: "Online Community Research",
      duration: "Six Weeks",
      sample: "20 Non-Professional Reels Creators",
      criteria: "US, 18-35, 10+ Reels, 1,000+ views",
    },

    dataCollection: [
      "Testing prototypes of new features and giving feedback the same day",
      "Rating entertainment value of example videos created by our new features",
      "Sharing creative process in 1-on-1 interviews with me",
      "Discussing with one another and sharing tips and tricks for video creation",
    ],
    dataCollectionIntro: "Over the course of six weeks 20 Reels creators were part of a private Facebook group. Three days a week I would ask them to complete a different activity. Examples included:",
    dataCollectionNote: "Because the study ran for six weeks I had the opportunity to observe many real-life moments of short-form video creations; more revealing than the sometimes artificial feedback received during one-off research sessions.",

    dataAnalysis: "Throughout the six weeks I was analyzing the data (Facebook posts, videos that the creators made and posted, notes from interviews) in real time and informed several smaller feature launches. At the end of the study we revieved all data again to look for patterns and this is where our greatest insight emerged.",

    keyFinding: "Most creators actively avoided Instagram's native editor for actual video creation. Instead, they used third-party apps (like CapCut), then uploaded finished videos to Instagram.",
    keyFindingDetails: [
      "Creators preferred \"stacked timeline\" editors where video, audio, and text layers are all visible at once on a single screen. Instagram's step-by-step flow forced them to edit video on one screen, then switch to separate screens for audio, text, and effects—constantly jumping back and forth to line things up.",
      "Making any video was easy on Instagram. But making a good video was hard. Creators felt they needed to reach a quality bar before posting—unlike TikTok where the culture was more relaxed. Instagram's bar for polish was much higher.",
    ],

    recommendation: "It's not enough to make it easy to create any video—users want to create good videos. We should redesign the editor from a step-by-step flow to a stacked timeline where video, audio, and text are all on one screen in different layers.",
  },

  // ============================================
  // SLIDE 4: THE PIVOT
  // ============================================
  pivot: {
    header: "The Pivot",

    outcome: "Leadership pushed back hard. They wanted Instagram to 'feel simple' and worried that a stacked timeline was 'too complex.'",

    pushbackPoints: [
      "The Reels editor was based on Instagram Stories and TikTok. Why change a flow what works so well on TikTok?",
      "Quality is subjective. How do we know advanced videos are better for viewers?",
      "A complete redesign would require massive resources. How can we be sure a different layout is actually easier to use?",
    ],

    oldQuestion: "How do we make it easier for users to make short-form videos on Instagram?",
    newQuestion: "How do we make it easier for users to make good short-form videos on Instagram?",

    followUp: "We didn't give up. Me and my team — who made short-form videos ourselves all the time — had developed a strong perspective that our current editing flow was simply too difficult to use to make high-quality videos with your phone. But we understood that to convince our senior leadership team we needed to rigorously answer two additional questions:",

    additionalQuestions: [
      "A. What makes a video high-quality? (Because we knew Instagram users cared about their videos being good.)",
      "B. Which video editor design makes it easier to create high-quality videos?",
    ],
  },

  // ============================================
  // SLIDE 5: PHASE 2 - VIDEO CONTENT ANALYSIS
  // ============================================
  phase2: {
    header: "Phase 2: Large-Scale Video Content Analysis",

    objective: "Determine the attributes that set high-quality videos apart from less engaging ones.",

    methodology: {
      method: "Content Analysis",
      duration: "Three weeks",
      sample: "2,000 Videos (1,000 each group)",
      successThreshold: ">1,000 views (top 10% in US)",
      coders: "Internal colleagues (blinded)",
    },

    dataCollection: [
      "Recruited internal colleagues to watch 50-100 videos each, randomly assigned from both the low and high-quality pools",
      "Coders marked which attributes were present in each video (yes=1/no=0)",
      "Coders didn't know if a video was high or low-quality (blinded) to keep their responses unbiased",
      "Coders completed a training session with example videos and a coding manual defining each attribute",
      "10% of videos were coded by multiple coders to assess inter-rater reliability (κ > 0.80)",
    ],

    attributeExamples: [
      "Presence of humor, humans, animals",
      "Genre (sports, fashion, travel, dance)",
      "Music usage, number of clips, text on screen",
      "Cuts-to-music synchronization",
      "Etc.",
    ],

    dataAnalysis: [
      "Compared attribute frequency in high vs. low-quality videos",
      "Ran chi-square tests for statistical significance",
      "Ran logistic regression to find strongest predictors",
    ],

    keyFinding: "Three attributes strongly predicted if a video was high-quality (received > 1,000 views):",
    keyAttributes: [
      { name: "Multiple Clips", description: "Videos used more than one clip (vs. single-shot)" },
      { name: "Music Sync", description: "Clips synced to beat/rhythm of music" },
      { name: "Text Sync", description: "Text elements precisely timed to match video and music" },
    ],

    outcomeNote: "We had an objective definition of what makes videos high-quality. Next, we tested which editor design makes it easier to create these kinds of videos.",
  },

  // ============================================
  // SLIDE 6: PHASE 3 - USABILITY STUDY
  // ============================================
  phase3: {
    header: "Phase 3: Comparative Usability Study",

    objective: "Test which editing architecture makes it easier to create different types of videos.",

    methodology: {
      method: "Randomized Between-Subjects Study",
      duration: "Six weeks",
      sample: "200 Non-Professional Creators",
      criteria: "US, Canada, UK, India (18-35)",
      partner: "MeasuringU (Usability Vendor)",
    },

    studyDesign: "We partnered with a research vendor to run an experiment in which 200 testers tried to recreate an example video using a randomly assigned video editing app. Afterwards they indicated if they felt like they completed the task and rated how easy the task was.",

    independentVariables: "Video complexity (basic vs. advanced), Editing apps (step-by-step flows vs. stacked timelines)",
    dependentVariables: "Task completion success, Ease of use ratings, Time on task",

    appsTestedStepByStep: ["Instagram Reels", "TikTok"],
    appsTestedStacked: ["CapCut", "InShot"],

    referenceVideos: {
      basic: "Single clip + music + one text element",
      advanced: "Three clips synced to music + three text elements synced to video",
    },

    dataAnalysis: "For each participant we measured how long it took to complete the video editing task. We also asked them to rate the difficulty of the task on a 5-point likert scale.",
    analysisPoints: [
      "Compared ease-of-use ratings, task completion rates, and time on task across video types and editor types",
      "Statistical tests to detect significant differences",
    ],

    keyFinding: "There wasn't a single design that was always better: Different editors worked better for different video types.",
    keyFindingDetails: {
      basic: "Step-by-step editors performed better with faster completion rates and rated easier to use",
      advanced: "Stacked timeline editors performed better, with much faster completion times, better usability rating, and fewer instances of users getting stuck (in observed videos)",
    },
  },

  // ============================================
  // SLIDE 7: FINAL RECOMMENDATION
  // ============================================
  recommendation: {
    header: "Final Recommendation",

    keyMessage: "'Simple' doesn't always mean 'easy.'",
    keyMessageSubtitle: "The right editor depends on what you're trying to make.",
    keyMessageExplanation: "Leadership assumed 'simple = easy,' but our data showed simplicity becomes a barrier for complex tasks. For videos people actually want to watch (videos with the three success attributes), the 'simple' step-by-step editor was harder to use than the 'complex' stacked timeline.",

    threeEvidencePoints: [
      {
        title: "1. User Feedback (Phase 1)",
        description: "Creators avoided our editor because the step-by-step flow couldn't support the editing they wanted",
      },
      {
        title: "2. Video Analysis (Phase 2)",
        description: "Popular videos are complex: multiple clips, synced to music with text overlaid",
      },
      {
        title: "3. Usability Testing (Phase 3)",
        description: "High-quality videos require precise timing across layers—nearly impossible with a step-by-step flow",
      },
    ],

    flywheelTitle: "The Flywheel Effect",
    flywheelExplanation: "We should prioritize high-quality videos because they create a healthy cycle: Good videos → More viewers → More creator reach → More production → More good videos. Good content is key to getting the flywheel spinning.",
  },

  // ============================================
  // SLIDE 8: IMPACT
  // ============================================
  impact: {
    header: "Impact",

    leadershipDecision: "Leadership approved the redesign—a decision they had initially rejected.",

    shippedEditor: "A/B testing confirmed our findings: significantly more video production overall, especially high-quality videos (measured by views and likes).",

    beforeAfter: {
      before: "Only video clips can be edited on this screen. Text and audio is edited elsewhere.",
      after: "Clips, audio, text and other effects are all edited from one surface.",
    },

    prCampaign: "When the feature finally rolled out to all users there was major press release and PR campaign (a rare instance for product features)",

    pressQuote: "\"We're making it easier for you to edit your reels on Instagram by bringing together video clips, audio, stickers, and text on a unified editing screen. This makes it easier to align and time elements of your reel to the right moments in a more visual way.\"",
    pressSource: "Instagram Press Release",
    pressUrl: "https://about.fb.com/news/2023/04/instagram-reels-trending-audio-and-gifts-updates/",

    editsApp: "About a year later, Instagram released 'Edits'—a standalone editing app fully built around the stacked timeline design. This represented a major shift toward positioning Instagram as a serious creative platform.",
    editsQuote: "\"Today, we're launching Edits, a new video creation app that helps you make great videos directly on your phone. If you're passionate about making videos, Edits has the tools you need to support your creation process, all in one place.\"",
    editsUrl: "https://about.fb.com/news/2025/04/introducing-edits-streamlined-video-creation-app/",
  },

  // ============================================
  // SLIDE 9: LESSONS LEARNED
  // ============================================
  lessons: {
    header: "Lessons Learned",
    title: "What This Project Taught Me",

    lessonsList: [
      {
        number: "01",
        title: "Misalignment often comes from different assumptions",
        description: "Our team and leadership both wanted an easy-to-use editor—but we hadn't aligned on what types of videos to prioritize.",
      },
      {
        number: "02",
        title: "Study what people make to understand your product",
        description: "Analyzing user-created content showed us what makes videos successful. This was before AI made it easy—it was manual and tedious. Today I use this method at much larger scale.",
      },
    ],

    whatIdDoDifferently: "Have leadership experience the problem firsthand. My team made videos every week, so we felt the limitations intuitively. Leadership wasn't using the product and assumed 'simple = easy' without testing it. Hands-on experience could have accelerated alignment.",
  },
};

export type InstagramReelsContent = typeof instagramReelsContent;
