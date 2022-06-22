import Image from 'next/image'
import Link from 'next/link'
//넘겨준 주소의 id값을 받아오기 위해서 useRouter hook사용
import {useRouter} from 'next/router'

const index = ({photo}) => {
    //const router = useRouter();
    const {title, url} = photo;
    return (
        <div>
            {/*<h2>Image {router.query.id}</h2>*/}
            <h2>{title}</h2>
            <Image src={url}
                   width={500}
                   height={500}
            />
            
            <Link href="/photos"><a>Go Back</a></Link>
        </div>
    );
};

export const getStaticProps = async (context) => {
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const photo = await res.json();
    return {
        props: {
            photo
        }
    }
}
//static path value 가 필요해
export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10/`)
    const photos = await res.json();
    const ids = photos.map(photo => photo.id);
    const paths = ids.map(id => {
        return {
            params: {id: id.toString()}
        }
        
    })
    return {
        paths: paths,
        fallback: false,
        //fallback: 'blocking',  // 위에 paths 에 값이 없더라도 조회
    }
}

export default index;
