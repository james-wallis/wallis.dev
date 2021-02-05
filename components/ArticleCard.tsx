import moment from 'moment'
import Link from 'next/link'
import { convertCanonicalURLToRelative } from '../lib/devto'

interface IProps {
    title: string
    description: string
    date: string
    tags: string[]
    canonical: string
    portfolio?: boolean
    coverImage?: string
}

const ArticleCard = ({ title, description, date, tags, canonical, portfolio = false, coverImage = '' }: IProps) => (
    <div className="mb-14 flex flex-col sm:flex-row w-full">
        <Link href={`/${portfolio ? 'portfolio' : 'blog'}/${convertCanonicalURLToRelative(canonical)}`} >
            <a className={`w-full text-gray-500 dark:text-gray-300 ${coverImage ? 'sm:w-1/2 lg:w-1/2 xl:w-3/5' : 'sm:w-4/5'}`}>
                <h3 className="text-2xl text-gray-600 dark:text-gray-100">{title}</h3>
                {!portfolio && <p className="text-sm my-1">
                    <span>{moment(date).format('Do MMMM YYYY')}</span>
                    <span className="px-1">-</span>
                    <span>{tags.join(', ')}</span>
                </p>}
                <p className="text-base mt-2">{description}</p>
                <p className="text-base mt-2 underline hover:text-gray-800 dark:hover:text-gray-100 transition-colors">Read more</p>
            </a>
        </Link>
        {coverImage && <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-2/5 mt-4 sm:mt-0 sm:ml-4 flex items-center justify-center">
            <img src={coverImage} className="w-full" />
        </div>}
    </div>
)

export default ArticleCard
