var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee',first:10, second:10}

// function sum(){
//     //2.this가 kim이 됨 
//     return this.first + this.second;
// }
// //sum();
// sum.call(kim);//1. call(kim) kim을 넣어주는 순간 
// console.log("sum.call(kim)", sum.call(kim));
// console.log("sum.call(lee)", sum.call(lee));

function sum(prefix){
    return prefix +(this.first + this.second);
} 
//sum();
console.log("sum.call(kim)", sum.call(kim, '=>')); 
// 위와 같이 함수의 파라미터 값이 있을경우, call의 첫번째 인자로는 그 함수의 this값을 뭘로 할지 인자가 오고
// 두번째 인자부터는 우리가 호출할려고 하는 함수의 인자값들이 온다.
console.log("sum.call(lee)", sum.call(lee,": ")); //apply라는 콜의 유사품도 있으나, 이고잉은 call를 주로 쓴다.(형식이 다르다!)
var kimsum = sum.bind(kim, '-> '); //첫번째 인자(kim) 값을 this로 하는 새로운 함수를 만든다.(두번쨰 인자값부터는 call과 동일하게 인자값을 줄 수있음)
console.log("kimSum()", kimsum());

//call은 실행되는 함수의 this값을 원하는 객체로 바꿔서 실행할 수 있게 해준다. 
// bind는 실행되는 함수의 this값을 원하는 객체로 고정시키는 새로운 함수를 만들어낸다.