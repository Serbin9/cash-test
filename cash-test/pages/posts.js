import Head from 'next/head'
import  {MainLayout}  from '../componetnt/layout';
import Link from 'next/link'
const API_KEY="2531bb022b1d4ac2a6bdb446c8bba7a5"
import style from './posts.module.css'

 function Post ({post}){
    return(
<MainLayout title={'Post All'}>
   <Head>
            <title>Post of My own NExt</title>
        </Head>
<h1 className={style.allPosts}>Post all pages</h1>
{/* <pre>{JSON.stringify(post.articles, null, 2)}</pre> */}
    <ul>
        {post.articles.map(article=>(<li className={style.liStyle} key={article.publishedAt}>
            <Link href={`post/[id]`} as={`post/${article.publishedAt}`}><a className={style.forLink}>{article.title}</a></Link>
            {/* <h2>{article.title}</h2>
            <h3>{article.author}</h3>
            <p>{article.description}</p> */}
        </li>))}
    </ul>
</MainLayout>
    )
}
Post.getInitialProps = async (ctx)=>{
    const response = await fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-16&sortBy=publishedAt&apiKey=2531bb022b1d4ac2a6bdb446c8bba7a5")
    const post = await response.json()
    
    return {
        post

    }
}

export default Post