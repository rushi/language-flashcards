import Page from '../components/Page';

const Index = () => {
    return (
        <Page title="Learn Kannada">
            <p>
                How it works:
                <ol className="ml-5 list-disc">
                    <li>Select a category</li>
                    <li>Tap on a card to reveal it's translation</li>
                </ol>
            </p>
            <p className="py-5 text-gray-500">
                More learning methods and little bit of design coming
            </p>
        </Page>
    );
};

export default Index;
