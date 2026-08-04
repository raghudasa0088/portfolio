import { Hero } from '@/components/homepage/Hero';
import { WorkingWithMe } from '@/components/homepage/WorkingWithMe';
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
      {/* Hero Section */}
      <Hero />

      {/* Fix 1: Working With Me / Offer Framing Section */}
      <WorkingWithMe />

      {/* Featured Case Study: Samanvay */}
      <FeaturedProject caseStudy={featuredCaseStudy} />

      {/* Additional Case Studies */}
      <AdditionalProjects caseStudies={additionalCaseStudies} />

      {/* Approach */}
      <ApproachSection />

      {/* Fix 2: InsightPrep Corrected B2B Analytics Copy */}
      <CurrentWorkSection />

      {/* About */}
      <AboutSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
