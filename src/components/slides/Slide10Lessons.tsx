import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, RefreshCw, Search } from 'lucide-react';

const lessons = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Misalignment often comes from different assumptions',
    description: 'Our team and leadership both wanted an easy-to-use editor—but we hadn\'t aligned on what types of videos to prioritize.',
  },
  {
    number: '02',
    icon: RefreshCw,
    title: 'Consider cost vs. benefit of large studies',
    description: 'Phase 3 could maybe have been skipped if we\'d just had leadership try editing complex videos themselves in different apps.',
  },
  {
    number: '03',
    icon: Search,
    title: 'Study what people make to understand your product',
    description: 'Analyzing user-created content in phase 2 showed us what makes videos successful. This was before AI—it was manual and tedious. With AI, I now use this method at much larger scale and speed.',
  },
];

const Slide10Lessons: React.FC = () => {
  return (
    <SlideContainer slideNumber={9} header="Lessons Learned">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
          What This Project Taught Me
        </h2>

        {/* Lesson Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {lessons.map((lesson) => (
            <Card key={lesson.number} className="relative">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {lesson.number}
                  </span>
                  <lesson.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{lesson.title}</h3>
                <p className="text-sm text-muted-foreground">{lesson.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What I'd Do Differently */}
        <div className="rounded-xl border bg-muted/30 p-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">What I'd Do Differently</p>
          <p className="text-lg text-foreground">
            Have leadership experience the problem firsthand—ask them to create both simple and complex videos using different editors. My team made videos every week, so we felt the limitations intuitively. Leadership wasn't using the product and assumed 'simple = easy' without testing it. Hands-on experience could have saved weeks of research.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide10Lessons;
