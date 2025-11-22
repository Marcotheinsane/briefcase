interface ButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
}

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
    const baseStyles =
        "px-6 py-3 rounded font-medium transition-colors duration-200";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-700 hover:bg-gray-800 text-white",
        outline: "border border-white hover:bg-white hover:text-black text-white",
    };

    return (
        <a href={href} className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </a>
    );
}
