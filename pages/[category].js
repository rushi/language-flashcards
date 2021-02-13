import _ from 'lodash';
import words from '../words';
import Grid from '../components/Grid';
import Page from '../components/Page';
import { ray } from 'node-ray/web';
import { useState, useEffect } from 'react';
import GroupButton from '../components/GroupButton';

const doSort = (direction, list) => {
    if (direction === 'alphabetic') {
        return _(list).toPairs().sortBy().fromPairs().value();
    } else if (direction === 'reverse') {
        return _(list).toPairs().sortBy().reverse().fromPairs().value();
    }

    return _(list).toPairs().shuffle().fromPairs().value();
};

const generateButton = (sortList, callback, name, active) => {
    return sortList.map((btn, idx) => {
        const rounded = idx === 0 ? 'left' : idx === sortList.length - 1 ? 'right' : null;
        const rest = { [`data-${name}`]: btn.key };
        return (
            <GroupButton
                key={btn.title}
                title={btn.title}
                rounded={rounded}
                onClick={callback}
                isActive={active[btn.key]}
                {...rest}
            />
        );
    });
};

const Category = ({ category }) => {
    const [list, setList] = useState(words[category]); // TODO: This is a state because I can't derive it from source
    const [order, setOrder] = useState('alphabetic');
    const [source, setSource] = useState('english');

    useEffect(() => {
        setList(words[category]);
    }, [category]);

    ray(order + ', ' + source + ': ' + _.keys(list)[0]);
    const active = { order: { [order]: true }, source: { [source]: true } };
    const sort = (e) => {
        const newOrder = e.target.getAttribute('data-sort');
        setOrder(newOrder);
        setList(doSort(newOrder, list));
    };

    const swap = (e) => {
        const newSource = e.target.getAttribute('data-source');
        if (newSource !== source) {
            setList(doSort(order, _.invert(list)));
            setSource(newSource);
        }
    };

    // TODO: These can be a separate component
    const sortList = [
        { title: 'A-Z', key: 'alphabetic' },
        { title: 'Random', key: 'random' },
        { title: 'Z-A', key: 'reverse' },
    ];
    const sourceList = [
        { title: 'English to Kannada', key: 'english' },
        { title: 'Kannada to English', key: 'kannada' },
    ];
    const sortButtons = generateButton(sortList, sort, 'sort', active.order);
    const sourceButtons = generateButton(sourceList, swap, 'source', active.source);

    return (
        <Page title={`Learn ${_.capitalize(category)}`}>
            <div className="mb-5">
                <div className="text-gray-700 text-sm mb-1">Take it up a notch, make it difficult with these</div>
                <span className="relative z-0 inline-flex shadow-sm rounded-md mr-5">{sortButtons}</span>
                <span className="relative z-0 inline-flex shadow-sm rounded-md">{sourceButtons}</span>
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
