/**
 * NYT YOUTUBE STRATEGY CASE STUDY CONTENT
 *
 * Edit content here — it is used by NYTYouTubeCaseStudy.tsx
 */

// ============================================
// SHARED
// ============================================
export const sharedContent = {
  meta: {
    title: "YouTube and Video Strategy for The New York Times",
    subtitle: "A self-initiated, cross-organizational research program that shaped YouTube strategy across News, Cooking, and Wirecutter",
    author: "Erik Olesund",
    role: "UX Researcher",
  },
  team: {
    myRole: "Lead UX Researcher",
    myRoleDescription: "Proactively proposed and led all research across three business verticals",
    team: "Cross-organizational",
    teamDescription: "Partnered with stakeholders across News, Cooking, and Wirecutter; Audience Editor in the Newsroom for content analysis",
    stakeholders: "Senior Leadership",
    stakeholdersDescription: "Head of Research, Chief Data Officer, senior Masthead editor, team leads across News, Cooking, and Wirecutter",
  },
};

// ============================================
// READ MODE CONTENT
// ============================================
export const readContent = {
  // ---------- SLIDE 0: TITLE ----------
  title: {
    headline: "YouTube and Video Strategy for The New York Times",
    subtitle: "A self-initiated, cross-organizational research program that shaped YouTube strategy across News, Cooking, and Wirecutter",
  },

  // ---------- SLIDE 1: BACKGROUND ----------
  background: {
    header: "Background",
    contextConstraintsTitle: "Context & Constraints",
    contextConstraintsBullets: [
      "Pew studies showed a third of Americans already get news on YouTube, but NYT News was barely maintaining a presence on the platform.",
      "I proactively pitched this research and secured a small budget after initial pushback that \"no one was directly asking for it.\" A senior Masthead editor (behind initiatives like The Daily) championed the effort internally.",
      "I designed a single survey and parallel diary studies that answered questions across all three business verticals simultaneously.",
    ],
    bigQuestionsTitle: "The Big Questions",
    bigQuestions: [
      "Will it make business sense for the NYT to invest in improving our presence on YouTube? Who might we reach? Will this audience ever become paying subscribers?",
      "If we focus more on YouTube, what content will work for each of our brands — News, Cooking, and Wirecutter?",
    ],
  },

  // ---------- SLIDE 2: ASSUMPTIONS ----------
  assumptions: {
    header: "Starting Assumptions Across Teams",
    description: "Before the research began, each team had different beliefs about YouTube's relevance to their work. These assumptions shaped the questions I needed to answer.",
    teams: [
      {
        name: "News",
        assumption: "YouTube is not worth our time. The audience is too young and not interested in ever paying for news or the NYT. We don't have the operational capacity to break news and compete with CNN. Our current approach where we cross-post vertical videos originally made for Instagram and TikTok will do just fine.",
      },
      {
        name: "Cooking",
        assumption: "YouTube is important to us primarily as a brand builder. People go there to learn or be entertained, not to cook. Our current video series are successful and enough.",
      },
      {
        name: "Wirecutter",
        assumption: "Our big bet is a weekly talk show (modeled after our podcast \"The Wirecutter Show\") focused on product reviews and home advice. We think there is demand for our content as entertainment, not utility.",
      },
    ],
  },

  // ---------- SLIDE 3: RESEARCH OBJECTIVES ----------
  objectives: {
    header: "Research Objectives",
    objectivesList: [
      {
        title: "1. Describe the Audience",
        questions: [
          "Who is using YouTube for our categories (News, Cooking, Wirecutter)?",
          "What is their openness to paying for news?",
          "Who is the NYT already reaching on YouTube, and what is the overlap between YouTube category audiences and current NYT readers?",
        ],
      },
      {
        title: "2. Understand Use Cases and Winning Formats",
        questions: [
          "Why are people who watch videos in our categories doing this on YouTube? What jobs to be done are they looking to solve?",
          "What are people watching in each category, and which formats are most successful?",
          "What impact can we detect from our current presence on YouTube?",
        ],
      },
    ],
  },

  // ---------- SLIDE 4: APPROACH ----------
  approach: {
    header: "Research Approach",
    title: "Mixed-Methods Across Three Business Units",
    methods: [
      {
        title: "A. Survey of US General Population",
        details: {
          sample: "~2,000 US adults per category",
          fielded: "December 2024 – January 2025",
          method: "Administered via market research vendor",
          description: "Understand US adults who use YouTube, Instagram, and TikTok at least several times per month for various types of video content — who they are from a demographic and attitudinal perspective, and how they use each platform.",
        },
      },
      {
        title: "B. Three Diary Studies via dscout",
        details: {
          sample: "n=20 per category (News, Cooking, Product Reviews)",
          fielded: "January – February 2025 via dscout",
          duration: "7 days each",
          method: "Diary study with follow-up interviews (n=6 per group)",
          description: "Understand why people turn to YouTube for each category; what good content looks like; and how they use the platform. Participants answered questions over the course of 7 days and submitted examples of good and bad category videos that they encountered each day.",
        },
      },
    ],
    contentAnalysisNote: "Additionally, I partnered with an Audience Editor in the Newsroom who pulled thousands of videos from our competitor set to see what performs best. This was primarily used to corroborate qualitative findings from the diary studies.",
    surveyExamples: {
      title: "Survey Question Examples",
      items: [
        {
          category: "Category Audience Classification",
          question: "Please think specifically about video content on social media. Which, if any, of the following types of video content do you regularly come across on any social media site or app (e.g., YouTube, Facebook, Instagram, TikTok)?",
          options: [
            "Product reviews, ratings, and buying guides (not including ads)",
            "Podcasts (or clips from podcast episodes)",
            "Recipes, meal ideas, and cooking techniques",
            "News content from a national or local news site or app",
            "News content from a news personality / freelance journalist / content creator",
            "Opinion content from a news organization (e.g., columns, guest essays, editorials)",
            "Opinion content from a news personality / content creator (e.g., reactions to news, analysis of cultural or political issues)",
            "+ many more options",
            "None of these",
          ],
        },
        {
          category: "Preferred Video Formats",
          question: "Thinking specifically about videos on [YouTube / Instagram / TikTok], what kinds of videos do you most prefer when it comes to [News / Recipes / Product reviews]?",
          options: [
            "Interviews",
            "Discussions with a panel / roundtable",
            "Video footage with some text on-screen",
            "Journalist / reporter / creator speaking on-screen",
            "Voiceover-led video (e.g., narrator's voice played alongside video graphics)",
            "Some other format type of video (specify)",
          ],
        },
        {
          category: "Jobs to Be Done",
          question: "Which of the following best describe why you watch video content for [News / Recipes / Product reviews] on [YouTube / Instagram / TikTok]?",
          options: [
            "News & Opinion: Catch up on what's happening · Understand the context and significance of an event · Develop or sharpen my perspective · Hear from voices I can relate to or admire · Help me make a decision · Captivate me · Help me improve",
            "Recipes: Feel entertained · Improve my cooking skills · Discover new things to cook or eat · Learn about other cuisines or cultures · Because I like the person hosting it",
            "Product Reviews: Outsource the work · Make an informed decision · Get reassurance about a choice · Understand the lay of the land · Get ideas on what else to buy",
          ],
        },
      ],
    },
    surveyAnalysis: {
      title: "Survey Analysis Approach",
      steps: [
        { title: "1. Data Weighting", description: "Data was weighted by our market research vendor to be representative of the U.S. general population." },
        { title: "2. Respondent Classification", description: "Respondents were classified as platform users (use YouTube, Instagram, or TikTok at least several times per month), category audience (watch video content in News, Cooking, or Product Reviews), and/or category audience on a specific platform — enabling comparisons across platforms and content types." },
        { title: "3. Cross-Tabulation", description: "Ran weighted cross-tabs to compare audience demographics, attitudes, and behaviors across platforms and categories. This allowed us to identify where YouTube audiences differed from Instagram and TikTok audiences." },
        { title: "4. Visualizations", description: "Created publication-quality charts following NYT visual style guidelines — clean typography, purposeful color choices, and clear data hierarchy — to communicate findings to stakeholders across three business verticals." },
      ],
    },
    diaryExamples: {
      title: "Diary Study Activity Examples",
      items: [
        {
          day: "Day 1",
          title: "The role YouTube plays in your news consumption",
          description: "In a 3–4 minute selfie video, explain the role YouTube plays in how you access news. Sub-prompts: How do you define \"news\"? Why do you turn to YouTube for news? What types of news do you get on YouTube? Who do you get your news from on YouTube? Do you seek out specific accounts or encounter news in your feed/recommendations?",
        },
        {
          day: "Days 2–7",
          title: "Discover news on YouTube",
          description: "Record a video whenever you come across or seek out a news video on YouTube. Submit 3 entries spread throughout the week from different days and times.",
        },
        {
          day: "Days 2–7",
          title: "Good and not-so-great examples",
          description: "Submit examples of great and not-so-great news content on YouTube (3 good, 3 bad). For each, provide a screenshot, link, and brief description focused on format, style, tone, and source.",
        },
        {
          day: "Day 7",
          title: "Deep dive on your favorite example",
          description: "Pick your favorite \"good\" example from the previous activity and explain it in a 2–3 minute selfie video: How did you find it? Why is it your favorite? What does it do uniquely well? What could it do differently?",
        },
      ],
    },
    diaryAnalysis: {
      title: "Diary Study Analysis Approach",
      steps: [
        { title: "1. Export from dscout", description: "Exported all responses from dscout into a deck for easy review by me and the team, including video recordings, transcripts, screenshots, and links submitted by participants." },
        { title: "2. Transcript and Video Review", description: "Reviewed transcripts and video examples across all three category studies (News, Cooking, Product Reviews) to identify key themes — looking for patterns in why participants watch, what they consider \"good,\" and how they discover content." },
        { title: "3. Illustrative Examples", description: "Pulled the strongest illustrative examples (video clips, participant quotes, and submitted screenshots) into the main presentation to bring findings to life for stakeholders across each business vertical." },
      ],
    },
  },

  // ---------- SLIDE 5: FINDINGS - AUDIENCE ----------
  findingsAudience: {
    header: "Key Findings: The Audience",
    leadFinding: "YouTube presents a clear opportunity to reach new audiences for News, Cooking, and Wirecutter — but each brand needs a fundamentally new approach to succeed on the platform.",
    findings: [
      {
        title: "YouTube is used by everyone, not just kids and teenagers.",
        description: "The category audiences we hope to reach were older than we expected.",
      },
      {
        title: "Large overlap with our Total Addressable Market",
        description: "A very large share of people who we consider to be part of the NYT's Total Addressable Market (currently use our categories and are willing to pay for them) are using YouTube for these categories too.",
      },
      {
        title: "YouTube lets us reach new audiences",
        description: "YouTube lets us reach audiences who aren't already deeply engaged with The Times on-site, but they are looking for content that is different from what each brand planned to offer.",
      },
    ],
  },

  // ---------- SLIDE 6: FINDINGS - USE CASES ----------
  findingsUseCases: {
    header: "Key Findings: Use Cases and Winning Formats by Category",
    leadFinding: "What people want from YouTube in each category is fundamentally different from what they seek on TikTok and Instagram.",
    categories: [
      {
        name: "News",
        icon: "Newspaper",
        useCase: "People use YouTube to make sense of the news and hear perspectives from real people so that they can form their own conclusion about current events.",
        format: "Formats featuring people talking to the camera are more common and successful on YouTube vs. Instagram/TikTok (where live shots of news events are more common).",
      },
      {
        name: "Wirecutter",
        icon: "ShoppingCart",
        useCase: "People primarily use YouTube for the same reason why they use Wirecutter's website — to decide what to buy and learn how a product works. Other use cases like general advice or inspiration/entertainment are much less common.",
        format: "Videos that both demonstrate how a product works, ideally in a real context, and compares it to others were most preferred.",
      },
      {
        name: "Cooking",
        icon: "ChefHat",
        useCase: "The primary use case for food and recipe videos is to cook a recipe. Important but less common use cases are to learn new cooking techniques or to be inspired/entertained.",
        format: "The most preferred cooking videos included chapters and clear visuals of the ingredients and how to add them.",
      },
    ],
  },

  // ---------- SLIDE 7: RECOMMENDATIONS ----------
  recommendations: {
    header: "Recommendations",
    teamRecommendations: [
      {
        team: "News",
        recommendation: "Don't worry about being first — focus on explaining the news and why it matters. Lead with personalities. Stop cross-posting Instagram/TikTok vertical videos, which are built for a different platform and use case.",
      },
      {
        team: "Wirecutter",
        recommendation: "Turn your top-performing reviews into videos and focus on the core use case: helping people decide what to buy and how to use products. De-prioritize the weekly talk show concept — people use YouTube like a search engine for reviews, not as a source for entertainment or inspiration in this category.",
      },
      {
        team: "Cooking",
        recommendation: "Current video series focused on learning and entertainment are already performing well. In addition, start creating video recipes that people can cook along with to reach an even wider audience and serve the top use cases for food videos on the platform.",
      },
    ],
  },

  // ---------- SLIDE 8: IMPACT ----------
  impact: {
    header: "Impact",
    title: "Research shaped video strategy across three business verticals",
    teams: [
      {
        team: "News",
        outcomes: [
          "Shifted resources from breaking news clips to podcast video production, prioritizing shows that help people make sense of the news and current events — hosted by strong personalities (Ezra Klein, Popcast, Wesley Morris)",
          "Video team in the newsroom took a beat to rethink the long-term strategy for news videos",
          "Stopped cross-posting vertical videos to avoid hurting engagement",
        ],
      },
      {
        team: "Wirecutter",
        outcomes: [
          "Enthusiastically let go of their original plan to create a weekly talk show",
          "Pivoted to making video versions of their top-performing reviews",
        ],
      },
      {
        team: "Cooking",
        outcomes: [
          "Skeptical of the recommendation since their current videos (focused on education and entertainment) performed well",
          "Key partner for driving change (lead UXR for Cooking) was on maternity leave — waiting for her return before pushing further",
        ],
      },
    ],
  },

  // ---------- SLIDE 9: REFLECTION ----------
  reflection: {
    header: "Reflection",
    title: "Lessons Learned",
    lessonsList: [
      {
        number: "01",
        title: "Seeing what people actually watch is more revealing than asking them directly",
        description: "Having diary study participants submit examples of videos they watched each day — and explain what was good or bad about them — was a form of observational research that surfaced richer insights than direct questioning alone.",
      },
      {
        number: "02",
        title: "Don't finalize the survey before the research objectives are locked",
        description: "Writing the survey in parallel with still-evolving research objectives led to an unnecessarily long and expensive survey. Next time I would push to finalize objectives first, even if it means a tighter timeline for survey fielding.",
      },
      {
        number: "03",
        title: "Cross-organizational research requires extra investment in alignment",
        description: "Working across three business verticals with different priorities and timelines meant spending significant time on stakeholder alignment — not just sharing findings, but ensuring each team understood how the insights applied to their specific context. The payoff was worth it: teams that felt ownership over the research were far more likely to act on it.",
      },
    ],
  },
};

