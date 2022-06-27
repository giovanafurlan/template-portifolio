import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import fs from 'fs'
import matter from 'gray-matter'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Menu from '../../components/menu.jsx'
import Rodape from '../../components/footer'
import { useAmp } from 'next/amp';

export default function Blogs({ blogs }) {

  const isAmp = useAmp();

  return (
    <>
      <Menu>
        <Container maxW={'7xl'}>
          <SimpleGrid columns={{ lg: 3, md: 1, sm: 1 }}
            spacing={10}
            mt='2vw'
            float={'left'}>
            {blogs.map((blog, idx) => (
              <Box key={idx}
                maxW={'345px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                p={6}
                overflow={'hidden'}>
                <Box
                  h={'210px'}
                  bg={'gray.100'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}>
                  <img src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={350} />
                </Box>
                <Stack spacing={'5'} >
                  <Heading mt='1vw'
                    fontWeight='normal'
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    {blog.title}
                  </Heading>
                  <p key={blog.slug}>
                    <Link href={`/blog/${blog.slug}`}>
                      Leia Mais <ArrowForwardIcon />
                    </Link>
                  </p>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Menu>
      <Rodape />
    </>
  )
}
export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./content/blogs')

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      blogs
    }
  }
}