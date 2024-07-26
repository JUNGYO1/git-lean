//수준을 어떻게 잡아야 하는가?
// for문 구구단 
// 1. 2단부터 9단까지
// 다중 For문??
for(let i = 2; i <= 9; i++){
    console.log(`${i}단`);
    for(let j = 1; j <= 9; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 2단 1~9까지 
for(let i = 1; i <= 9; i++){
    console.log(`2 * ${i} = ${2 * i}`);
}


// while문 구구단
let i = 2;
while(i <= 9){
    console.log(`while ${i}단`);
    let j = 1;
    while(j <= 9){
        console.log(` while ${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}

//
new Array.