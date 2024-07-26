// 조건문 문제 ) 1~100까지의 숫자 중 3의 배수만 출력하는 프로그램을 작성하시오 단 ,노드js
//힌트) 3의 배수는 3으로 나눴을때 0이 나오는 숫자
// 난이도 하 
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// 조건문 문제2) prompt()함수를 사용하여 숫자를 입력 받고, 입력 받은 숫자가 홀수인지 짝수인지 판별 하는 프로그램을 작성해라 
// 난이도 중하
<html>
    <body>
        <h3>prompt 대화 상자에 숫자를 입력해주세요</h3>

        <script>
            // 여기다 소스를 작성해 주세요.
            let num = prompt("숫자를 입력해주세요");
            if (num % 2 === 0) {
                alert("짝수입니다");
            } else {
                alert("홀수입니다");
            }
        </script>
    </body>
</html>

//노드 버전 )  조건 1) 숫자로로 입력받아야함 2) 짝수인지 홀수인지 판별해야함

function check(num){
    if( typeof num !== 'number' || isNaN(num)){
        console.log('숫자를 입력해주세요');
        return;
    }

    if(num % 2 === 0){
        console.log('짝수입니다');
    } else {
        console.log('홀수입니다');
    }

}
// 요런식?? 


// 다중조건문) prompt() 함수를 이용하여 리엑트6기 자바스크립트 시험 점수를 입력받아 점수에따라 학점을 부여하는 프로그램 작성해줴요 
// 90~100 A / ....
// 나이도 중하 
<html>
    <body>
        <h3>prompt 대화 상자에 숫자를 입력해주세요</h3>

        <script>
            // 여기다 소스를 작성해 주세요.
            let num = prompt("점수를 입력해주세요");
            if (num >= 90) {
                alert("A");
            } else if (num >= 80) {
                alert("B");
            } else if (num >= 70) {
                alert("C");
            } else if (num >= 60) {
                alert("D");
            } else {
                alert("F");
            }
        </script>
    </body>
</html>


// 노드 버전 ) 
function check(num){
    if( typeof num !== 'number' || isNaN(num)){
        console.log('숫자를 입력해주세요');
        return;
    }

    // 조건문을 작성해주세요
    if(num >= 90){
        console.log('A');
    } else if(num >= 80){
        console.log('B');
    } else if(num >= 70){
        console.log('C');
    } else if(num >= 60){
        console.log('D');
    } else {
        console.log('F');
    }

}
//

// switch 문제) 다중조건문 문제를 switch문으로 바꿔보세요
// 난이도 중하
<html>
    <body>
        <h3>prompt 대화 상자에 숫자를 입력해주세요</h3>

        <script>
            // 여기다 소스를 작성해 주세요.
            let num = prompt("점수를 입력해주세요");
            switch (true) {
                case num >= 90:
                    alert("A");
                    break;
                case num >= 80:
                    alert("B");
                    break;
                case num >= 70:
                    alert("C");
                    break;
                case num >= 60:
                    alert("D");
                    break;
                default:
                    alert("F");
            }
        </script>
    </body>
</html>

// 노드 버전 ) 

function check(num){
    if( typeof num !== 'number' || isNaN(num)){
        console.log('숫자를 입력해주세요');
        return;
    }

    // 조건문을 작성해주세요
    switch (true) {
        case num >= 90:
            console.log("A");
            break;
        case num >= 80:
            console.log("B");
            break;
        case num >= 70:
            console.log("C");
            break;
        case num >= 60:
            console.log("D");
            break;
        default:
            console.log("F");
    }

}

// whlie문 문제) 1~10까지 더하는 문제 노드js로 작성해주세요
// 난이도 하??
let sum = 0;
let i = 1;      
while (i <= 10) {
    sum += i;
    i++;
}

console.log(sum);

//whlie문 문제2) 위 문제를 do while문으로 바꿔보세요
// 난이도 하
let sum = 0;
let i = 1;
do {
    sum += i;
    i++;
}while (i<=10)

console.log(sum);

//반복 조건문 


