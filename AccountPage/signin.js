$(document).ready(function () {
    $("input[type='button']").on("click", function () {
        const name = $("#name_input").val();
        const email = $("#email_input").val();
        const password = $("#password_input").val();
    
        if (name && email && password) {
        alert("회원가입 되었습니다.");
        window.location.href = "login.html";
        } else {
        alert("닉네임, 아이디, 비밀번호를 모두 입력해주세요.");
        }
    });
    });
    