import Banner from '@/common/components/banner/banner';
import { BLOGS } from '../blogs/blogs.constant';
import parse from 'html-react-parser';


export default function BlogDetail({slug}) {
    const data = BLOGS.find((item) => item.slug === slug);
    return (
        <>
            <Banner title="Blog Detail" desc={data.title} />
            <section className='py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='parse_html'>
                    {parse(data?.longDescription)}
                </div>
            </section>
        </>
    )
}
