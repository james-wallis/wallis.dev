import { FaDev } from 'react-icons/fa'

interface IProps {
    href: string
}

const DevToCallToAction = ({ href }: IProps): JSX.Element => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="text-gray-700 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white transition-colors flex flex-col items-center my-10"
    >
        <span className="text-2xl mb-2">React, comment and follow on</span>
        <FaDev className="text-5xl" />
    </a>
)

export default DevToCallToAction
