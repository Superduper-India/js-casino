//0. html 불러오기//
const selectNumberForm = document.querySelector(".selectNumber"); //숫자지정폼
const selectNumberInput = selectNumberForm.querySelector("input"); //숫자지정폼>숫자입력창

const guessNumberForm = document.querySelector(".guessNumber");//숫자고르기폼
const guessNumberInput = guessNumberForm.querySelector(".input"); // 숫자고르기폼>숫자입력창
const guessNumberBtn = guessNumberForm.querySelector(".btn") // 숫자고르기폼>게임시작버튼

const result = document.querySelector(".result");//결과창
const resultStatus = result.querySelector(".resultStatus");//결과창>결과
const resultLost = result.querySelector(".resultLost");//결과창>패배
const resultWin = result.querySelector(".resultWin");//결과창>승리


//Clean code. 변수정리//
const INPUT_NUMBER_KEY = "input-number";


//3. 이벤트 동작(2): 숫자고르기폼 제출시 --> 결과창 그리기//
function printResult(event) {
    event.preventDefault(); //폼의 기본발동: 새로고침 방지
    resultStatus.classList.remove("hidden"); //결과창>결과 보이기
    const resultNumber = guessNumberInput.value; //유저가 고른 숫자값
    const randomNumber = Math.floor(Math.random() * guessNumberInput.max); //랜덤숫자
    resultStatus.innerText = `You chose: ${resultNumber}, the machine chose: ${randomNumber}`; //화면에 나오는 글씨
    if (resultNumber == randomNumber) { //유저가 고른 숫자값=랜덤숫자 같을때
        resultLost.classList.add("hidden"); //결과창>패배 숨기기
        resultWin.classList.remove("hidden"); //결과창>승리 보이기
    } else { //유저가 고른 숫자값=랜덤숫자 다를때
        resultWin.classList.add("hidden"); //결과창>승리 숨기기
        resultLost.classList.remove("hidden"); //결과창>패배 보이기
    }
}


//2. 이벤트동작(1): 숫자지정폼 제출시//
function submitNumber(event) {
    event.preventDefault(); //폼의 기본발동: 새로고침 방지
    const inputNumber = selectNumberInput.value; //유저가 입력한 숫자값
    guessNumberInput.max = inputNumber; //유저가 입력한 숫자값으로 max값 채우기
    guessNumberForm.addEventListener("submit", printResult);//숫자고르기폼 이벤트설정//
}


//1. 숫자지정폼 이벤트설정//
selectNumberForm.addEventListener("submit", submitNumber); //유저가 입력한 숫자입력 폼 이벤트:서밋