import ArticleCard from '../components/ArticleCard'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Section from '../components/Section'
import IArticle from '../interfaces/IArticle'
import { getLatestBlogAndPortfolioArticle } from '../lib/devto'

interface IProps {
    article: IArticle
    project: IArticle
}

const title = "Hello, I'm James 👋"
const subtitle = "I\'m a software developer working at IBM, and living in Southampton, UK."

const IndexPage = ({ article, project }: IProps) => (
    <Layout title="Home 👋" description={`${title} - ${subtitle}`}>
        <PageTitle
            title={title}
            subtitle={subtitle}
        />

        <Section linebreak>
            <h2 className="text-3xl md:text-4xl mb-4 text-black">About</h2>
            <p className="my-2">I currently am working as a fullstack JavaScript developer predominately on the IBM Blockchain VSCode extension.</p>
            <p className="my-2">
                Outside of work I spend my time creating content for my blog where I discuss other
                projects I'm working on, interesting problems I've had to solve and create tutorials
                to educate and help others use various technologies for the first time or in a more efficient manner.
            </p>
        </Section>
        <Section>
            <h2 className="text-3xl md:text-4xl mb-4 text-black">Latest article</h2>
            <ArticleCard
                title={article.title}
                description={article.description}
                date={article.publishedAt}
                tags={article.tags}
                canonical={article.canonical}
            />

            <h2 className="text-3xl md:text-4xl mb-4 text-black">Latest project</h2>
            <ArticleCard
                title={project.title}
                description={project.description}
                date={project.publishedAt}
                tags={project.tags}
                canonical={project.canonical}
                portfolio
                coverImage={project.coverImage}
            />
        </Section>
    </Layout>
)

export async function getStaticProps() {
    const [article, project] = await getLatestBlogAndPortfolioArticle();
    return { props: { article, project } };
}

export default IndexPage
