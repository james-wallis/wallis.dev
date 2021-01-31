interface IArticle {
    id: number
    title: string
    description: string
    publishedAt: string
    slug: string
    path: string
    url: string
    commentsCount: number
    publicReactionsCount: number
    positiveReactionsCount: number
    coverImage: string
    tags: string[]
    canonical: string
    markdown: string
    html: string
    collectionId: number
}

export default IArticle
