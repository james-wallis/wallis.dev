import Link from 'next/link'

const links: { name: string, href: string, hideOnMobile?: boolean }[] = [
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
    }
]

const Navigation = () => (
    <nav>
        {links.map(({ name, href, hideOnMobile = false }) => (
            <Link key={name} href={href}>
                <a className={`ml-8 ${hideOnMobile ? 'hidden' : 'inline'} sm:inline`}>{name}</a>
            </Link>
        ))}
    </nav>
)

export default Navigation;