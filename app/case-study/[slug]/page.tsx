import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
import { CaseStudyHeader } from '@/components/case-study/CaseStudyHeader';
import { WorkflowDiagram } from '@/components/case-study/WorkflowDiagram';
import { EngineeringDecisionBlock } from '@/components/case-study/EngineeringDecisionBlock';

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = getCaseStudyBySlug(resolvedParams.slug);
  if (!study) return { title: 'Case Study Not Found' };

  return {
    title: `${study.title} | Raghunandan Dasa`,
    description: study.tagline,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = getCaseStudyBySlug(resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20 px-6 max-w-4xl mx-auto space-y-16 text-zinc-200">
      {/* Header */}
      <CaseStudyHeader
        title={study.title}
        subtitle={study.subtitle}
        role={study.role}
        institution={study.institution}
        productionUrl={study.productionUrl}
      />

      {/* 1. Overview */}
      <section className="space-y-4 border-b border-zinc-900 pb-12">
        <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          01. Overview
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-zinc-300">
          {study.overview}
        </p>
      </section>

      {/* 2. Background */}
      <section className="space-y-4 border-b border-zinc-900 pb-12">
        <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          02. Background
        </h2>
        <div className="space-y-3 text-base text-zinc-300 leading-relaxed">
          {study.background.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* 3. Problem Statement */}
      <section className="space-y-6 border-b border-zinc-900 pb-12">
        <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          03. Problem Statement
        </h2>
        <p className="text-base text-zinc-300 leading-relaxed">{study.problemStatement.lead}</p>

        {study.problemStatement.bulletPoints && (
          <ul className="space-y-2 pl-6 list-disc text-sm text-zinc-300">
            {study.problemStatement.bulletPoints.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg text-sm text-zinc-300 font-medium">
          {study.problemStatement.summary}
        </div>
      </section>

      {/* 4. Operational Context */}
      <section className="space-y-4 border-b border-zinc-900 pb-12">
        <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          04. Operational Context & Constraints
        </h2>
        <p className="text-base text-zinc-300 leading-relaxed">{study.operationalContext.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {study.operationalContext.constraints.map((constraint, i) => (
            <div key={i} className="bg-zinc-900/60 border border-zinc-800/80 px-4 py-3 rounded-lg text-xs text-zinc-300 flex items-start gap-2">
              <span className="text-zinc-500 font-mono select-none">/</span>
              <span>{constraint}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contribution */}
      <section className="space-y-4 border-b border-zinc-900 pb-12">
        <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          05. My Contribution
        </h2>
        <p className="text-base text-zinc-300 leading-relaxed">{study.contribution.lead}</p>
        <ul className="space-y-2 pl-6 list-disc text-sm text-zinc-300">
          {study.contribution.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="text-sm font-semibold text-zinc-200 pt-2">{study.contribution.summary}</p>
      </section>

      {/* 6. Solution */}
      <section className="space-y-6 border-b border-zinc-900 pb-12">
        <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          06. The Solution
        </h2>
        <p className="text-base text-zinc-300 leading-relaxed">{study.solution.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {study.solution.keyPoints.map((point, i) => (
            <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-lg text-xs font-mono text-zinc-300">
              ✓ {point}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Workflow */}
      <section className="space-y-4 border-b border-zinc-900 pb-12">
        <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          07. Core Operational Workflow
        </h2>
        <WorkflowDiagram
          description={study.workflow.description}
          steps={study.workflow.steps}
        />
      </section>

      {/* 8. Engineering Decisions */}
      <section className="space-y-4 border-b border-zinc-900 pb-12">
        <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          08. Key Engineering Decisions
        </h2>
        <EngineeringDecisionBlock decisions={study.engineeringDecisions} />
      </section>

      {/* 9. Additional Modules / Constraint Validation */}
      {(study.additionalModules || study.constraintValidation) && (
        <section className="space-y-6 border-b border-zinc-900 pb-12">
          <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            09. Operational Architecture & Constraint Modules
          </h2>

          {study.constraintValidation && (
            <div className="space-y-4 bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-zinc-100">Constraint Validation Engine</h3>
              <p className="text-sm text-zinc-300">{study.constraintValidation.lead}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {study.constraintValidation.evaluations.map((item, i) => (
                  <div key={i} className="bg-zinc-950 border border-zinc-800/80 px-3 py-2 rounded text-xs text-zinc-300 flex items-center gap-2">
                    <span className="text-emerald-500 text-[10px]">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-zinc-400 pt-2">{study.constraintValidation.details}</p>
            </div>
          )}

          {study.additionalModules && (
            <div className="space-y-4 pt-4">
              {study.additionalModules.map((mod, i) => (
                <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl space-y-2">
                  <h3 className="text-base font-bold text-zinc-100">{mod.title}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">{mod.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 10. Deployment & Technologies */}
      <section className="space-y-6 border-b border-zinc-900 pb-12">
        <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          10. Technologies & Deployment
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {study.technologies.map((techGroup, i) => (
            <div key={i} className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl space-y-2">
              <span className="text-xs font-mono text-zinc-500 uppercase block">{techGroup.category}</span>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {techGroup.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-zinc-500 font-mono text-[10px]">#</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {study.productionUrl && (
          <div className="bg-emerald-950/40 border border-emerald-800/60 p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-emerald-300">Live Production Deployment</h4>
              <p className="text-xs text-zinc-400 mt-1">Actively used by the Program Office at IIM Bodh Gaya.</p>
            </div>
            <a
              href={study.productionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-mono font-bold rounded-md transition-colors w-fit"
            >
              Open Live Platform ↗
            </a>
          </div>
        )}
      </section>

      {/* 11. Lessons Learned */}
      <section className="space-y-6 border-b border-zinc-900 pb-12">
        <h2 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          11. Lessons Learned & Core Principles
        </h2>
        <p className="text-base text-zinc-300 leading-relaxed">{study.lessonsLearned.lead}</p>
        <div className="space-y-3">
          {study.lessonsLearned.insights.map((insight, i) => (
            <div key={i} className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-lg text-sm text-zinc-300">
              &quot;{insight}&quot;
            </div>
          ))}
        </div>
      </section>

      {/* Footer Navigation Back to Home */}
      <div className="pt-6 flex justify-between items-center text-xs font-mono text-zinc-500">
        <Link href="/" className="hover:text-zinc-200 transition-colors">
          ← Back to Portfolio Homepage
        </Link>
        <a href="#top" className="hover:text-zinc-200 transition-colors">
          ↑ Back to Top
        </a>
      </div>
    </article>
  );
}
