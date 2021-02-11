import _ from 'lodash';
import Link from 'next/link';
import words from '../pages/words';

const wordLinks = () => {
    return _.keys(words).map((word) => {
        const count = _.keys(words[word]).length;
        return (
            <Link key={word} href={`/${word}`}>
                <a className="mr-3 hover:underline">
                    {_.capitalize(word)} <span className="text-gray-400 text-sm">({count})</span>
                </a>
            </Link>
        );
    });
};

const Menu = () => {
    return <div className="px-5">{wordLinks()}</div>;
};

export default Menu;
