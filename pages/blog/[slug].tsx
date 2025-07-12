import fs from 'fs'
import moment from 'moment'
import { GetStaticPaths, GetStaticProps } from 'next'
import path from 'path'
import { ParsedUrlQuery } from 'querystring'

import DevToCallToAction from '../../components/DevToCallToAction'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import IArticle from '../../interfaces/IArticle'
import { getAllBlogArticles, getArticleFromCache } from '../../lib/devto'

const cacheFile = '.dev-to-cache.json'

interface IProps {
    article: IArticle
    publishedDate: string
}

interface IParams extends ParsedUrlQuery {
    slug: string
}

const ArticlePage = ({ article, publishedDate }: IProps): JSX.Element => (
    <Layout title={article.title} description={article.description}>
        {article.coverImage && (
            <img
                src={article.coverImage}
                alt={`Cover for ${article.title}`}
                className="md:mt-6 lg:mt-10 xl:mt-14 h-40 sm:h-48 md:h-52 lg:h-64 xl:h-68 2xl:h-80 mx-auto"
            />
        )}
        <PageTitle title={article.title} center icons={false} />
        <p className="text-center w-full my-4 italic leading-relaxed text-gray-600">
            {publishedDate}
        </p>
        <section className="mt-6 font-light leading-relaxed w-full flex flex-col items-center">
            <article
                className="prose dark:prose-dark lg:prose-lg w-full md:w-5/6 xl:w-9/12"
                dangerouslySetInnerHTML={{ __html: article.html }}
            />
            <DevToCallToAction href={article.devToURL} />
        </section>
    </Layout>
)

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams
    // Read cache and parse to object
    const cacheContents = fs.readFileSync(path.join(process.cwd(), cacheFile), 'utf-8')
    const cache = JSON.parse(cacheContents)

    // Fetch the article from the cache
    const article: IArticle = await getArticleFromCache(cache, slug)

    const publishedDate = moment(article.publishedAt).format('Do MMMM YYYY')

    return { props: { article, publishedDate }, revalidate: 3600 }
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the published articles and cache them for use in getStaticProps
    const articles: IArticle[] = await getAllBlogArticles()

    // Save article data to cache file
    fs.writeFileSync(path.join(process.cwd(), cacheFile), JSON.stringify(articles))

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
