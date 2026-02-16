/**
 * NYT YouTube Strategy Case Study
 *
 * Content comes from: src/data/nyt-youtube-content.ts
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowLeft, Newspaper, ShoppingCart, ChefHat, Lightbulb, Eye, Search, TrendingUp, BarChart3, FileText, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { sharedContent, readContent } from '@/data/nyt-youtube-content';

// Assets for analysis modals — Survey
import ytTamReachSurvey from '@/assets/yt-tam-reach-survey.png';
import ytFormatDifferencesSurvey from '@/assets/yt-format-differences-survey.png';
// Assets for analysis modals — Diary Study
import ytPresentationSlideDiary from '@/assets/yt-presentation-slide-diary.png';
import ytGoodVideosDiary from '@/assets/yt-good-videos-diary.png';
import ytSelfieVideoDiary from '@/assets/yt-selfie-video-diary.png';

// ============================================
// SLIDE WRAPPER COMPONENTS
// ============================================

const ReadSlide: React.FC<{
  slideNumber: number;
  header?: string;
  children: React.ReactNode;
}> = ({ slideNumber, header, children }) => {
  const isEven = slideNumber % 2 === 0;

  return (
    <section
      id={`slide-${slideNumber}`}
      className={cn(
        'relative scroll-mt-0 snap-start px-6 py-12 md:px-12 lg:px-20',
        'border-b border-border min-h-[80vh] py-16 md:py-24',
        isEven ? 'bg-secondary/50' : 'bg-background'
      )}
    >
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {header && (
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-primary">
            {header}
          </p>
        )}
        {children}
      </motion.div>
    </section>
  );
};

// Icon mapping for categories
const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
  Newspaper, ShoppingCart, ChefHat,
};

// ============================================
// MAIN COMPONENT
// ============================================

const NYTYouTubeCaseStudy: React.FC = () => {
  const scrollToSlide = (index: number) => {
    document.getElementById(`slide-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Slide 0: Title */}
      <section
        id="slide-0"
        className="relative flex min-h-screen snap-start flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-6"
      >
        <Link to="/" className="absolute left-6 top-6 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:left-12">
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
        <div className="max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {readContent.title.headline}
          </h1>
          <p className="mb-12 text-lg text-muted-foreground md:text-xl">
            {readContent.title.subtitle}
          </p>
          <Button variant="outline" size="lg" onClick={() => scrollToSlide(1)} className="group">
            Start Reading
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
        <footer className="absolute bottom-8 text-center">
          <p className="text-sm text-muted-foreground">{sharedContent.meta.author}, {sharedContent.meta.role}</p>
        </footer>
      </section>

      {/* Slide 1: Background */}
      <ReadSlide slideNumber={1} header={readContent.background.header}>
        <div className="space-y-10">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{readContent.background.opportunityTitle}</h3>
            <p className="leading-relaxed text-muted-foreground">{readContent.background.opportunity}</p>
          </div>
          <div className="rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 p-5">
            <p className="mb-1 text-sm font-medium text-amber-600">Constraints</p>
            <p className="text-foreground">{readContent.background.constraints}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.background.bigQuestionsTitle}</h3>
            <div className="space-y-3">
              {readContent.background.bigQuestions.map((q, i) => (
                <div key={i} className="rounded-xl bg-accent/50 p-4">
                  <p className="text-foreground">{q}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-muted/60 p-5">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">My Role</p>
                <p className="font-medium text-foreground">{sharedContent.team.myRole}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sharedContent.team.myRoleDescription}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Team</p>
                <p className="font-medium text-foreground">{sharedContent.team.team}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sharedContent.team.teamDescription}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stakeholders</p>
                <p className="font-medium text-foreground">{sharedContent.team.stakeholders}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sharedContent.team.stakeholdersDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 2: Starting Assumptions */}
      <ReadSlide slideNumber={2} header={readContent.assumptions.header}>
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-muted-foreground">{readContent.assumptions.description}</p>
          <div className="space-y-4">
            {readContent.assumptions.teams.map((team, i) => {
              const icons = ['Newspaper', 'ChefHat', 'ShoppingCart'];
              const IconComponent = categoryIcons[icons[i]];
              return (
                <div key={i} className="rounded-2xl border border-border bg-background p-5">
                  <div className="mb-3 flex items-center gap-2">
                    {IconComponent && <IconComponent className="h-5 w-5 text-primary" />}
                    <span className="text-lg font-semibold text-foreground">{team.name}</span>
                  </div>
                  <p className="text-muted-foreground">{team.assumption}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ReadSlide>

      {/* Slide 3: Research Objectives */}
      <ReadSlide slideNumber={3} header={readContent.objectives.header}>
        <div className="space-y-8">
          {readContent.objectives.objectivesList.map((objective, i) => {
            const objIcons = [Eye, Search];
            const ObjIcon = objIcons[i];
            return (
              <div key={i} className="rounded-2xl bg-accent/50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <ObjIcon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{objective.title}</h3>
                </div>
                <div className="space-y-2">
                  {objective.questions.map((q, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                      <p className="text-muted-foreground">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </ReadSlide>

      {/* Slide 4: Research Approach */}
      <ReadSlide slideNumber={4} header={readContent.approach.header}>
        <div className="space-y-10">
          <h2 className="text-2xl font-bold text-foreground">{readContent.approach.title}</h2>

          {/* Survey */}
          <div className="rounded-2xl bg-accent/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.approach.methods[0].title}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><p className="text-sm text-muted-foreground">Sample</p><p className="font-medium text-foreground">{readContent.approach.methods[0].details.sample}</p></div>
              <div><p className="text-sm text-muted-foreground">Fielded</p><p className="font-medium text-foreground">{readContent.approach.methods[0].details.fielded}</p></div>
              <div><p className="text-sm text-muted-foreground">Method</p><p className="font-medium text-foreground">{readContent.approach.methods[0].details.method}</p></div>
            </div>
            <p className="mt-4 text-muted-foreground">{readContent.approach.methods[0].details.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {/* Survey Question Examples Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <FileText className="h-4 w-4" />
                    See survey question examples
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{readContent.approach.surveyExamples.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 pt-4">
                    {readContent.approach.surveyExamples.items.map((example, i) => (
                      <div key={i} className="rounded-lg bg-muted/50 p-4">
                        <p className="mb-2 text-sm font-medium text-primary">{example.category}</p>
                        <p className="mb-3 font-medium text-foreground">{example.question}</p>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          {example.options.map((opt, j) => (
                            <p key={j}>• {opt}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground italic">
                      The same survey was designed to work across all three categories (News, Cooking, Product Reviews) and all three platforms (YouTube, Instagram, TikTok), enabling direct cross-category and cross-platform comparisons.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Survey Analysis Approach Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <BarChart3 className="h-4 w-4" />
                    See analysis approach
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{readContent.approach.surveyAnalysis.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 pt-4">
                    {readContent.approach.surveyAnalysis.steps.map((step, i) => (
                      <div key={i} className="rounded-lg bg-muted/50 p-4">
                        <p className="mb-2 text-sm font-medium text-primary">{step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        {i === 3 && (
                          <>
                            <div className="mt-3 space-y-3">
                              <div className="rounded-lg overflow-hidden bg-white p-2">
                                <img src={ytTamReachSurvey} alt="Social media platform use among target audiences" className="w-full h-auto" />
                              </div>
                              <div className="rounded-lg overflow-hidden bg-white p-2">
                                <img src={ytFormatDifferencesSurvey} alt="Common formats for News videos across platforms" className="w-full h-auto" />
                              </div>
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground italic">Example visualizations from the research presentation (some data redacted)</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Diary Studies */}
          <div className="rounded-2xl bg-muted/60 p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">{readContent.approach.methods[1].title}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><p className="text-sm text-muted-foreground">Sample</p><p className="font-medium text-foreground">{readContent.approach.methods[1].details.sample}</p></div>
              <div><p className="text-sm text-muted-foreground">Fielded</p><p className="font-medium text-foreground">{readContent.approach.methods[1].details.fielded}</p></div>
              <div><p className="text-sm text-muted-foreground">Duration</p><p className="font-medium text-foreground">{readContent.approach.methods[1].details.duration}</p></div>
              <div><p className="text-sm text-muted-foreground">Method</p><p className="font-medium text-foreground">{readContent.approach.methods[1].details.method}</p></div>
            </div>
            <p className="mt-4 text-muted-foreground">{readContent.approach.methods[1].details.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {/* Diary Study Activity Examples Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    See diary study activity examples
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{readContent.approach.diaryExamples.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 pt-4">
                    {readContent.approach.diaryExamples.items.map((example, i) => (
                      <div key={i} className="rounded-lg bg-muted/50 p-4">
                        <p className="mb-2 text-sm font-medium text-primary">{example.day}</p>
                        <p className="mb-3 font-medium text-foreground">{example.title}</p>
                        <p className="text-sm text-muted-foreground">{example.description}</p>
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground italic">
                      Activities shown are from the News diary study. The Cooking and Product Reviews studies followed the same structure with category-specific prompts.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Diary Study Analysis Approach Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <BarChart3 className="h-4 w-4" />
                    See analysis approach
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{readContent.approach.diaryAnalysis.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 pt-4">
                    {readContent.approach.diaryAnalysis.steps.map((step, i) => (
                      <div key={i} className="rounded-lg bg-muted/50 p-4">
                        <p className="mb-2 text-sm font-medium text-primary">{step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        {i === 1 && (
                          <>
                            <div className="mt-3 space-y-3">
                              <div className="rounded-lg overflow-hidden">
                                <img src={ytSelfieVideoDiary} alt="Diary study participant selfie video response with transcript" className="w-full h-auto" />
                              </div>
                              <div className="rounded-lg overflow-hidden">
                                <img src={ytGoodVideosDiary} alt="Diary study participant submissions of good video examples" className="w-full h-auto" />
                              </div>
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground italic">Example participant submissions from the News diary study</p>
                          </>
                        )}
                        {i === 2 && (
                          <>
                            <div className="mt-3 rounded-lg overflow-hidden">
                              <img src={ytPresentationSlideDiary} alt="Presentation slide showing illustrative video examples from creators and traditional media" className="w-full h-auto" />
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground italic">Example slide from the research presentation</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-sm text-muted-foreground">{readContent.approach.contentAnalysisNote}</p>
          </div>
        </div>
      </ReadSlide>

      {/* Slide 5: Findings - Audience */}
      <ReadSlide slideNumber={5} header={readContent.findingsAudience.header}>
        <div className="space-y-8">
          <div className="rounded-2xl bg-primary/10 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Key Finding</span>
            </div>
            <blockquote className="text-xl font-semibold text-foreground md:text-2xl">{readContent.findingsAudience.leadFinding}</blockquote>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {readContent.findingsAudience.findings.map((finding, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                  <span className="text-lg font-bold text-green-600">{i + 1}</span>
                </div>
                <p className="font-semibold text-foreground">{finding.title}</p>
                <p className="mt-2 text-muted-foreground">{finding.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ReadSlide>

      {/* Slide 6: Findings - Use Cases */}
      <ReadSlide slideNumber={6} header={readContent.findingsUseCases.header}>
        <div className="space-y-8">
          <div className="rounded-2xl bg-primary/10 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Key Finding</span>
            </div>
            <blockquote className="text-xl font-semibold text-foreground md:text-2xl">{readContent.findingsUseCases.leadFinding}</blockquote>
          </div>
          <div className="space-y-4">
            {readContent.findingsUseCases.categories.map((cat, i) => {
              const IconComponent = categoryIcons[cat.icon];
              return (
                <div key={i} className="rounded-2xl bg-accent/50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                    <h3 className="text-xl font-semibold text-foreground">{cat.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{cat.useCase}</p>
                  {cat.format && (
                    <div className="mt-3 rounded-xl bg-background/60 p-3">
                      <p className="text-sm text-muted-foreground"><strong className="text-foreground">Winning format:</strong> {cat.format}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </ReadSlide>

      {/* Slide 7: Recommendations */}
      <ReadSlide slideNumber={7} header={readContent.recommendations.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-primary/10 p-6">
            <p className="mb-1 text-sm font-medium uppercase tracking-wider text-primary">Enterprise-Wide</p>
            <p className="text-xl font-semibold text-foreground">{readContent.recommendations.enterpriseRecommendation}</p>
          </div>
          <div className="space-y-4">
            {readContent.recommendations.teamRecommendations.map((rec, i) => {
              const icons = ['Newspaper', 'ShoppingCart', 'ChefHat'];
              const IconComponent = categoryIcons[icons[i]];
              return (
                <div key={i} className="rounded-2xl border border-border bg-background p-5">
                  <div className="mb-3 flex items-center gap-2">
                    {IconComponent && <IconComponent className="h-5 w-5 text-primary" />}
                    <span className="text-lg font-semibold text-foreground">{rec.team}</span>
                  </div>
                  <p className="text-muted-foreground">{rec.recommendation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ReadSlide>

      {/* Slide 8: Impact */}
      <ReadSlide slideNumber={8} header={readContent.impact.header}>
        <div className="space-y-10">
          <div className="rounded-2xl bg-primary/10 p-6">
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Impact</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">{readContent.impact.title}</h2>
          </div>
          <div className="space-y-4">
            {readContent.impact.teams.map((team, i) => {
              const icons = ['Newspaper', 'ShoppingCart', 'ChefHat'];
              const IconComponent = categoryIcons[icons[i]];
              const bgColors = ['bg-green-500/5 border-green-500/30', 'bg-green-500/5 border-green-500/30', 'bg-amber-500/5 border-amber-500/30'];
              return (
                <div key={i} className={cn("rounded-2xl border-2 p-5", bgColors[i])}>
                  <div className="mb-3 flex items-center gap-2">
                    {IconComponent && <IconComponent className="h-5 w-5 text-primary" />}
                    <span className="text-lg font-semibold text-foreground">{team.team}</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {team.outcomes.map((outcome, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </ReadSlide>

      {/* Slide 9: Reflection */}
      <ReadSlide slideNumber={9} header={readContent.reflection.header}>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">{readContent.reflection.title}</h2>
          <div className="space-y-6">
            {readContent.reflection.lessonsList.map((lesson) => (
              <div key={lesson.number} className="rounded-2xl bg-accent/50 p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {lesson.number}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{lesson.title}</h3>
                </div>
                <p className="text-muted-foreground">{lesson.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ReadSlide>

</>
  );
};

export default NYTYouTubeCaseStudy;
