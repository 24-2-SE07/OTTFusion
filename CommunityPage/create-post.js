function submitPost(event) {
  event.preventDefault(); // 기본 폼 제출 동작 방지

  // 입력된 데이터 가져오기
  const title = document.getElementById("postTitle").value;
  const category = document.getElementById("postCategory").value;
  const content = document.getElementById("postContent").value;

  // 새로운 게시글 객체 생성
  const newPost = {
    title,
    content,
    likes: 0,
    comments: 0,
    category,
    author: "User", // 기본 작성자 설정
  };

  // 기존 게시글 배열 가져오기
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(newPost); // 새로운 게시글 추가

  // 로컬 스토리지에 저장
  localStorage.setItem("posts", JSON.stringify(posts));

  // community 페이지로 이동
  window.location.href = "community.html";
}

function cancelPost() {
  // 작성 취소 시 community 페이지로 이동
  window.location.href = "community.html";
}
