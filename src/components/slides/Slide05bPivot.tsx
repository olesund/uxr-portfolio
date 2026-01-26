import React from "react";
import SlideContainer from "@/components/presentation/SlideContainer";

const Slide05bPivot: React.FC = () => {
  return (
    <SlideContainer 
      slideNumber={5} 
      header="The Pivot"
      className="!bg-foreground"
    >
      <div className="space-y-10">
        {/* Header override for dark background */}
        <style>{`
          #slide-5 .text-primary { color: hsl(var(--primary)); }
          #slide-5 > div > p { color: hsl(var(--background)); }
        `}</style>
        
        {/* Outcome */}
        <div className="rounded-2xl bg-background/10 p-6 backdrop-blur-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Outcome: Initial Rejection</p>
          <p className="mb-4 text-background">
            Leadership pushed back hard. They wanted Instagram to 'feel simple' and worried that a stacked timeline was
            'too complex.'
          </p>
          <ul className="space-y-1 text-background/70">
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

        {/* New Core Question */}
        <div className="rounded-2xl bg-primary/20 p-6 backdrop-blur-sm">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">The New Core Question</p>
          <div className="space-y-4">
            <p className="text-lg text-background/50 line-through decoration-2">
              How do we make it easier for users to make short-form videos on Instagram?
            </p>
            <p className="text-xl font-medium text-background">
              How do we make it easier for users to make <strong className="text-primary">good</strong> short-form videos on Instagram?
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-background/20">
            <p className="mb-4 text-background">
              We didn't give up. Me and my team — who made short-form videos ourselves all the time — had developed a
              strong perspective that our current editing flow was simply too difficult to use to make high-quality videos
              with your phone. But we understood that to convince our senior leadership team we needed to rigorously
              answer two additional questions:
            </p>
            <ul className="space-y-1 text-background">
              <li>
                <strong>A.</strong> What makes a video high-quality? (Because we knew Instagram users cared about their
                videos being good.)
              </li>
              <li>
                <strong>B.</strong> Which video editor design makes it easier to create high-quality videos?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide05bPivot;
