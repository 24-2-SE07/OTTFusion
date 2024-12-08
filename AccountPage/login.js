$(document).ready(function () {
$("input[type='button']").on("click", function () {
    const email = $("#email_input").val();
    const password = $("#password_input").val();

    if (email && password) {
    alert("로그인되었습니다.");
    window.location.href = "../MainPage/main.html";
    } else {
    alert("이메일과 비밀번호를 입력해주세요.");
    }
});
});
