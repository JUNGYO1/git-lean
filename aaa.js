var copyObject = function (target) { // 여기서 target은 객체!
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
        console.log(`prop : ${prop}`);
        //추가된 부분
        console.log(`result prop : ${result[prop]} `);
        console.log(`target prop : ${target[prop]} `);
    }

    console.log(`result : ${result}`);
    return result;
}
// //위 패턴을 우리 예제에 적용해봅시다.
var user = {
    name: 'wonjang',
    gender: 'male',
};
var user2 = copyObject(user);
user2.name = 'twojang';
if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name);
console.log(user === user2); //false
var copyObjectDeep = function (target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
}

