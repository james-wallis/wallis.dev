import React from 'react';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import Navigation from '../../components/Navigation/Main';
import Footer from '../../components/Footer';

const cacheFile = './.dev-to-cache.json';
const canonical_url_prefix = 'https://wallis.dev/blog/';

function Post({ post }) {
    return (
        <div>
            <Navigation animate={true} home={false} />
            <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
            <Footer />

        </div>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const headers = { 'api-key': process.env.DEV_APIKEY };
    const { data } = await axios.get('https://dev.to/api/articles/me/published', { headers, params: { per_page: 1000 } })

    // Remove posts that don't have a canonicalURL pointing at the host site
    const validPosts = data.filter(({ canonical_url }) => canonical_url.startsWith(canonical_url_prefix));
    console.log(validPosts);

    // Create array containing ID, path, slug and canonicalURL
    const posts = validPosts.map(({ id, slug, path, url, canonical_url }) => ({
        id,
        slug,
        path,
        url,
        canonical_url,
        canonical_path: canonical_url.replace(canonical_url_prefix, ''),
    }));

    // Save minified posts data to cache file
    fs.writeFileSync(path.join(process.cwd(), cacheFile), JSON.stringify(posts));

    // Get the paths we want to pre-render based on posts
    const paths = posts.map(({ slug, canonical_path }) => {
        return {
            params: { slug: canonical_path },
        }
    })

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // Read cache
    const cacheContents = fs.readFileSync(path.join(process.cwd(), cacheFile));
    const cache = JSON.parse(cacheContents);
    // console.log(cache);

    // Get minified post from cache
    const cachedPostData = cache.find(post => post.canonical_path === params.slug);
    console.log(cachedPostData);

    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await axios.get(`https://dev.to/api/articles/${cachedPostData.id}`);
    const post = res.data;

    // Pass post data to the page via props
    return { props: { post } }
}

export default Post