/**
 * NYT WATCH TAB CASE STUDY CONTENT
 *
 * Edit text here - changes will appear on both Read and Present modes.
 * Each slide has content that can be used for both modes.
 */

export const nytWatchTabContent = {
  // ============================================
  // META INFO (used in title slide)
  // ============================================
  meta: {
    title: "NYT Watch Tab: Video News Consumption Research",
    subtitle: "A research program that explained neutral A/B test results and informed a strategic pivot",
    author: "Erik Olesund",
    role: "UX Researcher",
  },

  // ============================================
  // SLIDE 1: CONTEXT
  // ============================================
  context: {
    header: "Context",

    opportunityTitle: "The Opportunity",
    opportunity: "News consumption in the U.S. is shifting to video platforms like TikTok, Instagram, and YouTube—especially among younger audiences. According to Reuters, about half of Americans under 35 use social media or video networks as their primary source of news.",
    opportunityDetail: "The New York Times was already producing ~20 vertical news videos per day, but most users saw these on third-party apps like Instagram or TikTok. We needed to create a home for videos within our own app.",

    proposedSolution: "Watch Tab: A dedicated vertical video feed",
    proposedSolutionDetail: "The initial vision from the senior editor was a dedicated Watch tab in the News app: a vertical video feed similar to TikTok, featuring 15-20 editorially curated videos per day.",

    assumptions: [
      "The feature will improve engagement with users who don't already have a strong, resilient habit with us.",
      "The Watch tab should serve as a \"video version\" of the day's top stories—a replacement for reading the Home tab for users who prefer videos over text.",
      "Users will value editorial curation over a personalized feed.",
    ],

    stakeholderDynamicsTitle: "Challenging Stakeholder Dynamics",
    stakeholderDynamics: "I had concerns with this product design approach based on prior experience at Instagram. Without an algorithm and with a limited content pool (15-20 videos per day vs. unlimited on social platforms), would it lead to an engaging and satisfying experience? Would the right users even adopt it?",
    stakeholderDynamicsDetail: "My initial suggestion to explore multiple designs was met with resistance from the senior editor. I knew he didn't respond well to hypothetical push-back, so I designed a research program to test the core assumptions that needed to be true for the \"dedicated, curated feed of videos\" to work.",

    team: {
      myRole: "UX Researcher",
      myRoleDescription: "Designed and presented all research. Mentored junior researcher who oversaw diary study.",
      team: "Cross-functional",
      teamDescription: "Product Manager, Product Designer, Data Scientist, Editors from Newsroom Video",
      stakeholders: "Senior Leadership",
      stakeholdersDescription: "Chief Product Officer, Masthead editor overseeing Video, Head of Video in Newsroom",
    },
  },

  // ============================================
  // SLIDE 2: RESEARCH OBJECTIVES
  // ============================================
  objectives: {
    header: "Research Objectives",
    framing: "I positioned the research as a \"learning agenda\" to run in parallel with an A/B test of the Watch Tab:",

    objective1Title: "1. Test the Core Hypotheses",
    hypotheses: [
      "Are younger NYT users more likely to consume news videos?",
      "Are less engaged NYT users more likely to consume news videos?",
      "Is there a sizable group of users who use video first or exclusively in their news consumption?",
      "Are our current users interested in getting videos from The New York Times in the app?",
      "Is the value proposition of an editorially curated Watch Tab clear and attractive?",
    ],

    objective2Title: "2. Understand How Users Experience the Feature",
    experienceQuestions: [
      "What draws people to news videos vs. other formats?",
      "What behaviors and expectations do users bring from social platforms? How do these shape how they interact with our tab?",
    ],

    objective3Title: "3. Be Ready When A/B Test Results Arrive",
    ifPositive: "Understand what's working to scale it",
    ifNeutral: "Immediately diagnose why and what to try next",

    xfnCollaboration: [
      "Brought product, design, and editorial stakeholders into survey design and diary study planning",
      "Shared preliminary findings throughout to build trust",
      "Framed insights as opportunities, not criticisms",
    ],
  },

  // ============================================
  // SLIDE 3: RESEARCH APPROACH
  // ============================================
  approach: {
    header: "Research Approach",
    title: "Two-Method Design (Parallel with A/B Test)",

    survey: {
      title: "A. Quantitative Survey",
      sample: "n=~3,000 app and web visitors",
      fielded: "Sept 30–Nov 18, 2025",
      method: "Intercept survey on News app and web",
      analysis: "Python in Google Colab, weighted on platform + on-site activity for representativeness",
      purpose: "Validate hypotheses at scale, understand audience-level patterns",
    },

    diaryStudy: {
      title: "B. Qualitative Diary Study",
      sample: "n=21 U.S. news consumers via dscout",
      fielded: "Sept 26–Oct 3, 2025 (7 days)",
      mix: "11 subscribers / 10 non-subscribers",
      recruited: "People who engage with NYT news AND watch news videos on TikTok/Instagram/YouTube",
      activities: [
        "First impressions exploring the Watch tab",
        "Daily entries showing usage throughout the week",
        "Screen recordings + video reflections",
        "Comparison to their normal video-watching habits",
      ],
      purpose: "Understand the \"why\" behind behaviors, surface expectations shaped by TikTok/Reels",
    },

    whyThisApproach: [
      { title: "Survey", description: "Captured what people do and prefer at scale" },
      { title: "Diary study", description: "Revealed why they behave that way and what they expect" },
      { title: "Parallel timing", description: "Insights ready immediately when A/B test results came in" },
      { title: "Triangulation", description: "Behavioral data showed who actually used the feature vs. who should have" },
    ],

    constraints: [
      { title: "Tight timeline", description: "Had to deliver before A/B test concluded → Ran survey and diary study concurrently" },
      { title: "Stakeholder skepticism", description: "Involved them in research design; shared early findings to build buy-in (\"dropped by\" the senior editor's office often)" },
    ],
  },

  // ============================================
  // SLIDE 4: KEY FINDINGS
  // ============================================
  findings: {
    header: "Key Research Findings",
    title: "Hypothesis Testing Results",

    validated: [
      {
        hypothesis: "Are younger NYT users more likely to consume news videos?",
        finding: "Visitors under 30 who say watching videos online is their primary way to get news are 3x as high as any other age group.",
      },
      {
        hypothesis: "Are less engaged NYT users more likely to consume news videos?",
        finding: "Visitors with fewer active days/month are 2x as likely to use online videos vs. more frequent visitors.",
      },
    ],

    notValidated: [
      {
        hypothesis: "Is there a sizable group of users who use video first or exclusively?",
        finding: "The vast majority of users (regardless of age or onsite activity) read or listen to the news first, and sometimes watch videos after. Users who prefer reading outnumber video-first users 4:1.",
      },
      {
        hypothesis: "Are current users interested in getting videos from NYT in the app?",
        finding: "Awareness of the fact that we offer videos in the app was high, but interest in watching them was low.",
      },
      {
        hypothesis: "Is the value proposition of an editorially curated Watch Tab clear and attractive?",
        finding: "The Watch Tab's value proposition was neither clear nor attractive to users.",
      },
    ],
  },

  // ============================================
  // SLIDE 5: CORE INSIGHT
  // ============================================
  insight: {
    header: "Core Insight",

    keyInsight: "When they come directly to a news source, users are seeking specific videos, not passive browsing.",
    surveyFinding: "Top job for video = \"Get a fuller picture of a particular event\" (for articles, the top job is \"Get up to speed on the latest news\")",

    diaryStudyTitle: "What the Diary Study Revealed",
    diaryStudyIntro: "Most users wanted an easier way to discover relevant content. While they expected a personalized feed tailored to their interests, they also emphasized the need to find videos covering specific news stories.",

    issues: [
      {
        title: "1. No Personalization or Navigation",
        description: "Users conditioned by algorithmic feeds expected content tailored to their interests. Without it, they felt forced to waste time on content they didn't care about.",
        quote: "\"One thing I'd be curious about is, like, how personalized is this? Like, is this the same New York Times page that every New York Times app user sees?... I do like to have, like, kind of that experience where it's very catered to what I wanna see.\"",
        participant: "JH",
      },
      {
        title: "2. \"Scan and Sample\" Behavior from Social Platforms",
        description: "Users gave each video only 3-5 seconds to capture their interest before moving on. If the video didn't immediately hook them or load within seconds, they skipped.",
        quote: "\"I'm not interested in videos that are three to five minutes long when they don't initially grab me in, like, the first two seconds. The pace of some of the videos were so slow... I'm just so used to reels and Instagram videos. I guess I've lost patience for videos that long.\"",
        participant: "JI",
      },
      {
        title: "3. No Way to Find Specific Videos",
        description: "Social platforms satisfy passive discovery through algorithms. But when users want NYT-quality journalism, they're looking for specific stories (natural disasters, breaking events, complex situations where they need to \"see it to believe it\").",
        quote: "\"This is what I don't like. You have to scroll through the whole library that they have there to find what you're looking for. How long can I scroll for?\"",
        participant: "MG",
      },
      {
        title: "4. Content Repetition Frustrated Users",
        description: "Limited to 15-20 videos per day, users saw the same content throughout the day. They instinctively tried to refresh, expecting new content like on TikTok.",
        quote: "\"I also noticed I've been going on to the watch button, and it does show the same videos the first, like, few times... When you go to TikTok or Instagram Reels... you don't see the same videos... it will have new videos. It will refresh. But every time I've gone in there it's, like, the same three videos to start.\"",
        participant: "JD",
      },
    ],
  },

  // ============================================
  // SLIDE 6: TRIANGULATION
  // ============================================
  triangulation: {
    header: "Triangulating with Behavioral Data",

    abTestResult: "Product team's A/B test showed neutral results—no significant lift in engagement metrics. Because I had run survey and diary study research in parallel, we immediately had the data to understand why.",

    coreProblemTitle: "The Core Problem: Wrong Audience Reached the Feature",
    surveyPredicted: "Less engaged users are 2x more likely to prefer video",
    behavioralShowed: "Only 10% of weekly app users visited the tab; majority were already super-engaged (7 days/week)",
    disconnect: "The majority of Watch Tab users were super-engaged, already spending 7 days a week on our app. The feature reached our most engaged users, not the less-engaged video-using audience we were trying to attract.",

    shallowEngagementTitle: "Why Engagement Was Shallow",
    behavioralMetrics: {
      timeSpent: "~xx sec",
      timeSpentLabel: "Median time spent per visit",
      videoImpressions: "<xx %",
      videoImpressionsLabel: "Visits with more than 1 video impression",
      weeklyTime: "~x min",
      weeklyTimeLabel: "Weekly time on Watch Tab (vs. much more total in-app)",
    },
    diaryExplanation: [
      "Users wanted to find specific videos for specific stories, not browse a feed. Without search or navigation, they couldn't accomplish their goals.",
      "\"Scan and sample\" behavior meant if the first video wasn't relevant, they bounced.",
    ],
  },

  // ============================================
  // SLIDE 7: RECOMMENDATIONS
  // ============================================
  recommendations: {
    header: "Recommendations & Stakeholder Management",

    challenge: "Senior editor had strong vision for the video feed. Results showed neutral metrics. Risk of stakeholders becoming defensive or dismissing research.",

    communicationStrategyTitle: "My Communication Strategy",
    strategies: [
      {
        title: "1. Pre-meeting 1:1s with key stakeholders",
        points: [
          "Helped each stakeholder internalize the data before the group meeting",
          "Gave them time to process implications without pressure to react publicly",
          "Built individual buy-in before collective discussion",
        ],
      },
      {
        title: "2. Led with \"what we learned\" not \"what it means\"",
        points: [
          "Started with validated hypotheses (younger users, less engaged users DO prefer video)",
          "Then shared what users told us (they want to find specific videos, not browse)",
          "Showed behavioral data confirming the pattern",
        ],
      },
      {
        title: "3. Framed insights as opportunities, not failures",
        quote: "\"We validated the core audience hypothesis—younger and less engaged users DO want video. The question is how to get video to them in a way that matches their mental model and is integrated with how they already use our app.\"",
      },
      {
        title: "4. Let recommendations emerge from the group",
        intro: "Asked questions like: \"Given what users told us about wanting to find specific videos, what might that suggest?\" and \"How should we think about the mismatch between who we want to use this feature and who has adopted it so far?\"",
        result: "The skeptical senior editor was the one to suggest we pursue ways to find \"the less engaged users where they are.\" Product lead suggested article page integration in the meeting before I did.",
      },
    ],

    recommendationsTitle: "The Recommendations (that I kept in my back pocket)",
    recommendationsList: [
      {
        title: "1. Meet users where they already are",
        subtitle: "Integrate video into article pages",
        points: [
          "Article pages are the #1 visited surface in the app",
          "Most users read/listen first, then watch videos to \"get a fuller picture\"",
          "Put videos where users are already engaging with the story",
        ],
      },
      {
        title: "2. Add support for finding specific videos",
        subtitle: "Enable intent-driven discovery",
        points: [
          "Users don't want to scroll through 15-20 videos hoping to find what they need",
          "Provide search, categories, or navigation",
          "Social platforms satisfy passive discovery; NYT should own intentional discovery",
        ],
      },
    ],
  },

  // ============================================
  // SLIDE 8: IMPACT
  // ============================================
  impact: {
    header: "Impact & Next Steps",
    title: "Research informed a strategic pivot",

    impactPoints: [
      {
        number: "1",
        title: "Strategic Direction Change",
        description: "Research informed pivot away from feed-centric strategy toward integrated video experiences",
      },
      {
        number: "2",
        title: "New Product Explorations",
        description: "Video team exploring article integration and search-based discovery as alternative approaches",
      },
      {
        number: "3",
        title: "Stakeholder Engagement Preserved",
        description: "Stakeholders remain engaged and committed to video strategy (didn't abandon it despite neutral test)",
      },
      {
        number: "4",
        title: "Research as Strategic Partner",
        description: "Established research as essential partner in product development and editorial strategy, not just validator",
      },
    ],

    nextSteps: [
      "Design explorations for article-page video integration",
      "Prototype and test search/navigation approaches for video discovery",
      "Research to validate new designs with the target audience (less engaged users)",
    ],
  },

  // ============================================
  // SLIDE 9: REFLECTION
  // ============================================
  reflection: {
    header: "Reflection",
    title: "What Made This Work",

    factors: [
      {
        icon: "Clock",
        title: "Strategic Timing",
        description: "Running research in parallel with A/B test meant insights were ready when the team needed answers most",
      },
      {
        icon: "Shield",
        title: "Proactive Risk Mitigation",
        description: "Flagged concerns early, designed research to learn either way (not just validate)",
      },
      {
        icon: "Layers",
        title: "Method Triangulation",
        description: "Survey tested hypotheses, diary study explained behaviors, behavioral data showed who actually used it",
      },
      {
        icon: "Users",
        title: "Stakeholder Partnership",
        description: "Brought XFN partners into research design; they felt ownership over findings",
      },
      {
        icon: "MessageCircle",
        title: "Non-Defensive Communication",
        description: "Pre-meeting 1:1s, leading with learning, letting recommendations emerge from the group",
      },
      {
        icon: "Zap",
        title: "Speed with Rigor",
        description: "Delivered actionable insights within product timeline without sacrificing quality",
      },
    ],
  },
};

export type NYTWatchTabContent = typeof nytWatchTabContent;
