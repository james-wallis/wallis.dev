import SocialIcons from './SocialIcons'
import Link from './NoScrollLink'

const Footer = (): JSX.Element => (
    <footer className="w-full flex flex-col items-center">
        <SocialIcons />
        <a
            className="text-sm mb-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            href="mailto:j@wallis.dev?Subject=Hello"
        >
            j@wallis.dev
        </a>
        <Link href="/blog/rewriting-my-website-with-a-devto-cms">
            <a className="text-sm mb-8 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                Powered by the Dev.to API. Find out more.
            </a>
        </Link>
    </footer>
)

export default Footer
