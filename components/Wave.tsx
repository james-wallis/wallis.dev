import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const Wave = (): JSX.Element => {
    const [isWave, setIsWave] = useState(true)

    const toggle = (): void => {
        setIsWave(!isWave)
    }

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.button
                className="ml-2 lg:ml-3 select-none cursor-pointer focus:outline-none"
                onClick={() => toggle()}
                key={isWave ? 'dark-icon' : 'light-icon'}
                initial={{ x: 0, opacity: 0, scale: 0 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: 0, opacity: 0, scale: 0 }}
                transition={{ duration: 0.1 }}
            >
                {isWave ? `👋` : `✨`}
            </motion.button>
        </AnimatePresence>
    )
}
