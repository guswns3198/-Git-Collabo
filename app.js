const clock = document.querySelector("h3#clock");
let target = document.querySelector(".logoTitle");
let stringArr = ["Learn to HTML", "Learn to JavaScript", "Learn to CSS"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
let selectStringArr = selectString.split("");

function randomString() {
  let stringArr = ["오늘 뭐먹지 ?!"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
let selectStringArr = selectString.split("");

  return selectStringArr;
}

function resetTyping() {
  target.textContent = "";
  dynamic(randomString())

}

// 한글자씩 텍스트 출력하는 함수
function dynamic(randomArr) {
  if(randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function() {
      dynamic(randomArr);
    }, 80);
    } else {
      setTimeout(resetTyping, 3000);
    }
  }



dynamic(randomString())

// 커서 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}

setInterval(blink, 500);



// 여기서부터 시계
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `배고플 시간 ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);