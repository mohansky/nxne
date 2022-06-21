import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

/*************POSTS***************/

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}


/*************TOURS***************/

const toursDirectory = join(process.cwd(), '_tours')

export function getToursSlugs() {
  return fs.readdirSync(toursDirectory)
}

export function getTourBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(toursDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllTours(fields = []) {
  const slugs = getToursSlugs()
  const tours = slugs.map((slug) => getTourBySlug(slug, fields))
  .sort((tour1, tour2) => (tour1.weight > tour2.weight ? 1 : -1))
  .filter((tour) => !tour.draft)
    
  // sort posts by date in descending order
    // .sort((tour1, tour2) => (tour1.date > tour2.date ? -1 : 1))
  return tours
}
