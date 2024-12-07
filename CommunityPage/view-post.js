// 로컬 스토리지에서 게시글 정보 가져오기
const post = JSON.parse(localStorage.getItem("selectedPost"));
const currentUser = "User"; // 현재 사용자의 닉네임 (예시)
const commentsKey = `comments_${post.title}`; // 댓글을 게시글 제목 기준으로 저장
let comments = JSON.parse(localStorage.getItem(commentsKey)) || [];

// DOM 요소 참조
const postTitle = document.getElementById("postTitle");
const postAuthor = document.getElementById("postAuthor");
const postCategory = document.getElementById("postCategory");
const postContent = document.getElementById("postContent");
const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");
const deleteButton = document.getElementById("deleteButton");
const commentsContainer = document.getElementById("commentsContainer");
const commentInput = document.getElementById("commentInput");
const addCommentButton = document.getElementById("addCommentButton");

// 게시글 데이터 표시
postTitle.textContent = post.title;
postAuthor.textContent = `작성자: ${post.author}`;
postCategory.textContent = `카테고리: ${post.category}`;
postContent.textContent = post.content;
likeCount.textContent = post.likes;

// 추천 수 증가
likeButton.addEventListener("click", () => {
  post.likes += 1;
  likeCount.textContent = post.likes;
  savePostData();
});

// 게시글 삭제
deleteButton.addEventListener("click", () => {
  if (confirm("정말 삭제하시겠습니까?")) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = posts.filter(p => p.title !== post.title);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    alert("삭제되었습니다.");
    window.location.href = "community.html";
  }
});

// 댓글 표시
function displayComments() {
  commentsContainer.innerHTML = comments
    .map(comment => `<div class="comment">${comment}</div>`)
    .join("");
}

// 댓글 추가
addCommentButton.addEventListener("click", () => {
  const comment = commentInput.value.trim();
  if (comment) {
    comments.push(comment);
    commentInput.value = "";
    localStorage.setItem(commentsKey, JSON.stringify(comments));

    // 댓글 수 증가
    post.comments += 1;
    savePostData(); // 게시글 데이터 저장
    displayComments();
  }
});

// 게시글 데이터 저장
function savePostData() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const updatedPosts = posts.map(p => (p.title === post.title ? post : p));
  localStorage.setItem("posts", JSON.stringify(updatedPosts));
}

// 삭제 버튼 표시 여부 결정
function handleDeleteButtonVisibility() {
  if (post.author === currentUser) {
    deleteButton.style.display = "inline-block"; // 자신이 작성한 게시글이면 표시
  } else {
    deleteButton.style.display = "none"; // 다른 사용자가 작성한 게시글이면 숨김
  }
}

// 초기화
displayComments();
handleDeleteButtonVisibility();
