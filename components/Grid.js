import _ from 'lodash';
import { useState, useEffect } from 'react';
import GroupButton from './GroupButton';
import Card from './Card';

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

const Grid = (props) => {
    const [list, setList] = useState(props.words);
    const [order, setOrder] = useState(props.order);
    const [source, setSource] = useState(props.source);

    // TODO: There's got a better way than three useEffect's
    useEffect(() => {
        setList(props.words);
    }, [props.words]);

    useEffect(() => {
        setOrder(props.order);
    }, [props.order]);

    useEffect(() => {
        setSource(props.source);
    }, [props.source]);

    let active = { [order]: true, [source]: true };
    const sort = (e) => {
        const newOrder = e.target.getAttribute('data-sort');
        const orderedList = doSort(newOrder, list);
        setOrder(newOrder);
        setList(orderedList);
        active[newOrder] = true;
    };

    const swap = (e) => {
        const newSource = e.target.getAttribute('data-source');
        if (newSource === source) {
            return console.log(`The source is already ${source}. Nothing todo here`);
        }

        const newList = doSort(order, _.invert(list));
        setSource(newSource);
        setList(newList);
        active[newSource] = true;
    };

    const cards = _.keys(list).map((source) => <Card key={source} source={source} destination={list[source]} />);

    return (
        <div className="">
            <div className="mb-5">
                <div className="text-gray-700 text-sm mb-1">Take it up a notch, make it difficult with these</div>
                <span className="relative z-0 inline-flex shadow-sm rounded-md mr-5">
                    <GroupButton
                        title="A-Z"
                        rounded="left"
                        data-sort="alphabetic"
                        onClick={sort}
                        isActive={active.alphabetic}
                    />
                    <GroupButton
                        title="Random"
                        sort="random"
                        onClick={sort}
                        data-sort="random"
                        isActive={active.random}
                    />
                    <GroupButton
                        title="Z-A"
                        rounded="right"
                        sort="reverse"
                        data-sort="reverse"
                        onClick={sort}
                        isActive={active.reverse}
                    />
                </span>
                <span className="relative z-0 inline-flex shadow-sm rounded-md">
                    <GroupButton
                        title="English to Kannada"
                        rounded="left"
                        data-source="english"
                        onClick={swap}
                        isActive={active.english}
                    />
                    <GroupButton
                        title="Kannada to English"
                        rounded="right"
                        data-source="kannada"
                        onClick={swap}
                        isActive={active.kannada}
                    />
                </span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">{cards}</div>
        </div>
    );
};

export default Grid;
