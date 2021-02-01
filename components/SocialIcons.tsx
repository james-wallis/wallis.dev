import { FaDev, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const links = [
    {
        Icon: FaDev,
        href: 'https://dev.to/jameswallis',
    },
    {
        Icon: FaGithub,
        href: 'https://github.com/james-wallis',
    },
    {
        Icon: FaLinkedinIn,
        href: 'https://www.linkedin.com/in/jamesemwallis',
    }
]

const SocialIcons = () => (
    <div className="flex flex-row text-2xl my-6 text-gray-500 dark:text-gray-300">
        {links.map(({ Icon, href }) => (
            <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mr-3 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
                <Icon />
            </a>
        ))}
    </div>
)

export default SocialIcons
