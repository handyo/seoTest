import Head from "next/head";

const HeadInfo = ({title, keyword, description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="keyword" content={keyword}/>
            <meta name="description" content={description}/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}

HeadInfo.defaultProps = {
    title: '타이틀 디폴트',
    keyword: '키워드 디폴트',
    description: '콘텐츠 디폴트'
}

export default HeadInfo