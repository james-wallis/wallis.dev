import { ReactNode } from 'react'

interface IProps {
    children: ReactNode
    linebreak?: boolean
}

const linebreakStyles = 'mt-24 md:mt-32 xl:mt-44'

const Section = ({ children, linebreak = false }: IProps): JSX.Element => (
    <section
        className={`text-base sm:text-lg font-light leading-relaxed lg:w-4/5 2xl:w-2/3 text-gray-600 dark:text-gray-300 ${
            linebreak ? linebreakStyles : 'mt-12'
        }`}
    >
        {children}
    </section>
)

export default Section
