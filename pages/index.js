import Page from '../components/Page';

const Index = () => {
    return (
        <Page title="Learn Kannada">
            <div>
                How it works:
                <ol className="ml-5 list-disc">
                    <li>Select a category</li>
                    <li>Tap on a card to reveal it's translation</li>
                </ol>
            </div>
            <p className="py-5">More learning methods and little bit of design coming</p>
        </Page>
    );
};

export default Index;
