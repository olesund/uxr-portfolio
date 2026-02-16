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
    title: "The New York Times | Strategy for YouTube",
    subtitle: "A self-initiated, cross-organizational research program that shaped YouTube strategy across News, Cooking, and Wirecutter",
    author: "Erik Olesund",
    role: "UX Researcher",
  },
  team: {
    myRole: "Lead UX Researcher",
    myRoleDescription: "Proactively proposed and led all research across three business units",
    team: "Cross-organizational",
    teamDescription: "Partnered with stakeholders across News, Cooking, and Wirecutter; Audience Editor in the Newsroom for content analysis",
    stakeholders: "Senior Leadership",
    stakeholdersDescription: "Head of Research, Chief Data Officer, senior Masthead editor, team leads across News, Cooking, and Wirecutter",
  },
};

// ============================================
// CONTENT
// ============================================
export const readContent = {
  // ---------- SLIDE 0: TITLE ----------
  title: {
    headline: "The New York Times | Strategy for YouTube",
    subtitle: "A self-initiated, cross-organizational research program that shaped YouTube strategy across News, Cooking, and Wirecutter",
  },

  // ---------- SLIDE 1: BACKGROUND ----------
  background: {
    header: "Background",
    opportunityTitle: "A Self-Initiated Research Program",
    opportunity: "I proactively proposed that we better understand the opportunity on YouTube. I was reading studies from Pew showing that a third of Americans get news on the platform already, but knew that NYT News was barely maintaining a presence there. I also knew that a senior editor on the Masthead who had been behind some of NYT's most innovative initiatives (like The Daily) was curious about YouTube.",
    constraints: "Initially I was told not to pursue this because \"no one was directly asking for it.\" I convinced the head of research it was worth pursuing and secured a small budget to get started. I kept her and the chief data officer in the loop throughout. Working with a small budget meant I had to be strategic: I couldn't run bespoke studies for each team. Instead, I designed a single survey and parallel diary studies that could answer questions across all three business units simultaneously, maximizing insight per dollar while coordinating across organizations with different priorities and timelines.",
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
        assumption: "YouTube is not worth our time. The audience is too young and not interested in ever paying for news or the NYT. Our current approach where we cross-post vertical videos originally made for Instagram and TikTok will do just fine.",
      },
      {
        name: "Cooking",
        assumption: "YouTube is important to us but primarily as a brand builder. People go there to learn or be entertained, not to cook.",
      },
      {
        name: "Wirecutter",
        assumption: "We have no idea what's going on with YouTube but we feel like trying something. Our biggest bet is a weekly show (modeled after our podcast) focused on product reviews and home advice.",
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
          "What role does YouTube play in the US news media landscape today?",
          "Who is using YouTube for our categories (News, Cooking, Wirecutter)?",
          "What is their openness to paying for news?",
          "Who is the NYT already reaching on YouTube, and what is the overlap between YouTube category audiences and current NYT readers?",
        ],
      },
      {
        title: "2. Understand Use Cases and Winning Formats",
        questions: [
          "Why are people who watch videos in our categories doing this on YouTube? What jobs to be done are they looking to solve?",
          "How are they using it and what are they watching?",
          "What impact can we detect from our current presence on YouTube?",
          "What formats are people watching in each category? Which ones are more or less successful?",
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
        { title: "4. Visualizations", description: "Created publication-quality charts following NYT visual style guidelines — clean typography, purposeful color choices, and clear data hierarchy — to communicate findings to stakeholders across three business units." },
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
        { title: "3. Illustrative Examples", description: "Pulled the strongest illustrative examples (video clips, participant quotes, and submitted screenshots) into the main presentation to bring findings to life for stakeholders across each business unit." },
      ],
    },
  },

  // ---------- SLIDE 5: FINDINGS - AUDIENCE ----------
  findingsAudience: {
    header: "Key Findings: The Audience",
    leadFinding: "YouTube presents a clear opportunity to reach and grow our engaged prospects, so long as we perform much better on the platform.",
    findings: [
      {
        title: "YouTube is not just for kids",
        description: "The category audiences we hope to reach were older than we expected.",
      },
      {
        title: "Large overlap with our Total Addressable Market",
        description: "A very large share of people who we consider to be part of the NYT's Total Addressable Market (currently use our categories and are willing to pay for them) are using YouTube for these categories too.",
      },
      {
        title: "YouTube lets us reach new audiences",
        description: "YouTube lets us reach audiences who aren't already deeply engaged with The Times on-site.",
      },
    ],
  },

  // ---------- SLIDE 6: FINDINGS - USE CASES ----------
  findingsUseCases: {
    header: "Key Findings: Use Cases and Winning Formats by Category",
    leadFinding: "People use YouTube for our categories for use cases that are distinct from why they use TikTok and Instagram.",
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
    enterpriseRecommendation: "Increase investment in and focus on YouTube across the organization because the potential to reach our target audience is high.",
    teamRecommendations: [
      {
        team: "News",
        recommendation: "Don't worry about being first — focus on explaining the news and why it matters. Lead with personalities. Stop cross-posting Instagram/TikTok vertical videos, which are built for a different platform and use case.",
      },
      {
        team: "Wirecutter",
        recommendation: "YouTube is a search engine. Turn your top-performing reviews into videos and focus on the core use case of helping people decide what products to buy and how to use them.",
      },
      {
        team: "Cooking",
        recommendation: "You're already doing a lot to help people learn or be entertained. Pilot video recipes that people can cook along with to reach an even wider audience that might be primed to also come to you directly and pay for your larger database of recipes.",
      },
    ],
  },

  // ---------- SLIDE 8: IMPACT ----------
  impact: {
    header: "Impact",
    title: "Research shaped YouTube strategy across three business units",
    teams: [
      {
        team: "News",
        outcomes: [
          "Shifted resources to podcast video production, prioritizing shows focused on explaining a slice of the world hosted by strong personalities (Ezra Klein, Popcast, Wesley Morris)",
          "Audio-first teams received support to script and shoot for video",
          "Video team in the newsroom took a beat to rethink the long-term strategy for news videos",
          "Stopped cross-posting vertical videos to avoid hurting engagement",
        ],
      },
      {
        team: "Wirecutter",
        outcomes: [
          "Enthusiastically let go of their original weekly show plan",
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
        description: "Working across three business units with different priorities and timelines meant spending significant time on stakeholder alignment — not just sharing findings, but ensuring each team understood how the insights applied to their specific context. The payoff was worth it: teams that felt ownership over the research were far more likely to act on it.",
      },
    ],
  },
};
