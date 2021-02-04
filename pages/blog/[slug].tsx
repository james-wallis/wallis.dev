import fs from 'fs';
import path from 'path';

import DevToCallToAction from '../../components/DevToCallToAction';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import IArticle from '../../interfaces/IArticle';
import { getAllBlogArticles, getArticleFromCache } from '../../lib/devto';

const cacheFile = '.dev-to-cache.json';

interface IProps {
    article: IArticle
}

const ArticlePage = ({ article }: IProps) => (
    <Layout title={article.title} description={article.description}>
        <img
            src={article.coverImage}
            alt={`Cover image for ${article.title}`}
            className="md:mt-6 lg:mt-10 xl:mt-14 h-40 sm:h-48 md:h-52 lg:h-64 xl:h-68 2xl:h-80 mx-auto"
        />
        <PageTitle title={article.title} center icons={false} />
        <section className="mt-10 font-light leading-relaxed w-full flex flex-col items-center">
            <article className="prose dark:prose-dark lg:prose-lg w-full md:w-5/6 xl:w-9/12" dangerouslySetInnerHTML={{ __html: article.html }} />
            <DevToCallToAction href={article.devToURL} />
        </section>
    </Layout>

)

export async function getStaticProps({ params }: { params: { slug: string }}) {
    // Read cache and parse to object
    const cacheContents = fs.readFileSync(path.join(process.cwd(), cacheFile), 'utf-8');
    const cache = JSON.parse(cacheContents);

    // Fetch the article from the cache
    const article: IArticle = await getArticleFromCache(cache, params.slug);

    return { props: { article } }
}

export async function getStaticPaths() {
    // Get the published articles and cache them for use in getStaticProps
    const articles: IArticle[] = await getAllBlogArticles();

    // Save article data to cache file
    fs.writeFileSync(path.join(process.cwd(), cacheFile), JSON.stringify(articles));

    // Get the paths we want to pre-render based on posts
    const paths = articles.map(({ slug }) => {
        return {
            params: { slug },
        }
    })

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export default ArticlePage
