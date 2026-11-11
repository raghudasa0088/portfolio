import { CaseStudy } from '@/types/case-study';
import samanvayData from '@/content/case-studies/samanvay.json';
import insightprepData from '@/content/case-studies/insightprep.json';
import facultyFeedbackData from '@/content/case-studies/faculty-feedback-automation.json';
import libraryNewsData from '@/content/case-studies/library-news-digest.json';

// Case studies ranked by importance:
// 1. Samanvay       — Live institutional deployment, largest operational scope (IIM Bodh Gaya)
// 2. InsightPrep    — Active B2B product with real commercial intent, most technically sophisticated
// 3. Faculty Feedback — Deployed automation solving a real institutional workflow problem
// 4. Library News Digest — Shipped information workflow automation

const caseStudiesMap: Record<string, CaseStudy> = {
  samanvay: samanvayData as unknown as CaseStudy,
  insightprep: insightprepData as unknown as CaseStudy,
  'faculty-feedback-automation': facultyFeedbackData as unknown as CaseStudy,
  'library-news-digest': libraryNewsData as unknown as CaseStudy,
};

export function getAllCaseStudies(): CaseStudy[] {
  return Object.values(caseStudiesMap);
}

export function getFeaturedCaseStudy(): CaseStudy {
  return caseStudiesMap.samanvay;
}

export function getAdditionalCaseStudies(): CaseStudy[] {
  return [
    caseStudiesMap['insightprep'],
    caseStudiesMap['faculty-feedback-automation'],
    caseStudiesMap['library-news-digest'],
  ];
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  return caseStudiesMap[slug] || null;
}
