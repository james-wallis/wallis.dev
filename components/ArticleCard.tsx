import moment from 'moment'
import Link from 'next/link'
import { convertCanonicalURLToRelative } from '../lib/devto'

interface IProps {
    title: string
    description: string
    date: string
    tags: string[]
    canonical: string
}

const ArticleCard = ({ title, description, date, tags, canonical }: IProps) => (
    <div className="2xl:w-4/5 mb-14">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-gray-500 text-sm my-1">
            <span>{moment(date).format('Do MMMM YYYY')}</span>
            <span className="px-1">-</span>
            <span>{tags.join(', ')}</span>
        </p>
        <p className="text-base mt-4 text-gray-500">{description}</p>
        <Link href={`/blog/${convertCanonicalURLToRelative(canonical)}`} >
            <a className="text-base mt-2 underline text-gray-500">Read more</a>
        </Link>
    </div>
)

export default ArticleCard
