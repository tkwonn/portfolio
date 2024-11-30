export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="mb-20 flex flex-col items-center px-4">
            <section
                id="projects"
                className="mb-28 w-full max-w-[70rem] sm:mb-0"
            >
                {children}
            </section>
        </main>
    );
}
