import React from "react";
import SlideContainer from "@/components/presentation/SlideContainer";

const Slide05bPivot: React.FC = () => {
  return (
    <SlideContainer 
      slideNumber={5} 
      header="The Pivot"
      className="!bg-[hsl(220,10%,20%)]"
    >
      <div className="space-y-10">
        {/* Header override for dark background */}
        <style>{`
          #slide-5 .text-primary { color: hsl(25, 70%, 55%); }
          #slide-5 > div > p { color: hsl(40, 30%, 95%); }
        `}</style>
        
        {/* Outcome */}
        <div className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-6 backdrop-blur-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(25, 70%, 55%)' }}>Outcome: Initial Rejection</p>
          <p className="mb-4 text-[hsl(40,30%,95%)]">
            Leadership pushed back hard. They wanted Instagram to 'feel simple' and worried that a stacked timeline was
            'too complex.'
          </p>
          <ul className="space-y-1 text-[hsl(40,30%,85%)]/80">
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
        <div className="rounded-2xl bg-[hsl(25,50%,35%)]/30 p-6 backdrop-blur-sm">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(25, 70%, 55%)' }}>The New Core Question</p>
          <div className="space-y-4">
            <p className="text-lg text-[hsl(40,30%,70%)] line-through decoration-2">
              How do we make it easier for users to make short-form videos on Instagram?
            </p>
            <p className="text-xl font-medium text-[hsl(40,30%,95%)]">
              How do we make it easier for users to make <strong style={{ color: 'hsl(25, 70%, 55%)' }}>good</strong> short-form videos on Instagram?
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-[hsl(40,30%,95%)]/20">
            <p className="mb-4 text-[hsl(40,30%,95%)]">
              We didn't give up. Me and my team — who made short-form videos ourselves all the time — had developed a
              strong perspective that our current editing flow was simply too difficult to use to make high-quality videos
              with your phone. But we understood that to convince our senior leadership team we needed to rigorously
              answer two additional questions:
            </p>
            <ul className="space-y-1 text-[hsl(40,30%,95%)]">
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
