function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
    return this.first + this.second;
}

function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second);
    this.third = third;
}

PersonPlus.prototype.__proto__ = Person.prototype; //사실상의 표준이지만.. 그래도 진짜 표준은 아래코드
// PersonPlus.prototype = Object.create(Preson.prototype);
// PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function(){
    return (this.first +this.second + this.third)/3;
}

var kim = new PersonPlus('kim',10,20,30);
console.log('kim.sum()',kim.sum());   
console.log('kim.avg()',kim.avg());  
console.log("kim.constructor",kim.constructor);