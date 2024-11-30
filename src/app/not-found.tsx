import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center px-4">
            <div className="flex h-[40vh] flex-col items-center justify-center text-center">
                <h2 className="mb-8 text-2xl font-bold">
                    404 - Page Not Found
                </h2>
                <Link
                    href="/"
                    className="rounded-md bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                    Home
                </Link>
            </div>
        </main>
    );
}
