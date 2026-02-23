/**
 * Instagram Reels Case Study — Anthropic Onsite Version
 *
 * Present-mode only. Abbreviated for XFN audience (PM, designer, engineer).
 * Content comes from: src/data/instagram-reels-anthropic-content.ts
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Play, Sparkles, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { content } from '@/data/instagram-reels-anthropic-content';
import ImageLightbox from '@/components/presentation/ImageLightbox';
import TesterExperienceModal from '@/components/presentation/TesterExperienceModal';
import { PresentSlide } from '@/components/presentation/PresentSlide';
import { Carousel } from '@/components/presentation/Carousel';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

// Assets (reused from existing case study)
import erikHeadshot from '@/assets/erik-headshot.png';
import editorComparison from '@/assets/editor-comparison.png';
import flywheelDiagram from '@/assets/flywheel-diagram.png';
import reelsEditorBefore from '@/assets/reels-editor-before.png';
import reelsEditorAfter from '@/assets/reels-editor-after.png';
import reelsEditorScreenshot from '@/assets/reels-editor-screenshot.webp';
import basicVideoExample from '@/assets/basic-video-example.mov';
import advancedVideoExample from '@/assets/advanced-video-example.mov';

// Moments photos
import momentsPhoto1 from '@/assets/1-stanford-improvisors.jpg';
import momentsPhoto2 from '@/assets/2-ski-touring-are.jpg';
import momentsPhoto3 from '@/assets/3-garfield-395.jpg';
import momentsPhoto4 from '@/assets/4-erik-sarah-ella-alice.jpg';

// Company logos
import dschoolLogo from '@/assets/stanforddschool_logo.jpeg';
import collectiveCapitalLogo from '@/assets/Collective Capital Logo - BW - Transparent  - 200px.png';

// ============================================
// SUB-COMPONENTS
// ============================================

/** Instagram camera glyph as inline SVG */
const InstagramLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

/** Company logos for career overview — all black */
const companyLogos: Record<string, React.FC<{ className?: string }>> = {
  'Stanford d.school': ({ className }) => (
    <img
      src={dschoolLogo}
      alt="Stanford d.school"
      className={cn(className, 'rounded object-contain')}
      style={{ filter: 'grayscale(1)' }}
    />
  ),
  'Collective Capital': ({ className }) => (
    <img
      src={collectiveCapitalLogo}
      alt="Collective Capital"
      className={cn(className, 'object-contain')}
    />
  ),
  Thumbtack: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.18 6.38h11.69v2.68H6.17zm7.27 3.8v3.14c0 3.23-.02 3.74-.14 4.36a7.95 7.95 0 0 1-1.3 2.87c-.03 0-.78-1.35-.9-1.62-.17-.4-.3-.8-.4-1.25l-.09-.41-.02-5.78.16-.2a3.3 3.3 0 0 1 2.44-1.1zM12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Z" />
    </svg>
  ),
  Instagram: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  ),
  'The New York Times': ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.272,14.815h-0.098c-0.747,2.049-2.335,3.681-4.363,4.483v-4.483l2.444-2.182l-2.444-2.182V7.397 c2.138,0.006,3.885-1.703,3.927-3.84c0-2.629-2.509-3.556-3.927-3.556c-0.367-0.007-0.734,0.033-1.091,0.12v0.131h0.556 c0.801-0.141,1.565,0.394,1.706,1.195C17.99,1.491,17.996,1.537,18,1.583c-0.033,0.789-0.7,1.401-1.488,1.367 c-0.02-0.001-0.041-0.002-0.061-0.004c-2.444,0-5.323-1.985-8.454-1.985C5.547,0.83,3.448,2.692,3.284,5.139 C3.208,6.671,4.258,8.031,5.76,8.346v-0.12C5.301,7.931,5.041,7.407,5.084,6.862c0.074-1.015,0.957-1.779,1.973-1.705 C7.068,5.159,7.08,5.16,7.091,5.161c2.629,0,6.872,2.182,9.501,2.182h0.098v3.142l-2.444,2.182l2.444,2.182v4.549 c-0.978,0.322-2.003,0.481-3.033,0.469c-1.673,0.084-3.318-0.456-4.614-1.516l4.429-1.985V7.451l-6.196,2.727 c0.592-1.75,1.895-3.168,3.589-3.905V6.175c-4.516,1.004-8.138,4.243-8.138,8.705c0,5.193,4.025,9.12,9.818,9.12 c6.011,0,8.727-4.363,8.727-8.814V14.815z M8.858,18.186c-1.363-1.362-2.091-3.235-2.007-5.16c-0.016-0.88,0.109-1.756,0.371-2.596 l2.051-0.938v8.476L8.858,18.186z" />
    </svg>
  ),
  Anthropic: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
    </svg>
  ),
};

