import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Section from '../components/Section'
import ArticleCard from '../components/ArticleCard'
import IArticle from '../interfaces/IArticle'
import { getAllBlogArticles } from '../lib/devto'
import { GetStaticProps } from 'next'

interface IProps {
    articles: IArticle[]
}

const title = 'Blog ✍️'
const subtitle =
    "I share anything that may help others, technologies I'm using and cool things I've made."

const BlogPage = ({ articles }: IProps): JSX.Element => (
    <Layout title={title} description={subtitle}>
        <PageTitle title={title} subtitle={subtitle} />

        <Section linebreak>
            {articles.map(({ title, description, publishedAt, tags, canonical }) => (
                <ArticleCard
                    key={title}
                    title={title}
                    description={description}
                    date={publishedAt}
                    tags={tags}
                    canonical={canonical}
                />
            ))}
        </Section>
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    // Get all the articles that have a canonical URL pointed to your blog
    const articles = await getAllBlogArticles()

    // Pass articles to the page via props
    return { props: { articles } }
}

export default BlogPage
