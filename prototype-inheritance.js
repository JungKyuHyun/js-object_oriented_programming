// __proto__ 는 정식 표준은 아니나, 내부분의 브라우저가 지원하고 있어 사실상의 표준이다.

var superObj = {superVal:'super'}
// var subObj = {subval : 'sub'}
// subObj.__proto__ = superObj; //prototype , __proto__ 헷갈리지 말것 !!

var subObj = Object.create(superObj); //__proto__를 안쓰고 동일하게 상속 받는 방법
subObj.subval = 'sub';                //__proto__를 안쓰고 동일하게 상속 받는 방법

debugger; //자바스크립트의 상태를 일시 중지를 시킬수 있고, 자세한 상태를 알 수 있다.

console.log('subObj.subVal =>', subObj.subval); //subObj.subVal => sub
console.log('subObj.subVal =>', subObj.superVal); //subObj.subVal => super

subObj.superVAl = 'sub';
console.log('superObj.superVal =>', superObj.superVal); //superObj.superVal => super

var kim = {
    name:'kim',
    first:10, second:20,
    sum:function(){return this.first+this.second}
}
console.log("kim.sum() : " + kim.sum());
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first+this.second)/2;
}

// var lee = {
//     name:'lee',
//     first:10, second:10,
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__ = kim;
console.log("lee.sum() : " + lee.sum());
console.log("lee.avg() : " + lee.avg());