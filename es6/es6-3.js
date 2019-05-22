//spread operator, 펼침연산자

let pre = ["apple", "oragne", 100];
let newData = [...pre];
console.log(pre, newData);
console.log(pre===newData);

let pre2 = [100,200,"hello",null];

let newData2 = [0,1,2,3, ...pre ,4];

console.log(newData2);

let pre3 = [100,200,300];
function sum(a,b,c){
    return a+b+c;
}
console.log(sum.apply(null, pre3)); //이전방식
console.log(sum(...pre3));