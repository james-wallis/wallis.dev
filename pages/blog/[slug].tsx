import fs from 'fs';
import path from 'path';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import IArticle from '../../interfaces/IArticle';
import { getAllArticlesAndMinifyForCache, getArticleFromCache } from '../../lib/devto';

const cacheFile = '.dev-to-cache.json';

interface IProps {
    article: IArticle
}

const ArticlePage = ({ article }: IProps) => (
    <Layout title={article.title} description={article.description}>
        <img
            src={article.coverImage}
            alt={`Cover image for ${article.title}`}
            className="md:mt-6 lg:mt-10 xl:mt-14"
        />
        <PageTitle title={article.title} center />
        <section className="mt-10 font-light leading-relaxed w-full flex flex-col items-center">
            <article className="prose lg:prose-lg w-full md:w-5/6 xl:w-9/12" dangerouslySetInnerHTML={{ __html: article.html }} />
        </section>
    </Layout>

)

export async function getStaticProps({ params }: { params: { slug: string }}) {
    // Read cache and parse to object
    const cacheContents = fs.readFileSync(path.join(process.cwd(), cacheFile), 'utf-8');
    const cache = JSON.parse(cacheContents);

    // Using the cache, fetch the article from Dev.to
    const article: IArticle = await getArticleFromCache(cache, params.slug);

    return { props: { article } }
}

export async function getStaticPaths() {
    // Get minified articles (just article ID and local slug) and cache them for use in getStaticProps
    const minifiedArticles = await getAllArticlesAndMinifyForCache();

    // Save minified article data to cache file
    fs.writeFileSync(path.join(process.cwd(), cacheFile), JSON.stringify(minifiedArticles));

    // Get the paths we want to pre-render based on posts
    const paths = minifiedArticles.map(({ slug }) => {
        return {
            params: { slug },
        }
    })

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export default ArticlePage
