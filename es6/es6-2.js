var data= [1,2,undefined,NaN,null,""];
data.forEach(function(value){
    console.log("valueis",value);
});
Array.prototype.getIndex = function(){};

//절때 배열에서 for in은 쓰면 안된다. 위와 같은 경우 의도치 않는 결과값이 출력
for(let idx in data){
    console.log(data[idx]);
}

//for of를 써야함.
for(let value of data){
    console.log(value);
}

//for of의 경우 String값 쓸수도 있음.
var str = "hello world!!"
for(let value of str){
    console.log(value);
}