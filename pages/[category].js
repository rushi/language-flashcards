import _ from 'lodash';
import words from '../words';
import Page from '../components/Page';
import Card from '../components/Card';

const Grid = ({ category }) => {
    const list = words[category];
    const cards = _.shuffle(_.keys(list)).map((source) => (
        <Card key={source} source={source} destination={list[source]} />
    ));
    return (
        <Page title={`${_.capitalize(category)} words`}>
            <div className="m-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">{cards}</div>
        </Page>
    );
};

export const getServerSideProps = async (context) => {
    const category = context.params.category;
    return { props: { category } };
};

export default Grid;
