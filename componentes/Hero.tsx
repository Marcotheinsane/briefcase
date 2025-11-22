export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold mb-4">
                Hola, soy <span className="text-blue-500">Marcos Villarroel</span>
            </h1>

            <p className="text-gray-300 max-w-xl">
                Desarrollador Full-Stack especializado en Django, MySQL, Vue y React.
                Construyo aplicaciones web con enfoque en calidad y rendimiento.
            </p>

            <div className="mt-6 flex gap-4">
                <a
                    href="/cv.pdf"
                    className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700"
                >
                    Descargar CV
                </a>

                <a
                    href="/projects"
                    className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black"
                >
                    Ver proyectos
                </a>
            </div>
        </section>
    );
}