import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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

    const darkModeActive: boolean =
        process.browser && document.documentElement.classList.contains('dark')
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.button
                className="text-2xl sm:text-3xl text-yellow-400 dark:text-yellow-300 focus:outline-none"
                onClick={() => toggleMode()}
                key={darkModeActive ? 'dark-icon' : 'light-icon'}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {darkModeActive ? '🌙' : '🌤️'}
            </motion.button>
        </AnimatePresence>
    )
}

export default DarkModeToggle
