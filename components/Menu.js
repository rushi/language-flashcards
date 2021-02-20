import _ from 'lodash';
import Link from 'next/link';
import words from '../words';
import _mp from '../helpers/analyticsHelper';

const wordLinks = (active) => {
    return _.keys(words).map((word) => {
        const count = _.keys(words[word]).length;
        const activeClass = word === active ? 'text-black underline' : 'text-gray-600';
        const onClick = (e) => _mp && _mp.track('Category click', { category: e.target.innerHTML });

        return (
            <span key={word} className="inline-flex mb-2">
                <Link href={`/${word}`}>
                    <a onClick={onClick} className={`hover:underline ${activeClass}`}>
                        {_.capitalize(word)}
                    </a>
                </Link>
                <span className="pl-1 mr-3 text-gray-400 text-xs leading-6">({count})</span>
            </span>
        );
    });
};

const Menu = ({ active }) => {
    return <div className="px-5">{wordLinks(active)}</div>;
};

export default Menu;
