import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// function Myapp() {
//     return (
//         <div>
//             <h1>My app</h1>
//         </div>
//     );
// }

// // Plain JavaScript object
// const reactElement1 = {
//     type: 'a', // Use 'a' for link attributes
//     props: {
//         href: 'http://reactjs.org/',
//         target: '_blank',
//     },
//     children: 'React Jwws Documentation',
// };

// // JSX element
// const reactElement2 = (
//     <a href="https://reactjs.org/" target="_blank">
//         ReactElement 2
//     </a>
// );

// // React.createElement
// const reactElement3 = React.createElement(
//     'a', // Tag name
//     { href: 'http://reactjs.org/', target: '_blank' }, // Attributes
//     'ReactElement 3 ' // Text content
// );

// Wrap all elements in a parent
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App/>
    </>
);
