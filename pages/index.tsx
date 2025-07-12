import { GetStaticProps } from 'next'
import ArticleCard from '../components/ArticleCard'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Section from '../components/Section'
import IHomePageArticles from '../interfaces/IHomePageArticles'
import { getHomePageArticles } from '../lib/devto'

interface IProps {
    homePageArticles: IHomePageArticles
}

const title = "Hello, I'm James"
const subtitle = "I'm a software developer at Anchore currently living in London, UK."

const IndexPage = ({
    homePageArticles: { latestBlog, latestPortfolio, featuredBlog, featuredPortfolio },
}: IProps): JSX.Element => {
    const projects = featuredPortfolio || [latestPortfolio]
    return (
        <Layout title="Home" description={`${title} - ${subtitle}`}>
            <PageTitle
                title={title}
                subtitle={subtitle}
                emoji={{ primary: `👋`, secondary: `✨` }}
            />

            <Section linebreak>
                <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">About</h2>
                <p className="my-2">
                    Currently at Anchore building frontend experiences that simplify DevSecOps
                    workflows.
                </p>
                <p className="my-2">
                    Outside of work I spend my time creating content for my blog where I discuss
                    other projects I&apos;m working on, interesting problems I&apos;ve had to solve
                    and create tutorials to educate and help others use various technologies for the
                    first time or in a more efficient manner.
                </p>
            </Section>
            <Section>
                <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">
                    Latest article
                </h2>
                <ArticleCard
                    title={latestBlog.title}
                    description={latestBlog.description}
                    date={latestBlog.publishedAt}
                    tags={latestBlog.tags}
                    canonical={latestBlog.canonical}
                />

                {featuredBlog && (
                    <>
                        <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">
                            Featured article
                        </h2>
                        <ArticleCard
                            title={featuredBlog.title}
                            description={featuredBlog.description}
                            date={featuredBlog.publishedAt}
                            tags={featuredBlog.tags}
                            canonical={featuredBlog.canonical}
                        />
                    </>
                )}

                <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">
                    Featured projects
                </h2>
                {projects.map((project) => (
                    <ArticleCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        date={project.publishedAt}
                        tags={project.tags}
                        canonical={project.canonical}
                        portfolio
                        coverImage={project.coverImage}
                    />
                ))}
            </Section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const homePageArticles = await getHomePageArticles()
    return { props: { homePageArticles }, revalidate: 3600 }
}

export default IndexPage
