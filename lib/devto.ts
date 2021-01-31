import axios, { AxiosResponse } from 'axios';
import IArticle from '../interfaces/IArticle';
import ICachedArticle from '../interfaces/ICachedArticle';

const username = 'jameswallis';
const websiteURL = 'https://wallis.dev/blog/';

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

// Get all users articles from Dev.to and filter by ones with a canonical URL to your blog
export const getAllArticles = async () => {
    const params = { username, per_page: 1000 };
    const { data }: AxiosResponse = await axios.get(`https://dev.to/api/articles`, { params });
    const articles: IArticle[] = data.map(convertDevtoResponseToArticle);
    return articles.filter((article: IArticle) => article.canonical.startsWith(websiteURL));
}

// Takes a URL and returns the relative slug to your website
export const convertCanonicalURLToRelative = (canonical: string) => {
    return canonical.replace(websiteURL, '');
}

// Gets all your articles from Dev.to and creates an object of relative URLs and IDs for use in getArticleFromCache
export const getAllArticlesAndMinifyForCache = async () => {
    const articles: IArticle[] = await getAllArticles();

    // Create array containing article ID, and local slug
    const minifiedArticles = articles.map(({ id, canonical }): ICachedArticle => ({
        id,
        slug: convertCanonicalURLToRelative(canonical),
    }));

    return minifiedArticles;
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