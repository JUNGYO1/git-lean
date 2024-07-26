// 배열 문제 ) 최대한 쉽게 1~5  까지 선언하여 length 출력해보기 
let array = [1,2,4,5];
console.log(array);

// 배열 안의 객체를 넣어 배열을 만들어보세요
//let array2 = [ <빈칸>  ];

//길이가 10인 배열을  생성자를 통해서 만들어보세요
lat array3 = `빈칸`


// 배열 문제 ) 
//1 . 빈 배열을 만들어주세요
//2. 배열에 끝에 zero를 추가 후 console.log를 이용해서 출력
//3. 배열에 끝에 one, two 를 더 추가 후 console.log를 이용해 출력

// ======================================= 완전 기초 =====================

//===========================난이도 중 =============================



// 선언 배열 for Loop  돌면서 console.log(로 출력 ) 단, `인덱스 , 해당 값`
for(let i=0; i<array.length; i++){
    console.log(`${i} 번째  : ${array[i]}`);
}


// 선언 배열을 forEach로 동일한 console.log()출력해보세요
array.forEach(
    (item , idx)=>{
        console.log(`item : ${item} / idx : ${idx}`);
    }
);


// 1. Person1, 2객체를 만들어 주세요, name, age의 속성을 넣어줏에ㅛ
// 2. user라는 배열에 persion1, 2 를 넣어주세요
// 3. user배열에 pserson과 형상이 같은 객체를 "추가" 하고, user의 길이와 반복문을 이용해서 user배열안의 객체의 이름들을 출력해주세요 
let Parson = {
    name : "정윤오",
    age : 19,
}

console.log(`name : ${Parson.name} , age: ${Parson.age}, tel : ${Parson.tel}`);



// 콜백함수 문제) 인자값1, 인자값2, Callback 함수를 얻는 add 기능할 하는 함수를 만들고, 
// callback 함수에서 a+b 값의 결과를 받아서 출력하는 함수를 만들어주세요
function add (a,b, callback){
    let result = a+b;
    callback(result);
}
add( 1, 2, function(result){
    console.log(`결과 값은 : ${result}`);
});


// 난이도 상) 
