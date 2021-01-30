import ArticleCard from '../components/ArticleCard'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import IArticle from '../interfaces/IArticle'
import { getAllArticles } from '../lib/devto'

interface IProps {
    articles: IArticle[]
}

const title = "Blog ✍️"
const subtitle = ['I share anything that may help others,', 'technologies I\'m using and cool things I\'ve made.']

const BlogPage = ({ articles }: IProps) => (
    <Layout title={title} description={subtitle.join(' ')}>
        <PageTitle
            title={title}
            subtitle={subtitle}
        />

        <section className="mt-24 md:mt-32 xl:mt-44 text-lg font-light leading-relaxed md:w-5/6 xl:w-9/12">
            <h2 className="text-4xl mb-8">Latest posts</h2>
            {articles.map(({ title, description, publishedAt, tags, canonical }) => (
                <ArticleCard
                    title={title}
                    description={description}
                    date={publishedAt}
                    tags={tags}
                    canonical={canonical}
                />
            ))}
        </section>
    </Layout>
)

export async function getStaticProps() {
    // Get all the articles that have a canonical URL pointed to your blog
    const articles = await getAllArticles();

    // Pass articles to the page via props
    return { props: { articles } };
}

export default BlogPage
