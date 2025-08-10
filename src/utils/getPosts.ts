// src/utils/getPosts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.resolve('src/content/log')

export async function getPosts() {
  const filenames = fs.readdirSync(postsDirectory)
  return filenames
    .filter(name => name.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)
      return {
        slug: filename.replace(/\.md$/, ''),
        frontmatter: data,
        default: content
      }
    })
}
