import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { MessageSquare, Users, Lightbulb } from 'lucide-react';

const NYTSlide08Recommendations: React.FC = () => {
  return (
    <SlideContainer slideNumber={7} header="Recommendations & Stakeholder Management">
      <div className="space-y-10">
        {/* Challenge */}
        <div className="rounded-2xl bg-amber-500/10 p-5">
          <p className="mb-2 text-sm font-medium text-amber-600">Challenge</p>
          <p className="text-foreground">
            Senior editor had strong vision for the video feed. Results showed neutral metrics. Risk of stakeholders becoming defensive or dismissing research.
          </p>
        </div>

        {/* Communication Strategy */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">My Communication Strategy</h3>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">1. Pre-meeting 1:1s with key stakeholders</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  Helped each stakeholder internalize the data before the group meeting
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  Gave them time to process implications without pressure to react publicly
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  Built individual buy-in before collective discussion
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-3 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">2. Led with "what we learned" not "what it means"</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  Started with validated hypotheses (younger users, less engaged users DO prefer video)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  Then shared what users told us (they want to find specific videos, not browse)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  Showed behavioral data confirming the pattern
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-3 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">3. Framed insights as opportunities, not failures</span>
              </div>
              <p className="italic text-muted-foreground">
                "We validated the core audience hypothesis—younger and less engaged users DO want video. The question is how to get video to them in a way that matches their mental model and is integrated with how they already use our app."
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">4. Let recommendations emerge from the group</span>
              </div>
              <p className="mb-3 text-muted-foreground">
                Asked questions like: "Given what users told us about wanting to find specific videos, what might that suggest?" and "How should we think about the mismatch between who we want to use this feature and who has adopted it so far?"
              </p>
              <div className="rounded-xl bg-green-500/10 p-4">
                <p className="text-foreground">
                  <strong>Result:</strong> The skeptical senior editor was the one to suggest we pursue ways to find "the less engaged users where they are." Product lead suggested article page integration in the meeting before I did.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Recommendations */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">The Recommendations (that I kept in my back pocket)</h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-accent/50 p-5">
              <p className="mb-2 font-semibold text-foreground">1. Meet users where they already are</p>
              <p className="mb-3 text-muted-foreground">Integrate video into article pages</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Article pages are the #1 visited surface in the app</li>
                <li>• Most users read/listen first, then watch videos to "get a fuller picture"</li>
                <li>• Put videos where users are already engaging with the story</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-accent/50 p-5">
              <p className="mb-2 font-semibold text-foreground">2. Add support for finding specific videos</p>
              <p className="mb-3 text-muted-foreground">Enable intent-driven discovery</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Users don't want to scroll through 15-20 videos hoping to find what they need</li>
                <li>• Provide search, categories, or navigation</li>
                <li>• Social platforms satisfy passive discovery; NYT should own intentional discovery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default NYTSlide08Recommendations;
