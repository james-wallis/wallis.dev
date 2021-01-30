import SocialIcons from "./SocialIcons";

interface IProps {
    title: string
    subtitle?: string[]
    center?: boolean
    icons?: boolean
}

const PageTitle = ({ title, subtitle = [], center = false, icons = true }: IProps) => (
    <div className="mt-14 lg:mt-32 font-light">
        <h1 className={`text-4xl sm:text-5xl mb-2 ${center && 'text-center'}`}>{title}</h1>
        <p className="text-3xl sm:text-4xl">
            {subtitle.map((line) => (
                <span className="block">{line}</span>
            ))}
        </p>
        {icons && <SocialIcons />}
    </div>
)

export default PageTitle
