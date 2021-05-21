import { AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import Link from './NoScrollLink'

const links: { name: string; href: string; hideOnMobile?: boolean }[] = [
    {
        name: 'Home',
        href: '/',
        hideOnMobile: true,
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

const isActiveLink = (href: string, currentPathname: string): boolean => {
    if (href === '/') {
        return href === currentPathname
    }

    return currentPathname.startsWith(href)
}

const Navigation = (): JSX.Element => {
    const router = useRouter()

    return (
        <AnimateSharedLayout>
            <nav className="flex">
                {links.map(({ name, href, hideOnMobile = false }) => (
                    <Link key={name} href={href}>
                        <a
                            className={`mr-6 sm:mr-8 flex flex-col relative ${
                                hideOnMobile ? 'hidden' : 'inline'
                            } sm:inline`}
                        >
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
            </nav>
        </AnimateSharedLayout>
    )
}

export default Navigation
