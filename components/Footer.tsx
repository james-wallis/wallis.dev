import SocialIcons from './SocialIcons'

const Footer = (): JSX.Element => (
    <footer className="w-full flex flex-col items-center">
        <SocialIcons />
        <a
            className="text-base mb-8 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            href="mailto:j@wallis.dev?Subject=Hello"
        >
            j@wallis.dev
        </a>
    </footer>
)

export default Footer
