import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { PROJECTS, getProject } from '@/data/projects';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | NadirSoft`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
