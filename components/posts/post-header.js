import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      
      <div className="mb-3">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="mx-auto">
        <div className="mb-3">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-5 text-muted">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
