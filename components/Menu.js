import _ from 'lodash';
import Link from 'next/link';
import words from '../words';

const wordLinks = (active) => {
    return _.keys(words).map((word) => {
        const count = _.keys(words[word]).length;
        const activeClass = word === active ? 'text-black underline' : 'text-gray-600';
        return (
            <>
            <Link key={word} href={`/${word}`}>
                <a className={`hover:underline ${activeClass}`}>{_.capitalize(word)}</a>
            </Link>
            <span className="pl-1 mr-3 text-gray-400 text-xs">({count})</span>
            </>
        );
    });
};

const Menu = ({ active }) => {
    return <div className="px-5">{wordLinks(active)}</div>;
};

export default Menu;
