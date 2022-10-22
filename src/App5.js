const Layout = (props) => {
    return (
        <div style={{
            padding: '24px',
            backgroundColor: 'beige'
        }}>
            {props.children}
        </div>
    );
}

const App = () => {
    return (
        <Layout>
            <div>
                <h1>This is a header</h1>
                <img src="https://images.unsplash.com/photo-1661868888769-a68f55ae00b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
            </div>
        </Layout>

    );
};

export default App;