import React from 'react';
import Router from 'next/router';
import  {MainLayout}  from './../../componetnt/layout';

export default function Above (){
      const linkClickHAndler=()=>{
        Router.push("/");
    }
    return (
        <MainLayout title={'Aboveee'}>
        <h1>ABOWE MY DEAR</h1>
        <button onClick={linkClickHAndler}>Go back to home </button>
        <button onClick={()=>Router.push('/posts')}>Go to Post</button>
        </MainLayout>
    )
}