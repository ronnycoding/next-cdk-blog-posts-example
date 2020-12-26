import { useEffect, useState } from 'react'
import Link from 'next/link'
import '../configureAmplify'
import { API } from 'aws-amplify'
import styles from '../styles/Home.module.css'

const listPosts = `
  query listPosts {
    listPosts {
      id title
    }
  }
`

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const postsData = await API.graphql({
        query: listPosts,
      })
      setPosts(postsData.data.listPosts)
    }
    fetchPosts()
  }, [])
  return (
    <div className={styles.container}>
      {
        posts.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        ))
      }
    </div>
  )
}