import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Lightbulb, Quote } from 'lucide-react';

const NYTSlide06Insight: React.FC = () => {
  return (
    <SlideContainer slideNumber={5} header="Core Insight">
      <div className="space-y-10">
        {/* Key Insight */}
        <div className="rounded-2xl bg-primary/10 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Key Insight</span>
          </div>
          <blockquote className="text-2xl font-semibold text-foreground md:text-3xl">
            When they come directly to a news source, users are seeking specific videos, not passive browsing.
          </blockquote>
          <p className="mt-4 text-muted-foreground">
            <strong className="text-foreground">Survey finding:</strong> Top job for video = "Get a fuller picture of a particular event" (for articles, the top job is "Get up to speed on the latest news")
          </p>
        </div>

        {/* Problems revealed by diary study */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">What the Diary Study Revealed</h3>
          <p className="mb-6 text-muted-foreground">
            Most users wanted an easier way to discover relevant content. While they expected a personalized feed tailored to their interests, they also emphasized the need to find videos covering specific news stories.
          </p>
        </div>

        {/* Issue 1 */}
        <div>
          <h4 className="mb-3 font-semibold text-foreground">1. No Personalization or Navigation</h4>
          <p className="mb-4 text-muted-foreground">
            Users conditioned by algorithmic feeds expected content tailored to their interests. Without it, they felt forced to waste time on content they didn't care about.
          </p>
          <div className="space-y-3">
            <div className="rounded-xl bg-muted/60 p-4">
              <Quote className="mb-2 h-4 w-4 text-muted-foreground" />
              <p className="italic text-foreground">
                "One thing I'd be curious about is, like, how personalized is this? Like, is this the same New York Times page that every New York Times app user sees?... I do like to have, like, kind of that experience where it's very catered to what I wanna see."
              </p>
              <p className="mt-2 text-sm text-muted-foreground">— JH (Diary study participant)</p>
            </div>
          </div>
        </div>

        {/* Issue 2 */}
        <div>
          <h4 className="mb-3 font-semibold text-foreground">2. "Scan and Sample" Behavior from Social Platforms</h4>
          <p className="mb-4 text-muted-foreground">
            Users gave each video only 3-5 seconds to capture their interest before moving on. If the video didn't immediately hook them or load within seconds, they skipped.
          </p>
          <div className="rounded-xl bg-muted/60 p-4">
            <Quote className="mb-2 h-4 w-4 text-muted-foreground" />
            <p className="italic text-foreground">
              "I'm not interested in videos that are three to five minutes long when they don't initially grab me in, like, the first two seconds. The pace of some of the videos were so slow... I'm just so used to reels and Instagram videos. I guess I've lost patience for videos that long."
            </p>
            <p className="mt-2 text-sm text-muted-foreground">— JI (Diary study participant)</p>
          </div>
        </div>

        {/* Issue 3 */}
        <div>
          <h4 className="mb-3 font-semibold text-foreground">3. No Way to Find Specific Videos</h4>
          <p className="mb-4 text-muted-foreground">
            Social platforms satisfy passive discovery through algorithms. But when users want NYT-quality journalism, they're looking for specific stories (natural disasters, breaking events, complex situations where they need to "see it to believe it").
          </p>
          <div className="rounded-xl bg-muted/60 p-4">
            <Quote className="mb-2 h-4 w-4 text-muted-foreground" />
            <p className="italic text-foreground">
              "This is what I don't like. You have to scroll through the whole library that they have there to find what you're looking for. How long can I scroll for?"
            </p>
            <p className="mt-2 text-sm text-muted-foreground">— MG (Diary study participant)</p>
          </div>
        </div>

        {/* Issue 4 */}
        <div>
          <h4 className="mb-3 font-semibold text-foreground">4. Content Repetition Frustrated Users</h4>
          <p className="mb-4 text-muted-foreground">
            Limited to 15-20 videos per day, users saw the same content throughout the day. They instinctively tried to refresh, expecting new content like on TikTok.
          </p>
          <div className="rounded-xl bg-muted/60 p-4">
            <Quote className="mb-2 h-4 w-4 text-muted-foreground" />
            <p className="italic text-foreground">
              "I also noticed I've been going on to the watch button, and it does show the same videos the first, like, few times... When you go to TikTok or Instagram Reels... you don't see the same videos... it will have new videos. It will refresh. But every time I've gone in there it's, like, the same three videos to start."
            </p>
            <p className="mt-2 text-sm text-muted-foreground">— JD (Diary study participant)</p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default NYTSlide06Insight;
