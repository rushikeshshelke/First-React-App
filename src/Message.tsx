// There are 2 types of components in React.
// 1. Class based components
// 2. Function based components
// HMR : Hot Module Reloading

// PascalCasing

function Message() {
    // JSX : Javascript XML Helps to create dynamic web pages
    const name = 'Rushi';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;