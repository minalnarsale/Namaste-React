import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement(    //this is not an h1 tag. it is an react element/object, check by printing it's value
    "h1",
    {id: "heading"},
    "rendering Hello World using React!"
);
console.log('heading : ', heading);
const root = ReactDOM.createRoot(document.getElementById("root"));                                  // it is also element/object
console.log('root : ', root); 
// root.render(heading);  

const TitleElement = ( <h1 className="title1">Title/TitleElement: Namaste React</h1>
)
const TitleComponent = () => ( <h1 className="title1">Title/TitleComponent: Namaste React</h1>
)

const number = 1000;
const JsxHeading = () => (      //this is React component
    <div>
        {TitleElement}
        <TitleComponent />
        <h1>{number}</h1>
        <h1 className="jsxHeading">Heading: This is component composition</h1>
    </div>
)

// const JsxHeading = () => <h1 className="jsxHeading">rendering Hello World using React JSX!</h1>
root.render(<JsxHeading />);