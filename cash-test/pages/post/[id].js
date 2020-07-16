import {useRouter} from 'next/router';
import Head from 'next/head';
import  {MainLayout}  from '../../componetnt/layout';
import Link from 'next/link';
export default function Post ({post}){
 const router = useRouter()
 console.log('router', router)
    return(
        <MainLayout>
            <h1>POST FOR OLL {router.query.id}</h1> 
            <ul>
                <li key={router.query.id}>
                </li>
            </ul>
            <Link href={'/posts'}><a>Back to All Posts</a></Link>
        </MainLayout>
        
    )
}

Post.getInitialProps = async (ctx)=>{
    console.log(ctx.query)

    const response = await fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-16&sortBy=publishedAt&apiKey=2531bb022b1d4ac2a6bdb446c8bba7a5/`)
    const post = await response.json()
    
    return {
        post

    }
}