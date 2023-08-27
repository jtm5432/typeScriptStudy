/**
 * 타입스크립트 에서는 명시적인 변수를 초기화 하면 타입 추론을 통해 자동적으로 타입이 결정되는 기능이 있습니다
 */

const names = ['hana', 'wonJoon', 'Eunjeong'];
/**
 * names 의 값들이 string이라고 설정하지 않아도 for 내부에서는 string으로 다뤄짐
 */
names.forEach(e => {
    console.log(e.toUpperCase());
});

/**
 * 타입스크립트의 타입 추론은 대입할 대상 변숫값의 타입이 결정되어 있을 때, 대입할 값과 타입이 일치하지 않는 경우 에러가 발생하는 추론기능이 있다.
 */

window.confirm = () =>{
    //window의 confirm함수는 boolean을 return 하지 않는 한 에러가 된다.
    console.log('confirm함수');
    return false;
}

/**
 * 타입스크립트가 구체적인 타입을 알 수 없는 경우도 존재한다.
 * 예를들어 documnet.getElementbyId()로 얻는 값의 경우 대상의 프로퍼티에 대해 알수가 없으므로 div, canvs등을 자동으로 판정해서 처리하지않는다.
 */

const myCavas = document.getElementById('main_canvas') as HTMLCanvasElement;
console.log(myCavas.width)  // 개발자가 대상 id가 가진 DOM 노드가 캔버스라는걸 선언해줬기에, 명시적으로 타입을 지정할 수 있게 되었다.

/**
 * 타입 앨리어스는 타입 지정의 별명을 덧붙이는 기능
 */

type Name = string

type Point = {
    x:number;
    y:number;
}

function printPoint(point:Point){
    console.log(`x 좌표는 ${point.x} 입니다.`);
    console.log(`y 좌표는 ${point.y}입니다.`);
}
/**
 * 타입이 달라도 속성명이 다르면 에러가 발생한다.
 */
printPoint({x:100, y:100});

/**
 * 함수 자체의 타입도 타입 엘리어스로 정의 가능합니다.
 */
type Formatter = (a: string) => string

function printName(firstName : string, formatter : Formatter){

    console.log(formatter(firstName));
}

/**
 * 객체의 키 이름을 명시하지 않고 타입 앨리어스를 정의할 수도 있씁니다. 
 */

type Label = {
    [key: string] : string
}
/**
 * 위으 앨리어스를 지정해 화면에 표시할 문자를 정의하는 객체
 */
const labels : Label = {
    topTitle : '제목입니다',
    topSubTitle : '하위 제목입니다.'
}

/**
 * 타입 스크립트의 인터페이스는 앨리어스와 비교해서 더욱 확장성이 있습니다.
 * 
 */
interface Points {
    x: number;
    y: number;

}

function PrintPoints(point:Points){
    console.log(`x 좌표는 ${point.x}입니다.`);
    
}
//z를 추가해서 인터페이스를 확장했다.
interface Points {
    z?:number; //속성 정의에 ?를 사용하면 옵셔널 속성이 된다.
}

PrintPoints({x:100,y:100,z:200});

/**
 * 클래스의 구현에 implents를 사용해서 위임할수 있다. 
 */
class MyPoint implements Points {
    x: number;
    y: number;
    //z는 optional로 선언되서 없더라도 에러가 나지 안흔ㄴ다
}

/** 인터페이스에서는 extends를 사용해 다른 인터페이스를 확장할 수 있습니다.
 * 
 */

interface Colorful {
    color: string;
}

interface Circle {
    radius : number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc : ColorfulCircle = {
    color : 'red',
    radius : 10
}
/**
 * 이렇듯 객체 그 자체가 아니라 클래스나 객체의 일부 속성이나 함수를 포함하는 작동을 정의할때는 인터페이스를 사용하는것이 적합하다.
 * 
 */