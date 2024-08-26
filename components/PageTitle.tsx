import SocialIcons from './SocialIcons'
import { Wave } from './Wave'

interface IProps {
    title: string
    subtitle?: string
    center?: boolean
    icons?: boolean
    withWave?: boolean
}

const PageTitle = ({
    title,
    subtitle = '',
    center = false,
    icons = true,
    withWave,
}: IProps): JSX.Element => (
    <div className="mt-14 lg:mt-32 font-light w-full text-black dark:text-white">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl mb-2 ${center && 'md:text-center'}`}>
            {title}
            {withWave && <Wave />}
        </h1>
        {subtitle && (
            <p className="text-2xl sm:text-3xl lg:text-4xl w-11/12 sm:w-5/6 md:w-11/12 lg:w-4/5 xl:w-3/5">
                {subtitle}
            </p>
        )}
        {icons && <SocialIcons />}
    </div>
)

export default PageTitle
