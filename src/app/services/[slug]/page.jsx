import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/services/ServiceDetail';
import { SERVICES, getService } from '@/data/services';

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | NadirSoft`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
