import { useRouter } from 'next/router'
import '../../configureAmplify'
import { API } from 'aws-amplify'

const listPosts = `
  query listPosts {
    listPosts {
      id title content
    }
  }
`

const getPostById = `
  query getPostById($postId: String!) {
    getPostById(postId: $postId) {
      id title content
    }
  }
`

export default function Post({ post }) {
  const router = useRouter()
  if (router.isFallback) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const postData = await API.graphql({
    query: listPosts,
  })
  const paths = postData.data.listPosts.map(post => ({params: {id: post.id}}))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({params}) {
  const {id: postId} = params
  const postData = await API.graphql({
    query: getPostById, variables: {postId}
  })
  return {
    props: {
      post: postData.data.getPostById
    }
  }
}