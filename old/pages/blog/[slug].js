import React from 'react';
import fs from 'fs';
import path from 'path';
import Layout from '../../components/Layouts/Main';
import White from '../../components/Sections/White';
import { getAllArticlesAndMinifyForCache, getArticleFromCache } from '../../lib/devto';

const cacheFile = '.dev-to-cache.json';

function ArticlePage({ article }) {
    return (
        <Layout head={{ title: `${article.title} | blog`, description: article.description }} header={{ h1: article.title, height: 60, image: article.cover_image }}>
            <White>
                <div className='content'>
                    <p className='construction'>
                        New website pending but I wanted to share my blogs on here before taking time to re-implement it.
                        This blog is dynamically loaded from Dev.to and updates when I create/update an article.
                        {/* If you would like to read about how I use Dev.to to write and publish my blogs, read my blog <a>Blog title here</a> */}
                    </p>
                    <a href={article.url}>Also posted on Dev.to</a>
                    <p className='tags'>{article.tag_list}</p>
                    <div className='markdown' dangerouslySetInnerHTML={{ __html: article.body_html }} />
                </div>
            </White>
            <style jsx>{`
                .construction {
                    font-style: italic;
                    text-align: center;
                    width: 90%;
                }
                .content {
                    text-align: left;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    overflow: scroll;
                }
                .markdown {
                    width: 100%;
                    font-size: 20px;
                }
                @media (min-width: 992px) {
                    .construction {
                        width: 60%;
                    }
                    .markdown {
                        width: 80%;
                    }
                }
            `}</style>

            <style global jsx>{`
                .highlight__panel {
                    display: none;
                }
            `}</style>
        </Layout>
    )
}

// This function gets called at build time
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

// This also gets called at build time
export async function getStaticProps({ params }) {
    // Read cache and parse to object
    const cacheContents = fs.readFileSync(path.join(process.cwd(), cacheFile));
    const cache = JSON.parse(cacheContents);

    // Using the cache, fetch the article from Dev.to
    const article = await getArticleFromCache(cache, params.slug);

    return { props: { article } }
}

export default ArticlePage;