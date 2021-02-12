import Head from 'next/head';
import Menu from '../components/Menu';
import Header from '../components/Header';

const Page = ({ title = 'Learn Kannada', children, ...rest }) => {
    return (
        <main {...rest}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
            </Head>
            <Header />
            <Menu />
            <main className="px-5 py-5">{children}</main>
        </main>
    );
};

export default Page;
