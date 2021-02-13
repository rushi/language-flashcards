import _ from 'lodash';
import Card from './Card';
import { ray } from 'node-ray/web';
import { useState, useEffect } from 'react';

const Grid = (props) => {
    const list = props.words;
    const cards = _.keys(list).map((source) => <Card key={source} source={source} destination={list[source]} />);

    return (
        <div className="">
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">{cards}</div>
        </div>
    );
};

export default Grid;
