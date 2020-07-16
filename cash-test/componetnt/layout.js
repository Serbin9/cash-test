import Link from 'next/link';
import Head from 'next/head';
export  function MainLayout ({children, title="Nex App"}){
    return (
        <>
        <Head>
            <title>{title} | Next Course</title>
            <meta name="discriptions" content="this is tutorial for all"/>
            <meta name="keywords" content="react, js , node"/>
            <meta charSet="utf-8"/>
        </Head>
        <nav>
        <Link href="/abouve"><a>Above</a></Link>
        <Link href="/posts"><a>Posts</a></Link>
        <Link href="/"><a>Home</a></Link>
        </nav>
        <main>
            {children}
        </main>
        <style jsx>
            {`nav{
                positions: fixed;
                heigth: 60px;
                left: 0;
                top:0;
                rigth: 0;
                background: darkblue;
                display:flex;
                justify-content: space-around;
                line-items: center;

            }
            nav a{
                color: #fff;
                text-decoration: none;
            }
            main{
                margin-top: 60px;
            }`}
        </style>
        </>
    )
}