// ============================================
// MAIN COMPONENT
// ============================================

const InstagramReelsAnthropicCaseStudy: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ============================================
  // SLIDE RENDERERS
  // ============================================

  /** Slide 0: Personal title (with intro text moved here) */
  const renderTitleSlide = () => (
    <section
      id="slide-0"
      className="relative flex min-h-screen snap-start items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-6"
    >
      <Link
        to="/"
        className="absolute left-6 top-6 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:left-12"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Portfolio
      </Link>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Left: text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-3 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {content.title.name}
          </h1>
          <p className="mb-4 text-lg text-muted-foreground">
            {content.title.subtitle}
          </p>
          <p className="mb-6 text-base text-muted-foreground leading-relaxed">
            {content.title.introText}
          </p>
          <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 justify-center md:justify-start max-w-lg">
            {content.title.descriptors.map((word, i) => (
              <motion.span
                key={word}
                className="text-base font-semibold"
                style={{
                  background: `linear-gradient(135deg, hsl(${190 + i * 12}, 65%, 50%), hsl(${220 + i * 12}, 55%, 55%))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: i * 0.28,
                  ease: 'easeInOut',
                }}
              >
                {word}.
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right: headshot */}
        <div className="shrink-0">
          <img
            src={erikHeadshot}
            alt="Illustration of Erik"
            className="h-48 w-48 rounded-2xl bg-background object-contain md:h-64 md:w-64"
          />
        </div>
      </div>
    </section>
  );

  /** Slide 1: Moments that shaped me */
  const momentsPhotos = [momentsPhoto1, momentsPhoto2, momentsPhoto3, momentsPhoto4];
  const renderMoments = () => (
    <PresentSlide header={content.moments.header}>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {content.moments.photos.map((photo, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-muted/40">
              <img
                src={momentsPhotos[i]}
                alt={photo.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">{photo.caption}</p>
          </div>
        ))}
      </div>
    </PresentSlide>
  );

  /** Slide 2: Career overview — 2 rows of 3 with company logos */
  const renderCareerOverview = () => (
    <PresentSlide header={content.careerOverview.header}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.careerOverview.roles.map((role, i) => {
          const LogoComponent = companyLogos[role.company];
          return (
            <div
              key={i}
              className={cn(
                'rounded-2xl p-5 relative',
                role.isFuture
                  ? 'bg-primary/10 ring-2 ring-primary/40'
                  : 'bg-muted/60'
              )}
            >
              {role.isFuture && (
                <div className="absolute -top-2.5 left-4 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
                  <Sparkles className="h-3 w-3" />
                  What's next
                </div>
              )}
              <div className="flex items-center gap-3 mb-2">
                {LogoComponent && (
                  <LogoComponent className="h-6 w-6 shrink-0 text-foreground" />
                )}
                <p className="font-semibold text-foreground text-base">
                  {role.company}
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {role.description}
              </p>
            </div>
          );
        })}
      </div>
    </PresentSlide>
  );

  /** Slide 3: Case study title */
  const renderCaseStudyTitle = () => (
    <section
      id="slide-3"
      className="relative flex min-h-screen snap-start items-center justify-center px-6"
      style={{ background: 'hsl(25, 12%, 22%)' }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[hsl(35,30%,92%)] md:text-5xl whitespace-pre-line">
            {content.caseStudyTitle.title}
          </h2>
          <p className="text-xl text-[hsl(35,30%,75%)] whitespace-pre-line">
            {content.caseStudyTitle.subtitle}
          </p>
        </div>
        <div className="shrink-0">
          <InstagramLogo className="h-32 w-32 text-[hsl(35,30%,92%)] md:h-44 md:w-44" />
        </div>
      </div>
    </section>
  );

  /** Slide 4: Problem + key constraints */
  const renderProblem = () => (
    <PresentSlide header={content.problem.header}>
      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">
            {content.problem.businessContextTitle}
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {content.problem.businessContext}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-accent/50 p-5">
            <p className="mb-1 text-sm text-muted-foreground">Business Goal</p>
            <p className="text-lg font-semibold text-foreground">
              {content.problem.businessGoal}
            </p>
          </div>
          <div className="rounded-2xl bg-accent/50 p-5">
            <p className="mb-1 text-sm text-muted-foreground">Core Question</p>
            <p className="text-lg font-semibold text-foreground">
              {content.problem.coreQuestion}
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-muted/60 p-5">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">My Role</p>
              <p className="font-medium text-foreground">
                {content.problem.team.myRole}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {content.problem.team.myRoleDescription}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Team</p>
              <p className="font-medium text-foreground">
                {content.problem.team.team}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {content.problem.team.teamDescription}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Stakeholders</p>
              <p className="font-medium text-foreground">
                {content.problem.team.stakeholders}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {content.problem.team.stakeholdersDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PresentSlide>
  );

  /** Slide 5: Research overview — all three phases visible */
  const renderResearchOverview = () => (
    <PresentSlide header={content.researchOverview.header}>
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-foreground">
          {content.researchOverview.title}
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {content.researchOverview.phases.map((phase) => (
            <div
              key={phase.number}
              className={cn(
                'rounded-2xl bg-muted/60 p-6 relative',
                phase.highlight && 'ring-2 ring-primary/50'
              )}
            >
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-lg font-medium text-primary">
                  Phase {phase.number}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({phase.type})
                </span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {phase.title}
              </h4>
              <p className="text-muted-foreground">{phase.description}</p>
              {phase.highlight && (
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  We'll go deeper on this phase
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PresentSlide>
  );

  /** Slide 6: Phase 1 — single slide */
  const renderPhase1 = () => (
    <PresentSlide header={content.phase1.header}>
      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            Question
          </h3>
          <p className="text-lg text-muted-foreground">
            {content.phase1.question}
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            Approach
          </h3>
          <p className="text-lg text-muted-foreground">
            {content.phase1.approach}
          </p>
        </div>
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Key Finding
          </p>
          <p className="text-lg text-foreground">{content.phase1.keyFinding}</p>
        </div>
      </div>
    </PresentSlide>
  );

  /** Slide 7: Reframe — dark theme, image on the right with more space */
  const renderReframe = () => (
    <PresentSlide header={content.reframe.header} dark>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left: text (narrower) */}
        <div className="lg:w-2/5 space-y-6 shrink-0">
          <div className="rounded-2xl bg-[hsl(200,40%,25%)]/30 p-5 backdrop-blur-sm">
            <p className="text-lg text-[hsl(40,30%,70%)] line-through decoration-2">
              {content.reframe.oldQuestion}
            </p>
            <p className="text-xl font-medium text-[hsl(40,30%,95%)] mt-3">
              {content.reframe.newQuestionPrefix}
              <strong style={{ color: 'hsl(195, 65%, 55%)' }}>
                {content.reframe.newQuestionHighlight}
              </strong>
              {content.reframe.newQuestionSuffix}
            </p>
            <div className="mt-5 pt-5 border-t border-[hsl(40,30%,95%)]/20">
              <p className="mb-3 text-base text-[hsl(40,30%,95%)]">
                {content.reframe.context}
              </p>
              <ul className="space-y-2 text-base text-[hsl(40,30%,95%)]">
                {content.reframe.additionalQuestions.map((q, i) => (
                  <li key={i}>
                    <strong>{q.charAt(0)}</strong>
                    {q.slice(1)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: flywheel image (larger) */}
        <div className="lg:w-3/5 flex-1 rounded-2xl overflow-hidden bg-background">
          <img
            src={flywheelDiagram}
            alt="Flywheel effect: good videos lead to more viewers, more reach, more production"
            className="w-full h-auto"
          />
        </div>
      </div>
    </PresentSlide>
  );

  /** Slide 8: Phase 2 — single slide with numbered key attributes */
  const renderPhase2 = () => (
    <PresentSlide header={content.phase2.header}>
      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            Questions
          </h3>
          <p className="text-lg text-muted-foreground">
            {content.phase2.question}
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            Approach
          </h3>
          <p className="text-lg text-muted-foreground">
            {content.phase2.approach}
          </p>
        </div>
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Key Finding
          </p>
          <p className="text-lg text-foreground mb-3">
            {content.phase2.keyFinding}
          </p>
          <ol className="space-y-1 text-lg text-foreground list-none">
            {content.phase2.keyAttributes.map((attr, i) => (
              <li key={i}>
                <strong>{i + 1}.</strong> {attr}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PresentSlide>
  );

  /** Slide 9: Phase 3 deep dive — 4-page carousel */
  const renderPhase3DeepDive = () => {
    const chartData = content.phase3.pages[3].chartData!;

    const completionTimeData = [
      {
        name: 'Basic Video',
        'Step-by-step': chartData.completionTime.basicStepByStep,
        'Stacked Timeline': chartData.completionTime.basicStacked,
      },
      {
        name: 'Advanced Video',
        'Step-by-step': chartData.completionTime.advancedStepByStep,
        'Stacked Timeline': chartData.completionTime.advancedStacked,
      },
    ];

    const easeOfUseData = [
      {
        name: 'Basic Video',
        'Step-by-step': chartData.easeOfUse.basicStepByStep,
        'Stacked Timeline': chartData.easeOfUse.basicStacked,
      },
      {
        name: 'Advanced Video',
        'Step-by-step': chartData.easeOfUse.advancedStepByStep,
        'Stacked Timeline': chartData.easeOfUse.advancedStacked,
      },
    ];

    return (
      <PresentSlide header={content.phase3.header}>
        <Carousel>
          {/* Page 1: Question + editor comparison (image slightly smaller) */}
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {content.phase3.pages[0].title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {content.phase3.pages[0].question}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden bg-background max-w-2xl mx-auto">
              <img
                src={editorComparison}
                alt="Step-by-step vs stacked timeline editor"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Page 2: Study design/methodology + View participant experience button */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">
              {content.phase3.pages[1].title}
            </h3>
            <div className="rounded-2xl bg-muted/60 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(content.phase3.pages[1].methodology!).map(
                  ([key, value]) => (
                    <div key={key}>
                      <p className="text-sm text-muted-foreground">
                        {key
                          .replace(/([A-Z])/g, ' $1')
                          .trim()
                          .replace(/^\w/, (c) => c.toUpperCase())}
                      </p>
                      <p className="font-medium text-foreground">{value}</p>
                    </div>
                  )
                )}
              </div>
              {/* Apps tested */}
              {(content.phase3.pages[1] as any).appsTested && (
                <div className="mt-4 pt-4 border-t border-muted-foreground/10">
                  <p className="text-sm text-muted-foreground mb-2">Apps Tested</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-medium text-foreground">Step-by-step:</span>
                    {(content.phase3.pages[1] as any).appsTested.stepByStep.map((app: string, i: number) => (
                      <span key={app} className="rounded-full bg-background px-2.5 py-0.5 text-foreground">
                        {app}
                      </span>
                    ))}
                    <span className="text-muted-foreground mx-1">vs.</span>
                    <span className="font-medium text-foreground">Stacked timeline:</span>
                    {(content.phase3.pages[1] as any).appsTested.stackedTimeline.map((app: string, i: number) => (
                      <span key={app} className="rounded-full bg-background px-2.5 py-0.5 text-foreground">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <p className="text-muted-foreground text-lg mb-3">
                {content.phase3.pages[1].studyDesign}
              </p>
              <p className="text-muted-foreground">
                <strong>Independent Variables:</strong>{' '}
                {content.phase3.pages[1].independentVariables}
              </p>
            </div>
            <div>
              <Button
                onClick={() => setIsModalOpen(true)}
                size="sm"
                variant="outline"
                className="gap-2"
              >
                <Play className="h-4 w-4" />
                View participant experience
              </Button>
            </div>
          </div>

          {/* Page 3: Reference videos side by side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              {content.phase3.pages[2].title}
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-muted/60 p-5">
                <p className="mb-3 text-lg font-medium text-foreground">
                  <strong>Basic Video:</strong> {content.phase3.pages[2].basic}
                </p>
                <div className="rounded-xl overflow-hidden bg-background">
                  <video
                    src={basicVideoExample}
                    controls
                    className="w-full h-auto max-h-[300px] object-contain"
                    preload="metadata"
                  />
                </div>
              </div>
              <div className="rounded-2xl bg-muted/60 p-5">
                <p className="mb-3 text-lg font-medium text-foreground">
                  <strong>Advanced Video:</strong>{' '}
                  {content.phase3.pages[2].advanced}
                </p>
                <div className="rounded-xl overflow-hidden bg-background">
                  <video
                    src={advancedVideoExample}
                    controls
                    className="w-full h-auto max-h-[300px] object-contain"
                    preload="metadata"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Page 4: Key findings with charts */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-accent/50 p-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                {content.phase3.pages[3].title}
              </p>
              <p className="mb-4 text-xl text-foreground">
                {content.phase3.pages[3].finding}
              </p>
              <ul className="space-y-2 text-lg text-foreground">
                <li>
                  <strong>Basic Videos:</strong>{' '}
                  {content.phase3.pages[3].details!.basic}
                </li>
                <li>
                  <strong>Advanced Videos:</strong>{' '}
                  {content.phase3.pages[3].details!.advanced}
                </li>
              </ul>
            </div>

            {/* Charts */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Completion Time Chart */}
              <div className="rounded-2xl bg-muted/40 p-4">
                <p className="text-sm font-medium text-foreground mb-3 text-center">
                  {chartData.completionTime.label}
                </p>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={completionTimeData}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar dataKey="Step-by-step" fill="hsl(25, 70%, 55%)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Stacked Timeline" fill="hsl(195, 65%, 50%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-[10px] text-muted-foreground text-center mt-1 italic">
                  Lower is better. Dummy data for illustration.
                </p>
              </div>

              {/* Ease of Use Chart */}
              <div className="rounded-2xl bg-muted/40 p-4">
                <p className="text-sm font-medium text-foreground mb-3 text-center">
                  {chartData.easeOfUse.label}
                </p>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={easeOfUseData}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar dataKey="Step-by-step" fill="hsl(25, 70%, 55%)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Stacked Timeline" fill="hsl(195, 65%, 50%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-[10px] text-muted-foreground text-center mt-1 italic">
                  Higher is better. Dummy data for illustration.
                </p>
              </div>
            </div>
          </div>
        </Carousel>

        <TesterExperienceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </PresentSlide>
    );
  };

  /** Slide 10: Final recommendation */
  const renderRecommendation = () => (
    <PresentSlide header={content.recommendation.header}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-accent/50 p-6">
          <blockquote className="mb-4 text-3xl font-semibold text-foreground">
            {content.recommendation.keyMessage}
          </blockquote>
          <p className="text-lg text-muted-foreground">
            {content.recommendation.keyMessageSubtitle}
          </p>
        </div>

        {/* Leadership decision — green, slightly less prominent */}
        <div className="rounded-2xl bg-green-500/10 border border-green-500/30 p-5 text-center">
          <p className="text-xl font-semibold text-green-700 dark:text-green-400">
            {content.recommendation.leadershipDecision}
          </p>
        </div>
      </div>
    </PresentSlide>
  );

  /** Slide 11: Impact — 2-page carousel */
  const renderImpact = () => (
    <PresentSlide header={content.impact.header}>
      <Carousel>
        {/* Page 1: Metrics + before/after */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">
            {content.impact.pages[0].title}
          </h3>
          <p className="text-lg text-muted-foreground">
            {content.impact.pages[0].shippedNote}
          </p>

          {/* Metric cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {content.impact.pages[0].metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-2xl bg-accent/50 p-4 text-center"
              >
                <TrendingUp className="mx-auto mb-2 h-8 w-8 text-green-600" />
                <p className="font-semibold text-foreground">{metric.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Before/after screenshots */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <button
                onClick={() =>
                  setLightboxImage({
                    src: reelsEditorBefore,
                    alt: 'Instagram Reels editor before',
                  })
                }
                className="rounded-2xl overflow-hidden bg-background cursor-pointer hover:opacity-90 transition-opacity w-full"
              >
                <img
                  src={reelsEditorBefore}
                  alt="Before"
                  className="w-full h-auto max-h-[250px] object-contain"
                />
              </button>
              <p className="text-sm font-medium text-foreground">Before</p>
              <p className="text-sm text-muted-foreground">
                {content.impact.pages[0].beforeAfter.before}
              </p>
            </div>
            <div className="space-y-2">
              <button
                onClick={() =>
                  setLightboxImage({
                    src: reelsEditorAfter,
                    alt: 'Instagram Reels editor after',
                  })
                }
                className="rounded-2xl overflow-hidden bg-background cursor-pointer hover:opacity-90 transition-opacity w-full"
              >
                <img
                  src={reelsEditorAfter}
                  alt="After"
                  className="w-full h-auto max-h-[250px] object-contain"
                />
              </button>
              <p className="text-sm font-medium text-foreground">After</p>
              <p className="text-sm text-muted-foreground">
                {content.impact.pages[0].beforeAfter.after}
              </p>
            </div>
          </div>
        </div>

        {/* Page 2: Press coverage */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">
            {content.impact.pages[1].title}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <blockquote className="rounded-2xl border-l-4 border-primary bg-muted/40 p-5">
              <p className="text-muted-foreground italic">
                {content.impact.pages[1].pressQuote}
              </p>
              <footer className="mt-3">
                <a
                  href={content.impact.pages[1].pressUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  — {content.impact.pages[1].pressSource}
                </a>
              </footer>
            </blockquote>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={reelsEditorScreenshot}
                alt="Instagram Reels editor"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Carousel>
    </PresentSlide>
  );

  /** Slide 12: Reflections — dark theme */
  const renderReflections = () => (
    <PresentSlide header={content.reflections.header} dark>
      <div className="space-y-8">
        <h3 className="mb-6 text-2xl font-semibold text-[hsl(40,30%,95%)]">
          {content.reflections.title}
        </h3>
        <div className="space-y-4">
          {content.reflections.lessonsList.map((lesson) => (
            <div
              key={lesson.number}
              className="rounded-2xl bg-[hsl(20,22%,22%)]/80 p-6"
            >
              <p
                className="mb-1 text-sm font-medium"
                style={{ color: 'hsl(195, 65%, 55%)' }}
              >
                {lesson.number}
              </p>
              <p className="font-semibold text-xl text-[hsl(40,30%,95%)]">
                {lesson.title}
              </p>
              <p className="mt-2 text-lg text-[hsl(40,30%,85%)]/80">
                {lesson.description}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-[hsl(200,40%,25%)]/30 p-6">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-wider"
            style={{ color: 'hsl(195, 65%, 55%)' }}
          >
            What I'd Do Differently
          </p>
          <p className="text-lg text-[hsl(40,30%,95%)]">
            {content.reflections.whatIdDoDifferently}
          </p>
        </div>
      </div>
    </PresentSlide>
  );

  // ============================================
  // RENDER
  // ============================================

  return (
    <>
      <Link
        to="/"
        className="fixed left-6 top-6 z-50 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:left-12"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Portfolio
      </Link>

      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        {renderTitleSlide()}
        <div id="slide-1">{renderMoments()}</div>
        <div id="slide-2">{renderCareerOverview()}</div>
        {renderCaseStudyTitle()}
        <div id="slide-4">{renderProblem()}</div>
        <div id="slide-5">{renderResearchOverview()}</div>
        <div id="slide-6">{renderPhase1()}</div>
        <div id="slide-7">{renderReframe()}</div>
        <div id="slide-8">{renderPhase2()}</div>
        <div id="slide-9">{renderPhase3DeepDive()}</div>
        <div id="slide-10">{renderRecommendation()}</div>
        <div id="slide-11">{renderImpact()}</div>
        <div id="slide-12">{renderReflections()}</div>
      </div>

      <ImageLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        src={lightboxImage?.src || ''}
        alt={lightboxImage?.alt || ''}
      />
    </>
  );
};

export default InstagramReelsAnthropicCaseStudy;
