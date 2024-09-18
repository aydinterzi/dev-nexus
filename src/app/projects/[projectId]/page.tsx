// app/projects/[id]/page.tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const mockProjects = [
  {
    id: "1",
    title: "React Geliştirici Aranıyor",
    description:
      "React ile front-end geliştirme yapacak takım arkadaşı aranıyor.",
    skills: ["JavaScript", "React", "CSS"],
    type: "Freelance",
    location: "Uzaktan",
  },
  {
    id: "2",
    title: "Node.js Backend Geliştirici",
    description: "Node.js konusunda deneyimli backend geliştirici arıyoruz.",
    skills: ["JavaScript", "Node.js", "Express"],
    type: "Full-time",
    location: "İstanbul",
  },
  {
    id: "3",
    title: "Full Stack Geliştirici",
    description:
      "Hem front-end hem back-end geliştirme yapacak full stack geliştirici.",
    skills: ["JavaScript", "React", "Node.js"],
    type: "Part-time",
    location: "Ankara",
  },
];

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [project, setProject] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      const foundProject = mockProjects.find((p) => p.id === id);
      setProject(foundProject);
    }
  }, [id]);

  if (!project) return <div>Proje bulunamadı...</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p>
        <strong>Açıklama:</strong> {project.description}
      </p>
      <p>
        <strong>Beceriler:</strong> {project.skills.join(", ")}
      </p>
      <p>
        <strong>Tür:</strong> {project.type}
      </p>
      <p>
        <strong>Konum:</strong> {project.location}
      </p>
    </div>
  );
}