// ============================================
// PRESENT MODE CONTENT
// ============================================
export const presentContent = {
  // ---------- SLIDE 0: TITLE ----------
  title: {
    headline: "YouTube and Video Strategy for The New York Times",
    subtitle: "A self-initiated, cross-organizational research program that shaped YouTube strategy across News, Cooking, and Wirecutter",
  },

  // ---------- SLIDE 1: BACKGROUND ----------
  background: {
    header: "Background",
    bigQuestions: [
      "Will it make business sense for the NYT to invest in improving our presence on YouTube? Who might we reach? Will this audience ever become paying subscribers?",
      "If we focus more on YouTube, what content will work for each of our brands — News, Cooking, and Wirecutter?",
    ],
  },

  // ---------- SLIDE 2: ASSUMPTIONS ----------
  assumptions: {
    header: "Starting Assumptions Across Teams",
    description: "Before the research began, each team had different beliefs about YouTube's relevance to their work.",
    teams: [
      {
        name: "News",
        assumption: "YouTube is not worth our time. The audience is too young and not interested in ever paying for news or the NYT. We don't have the operational capacity to break news and compete with CNN. Our current approach where we cross-post vertical videos originally made for Instagram and TikTok will do just fine.",
      },
      {
        name: "Cooking",
        assumption: "YouTube is important to us primarily as a brand builder. People go there to learn or be entertained, not to cook. Our current video series are successful and enough.",
      },
      {
        name: "Wirecutter",
        assumption: "Our big bet is a weekly talk show (modeled after our podcast \"The Wirecutter Show\") focused on product reviews and home advice. We think there is demand for our content as entertainment, not utility.",
      },
    ],
  },

  // ---------- SLIDE 3: RESEARCH OBJECTIVES ----------
  objectives: {
    header: "Research Objectives",
    objectivesList: [
      {
        title: "1. Describe the Audience",
        questions: [
          "Who is using YouTube for our categories (News, Cooking, Wirecutter)?",
          "What is their openness to paying for news?",
          "Who is the NYT already reaching on YouTube, and what is the overlap between YouTube category audiences and current NYT readers?",
        ],
      },
      {
        title: "2. Understand Use Cases and Winning Formats",
        questions: [
          "Why are people who watch videos in our categories doing this on YouTube? What jobs to be done are they looking to solve?",
          "What are people watching in each category, and which formats are most successful?",
          "What impact can we detect from our current presence on YouTube?",
        ],
      },
    ],
  },

  // ---------- SLIDE 4: APPROACH ----------
  approach: {
    header: "Research Approach",
    title: "Mixed-Methods Across Three Business Units",
    methods: [
      {
        title: "A. Survey of US General Population",
        details: {
          sample: "~2,000 US adults per category",
          fielded: "December 2024 – January 2025",
          method: "Administered via market research vendor",
          description: "Understand US adults who use YouTube, Instagram, and TikTok at least several times per month for various types of video content — who they are from a demographic and attitudinal perspective, and how they use each platform.",
        },
      },
      {
        title: "B. Three Diary Studies via dscout",
        details: {
          sample: "n=20 per category (News, Cooking, Product Reviews)",
          fielded: "January – February 2025 via dscout",
          duration: "7 days each",
          method: "Diary study with follow-up interviews (n=6 per group)",
          description: "Understand why people turn to YouTube for each category; what good content looks like; and how they use the platform. Participants answered questions over the course of 7 days and submitted examples of good and bad category videos that they encountered each day.",
        },
      },
    ],
  },

  // ---------- SLIDE 5: FINDINGS - AUDIENCE ----------
  findingsAudience: {
    header: "Key Findings: The Audience",
    leadFinding: "YouTube presents a clear opportunity to reach new audiences for News, Cooking, and Wirecutter — but each brand needs a fundamentally new approach to succeed on the platform.",
    findings: [
      {
        title: "YouTube is used by everyone, not just kids and teenagers.",
        description: "The category audiences we hope to reach were older than we expected.",
      },
      {
        title: "Large overlap with our Total Addressable Market",
        description: "A very large share of people who we consider to be part of the NYT's Total Addressable Market (currently use our categories and are willing to pay for them) are using YouTube for these categories too.",
      },
      {
        title: "YouTube lets us reach new audiences",
        description: "YouTube lets us reach audiences who aren't already deeply engaged with The Times on-site, but they are looking for content that is different from what each brand planned to offer.",
      },
    ],
  },

  // ---------- SLIDE 6: FINDINGS - USE CASES ----------
  findingsUseCases: {
    header: "Key Findings: Use Cases and Winning Formats by Category",
    leadFinding: "What people want from YouTube in each category is fundamentally different from what they seek on TikTok and Instagram.",
    categories: [
      {
        name: "News",
        icon: "Newspaper",
        useCase: "People use YouTube to make sense of the news and hear perspectives from real people so that they can form their own conclusion about current events.",
        format: "Formats featuring people talking to the camera are more common and successful on YouTube vs. Instagram/TikTok (where live shots of news events are more common).",
      },
      {
        name: "Cooking",
        icon: "ChefHat",
        useCase: "The primary use case for food and recipe videos is to cook a recipe. Important but less common use cases are to learn new cooking techniques or to be inspired/entertained.",
        format: "The most preferred cooking videos included chapters and clear visuals of the ingredients and how to add them.",
      },
      {
        name: "Wirecutter",
        icon: "ShoppingCart",
        useCase: "People primarily use YouTube for the same reason why they use Wirecutter's website — to decide what to buy and learn how a product works. Other use cases like general advice or inspiration/entertainment are much less common.",
        format: "Videos that both demonstrate how a product works, ideally in a real context, and compares it to others were most preferred.",
      },
    ],
  },

  // ---------- SLIDE 7: RECOMMENDATIONS ----------
  recommendations: {
    header: "Recommendations",
    teamRecommendations: [
      {
        team: "News",
        recommendation: "Don't worry about being first — focus on explaining the news and why it matters. Lead with personalities. Stop cross-posting Instagram/TikTok vertical videos, which are built for a different platform and use case.",
      },
      {
        team: "Wirecutter",
        recommendation: "Turn your top-performing reviews into videos and focus on the core use case: helping people decide what to buy and how to use products. De-prioritize the weekly talk show concept — people use YouTube like a search engine for reviews, not as a source for entertainment or inspiration in this category.",
      },
      {
        team: "Cooking",
        recommendation: "Current video series focused on learning and entertainment are already performing well. In addition, start creating video recipes that people can cook along with to reach an even wider audience and serve the top use cases for food videos on the platform.",
      },
    ],
  },

  // ---------- SLIDE 8: IMPACT ----------
  impact: {
    header: "Impact",
    title: "Research shaped video strategy across three business verticals",
    teams: [
      {
        team: "News",
        outcomes: [
          "Shifted resources from breaking news clips to podcast video production, prioritizing shows that help people make sense of the news and current events — hosted by strong personalities (Ezra Klein, Popcast, Wesley Morris)",
          "Video team in the newsroom took a beat to rethink the long-term strategy for news videos",
          "Stopped cross-posting vertical videos to avoid hurting engagement",
        ],
      },
      {
        team: "Wirecutter",
        outcomes: [
          "Enthusiastically let go of their original plan to create a weekly talk show",
          "Pivoted to making video versions of their top-performing reviews",
        ],
      },
      {
        team: "Cooking",
        outcomes: [
          "Skeptical of the recommendation since their current videos (focused on education and entertainment) performed well",
          "Key partner for driving change (lead UXR for Cooking) was on maternity leave — waiting for her return before pushing further",
        ],
      },
    ],
  },

  // ---------- SLIDE 9: REFLECTION ----------
  reflection: {
    header: "Reflection",
    title: "Lessons Learned",
    lessonsList: [
      {
        number: "01",
        title: "Seeing what people actually watch is more revealing than asking them directly",
        description: "Having diary study participants submit examples of videos they watched each day — and explain what was good or bad about them — was a form of observational research that surfaced richer insights than direct questioning alone.",
      },
      {
        number: "02",
        title: "Don't finalize the survey before the research objectives are locked",
        description: "Writing the survey in parallel with still-evolving research objectives led to an unnecessarily long and expensive survey. Next time I would push to finalize objectives first, even if it means a tighter timeline for survey fielding.",
      },
      {
        number: "03",
        title: "Cross-organizational research requires extra investment in alignment",
        description: "Working across three business verticals with different priorities and timelines meant spending significant time on stakeholder alignment — not just sharing findings, but ensuring each team understood how the insights applied to their specific context. The payoff was worth it: teams that felt ownership over the research were far more likely to act on it.",
      },
    ],
  },
};
