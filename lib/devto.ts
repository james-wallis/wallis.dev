import axios, { AxiosResponse } from 'axios';
import IArticle from '../interfaces/IArticle';
import ICachedArticle from '../interfaces/ICachedArticle';

const username = 'jameswallis';
const blogURL = 'https://wallis.dev/blog/';
const portfolioURL = 'https://wallis.dev/portfolio/';

const convertDevtoResponseToArticle = (data: any): IArticle => {
    const article: IArticle = {
        id: data.id,
        title: data.title,
        description: data.description,
        publishedAt: data.published_at,
        slug: data.slug,
        path: data.path,
        url: data.url,
        commentsCount: data.comments_count,
        publicReactionsCount: data.public_reactions_count,
        positiveReactionsCount: data.positive_reactions_count,
        coverImage: data.cover_image,
        tags: data.tag_list,
        canonical: data.canonical_url,
        markdown: data.body_markdown || '',
        html: data.body_html || '',
        collectionId: data.collection_id || -1,
    }
    return article;
}

const blogFilter = (article: IArticle) => article.canonical.startsWith(blogURL);

const portfolioFilter = (article: IArticle) => article.canonical.startsWith(portfolioURL);

// Get all users articles from Dev.to and filter by ones with a canonical URL to your blog
export const getAllArticles = async () => {
    const params = { username, per_page: 1000, 'api-key': 'G9CvBWGe31HUrwWojxARhZSU' };
    const headers = { 'api-key': process.env.DEVTO_APIKEY };
    const { data }: AxiosResponse = await axios.get(`https://dev.to/api/articles/me`, { params, headers });
    const articles: IArticle[] = data.map(convertDevtoResponseToArticle);
    return articles;
}

export const getAllBlogArticles = async () => {
    const articles = await getAllArticles();
    return articles.filter(blogFilter);
}

export const getAllPortfolioArticles = async () => {
    const articles = await getAllArticles();
    return articles.filter(portfolioFilter);
}

export const getLatestBlogAndPortfolioArticle = async () => {
    const articles = await getAllArticles();
    const [latestBlog] = articles.filter(blogFilter);
    const [latestPortfolio] = articles.filter(portfolioFilter);
    return [latestBlog, latestPortfolio];
}

// Takes a URL and returns the relative slug to your website
export const convertCanonicalURLToRelative = (canonical: string) => {
    if (canonical.startsWith(portfolioURL)) {
        return canonical.replace(portfolioURL, '');
    }
    return canonical.replace(blogURL, '');
}

// Gets all your articles from Dev.to and creates an object of relative URLs and IDs for use in getArticleFromCache
const minifyForCache = (articles: IArticle[]) => {
    // Create array containing article ID, and local slug
    const minifiedArticles = articles.map(({ id, canonical }): ICachedArticle => ({
        id,
        slug: convertCanonicalURLToRelative(canonical),
    }));

    return minifiedArticles;
}

export const getAllBlogArticlesAndMinify = async () => {
    const articles: IArticle[] = await getAllBlogArticles();
    return minifyForCache(articles);

}

export const getAllPortfolioArticlesAndMinify = async () => {
    const articles: IArticle[] = await getAllPortfolioArticles();
    return minifyForCache(articles);
}

// Gets an article from Dev.to using the ID that was saved to the cache earlier
export const getArticleFromCache = async (cache: ICachedArticle[], slug: string) => {
    // Get minified post from cache
    const cachedArticle = cache.find(cachedArticle => cachedArticle.slug === slug) as ICachedArticle;

    // Get the article from Dev.to by the ID found in the cache
    const { data }: AxiosResponse = await axios.get(`https://dev.to/api/articles/${cachedArticle.id}`);
    const article = convertDevtoResponseToArticle(data);
    return article;
}