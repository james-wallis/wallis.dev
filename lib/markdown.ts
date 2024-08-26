import { unified } from 'unified'
import parse from 'remark-parse'
import rehypeHighlight from 'rehype-highlight'
import gfm from 'remark-gfm'
import matter from 'gray-matter'
import stripHtmlComments from 'strip-html-comments'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

export const sanitizeDevToMarkdown = (markdown: string): string => {
    let correctedMarkdown = ''

    // Dev.to sometimes turns "# header" into "#&nbsp;header"
    const replaceSpaceCharRegex = new RegExp(String.fromCharCode(160), 'g')
    correctedMarkdown = markdown.replace(replaceSpaceCharRegex, ' ')

    // Dev.to allows headers with no space after the hashtag (I don't use # on Dev.to due to the title)
    const addSpaceAfterHeaderHashtagRegex = /##(?=[a-z|A-Z])/g
    return correctedMarkdown.replace(addSpaceAfterHeaderHashtagRegex, '$& ')
}

export const convertMarkdownToHtml = async (markdown: string): Promise<string> => {
    const { content } = matter(markdown)

    const html = await unified()
        .use(parse)
        .use(gfm)
        .use(remarkRehype)
        .use(rehypeHighlight, { detect: true })
        .use(rehypeStringify)
        .process(stripHtmlComments(content))

    return String(html)
}
