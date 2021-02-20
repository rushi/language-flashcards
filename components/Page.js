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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                                <script>
                    !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
                    arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
                    d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
                    insertBefore(d,q)}(window,document,'script','_gs');

                    _gs('GSN-822688-L');
                    </script>
                        `,
                    }}
                />
            </Head>

            <Header />
            <Menu active={active} />

            <section className="px-5 py-5">{children}</section>

            <Footer />
        </main>
    );
};

export default Page;
