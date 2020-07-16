import Link from 'next/link';
import Head from "next/head";
import {MainLayout}  from './../componetnt/layout';
export default function Index (){
    return (
        <MainLayout title={'Home'}>
        <Head>
            <title>MAin PAge</title>
            
        </Head>
        <h1> Next</h1>
        <p><Link href="/abouve"><a>Above</a></Link></p>
        <p><Link href="/post"><a>Post</a></Link></p>
        <p><Link href="/posts/[id]"></Link> </p>
        </MainLayout>
        
    )
}