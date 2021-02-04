import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Section from '../components/Section'
import ArticleCard from '../components/ArticleCard'
import IArticle from '../interfaces/IArticle'
import { getAllPortfolioArticlesMinified } from '../lib/devto'

interface IProps {
    articles: IArticle[]
}

const title = "Projects 📚"
const subtitle = "A selection of projects I\'ve worked on, during my career as a software developer."

const PortfolioPage = ({ articles }: IProps) => (
    <Layout title={title} description={subtitle}>
        <PageTitle
            title={title}
            subtitle={subtitle}
        />
        <Section linebreak>
            {articles.map(({ title, description, publishedAt, tags, canonical, coverImage }) => (
                <ArticleCard
                    key={title}
                    title={title}
                    description={description}
                    date={publishedAt}
                    tags={tags}
                    canonical={canonical}
                    portfolio
                    coverImage={coverImage}
                />
            ))}
        </Section>
    </Layout>
)

export async function getStaticProps() {
    const articles = await getAllPortfolioArticlesMinified();
    return { props: { articles } };
}

export default PortfolioPage