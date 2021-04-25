import IArticle from './IArticle'

interface IHomePageArticles {
    latestBlog: IArticle
    latestPortfolio: IArticle
    featuredBlog: IArticle | null
    featuredPortfolio: IArticle[]
}

export default IHomePageArticles
