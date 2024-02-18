const form = document.querySelector("form");
const password = form.querySelector(".pw");
const passwordCheck = form.querySelector(".pw_check");
const btn = document.querySelector("button");

function pwChecking(event) {
  const pwCheck = passwordCheck.value;
  const pw = password.value;
  console.log(pw);
  console.log(pwCheck);
  if (pw != pwCheck) {
    event.preventDefault();
    alert("비밀 번호를 다시 확인 해 주세요.");
    event.stopImmediatePropagation();
  }
}

btn.addEventListener("click", pwChecking);
