import React from "react";
import SlideContainer from "@/components/presentation/SlideContainer";

const Slide05bPivot: React.FC = () => {
  return (
    <SlideContainer 
      slideNumber={5} 
      header="The Pivot"
      className="!bg-primary/10"
    >
      <div className="space-y-10">
        {/* Outcome */}
        <div className="rounded-2xl bg-background p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Outcome: Initial Rejection</p>
          <p className="mb-4 text-foreground">
            Leadership pushed back hard. They wanted Instagram to 'feel simple' and worried that a stacked timeline was
            'too complex.'
          </p>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              • The Reels editor was based on Instagram Stories and TikTok. Why change a flow what works so well on
              TikTok?
            </li>
            <li>• Quality is subjective. How do we know advanced videos are better for viewers?</li>
            <li>
              • A complete redesign would require massive resources. How can we be sure a different layout is actually
              easier to use?
            </li>
          </ul>
        </div>

        {/* The Pivot */}
        <div className="rounded-2xl bg-background p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">The Pivot</p>
          <p className="mb-4 text-foreground">
            We didn't give up. Me and my team — who made short-form videos ourselves all the time — had developed a
            strong perspective that our current editing flow was simply too difficult to use to make high-quality videos
            with your phone. But we understood that to convince our senior leadership team we needed to rigorously
            answer two additional questions:
          </p>
          <ul className="space-y-1 text-foreground">
            <li>
              <strong>A.</strong> What makes a video high-quality? (Because we knew Instagram users cared about their
              videos being good.)
            </li>
            <li>
              <strong>B.</strong> Which video editor design makes it easier to create high-quality videos?
            </li>
          </ul>
        </div>

        {/* New Core Question */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">The New Core Question</p>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground line-through decoration-2">
              How do we make it easier for users to make short-form videos on Instagram?
            </p>
            <p className="text-xl font-medium text-foreground">
              How do we make it easier for users to make <strong className="text-primary">good</strong> short-form videos on Instagram?
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide05bPivot;
