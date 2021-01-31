import Link from 'next/link'

const links = [
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
    }
]

const Navigation = () => (
    <nav>
        {links.map(({ name, href }) => (
            <Link key={name} href={href}>
                <a className="ml-8">{name}</a>
            </Link>
        ))}
    </nav>
)

export default Navigation;