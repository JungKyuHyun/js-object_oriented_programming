//ES2015 from method

function addMark(){
    let newData = []; 
    for(let i=0; i<arguments.length; i++){
        newData.push(arguments[i] + "!");
    }
    console.log(newData);
}
addMark(1,2,3,4,5);
addMark("안녕");

function addMark2(){
    let newArray = Array.from(arguments);
    let newData2 = newArray.map(function(value){
        return value + "!";
    })
    console.log(newData2);
}
addMark2(1,2,3,4,5,6,7);
