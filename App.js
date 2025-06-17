const heading = React.createElement("h1", {id: "heading"}, "rendering Hello World using React!");  //this is not an h1 tag. it is an react element/object, check by printing it's value
console.log('heading : ', heading);
const root = ReactDOM.createRoot(document.getElementById("root"));                                  // it is also element/object
console.log('root : ', root);                                       
root.render(heading);