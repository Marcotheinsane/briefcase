interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    demo?: string;
}

export default function ProjectCard({
    title,
    description,
    tech,
    image,
    github,
    demo,
}: ProjectCardProps) {
    return (
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <img src={image} alt={title} className="h-48 w-full object-cover" />

            <div className="p-6">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-400 mt-2">{description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {tech.map((t, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-blue-800 text-xs rounded"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-6">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        GitHub
                    </a>

                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:underline"
                        >
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
