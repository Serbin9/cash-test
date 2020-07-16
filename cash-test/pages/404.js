import  Link  from 'next/link';
import { MainLayout } from '../componetnt/layout';
import style from "../styles/error.module.css"
export default function ErrorPage(){
    return(
        <MainLayout title={'Error'}>
        <h1 className={style.erorrorTitle}>Error 404</h1>
        <p>Please <Link href="/"><a>go back</a></Link> go to server</p>
        </MainLayout>
    )
}