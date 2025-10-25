import { projects } from "@/app/utils/projects.constants";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.filter(
    (item) => item.title.toLowerCase() === slug
  )[0];

  return <div>{project.description}</div>;
}
