function home(){
    var homename = 'my house';
    homename = "your hourse";
    console.log(homename);
}
//const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다. 
//immutable array를 어떻게 만들지?
//뒤로 가기, 앞으로 가기
const list = ["apple", "orange","watermelon"];
list2 = [].concat(list,"banana");
console.log(list===list2);
home();

//Es2015 String에 새로운 메서드들.

let str = "hello world! ^^ ~~";
let matchstr = "hello";
let matchstr2 = "^ ~~";
console.log(str.startsWith(matchstr));
console.log(str.endsWith(matchstr2));
console.log(str.includes("world"));