
function Person(name, first, second, third){
    this.name= name,
    this.first= first,
    this.second=second,
    this.third=third,
    this.sum=function(){
        return this.first+this.second+ this.third;
    }
}

var kim = new Person('kim',10,20,30);
var lee = new Person('lee',10,10,10);

console.log('kim.sum()',kim.sum());   
console.log('lee.sum()',lee.sum());   

var d1 = new Date('2019-4-10');
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()",d1.getMonth()+1); //0부터 카운트 됨 

console.log('Date', Date);

console.log("Person()", Person());
// constructor 
console.log("new Person()", new Person());