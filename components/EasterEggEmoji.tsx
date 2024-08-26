import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export interface EasterEggEmojiProps {
    primary: string
    secondary: string
}

export const EasterEggEmoji = ({ primary, secondary }: EasterEggEmojiProps): JSX.Element => {
    const [isSecondary, setIsSecondary] = useState(false)

    const toggle = (): void => {
        setIsSecondary(!isSecondary)
    }

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.button
                className="ml-2 lg:ml-3 select-none cursor-pointer focus:outline-none"
                onClick={() => toggle()}
                key={isSecondary ? 'secondary-emoji' : 'primary-emoji'}
                initial={{ x: 0, opacity: 0, scale: 0 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: 0, opacity: 0, scale: 0 }}
                transition={{ duration: 0.1 }}
            >
                {isSecondary ? secondary : primary}
            </motion.button>
        </AnimatePresence>
    )
}
