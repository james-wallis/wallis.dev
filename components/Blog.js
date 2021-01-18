import BlogCard from './BlogCard';

const Blog = ({ articles }) => {
    return (
        <div>
            <h3>Blog</h3>
            {articles.map(({ id, canonical_url, readable_publish_date, tags, title, description }) => (
                <BlogCard
                    key={id}
                    canonicalURL={canonical_url}
                    date={readable_publish_date}
                    tags={tags}
                    title={title}
                    description={description}
                />
            ))}
            <style jsx>{`
                h3 {
                    color: black;
                    font-size: 35px;
                    letter-spacing: 1px;
                    font-weight: 400;
                    text-align: center;
                    margin: 0;
                    margin-bottom: 60px;
                    font-family: 'Merriweather',Serif;
                }
            `}</style>
        </div>
    )
}

export default Blog;