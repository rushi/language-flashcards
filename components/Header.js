import Link from 'next/link';

const Header = () => {
    return (
        <div className="p-5">
            <Link href="/">
                <h2 className="cursor-pointer text-xl font-semibold">Learn Kannada</h2>
            </Link>
        </div>
    );
};

export default Header;
