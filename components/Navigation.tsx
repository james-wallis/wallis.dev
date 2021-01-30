import Link from 'next/link'

const links = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Blog',
        href: '/blog',
    }
]

const Navigation = () => (
    <nav>
        {links.map(({ name, href }) => (
            <Link href={href} key={name}>
                <a className="pl-8">{name}</a>
            </Link>
        ))}
    </nav>
)

export default Navigation;