import _ from 'lodash';
import words from '../words';
import Grid from '../components/Grid';
import Page from '../components/Page';

const Category = ({ category }) => {
    const list = words[category];
    return (
        <Page title={`Learn ${_.capitalize(category)}`}>
            <Grid words={list} />
        </Page>
    );
};

export const getStaticProps = async (context) => {
    const category = context.params.category;
    return { props: { category }, revalidate: 1 };
};

export async function getStaticPaths() {
    const paths = _.keys(words).map((word) => '/' + word);
    return {
        paths,
        fallback: false,
    };
}

export default Category;
