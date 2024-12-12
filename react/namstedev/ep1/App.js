// const heading = React.createElement("h1", {id : "heading" , className : "title" , color : "red"}, " Hello world from React !");
const parent = React.createElement ("div" , {id : "parent"} , [
    React.createElement("div" , {id : "child"} , 
      [
        React.createElement("h1" , {id : "h1"} , "Child 1 Heading 1"),
        React.createElement("h2" , {id : "h2"} , "Child 1 Heading 2"),
      ]  
    ),
    React.createElement("div" , {id : "child"} ,  
        [
            React.createElement("h1" , {id : "h1"} , "Child 2 Heading 1"),
            React.createElement("h2" , {id : "h2"} , "Child 2 Heading 2"),
          ] 
    )

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
