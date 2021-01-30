import Navigation from './Navigation'

const Header = () => (
    <header className="
        w-full fixed bg-white flex flex-row justify-between
        py-6 border-b border-gray-200 z-50
        px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
    ">
        <p>James Wallis</p>
        <Navigation />
    </header>
)

export default Header;