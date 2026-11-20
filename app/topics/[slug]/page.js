import { notFound } from 'next/navigation';
import { getLessonData, getAllLessonSlugs } from '../../../data/lessons';
import { getTopicBySlug, getAdjacentTopics } from '../../../data/topics';
import { highlightCode } from '../../../lib/shiki';
import DocShell from '../../../components/layout/DocShell';
import TopicLayout from '../../../components/layout/TopicLayout';
import LessonContent from '../../../components/learning/LessonContent';
import Footer from '../../../components/layout/Footer';

export async function generateStaticParams() {
  const slugs = getAllLessonSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const topic = getTopicBySlug(slug);
  if (!topic) return { title: 'Topic Not Found — CSSMaster' };

  const title = `${topic.title} (${topic.number}) — Complete CSS Guide & Interactive Demo`;
  const description =
    topic.shortDesc ||
    `Master ${topic.title} in CSS with syntax rules, property tables, interactive demo workbench, and knowledge assessments.`;

  return {
    title,
    description,
    keywords: [topic.title, 'CSS', 'CSS3', 'web design', 'syntax', 'flexbox', 'grid', 'selectors'],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/topics/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function TopicPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const lesson = getLessonData(slug);
  const topic = getTopicBySlug(slug);

  if (!lesson || !topic) {
    notFound();
  }

  // Pre-highlight code blocks server-side with Shiki
  const highlightedCodes = {};
  for (const section of lesson.sections) {
    if (section.code) {
      highlightedCodes[section.id] = await highlightCode(section.code, section.codeLang || 'css');
    }
  }

  const { prev, next } = getAdjacentTopics(slug);

  // Extract live demo configuration from sections
  const demoSection = lesson.sections.find((s) => s.demo);
  const demo = demoSection ? demoSection.demo : null;

  return (
    <DocShell fullHeight>
      <TopicLayout
        demo={demo}
        slug={slug}
        category={topic.category}
        sections={lesson.sections}
      >
        <LessonContent
          lesson={lesson}
          highlightedCodes={highlightedCodes}
          prevTopic={prev}
          nextTopic={next}
        />
        <Footer />
      </TopicLayout>
    </DocShell>
  );
}
