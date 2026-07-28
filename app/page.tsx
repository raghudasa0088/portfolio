import { Hero } from '@/components/homepage/Hero';
import { FeaturedProject } from '@/components/homepage/FeaturedProject';
import { AdditionalProjects } from '@/components/homepage/AdditionalProjects';
import { ApproachSection } from '@/components/homepage/ApproachSection';
import { CurrentWorkSection } from '@/components/homepage/CurrentWorkSection';
import { AboutSection } from '@/components/homepage/AboutSection';
import { ContactSection } from '@/components/homepage/ContactSection';
import { getFeaturedCaseStudy, getAdditionalCaseStudies } from '@/lib/case-studies';

export default function HomePage() {
  const featuredCaseStudy = getFeaturedCaseStudy();
  const additionalCaseStudies = getAdditionalCaseStudies();

  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Featured Case Study */}
      <FeaturedProject caseStudy={featuredCaseStudy} />

      {/* Section 3 — Additional Case Studies */}
      <AdditionalProjects caseStudies={additionalCaseStudies} />

      {/* Section 4 — Approach */}
      <ApproachSection />

      {/* Section 5 — Current Work */}
      <CurrentWorkSection />

      {/* Section 6 — About */}
      <AboutSection />

      {/* Section 7 — Contact */}
      <ContactSection />
    </div>
  );
}
