import PostPreview from './post-preview'

export default function PostItem({ posts }) {
  return (
    <section>
      <h2 className="my-5">
       Posts
      </h2>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-6 mb-5" key={post.slug}>
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
          </div>
        ))}
      </div>
    </section>
  )
}
