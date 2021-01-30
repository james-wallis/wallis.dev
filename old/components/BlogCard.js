import Link from 'next/link';
import { convertCanonicalURLToRelative } from '../lib/devto';

const BlogCard = ({ canonicalURL, date, tags, title, description }) => (
    <>
        <Link href={`/blog/${convertCanonicalURLToRelative(canonicalURL)}`} >
            <a className="mt-6 w-full flex flex-col items-center">
                <div className="container lg:w-2/5 md:w-3/5 w-4/5">
                    <div className="date-tags-container">
                        <span className="date">
                            {date}
                        </span>
                        <span className="tags hover:bg-gray-500">
                            {tags}
                        </span>
                    </div>
                    <div className="title-desc-container">
                        <h3 className="hover:underline">
                            {title}
                        </h3>
                        <p className="desc">
                            {description}
                        </p>
                    </div>
                    <div className="readmore">
                        Read more
                    </div>
                </div>
            </a>
        </Link>
        <style jsx>{`
            a {
                // font-family: 'Merriweather',Serif;
                margin: 3rem 0;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-decoration: none;
                color: rgba(31, 41, 55, 1);
            }
            .container {
                width 80%;
                padding: 1.5rem 2.5rem;
                background: white;
                border-radius: 0.5rem;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            .date-tags-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .date {
                color: rgba(75, 85, 99, 1);
                font-weight: 300;
            }
            .tags {
                padding: 0.25rem 0.5rem;
                background: rgba(75, 85, 99, 1);
                color: rgba(243, 244, 246, 1);
                font-weight: 700;
                border-radius: 0.25rem;
            }
            .title-desc-container {
                margin-top: 0.5rem;
            }
            h3 {
                font-size: 1.5rem;
                line-height: 2rem;
                color: rgba(55, 65, 81, 1);
                font-weight: 700;
            }
            .desc {
                color: rgba(75, 85, 99, 1);
                margin-top: 0.5rem;
            }
            .readmore {
                margin-top: 1rem;
                text-align: left;
            }
            @media (min-width: 992px) {
                .container {
                    width: 70%;
                }
            }
        `}</style>
    </>
);

export default BlogCard