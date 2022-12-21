// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, imageUrl, avatarUrl, topic, author} = blogDetails
  return (
    <div>
      <img src={imageUrl} />
      <div>
        <h1>{topic}</h1>
        <p>{title}</p>
        <p>k</p>
      </div>
    </div>
  )
}
export default BlogItem
