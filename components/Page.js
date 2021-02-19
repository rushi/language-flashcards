import Head from 'next/head';
import Menu from '../components/Menu';
import { ray } from 'node-ray/web';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page = ({ active, title = 'Learn Kannada', children, ...rest }) => {
    return (
        <main {...rest}>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Header />
            <Menu active={active} />

            <section className="px-5 py-5">{children}</section>

            <Footer />
        </main>
    );
};

export default Page;
