import useRouter from 'next/router';
import Head from 'next/head';
import  {MainLayout}  from './../../componetnt/layout';

export default function Post (){
 const router = useRouter()
 console.log('router', router)
    return(
        <MainLayout>
        <h1>POST FOR OLL {router.query.id}</h1> 
        </MainLayout>
    )
}