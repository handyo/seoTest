import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeadInfo from "../component/HeadInfo";

export default function Home({posts}) {
    console.log(posts)
    return (
        <div className={styles.container}>
            {/*<Head>*/}
            {/*  <title>타이틀을 즉각적으로 변경할 수 있따</title>*/}
            {/*  <meta keyword="데스크립션도 바로 변경할 수 있다"/>*/}
            {/*  <meta name="description" content="Generated by create next app" />*/}
            {/*  <link rel="icon" href="/favicon.ico" />*/}
            {/*</Head>*/}
            <HeadInfo/>
            
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Next JS 시작
                </h1>
                
                <ul>
                    {posts.map(post => (
                        <li key={post.id}> {post.title} </li>
                    ))}
                </ul>
            </main>
        
        </div>
    )
}

// export const getServerSideProps = async () => { // 서버사이드 렌더링 - 페이지에 들어올 때 마다 서버에 요청해서 데이터를 받아옴
//     // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const res = await fetch(`http://localhost:8080/api/posts`); // 로컬에서 만든 local-api의 데이터 경로로 변경
//     const posts = await res.json();
//     return {
//         props: {
//             posts: posts
//         }
//     }
// }

export const getStaticProps = async () => { // static 제너레이션이.. 일어나? // node js..?
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    return {
        props: {
            posts: posts
        },
        revalidate: 20
    }
}