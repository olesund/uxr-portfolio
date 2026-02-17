/**
 * NYT YouTube Strategy Case Study
 *
 * Content comes from: src/data/nyt-youtube-content.ts
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowLeft, Newspaper, ShoppingCart, ChefHat, Lightbulb, Eye, Search, TrendingUp, BarChart3, FileText, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { sharedContent, readContent, presentContent } from '@/data/nyt-youtube-content';
import { ModeToggle } from '@/components/presentation/ModeToggle';
import { PresentSlide } from '@/components/presentation/PresentSlide';
import { Carousel } from '@/components/presentation/Carousel';
import { ProgressiveReveal } from '@/components/presentation/ProgressiveReveal';

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
        isEven ? 'bg-[hsl(30,15%,91%)]' : 'bg-background'
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
  const [mode, setMode] = useState<'read' | 'present'>('read');
  const [resetKey, setResetKey] = useState(0);

  const scrollToSlide = (index: number) => {
    document.getElementById(`slide-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReset = () => {
    setResetKey(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ============================================
  // PRESENT MODE SLIDE RENDERERS
  // ============================================

  const renderPresentMode = () => {
    return (
      <>
        {/* Fixed Mode Toggle for Present Mode */}
        <div className="fixed top-6 right-6 md:right-12 z-50">
          <ModeToggle
            mode={mode}
            onModeChange={setMode}
            onReset={handleReset}
          />
        </div>
        <Link to="/" className="fixed left-6 top-6 z-50 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:left-12">
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <div key={resetKey} className="snap-y snap-mandatory overflow-y-scroll h-screen">
          {renderPresentTitle()}
          {renderPresentBackground()}
          {renderPresentAssumptions()}
          {renderPresentObjectives()}
          {renderPresentApproach()}
          {renderPresentFindingsAudience()}
          {renderPresentFindingsUseCases()}
          {renderPresentRecommendations()}
          {renderPresentImpact()}
          {renderPresentReflection()}
        </div>
      </>
    );
  };

  const renderPresentTitle = () => (
    <section className="relative flex min-h-screen snap-start flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-6">
      <Link to="/" className="absolute left-6 top-6 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:left-12">
        <ArrowLeft className="h-4 w-4" />
        Back to Portfolio
      </Link>
      <ModeToggle
        mode={mode}
        onModeChange={setMode}
        onReset={handleReset}
        className="absolute right-6 top-6 md:right-12"
      />
      <div className="max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {presentContent.title.headline}
        </h1>
        <p className="mb-12 text-lg text-muted-foreground md:text-xl">
          {presentContent.title.subtitle}
        </p>
      </div>
      <footer className="absolute bottom-8 text-center">
        <p className="text-sm text-muted-foreground">{sharedContent.meta.author}, {sharedContent.meta.role}</p>
      </footer>
    </section>
  );

  const renderPresentBackground = () => (
    <PresentSlide header={presentContent.background.header}>
      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-foreground">The Big Questions</h3>
          <div className="space-y-3">
            {presentContent.background.bigQuestions.map((q, i) => (
              <div key={i} className="rounded-xl bg-accent/50 p-5">
                <p className="text-lg text-foreground">{q}</p>
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
    </PresentSlide>
  );

  const renderPresentAssumptions = () => (
    <PresentSlide header={presentContent.assumptions.header}>
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">{presentContent.assumptions.description}</p>
        <Carousel>
          {presentContent.assumptions.teams.map((team) => {
            const Icon = categoryIcons[team.name === 'News' ? 'Newspaper' : team.name === 'Cooking' ? 'ChefHat' : 'ShoppingCart'];
            return (
              <div key={team.name} className="rounded-2xl bg-muted/60 p-8">
                <div className="mb-4 flex items-center gap-3">
                  {Icon && <Icon className="h-8 w-8 text-primary" />}
                  <h3 className="text-2xl font-semibold text-foreground">{team.name}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{team.assumption}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </PresentSlide>
  );

  const renderPresentObjectives = () => (
    <PresentSlide header={presentContent.objectives.header}>
      <div className="space-y-8">
        {presentContent.objectives.objectivesList.map((obj) => (
          <div key={obj.title} className="rounded-2xl bg-muted/60 p-6">
            <h3 className="mb-3 text-xl font-semibold text-foreground">{obj.title}</h3>
            <ul className="space-y-2 text-muted-foreground">
              {obj.questions.map((q, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PresentSlide>
  );

  const renderPresentApproach = () => (
    <PresentSlide header={presentContent.approach.header}>
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-foreground">{presentContent.approach.title}</h3>
        <Carousel>
          {presentContent.approach.methods.map((method) => (
            <div key={method.title} className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground">{method.title}</h4>
              <div className="rounded-2xl bg-muted/60 p-6">
                <div className="grid gap-4 sm:grid-cols-2 mb-4">
                  {Object.entries(method.details).filter(([key]) => key !== 'description').map(([key, value]) => (
                    <div key={key}>
                      <p className="text-sm text-muted-foreground capitalize">{key}</p>
                      <p className="font-medium text-foreground">{value as string}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{method.details.description}</p>
              </div>
              {/* Keep buttons for showing analysis details - copied from Read mode */}
              {method.title.includes('Survey') && (
                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileText className="h-4 w-4" />
                        Survey Examples
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Survey Question Examples</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        {readContent.approach.surveyExamples.items.map((item, idx) => (
                          <div key={idx} className="rounded-lg border p-4">
                            <p className="mb-2 text-sm font-medium text-primary">{item.category}</p>
                            <p className="mb-3 font-medium">{item.question}</p>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {item.options.map((opt, i) => (
                                <li key={i}>• {opt}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <BarChart3 className="h-4 w-4" />
                        Analysis Approach
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Survey Analysis Approach</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {readContent.approach.surveyAnalysis.steps.map((step, idx) => (
                          <div key={idx} className="rounded-lg border p-4">
                            <p className="mb-1 font-medium">{step.title}</p>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                            {idx === 3 && (
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
              )}
              {method.title.includes('Diary') && (
                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <BookOpen className="h-4 w-4" />
                        Diary Examples
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Diary Study Activity Examples</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        {readContent.approach.diaryExamples.items.map((item, idx) => (
                          <div key={idx} className="rounded-lg border p-4">
                            <p className="mb-2 text-sm font-medium text-primary">{item.day}: {item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Search className="h-4 w-4" />
                        Analysis Approach
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Diary Study Analysis Approach</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {readContent.approach.diaryAnalysis.steps.map((step, idx) => (
                          <div key={idx} className="rounded-lg border p-4">
                            <p className="mb-1 font-medium">{step.title}</p>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                            {idx === 1 && (
                              <>
                                <div className="mt-3 space-y-3">
                                  <div className="rounded-lg overflow-hidden bg-white p-2">
                                    <img src={ytGoodVideosDiary} alt="Examples of good videos from survey respondents" className="w-full h-auto" />
                                  </div>
                                  <div className="rounded-lg overflow-hidden bg-white p-2">
                                    <img src={ytSelfieVideoDiary} alt="Participant's selfie reflection video about their experience" className="w-full h-auto" />
                                  </div>
                                </div>
                                <p className="mt-2 text-xs text-muted-foreground italic">Example participant submissions from the diary study</p>
                              </>
                            )}
                            {idx === 2 && (
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
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </PresentSlide>
  );

  const renderPresentFindingsAudience = () => (
    <PresentSlide header={presentContent.findingsAudience.header}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="text-xl font-semibold text-foreground">{presentContent.findingsAudience.leadFinding}</p>
        </div>
        <Carousel>
          {presentContent.findingsAudience.findings.map((finding, idx) => (
            <div key={idx} className="rounded-2xl bg-muted/60 p-8">
              <h3 className="mb-4 text-2xl font-semibold text-foreground">{finding.title}</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">{finding.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </PresentSlide>
  );

  const renderPresentFindingsUseCases = () => (
    <PresentSlide header={presentContent.findingsUseCases.header}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="text-xl font-semibold text-foreground">{presentContent.findingsUseCases.leadFinding}</p>
        </div>
        <Carousel>
          {presentContent.findingsUseCases.categories.map((category) => {
            const Icon = categoryIcons[category.icon];
            return (
              <div key={category.name} className="rounded-2xl bg-muted/60 p-8">
                <div className="mb-6 flex items-center gap-3">
                  {Icon && <Icon className="h-8 w-8 text-primary" />}
                  <h3 className="text-2xl font-semibold text-foreground">{category.name}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Use Case</p>
                    <p className="text-lg text-foreground leading-relaxed">{category.useCase}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Winning Format</p>
                    <p className="text-lg text-foreground leading-relaxed">{category.format}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </PresentSlide>
  );

  const renderPresentRecommendations = () => (
    <PresentSlide header={presentContent.recommendations.header}>
        <ProgressiveReveal>
          {presentContent.recommendations.teamRecommendations.map((rec) => {
            const Icon = categoryIcons[rec.team === 'News' ? 'Newspaper' : rec.team === 'Cooking' ? 'ChefHat' : 'ShoppingCart'];
            return (
              <div key={rec.team} className="rounded-2xl bg-muted/60 p-6">
                <div className="mb-3 flex items-center gap-3">
                  {Icon && <Icon className="h-6 w-6 text-primary" />}
                  <h3 className="text-xl font-semibold text-foreground">{rec.team}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{rec.recommendation}</p>
              </div>
            );
          })}
        </ProgressiveReveal>
      </PresentSlide>
  );

  const renderPresentImpact = () => (
    <PresentSlide header={presentContent.impact.header}>
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-foreground">{presentContent.impact.title}</h3>
          <ProgressiveReveal>
            {presentContent.impact.teams.map((team) => {
              const Icon = categoryIcons[team.team === 'News' ? 'Newspaper' : team.team === 'Cooking' ? 'ChefHat' : 'ShoppingCart'];
              return (
              <div key={team.team} className="rounded-2xl bg-muted/60 p-6">
                <div className="mb-3 flex items-center gap-3">
                  {Icon && <Icon className="h-6 w-6 text-primary" />}
                  <h4 className="text-xl font-semibold text-foreground">{team.team}</h4>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {team.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                      <span className="leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
          </ProgressiveReveal>
        </div>
      </PresentSlide>
  );

  const renderPresentReflection = () => (
    <PresentSlide header={presentContent.reflection.header}>
        <div className="space-y-8">
          <h3 className="mb-6 text-2xl font-semibold text-foreground">{presentContent.reflection.title}</h3>
          <ProgressiveReveal>
            {presentContent.reflection.lessonsList.map((lesson) => (
              <div key={lesson.number} className="rounded-2xl bg-muted/60 p-6">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="text-sm font-medium text-primary">{lesson.number}</span>
                  <h3 className="text-xl font-semibold text-foreground">{lesson.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground">{lesson.description}</p>
              </div>
            ))}
          </ProgressiveReveal>
        </div>
      </PresentSlide>
  );

  // Present mode rendering
  if (mode === 'present') {
    return renderPresentMode();
  }

  // Read mode rendering
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
        <ModeToggle
          mode={mode}
          onModeChange={setMode}
          onReset={handleReset}
          className="absolute right-6 top-6 md:right-12"
        />
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
          <div className="rounded-2xl bg-muted/60 p-5">
            <h3 className="mb-4 text-lg font-semibold text-foreground">{readContent.background.contextConstraintsTitle}</h3>
            <ul className="space-y-3 text-muted-foreground">
              {readContent.background.contextConstraintsBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
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
          <div className="rounded-2xl border border-border bg-card p-6">
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
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
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
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
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
          <div className="rounded-2xl border border-border bg-card p-6">
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
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
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
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
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
          <div className="rounded-2xl bg-[hsl(210,35%,93%)] p-6">
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
          <div className="rounded-2xl bg-[hsl(210,35%,93%)] p-6">
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
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-3 flex items-center gap-3">
                    {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                    <h3 className="text-xl font-semibold text-foreground">{cat.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{cat.useCase}</p>
                  {cat.format && (
                    <div className="mt-3 rounded-xl bg-[hsl(210,35%,93%)] p-3">
                      <p className="text-sm text-[hsl(210,40%,30%)]"><strong>Winning format:</strong> {cat.format}</p>
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
          <div className="rounded-2xl bg-[hsl(210,35%,93%)] p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">{readContent.impact.title}</h2>
            </div>
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

      {/* Slide 9: Reflections */}
      <ReadSlide slideNumber={9} header={readContent.reflection.header}>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">{readContent.reflection.title}</h2>
          <div className="space-y-6">
            {readContent.reflection.lessonsList.map((lesson) => (
              <div key={lesson.number} className="rounded-2xl bg-accent/50 p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(210,35%,93%)] text-sm font-bold text-primary">
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
