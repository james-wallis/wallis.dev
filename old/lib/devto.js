import axios from 'axios';

const username = 'jameswallis'; // Change this to your Dev.to username
const websiteURL = 'https://wallis.dev/blog/'; // Change this to be the URL that Vercel assigned your blog, the https and tailing slash is required

// Get all users articles from Dev.to and filter by ones with a canonical URL to your blog
export const getAllArticles = async () => {
    const params = { username, per_page: 1000 };
    const { data: articles } = await axios.get(`https://dev.to/api/articles`, { params });
    return articles.filter((article) => article.canonical_url.startsWith(websiteURL));
}

// Takes a URL and returns the relative slug to your website
export const convertCanonicalURLToRelative = (canonicalURL) => {
    return canonicalURL.replace(websiteURL, '');
}

// Gets all your articles from Dev.to and creates an object of relative URLs and IDs for use in getArticleFromCache
export const getAllArticlesAndMinifyForCache = async () => {
    const articles = await getAllArticles();

    // Create array containing article ID, and local slug
    const minifiedArticles = articles.map(({ id, canonical_url }) => ({
        id,
        slug: convertCanonicalURLToRelative(canonical_url),
    }));

    return minifiedArticles;
}

// Gets an article from Dev.to using the ID that was saved to the cache earlier
export const getArticleFromCache = async (cache, slug) => {
    // Get minified post from cache
    const cachedArticle = cache.find(cachedArticle => cachedArticle.slug === slug);

    // Get the article from Dev.to by the ID found in the cache
    const { data: article } = await axios.get(`https://dev.to/api/articles/${cachedArticle.id}`);
    return article;
}