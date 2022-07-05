import { 
  Container, 
  Text 
} from '@chakra-ui/react'
import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Menu from '../../components/menu.jsx'
import { useAmp } from 'next/amp';

export default function Blog({ frontmatter, markdown}) {

  const isAmp = useAmp();

  return (
    <>
    <Menu>
      <Container maxW={'7xl'}>
        <img src={frontmatter.image}
        alt={frontmatter.title}
        width={1300}
        height={500}/>
        <Text textTransform={'uppercase'}
            fontWeight={'bold'}
            fontSize={{ base: '10px', sm: '15px', lg: '20px' }}
            borderBottom={'2px'}
            mb='1vw'>{frontmatter.title}</Text>
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </Container>
    </Menu>
    </>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8'))
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return {
    props: { frontmatter, markdown }
  }
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./content/blogs')

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'))
    return { params: { slug: filename }}
  })

  return {
    paths,
    fallback: false // This shows a 404 page if the page is not found
  }
}