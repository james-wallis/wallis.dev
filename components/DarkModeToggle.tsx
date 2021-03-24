import { useState, useEffect } from 'react'

const isDark = (): boolean =>
    (localStorage && localStorage.theme === 'dark') ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

const getThemeString = (isDark: boolean): string => (isDark ? 'dark' : 'light')

const DarkModeToggle = (): JSX.Element => {
    const [isDarkMode, setDarkMode] = useState(false)

    const toggleMode = (): void => {
        localStorage.theme = getThemeString(!isDarkMode)
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        setDarkMode(!isDarkMode)
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
