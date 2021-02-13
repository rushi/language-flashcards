import _ from 'lodash';
import Card from './Card';

const Grid = (props) => {
    const list = props.words;
    let cards = _.keys(list).map((source) => <Card key={source} source={source} destination={list[source]} />);
    cards = process.env.SHUFFLE_WORDS ? _.shuffle(cards) : cards;
    return <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">{cards}</div>;
};

export default Grid;
