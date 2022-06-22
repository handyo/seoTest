import HeadInfo from "../component/HeadInfo";
import Image from 'next/image'
import photoStyles from '../styles/Photos.module.css'
import Link from 'next/link'

const photos = ({photos}) => {
    console.log(photos)
    return (
        <>
            <HeadInfo title="포토타이틀" keyword="포토키워드" description="포토데스크립션"/>
            <div>
                <h1>My Photos</h1>
                <ul className={photoStyles.photos}>
                    {photos.map(photo => (
                        <li key={photo.id}>
                            <Link href={`/photos/${photo.id}`}>
                                <a>
                                    <Image src={photo.thumbnailUrl} width={100} height={100} alt={photo.title}/>
                                    <span>{photo.title}</span>
                                </a>
                            </Link>
                        </li>
                    ))}
                
                </ul>
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
    const photos = await res.json();
    return {
        props: {
            photos: photos
        },
        revalidate: 20
    }
}

export default photos