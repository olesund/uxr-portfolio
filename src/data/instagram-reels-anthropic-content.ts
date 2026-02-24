/**
 * INSTAGRAM REELS CASE STUDY — ANTHROPIC ONSITE VERSION
 *
 * Present-mode only, abbreviated for XFN audience (PM, designer, engineer).
 * Focuses on storytelling and communicating research impact.
 * Edit content here — it is used by InstagramReelsAnthropicCaseStudy.tsx
 */

export const content = {
  // ---------- SLIDE 0: TITLE ----------
  title: {
    name: "Erik Olesund",
    subtitle: "Portfolio Review | Anthropic | February 2026",
    introText: "",
    descriptors: [
      "UX Researcher",
      "Maker",
      "Improvisor",
      "Husband",
      "Dad",
      "Back country skier",
      "Baker",
      "Cargo bike enthusiast",
      "Swede",
      "Brooklynite",
      "Doodle-owner",
      "Optimist",
    ],
  },

  // ---------- SLIDE 1: EXPERIENCES THAT SHAPED ME ----------
  moments: {
    header: "Experiences That Shaped Me",
    photos: [
      { caption: "Stanford improvisors" },
      { caption: "Moving SF > NY in 1985 VW" },
      { caption: "Ella, Sarah and Alice" },
    ],
  },

  // ---------- SLIDE 2: CAREER OVERVIEW ----------
  careerOverview: {
    header: "Career Overview",
    roles: [
      {
        company: "Stanford d.school",
        description:
          "Faculty teaching human-centered design and improvisation",
      },
      {
        company: "Collective Capital",
        description:
          "Improv-based team collaboration and public sector UX consulting",
      },
      {
        company: "Thumbtack",
        description:
          "Informed company-wide strategic pivot to homeowners",
      },
      {
        company: "Instagram",
        description:
          "Drove major redesign of video editing through mixed methods",
      },
      {
        company: "The New York Times",
        description:
          "Expanded audio and video reach; integrated AI into research workflows",
      },
      {
        company: "Anthropic",
        description:
          "Accelerate AI adoption and ensure gains are broadly distributed",
        isFuture: true,
      },
    ],
  },

  // ---------- SLIDE 3: CASE STUDY TITLE ----------
  caseStudyTitle: {
    title: "Instagram Reels\nVideo Editor Research",
    subtitle:
      "Three phases of mixed-methods research to help\nmore people express their creativity through video",
  },

  // ---------- SLIDE 4: PROBLEM + KEY CONSTRAINTS ----------
  problem: {
    header: "Problem + Key Constraints",
    businessContextTitle: "Business Context",
    businessContext:
      "Instagram Reels was the company's top priority. Demand outpaced supply and we needed more users to make videos.",
    businessGoal: "Increase the production of short-form videos.",
    coreQuestion:
      "How do we make it easier for users to make short-form videos on Instagram?",
    currentAssumption:
      "More unique tools and effects are our best levers.",
    team: {
      myRole: "Lead UX Researcher",
      myRoleDescription:
        "Designed, ran, and presented all research across three phases",
      team: "Cross-Functional",
      teamDescription:
        "PM, designer, data scientist, iOS engineer, and support from two UXRs",
      stakeholders: "Senior Leadership",
      stakeholdersDescription: "Including the Head of Instagram",
    },
  },

  // ---------- SLIDE 5: RESEARCH OVERVIEW ----------
  researchOverview: {
    header: "Research Overview",
    title: "A Three-Phase Research Strategy",
    phases: [
      {
        number: "01",
        title: "Online Community of Reels Creators",
        type: "Qualitative",
        description:
          "Talked to and observed Reels creators over six weeks.",
      },
      {
        number: "02",
        title: "Large-Scale Video Content Analysis",
        type: "Quantitative",
        description:
          "Analyzed 2,000 videos to identify what makes videos successful.",
      },
      {
        number: "03",
        title: "Comparative Usability Study",
        type: "Experimental",
        description:
          "Tested which editor design works best for simple vs. complex videos.",
        highlight: true,
      },
    ],
  },

  // ---------- SLIDE 6: PHASE 1 ----------
  phase1: {
    header: "Phase 1: Online Community of Reels Creators",
    question:
      "What helps Reels creators succeed and what barriers to creation are they facing?",
    approach:
      "Followed 20 Reels creators over the course of six weeks. They completed activities in a private Facebook group three times per week: testing prototypes, rating videos, sharing their creative process in interviews, and discussing tips with one another.",
    keyFinding:
      "Creators felt pressure to create more polished content for Instagram vs. TikTok. They preferred to use third-party apps with \u201Cstacked timeline\u201D editors where video, audio, and text layers are all visible at once on a single screen, over Instagram\u2019s step-by-step flow.",
  },

  // ---------- SLIDE 7: REFRAME ----------
  reframe: {
    header: "Reframe",
    oldQuestion:
      "How do we make it easier for users to make short-form videos on Instagram?",
    newQuestionPrefix: "How do we make it easier for users to make ",
    newQuestionHighlight: "good",
    newQuestionSuffix: " short-form videos on Instagram?",
    context:
      "We needed to prove two things before leadership would invest in a redesign:",
    additionalQuestions: [
      "A. What makes a video high-quality?",
      "B. Which video editor design makes it easier to create high-quality videos?",
    ],
  },

  // ---------- SLIDE 8: PHASE 2 ----------
  phase2: {
    header: "Phase 2: Large-Scale Video Content Analysis",
    question:
      "How do we define what \u201Cgood\u201D content is? Can we detect any patterns in what a \u201Cgood video\u201D looks like?",
    approach:
      "Worked with data science to detect view threshold for top 10% most engaging videos in the U.S. Team of 10 XFN colleagues watched and labeled 1,000 high-quality and 1,000 low-quality videos to identify what attributes set successful videos apart from the rest.",
    keyFinding:
      "Three attributes were the strongest drivers of high-quality videos:",
    keyAttributes: [
      "Multiple clips",
      "Text overlays",
      "Elements synced to the beat of the music",
    ],
  },

  // ---------- SLIDE 9: PHASE 3 DEEP DIVE (4-page carousel) ----------
  phase3: {
    header: "Phase 3: Comparative Usability Study \u2014 Deep Dive",
    pages: [
      {
        // Page 1: Question + editor comparison visual
        title: "Research Question",
        question:
          "Which video editor design makes it easier to create high-quality videos?",
      },
      {
        // Page 2: Study design/methodology + view participant experience button
        title: "Study Design",
        methodology: {
          method: "Randomized Between-Subjects Study",
          duration: "Six weeks",
          sample: "200 Non-Professional Creators",
          criteria: "US, Canada, UK, India (18-35)",
          partner: "MeasuringU (Usability Vendor)",
        },
        appsTested: {
          stepByStep: ["Instagram", "TikTok", "Facebook"],
          stackedTimeline: ["CapCut", "InShot"],
        },
        studyDesign:
          "200 testers tried to recreate an example video using a randomly assigned video editing app. We measured task completion success, ease of use ratings, and time on task.",
        independentVariables:
          "Video complexity (basic vs. advanced), Editing apps (step-by-step flows vs. stacked timelines)",
      },
      {
        // Page 3: Reference videos
        title: "Reference Videos (that users recreated)",
        basic: "Single clip + music + one text element",
        advanced: "Three clips + text synced to music",
      },
      {
        // Page 4: Key findings with charts
        title: "Key Findings",
        finding:
          "There wasn't a single design that was always better: Different editors worked better for different video types.",
        details: {
          basic:
            "Step-by-step editors performed better with faster completion rates and rated easier to use",
          advanced:
            "Stacked timeline editors performed better, with much faster completion times, better usability ratings, and fewer instances of users getting stuck",
        },
        // Dummy chart data
        chartData: {
          completionTime: {
            label: "Avg. Task Completion Time (minutes)",
            basicStepByStep: 2.1,
            basicStacked: 3.4,
            advancedStepByStep: 8.7,
            advancedStacked: 4.2,
          },
          easeOfUse: {
            label: "Ease of Use Rating (out of 5)",
            basicStepByStep: 4.4,
            basicStacked: 3.6,
            advancedStepByStep: 2.3,
            advancedStacked: 4.1,
          },
        },
      },
    ],
  },

  // ---------- SLIDE 10: FINAL RECOMMENDATION ----------
  recommendation: {
    header: "Final Recommendation",
    keyMessage: "\u2018Simple\u2019 doesn't always mean \u2018easy.\u2019",
    keyMessageSubtitle:
      "We should invest in a more sophisticated video editor. It will make it easier to create high-quality videos, leading to an overall healthier content ecosystem for Reels.",
    leadershipDecision:
      "Leadership decision: Build and A/B test the new design.",
  },

  // ---------- SLIDE 11: IMPACT (2-page carousel) ----------
  impact: {
    header: "Impact",
    pages: [
      {
        // Page 1: Metrics + before/after
        title: "Product Outcome",
        shippedNote:
          "A/B testing confirmed our findings: significantly more video production overall, especially high-quality videos.",
        metrics: [
          {
            label: "Participation rate",
            description:
              "Percentage of Reels consumers who also produce videos",
          },
          {
            label: "Video production rate",
            description: "Number of videos per creator",
          },
          {
            label: "Video quality",
            description:
              "Share of videos that received high levels of engagement",
          },
        ],
        beforeAfter: {
          before:
            "Only video clips can be edited on this screen. Text and audio is edited elsewhere.",
          after:
            "Clips, audio, text and other effects are all edited from one surface.",
        },
      },
      {
        // Page 2: Press + screenshot
        title: "Launch Campaign",
        pressQuote:
          "\u201CWe're making it easier for you to edit your reels on Instagram by bringing together video clips, audio, stickers, and text on a unified editing screen. This makes it easier to align and time elements of your reel to the right moments in a more visual way.\u201D",
        pressSource: "Instagram Press Release",
        pressUrl:
          "https://about.fb.com/news/2023/04/instagram-reels-trending-audio-and-gifts-updates/",
      },
    ],
  },

  // ---------- SLIDE 12: REFLECTIONS ----------
  reflections: {
    header: "Reflections",
    title: "Lessons Learned",
    lessonsList: [
      {
        number: "01",
        title: "Misalignment often comes from different assumptions",
        description:
          "We all wanted an easy editor\u2014but hadn't aligned on which video types to prioritize.",
      },
      {
        number: "02",
        title: "Study what people make to understand your product",
        description:
          "Analyzing user-created content revealed what makes videos succeed. I hope to scale this method further with AI.",
      },
      {
        number: "03",
        title: "XFN collaboration turns evidence into action",
        description:
          "Close partnership with design, PM, data science, and engineering meant every stakeholder shaped the evidence. The recommendation carried weight because of it.",
      },
    ],
    whatIdDoDifferently:
      "Have leadership use the product firsthand. Our team felt the editor's limitations because we made videos weekly\u2014leadership assumed \u2018simple = easy\u2019 without that experience.",
  },
};
