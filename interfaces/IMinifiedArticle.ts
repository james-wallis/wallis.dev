import IArticle from './IArticle'

type IMinifiedArticle = Omit<IArticle, 'html' | 'devToURL'>

export default IMinifiedArticle
