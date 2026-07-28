import { CaseStudy } from '@/types/case-study';
import samanvayData from '@/content/case-studies/samanvay.json';
import facultyFeedbackData from '@/content/case-studies/faculty-feedback-automation.json';
import libraryNewsData from '@/content/case-studies/library-news-digest.json';

const caseStudiesMap: Record<string, CaseStudy> = {
  samanvay: samanvayData as unknown as CaseStudy,
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
    caseStudiesMap['faculty-feedback-automation'],
    caseStudiesMap['library-news-digest'],
  ];
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  return caseStudiesMap[slug] || null;
}
