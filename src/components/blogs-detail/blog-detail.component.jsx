import Banner from '@/common/components/banner/banner';
import { BLOGS } from '../blogs/blogs.constant';
import parse from 'html-react-parser';
import styles from './blog-detail.module.css';


export default function BlogDetail({slug}) {
    const data = BLOGS.find((item) => item.slug === slug);
    return (
        <>
            <Banner title="Blog Detail" desc={data.title} />
            <section className={styles.blogDetailSection}>
                <div className='parse_html'>
                    {parse(data?.longDescription)}
                </div>
            </section>
        </>
    )
}
