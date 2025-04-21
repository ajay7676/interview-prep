let count = 0;
const  getData = () =>{
    // calls an api & get data
    console.log('Featching Data' , count++)
    
}

const debounce = function (fn , delay){
    let timer;

    return function (){
        let context = this,
        args = arguments;
        clearTimeout(timer)
        timer = setTimeout(() => {
             getData.apply(context , arguments);
        }, delay);
    }

}



const betterFunction = debounce(getData , 3000)