
// Se usa esto para poder usar hooks y otras funcionalidades de React en este componente
"use client";


import Link from "next/link";
// Importamos los estilos específicos para el Navbar

export default function Navbar() {

    return (
        <nav className="fixed top-0 w-full backdrop-blur bg-black/50 text-white z-50 py-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-6">
                <Link href="/" className="text-xl font-bold">
                    Marcos.dev
                </Link>

                <div className="flex gap-6 text-sm">
                    <Link href="/about">Sobre mí</Link>
                    <Link href="/projects">Proyectos</Link>
                    <Link href="/contact">Contacto</Link>
                </div>
            </div>
        </nav>
    )

}