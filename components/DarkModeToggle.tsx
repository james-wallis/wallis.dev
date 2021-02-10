import { useState, useEffect } from "react";

const isDark = () => (
    localStorage && localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)

const getThemeString = (isDark: boolean) => (
    isDark ? 'dark' : 'light'
)

const DarkModeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        localStorage.theme = getThemeString(!isDarkMode);
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        setDarkMode(!isDarkMode);
    }


    useEffect(() => {
        setDarkMode(isDark())
    }, [])

    return (
        <button
            className="text-2xl sm:text-3xl text-yellow-400 dark:text-yellow-300 focus:outline-none"
            onClick={() => toggleMode()}
        >
            {process.browser && document.documentElement.classList.contains('dark') ? '🌙' : '🌤️'}
        </button>
    )
}

export default DarkModeToggle
