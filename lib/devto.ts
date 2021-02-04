import axios, { AxiosResponse } from 'axios';
import IArticle from '../interfaces/IArticle';
import IMinifiedArticle from '../interfaces/IMinifiedArticle';
import { convertMarkdownToHtml, sanitizeDevToMarkdown } from './markdown';

const username = 'jameswallis';
const blogURL = 'https://wallis.dev/blog/';
const portfolioURL = 'https://wallis.dev/portfolio/';

// Takes a URL and returns the relative slug to your website
export const convertCanonicalURLToRelative = (canonical: string) => {
    if (canonical.startsWith(portfolioURL)) {
        return canonical.replace(portfolioURL, '');
    }
    return canonical.replace(blogURL, '');
}

const convertDevtoResponseToArticle = (data: any): IArticle => {
    const slug = convertCanonicalURLToRelative(data.canonical_url);
    const markdown = sanitizeDevToMarkdown(data.body_markdown);
    const html = convertMarkdownToHtml(markdown);

    const article: IArticle = {
        title: data.title,
        description: data.description,
        publishedAt: data.published_at,
        devToURL: data.url,
        coverImage: data.cover_image,
        tags: data.tag_list,
        canonical: data.canonical_url,
        slug,
        html,
    }
    return article;
}

// Removes mainly the html element of the article to reduce the size of the object
const minifyArticle = (article: IArticle): IMinifiedArticle => {
    const { devToURL, html, ...restOfArticle } = article;
    const minified: IMinifiedArticle = restOfArticle;
    return minified;
}

const blogFilter = (article: IArticle) => article.canonical.startsWith(blogURL);

const portfolioFilter = (article: IArticle) => article.canonical.startsWith(portfolioURL);

// Get all users articles from Dev.to and filter by ones with a canonical URL to your blog
export const getAllArticles = async () => {
    const params = { username, per_page: 1000 };
    const headers = { 'api-key': process.env.DEVTO_APIKEY };
    const { data }: AxiosResponse = await axios.get(`https://dev.to/api/articles/me`, { params, headers });
    const articles: IArticle[] = data.map(convertDevtoResponseToArticle);
    return articles;
}

export const getAllBlogArticles = async () => {
    const articles = await getAllArticles();
    return articles.filter(blogFilter);
}

export const getAllBlogArticlesMinified = async () => {
    const articles = await getAllBlogArticles();
    return articles.map(minifyArticle);
}

export const getAllPortfolioArticles = async () => {
    const articles = await getAllArticles();
    return articles.filter(portfolioFilter);
}

export const getAllPortfolioArticlesMinified = async () => {
    const articles = await getAllPortfolioArticles();
    return articles.map(minifyArticle);
}

// Gets an article from Dev.to using the ID that was saved to the cache earlier
export const getArticleFromCache = async (cache: IArticle[], slug: string) => {
    // Get minified post from cache
    const article = cache.find(cachedArticle => cachedArticle.slug === slug) as IArticle;
    return article;
}
