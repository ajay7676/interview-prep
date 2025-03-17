// console.log("Event Loop")

const one = () => console.log("First");
const two = () => setTimeout(() => {
    console.log("Second");
}, 500);
const three = () => console.log("Three");

two();
one();
three();

//  Output
//  First
//  Three
//  Second

