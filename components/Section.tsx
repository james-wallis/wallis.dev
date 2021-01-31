import { ReactNode } from "react"

interface IProps {
    children: ReactNode
    linebreak?: boolean
}

const linebreakStyles = "mt-24 md:mt-32 xl:mt-44"

const Section = ({ children, linebreak = false }: IProps) => (
    <section className={`text-base sm:text-lg font-light leading-relaxed md:w-9/12 text-gray-600 ${linebreak ? linebreakStyles : 'mt-12'}`}>
        {children}
    </section>
)

export default Section
