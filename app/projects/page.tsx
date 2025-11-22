import { projects } from "@/componentes/ProjectsData";
import ProjectCard from "@/componentes/ProjectCard";
import Button from "@/componentes/button";

export default function Projects() {
    return (
        <main className="pt-24 max-w-5xl mx-auto px-6">


            <a href="/" className="px-5 py-2 bg-blue-600 rounded hover:bg-blue-700 mb-8 inline-block" >volver</a>
            <h1 className="text-4xl font-bold mb-10">Mis Proyectos</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </main>
    );
}
