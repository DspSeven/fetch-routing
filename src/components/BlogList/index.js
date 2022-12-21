// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const newData = data.map(eachData => ({
      id: eachData.id,
      author: eachData.author,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      title: eachData.title,
      topic: eachData.topic,
    }))
    console.log(newData)
    this.setState({blogData: newData})
  }

  render() {
    const {blogData} = this.state
    return (
      <div>
        <h1>hi</h1>
        {blogData.map(eachItem => (
          <BlogItem blogDetails={eachItem} key={eachItem.id} />
        ))}
      </div>
    )
  }
}
export default BlogList
