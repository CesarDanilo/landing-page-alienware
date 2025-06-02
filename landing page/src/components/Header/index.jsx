import { FaMoon, FaSun } from 'react-icons/fa'

export default function Header({ theme, toggleTheme }) {
    return (
        <header className="w-full flex justify-between items-center p-4 bg-gray-100 dark:bg-black transition-colors duration-300">
            {/* <h1 className="text-xl font-bold">Minha Landing Page</h1> */}

            <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="text-gray-600 dark:text-gray-300 focus:outline-none"
            >
                {theme === 'dark' ? (
                    <FaSun size={24} />
                ) : (
                    <FaMoon size={24} />
                )}
            </button>
        </header>
    )
}
