import _ from 'lodash';
import words from '../words';
import Grid from '../components/Grid';
import Page from '../components/Page';
import { ray } from 'node-ray/web';
import { useState, useEffect } from 'react';
import GroupButton from '../components/GroupButton';

const doSort = (direction, list) => {
    let orderedList;
    if (direction === 'random') {
        orderedList = _(list).toPairs().shuffle().fromPairs().value();
    } else if (direction === 'reverse') {
        orderedList = _(list).toPairs().sortBy().reverse().fromPairs().value();
    } else {
        orderedList = _(list).toPairs().sortBy().fromPairs().value();
    }
    return orderedList;
};

const Category = ({ category }) => {
    let [list, setList] = useState(words[category]);
    let order = 'alphabetic';
    let source = 'english';

    let active = { order: {[order]: true}, source: {[source]: true} };
    const sort = (e) => {
        const newOrder = e.target.getAttribute('data-sort');
        const orderedList = doSort(newOrder, list);
        setList(orderedList);
        active.order = {[newOrder]: true};
    };

    const swap = (e) => {
        const newSource = e.target.getAttribute('data-source');
        if (newSource === source) {
            return console.log(`The source is already ${source}. Nothing todo here`);
        }

        const newList = doSort(order, _.invert(list));
        setList(newList);
        active.source = {[newSource]: true};
    };

    return (
        <Page title={`Learn ${_.capitalize(category)}`}>
            <div className="mb-5">
                <div className="text-gray-700 text-sm mb-1">Take it up a notch, make it difficult with these</div>
                <span className="relative z-0 inline-flex shadow-sm rounded-md mr-5">
                    <GroupButton
                        title="A-Z"
                        rounded="left"
                        data-sort="alphabetic"
                        onClick={sort}
                        isActive={active.order.alphabetic}
                    />
                    <GroupButton
                        title="Random"
                        sort="random"
                        onClick={sort}
                        data-sort="random"
                        isActive={active.order.random}
                    />
                    <GroupButton
                        title="Z-A"
                        rounded="right"
                        sort="reverse"
                        data-sort="reverse"
                        onClick={sort}
                        isActive={active.order.reverse}
                    />
                </span>
                <span className="relative z-0 inline-flex shadow-sm rounded-md">
                    <GroupButton
                        title="English to Kannada"
                        rounded="left"
                        data-source="english"
                        onClick={swap}
                        isActive={active.source.english}
                    />
                    <GroupButton
                        title="Kannada to English"
                        rounded="right"
                        data-source="kannada"
                        onClick={swap}
                        isActive={active.source.kannada}
                    />
                </span>
            </div>
            <Grid order="alphabetic" source="english" words={list} />
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
