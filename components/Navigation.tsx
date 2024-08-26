import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import { isActiveLink } from '../lib/utils'
import Link from './NoScrollLink'

const links: { name: string; href: string }[] = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Blog',
        href: '/blog',
    },
    {
        name: 'Portfolio',
        href: '/portfolio',
    },
]

const Navigation = (): JSX.Element => {
    const router = useRouter()

    return (
        <motion.nav layout className="flex">
            {links.map(({ name, href }) => (
                <Link key={name} href={href} legacyBehavior>
                    <a className="mr-6 sm:mr-8 flex flex-col relative">
                        {name}
                        {isActiveLink(href, router.pathname) && (
                            <motion.div
                                layoutId="navigation-underline"
                                className="navigation-underline"
                                animate
                            />
                        )}
                    </a>
                </Link>
            ))}
        </motion.nav>
    )
}

export default Navigation
