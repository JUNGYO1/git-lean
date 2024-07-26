//Sparta_jsrunning_train

1. let uninitialized;
console.log(uninitialized); 
// 결과값 < 빈칸 >undefined : 초기화 되지 않은 변수는 undefined으로 출력됨


2. < 빈칸 > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// 결과값 < 빈칸 > const로 선언된 변수는 재할당이 불가능

3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 빈칸 >
// 결과값 19 : 배열의 인덱스는 0부터 시작하므로 3번째 인덱스는 19 

4. 
let mySchedule = "";
console.log(mySchedule || false); // < 빈칸 >
console.log(!!mySchedule); // < 빈칸 >
// 결과값 false : mySchedule은 빈 문자열이므로 false로 간주됨
// 결과값 false : !!는 논리 부정 연산자를 두 번 사용하여 true 또는 false로 변환 
// 빈 문자열은 false로 변환됨 

const junhyun = {
    // 조건을 충족하는 코드 작성
    name : "junhyun",
    age : 1212312,
    mbti : "infj"
};

console.log(junhyun.name);  
console.log(junhyun.age);
console.log(junhyun.mbti);




function checkNumber(num) {
    if (num % 2 === 0) {
        return "짝수";
    } else {
        return "홀수";
    }
}

console.log(checkNumber(10)); // 결과값 "짝수";
console.log(checkNumber(7)); // 결과값 "홀수";


//연산자와 함수, 조건문을 토대로 계산기 함수를 하나 만들어 보려고 합니다. 함수에 숫자 , 연산자 , 숫자 세 개의 매개변수를 넣었을 때 해당 연산자를 기준으로 연산을 해서 값을 반환하는 함수를 만들어주세요.
// 우리가 배운 if else문과 switch문을 활용 할 수 있는데 이것은 그냥 취향 차이일뿐 기능상 아무 문제 없음
function calculator(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "잘못된 연산자입니다.";
    }
}


const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];
const increaseNumer = 3;    // 3점씩 더 해줄건데 이건 고정이니 const 로 선언함

function increseArray(scores) {
    // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
    scores.map((score) => {
        return calculator(score, "+", increaseNumer);
    });


}

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]