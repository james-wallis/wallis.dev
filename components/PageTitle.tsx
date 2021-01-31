import SocialIcons from "./SocialIcons";

interface IProps {
    title: string
    subtitle?: string
    center?: boolean
    icons?: boolean
}

const PageTitle = ({ title, subtitle = '', center = false, icons = true }: IProps) => (
    <div className="mt-14 lg:mt-32 font-light">
        <h1 className={`text-3xl sm:text-5xl mb-2 ${center && 'md:text-center'}`}>{title}</h1>
        {subtitle && <p className="text-2xl sm:text-4xl w-11/12 sm:w-5/6 md:w-11/12 lg:w-5/6 xl:w-3/5">
            {subtitle}
        </p>}
        {icons && <SocialIcons />}
    </div>
)

export default PageTitle
