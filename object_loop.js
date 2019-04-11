var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.group('array loop');//많은 양의 로그가 있을때 보기 편하게 해줌. 들여쓰기 효과 !
var i = 0;
while(i<memberArray.length){
    console.log(i, memberArray[i]);
    i++;
}
console.groupEnd('array loop');
var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezche'
}

console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');