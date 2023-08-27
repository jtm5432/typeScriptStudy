/**
 * 
 * @param first 뒤에 string 타입을 부여, 문자열 이외의 값을 전달하지 못하게 할 수 있다.
 */
function sayHello (first : string){
    console.log('Hello',first);
}

let first: string = 'haha';
sayHello(first);
/**
 * String 타입을 받는것으로 정의한 코드에 Number를 대입하면 에러가 난다.
 */
let Age : number = 35;
sayHello(Age);

const message = 'hello';
/**
 * 자바스크리트는 실행 시 에러가 발생하는 것에 비해 타입스크립트는 컴파일 시에 에러가 난다.
 */
message();
/**
 * 
 * @param isSum 호이스팅 개념 설명용. return b에서는 에러가 난다
 * @returns 
 */
function calc(isSum: boolean){
    let a = 100;
    if (isSum){
        let b  = a+1;
        return b;
    }
    return b;
    
}

let age: number = 36;
let isDone: boolean = false;
let color: string = '파랑';

let mynumber: string = '200';
mynumber = '200'
mynumber = 200;


