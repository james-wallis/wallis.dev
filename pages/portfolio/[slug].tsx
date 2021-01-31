import fs from 'fs';
import path from 'path';
import { FaDev } from 'react-icons/fa';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import IArticle from '../../interfaces/IArticle';
import { getAllPortfolioArticlesAndMinify, getArticleFromCache } from '../../lib/devto';

const cacheFile = '.dev-to-cache-portfolio.json';

interface IProps {
    article: IArticle
}

const ArticlePage = ({ article }: IProps) => (
    <Layout title={article.title} description={article.description}>
        <PageTitle title={article.title} center icons={false} />
        <section className="mt-10 font-light leading-relaxed w-full flex flex-col items-center">
            <article className="prose lg:prose-lg w-full md:w-5/6 xl:w-9/12" dangerouslySetInnerHTML={{ __html: article.html }} />
            <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-gray-700 hover:text-gray-900 transition-colors flex flex-col items-center my-10"
            >
                <span className="text-2xl mb-2">React, comment and follow on</span>
                <FaDev className="text-5xl" />
            </a>
        </section>
    </Layout>

)

export async function getStaticProps({ params }: { params: { slug: string }}) {
    const cacheContents = fs.readFileSync(path.join(process.cwd(), cacheFile), 'utf-8');
    const cache = JSON.parse(cacheContents);
    const article: IArticle = await getArticleFromCache(cache, params.slug);
    return { props: { article } }
}

export async function getStaticPaths() {
    const minifiedArticles = await getAllPortfolioArticlesAndMinify();
    fs.writeFileSync(path.join(process.cwd(), cacheFile), JSON.stringify(minifiedArticles));

    const paths = minifiedArticles.map(({ slug }) => {
        return {
            params: { slug },
        }
    })

    return { paths, fallback: false }
}

export default ArticlePage
