import Category from '@/components/category';
import Layout from './layout'
import Hero from '@/components/Hero';
import Support from '@/components/support';
import Doctors from '@/components/doctors';
import Testimotionals from '@/components/testimotionals';
import Faq from '@/components/faq';


export default function Home() {

    return (

        <Layout>
            <Hero />
            <Category />
            <Support />
            <Doctors />
            <Testimotionals />
            <Faq />



        </Layout>
    )
}
