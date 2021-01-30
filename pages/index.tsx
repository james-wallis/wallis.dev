import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

const title = "Hello, I'm James 👋"
const subtitle = ['I\'m a software developer working at IBM', 'and living in Southampton, UK.']

const IndexPage = () => (
    <Layout title="Home" description={[title, '-', ...subtitle].join(' ')}>
        <PageTitle
            title={title}
            subtitle={subtitle}
        />

        <section className="mt-24 md:mt-32 xl:mt-44 text-lg font-light leading-relaxed md:w-9/12 text-gray-600">
            <h2 className="text-4xl mb-4 text-black">About</h2>
            <p className="my-2">I currently am working as a fullstack JavaScript developer predominately on the IBM Blockchain VSCode extension.</p>
            <p className="my-2">
                Outside of work I spend my time creating content for my blog where I discuss other
                projects I'm working on, interesting problems I've had to solve and create tutorials
                to educate and help others use various technologies for the first time or in a more efficient manner.
            </p>
        </section>
    </Layout>
)

export default IndexPage
