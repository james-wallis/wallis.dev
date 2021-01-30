import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

const title = "Projects I've worked on 📚"
const subtitle = ['A selection of projects I\'ve worked on', 'during my career as a software developer.']

const PortfolioPage = () => (
    <Layout title="Home" description={[title, '-', ...subtitle].join(' ')}>
        <PageTitle
            title={title}
            subtitle={subtitle}
        />
    </Layout>
)

export default PortfolioPage