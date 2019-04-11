function Person(name, first, second){
    this.name= name,
    this.first= first,
    this.second=second
    
} //생성자는 객체를 만들고 객체의 초기상태를 만든다.

Person.prototype.sum = function(){
    return  "prototype : "+ this.first+this.second;
}

var kim = new Person('kim',10,20,30);
kim.sum = function(){
    return "this : " + (this.first+this.second);
}
var lee = new Person('lee',10,10,10);

console.log('kim.sum()',kim.sum());   
console.log('lee.sum()',lee.sum());   