// 게시글 데이터
const posts = [
    { title: "로맨스 영화 추천", content: "로맨틱한 영화 추천해주세요!", author: "노란바나나", likes: 3, comments: 1, category: "로맨스" },
    { title: "넷플 추천", content: "요새 볼 게 없음", author: "징징이", likes: 0, comments: 2, category: "영화" },
    { title: "블랙 미러 비슷한 거 추천해주세요", author: "카레먹고싶다", content: "에피소드 형식 스릴러 장르요", likes: 0, comments: 0, category: "미스테리" },
    { title: "트렁크 볼말", content: "재미 없다고 해서 고민 중", author: "파츄", likes: 4, comments: 6, category: "드라마" },
    { title: "넷플릭스 입문작 추천 5", content: "기묘한 이야기 추천", author: "별꼬다리", likes: 12, comments: 8, category: "공포" },
  ];
  
  // 내가 쓴 글 (예시 데이터)
  const myPosts = [
    { title: "미드 추천", content: "와이 우먼 킬 재밌어", author: "User", likes: 3, comments: 0, category: "드라마" },
  ];
  
  function displayPosts(containerId, postsList) {
    const container = document.getElementById(containerId);
    container.innerHTML = postsList
      .map(
        (post, index) => `
        <div class="post-item" onclick="goToPost(${index}, '${containerId}')">
          <h3>${post.title}</h3>
          <div class="post-meta">
            <span>작성자: ${post.author}</span>
            <span>추천: ${post.likes} 댓글: ${post.comments}</span>
          </div>
        </div>
      `
      )
      .join("");
  }
  
  function goToCreatePost() {
    window.location.href = "create-post.html";
  }
  
  function filterPostsByCategory(category) {
    const filteredPosts = category === "all" ? posts : posts.filter(post => post.category === category);
    displayPosts("latestPostsContainer", filteredPosts);

    const dropdown = document.getElementById("categoryDropdown");
    dropdown.style.display = "none";
  }
  
  function goToPost(index, containerId) {
    const post = containerId === "myPostsContainer" ? myPosts[index] : posts[index];
    localStorage.setItem("selectedPost", JSON.stringify(post));
    window.location.href = "view-post.html";
  }
  
  function toggleDropdown() {
    const dropdown = document.getElementById("categoryDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
  
  document.addEventListener("click", (event) => {
    const dropdown = document.getElementById("categoryDropdown");
    const dropdownToggle = document.querySelector(".dropdown");
  
    if (!dropdown.contains(event.target) && !dropdownToggle.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });

  displayPosts("myPostsContainer", myPosts);
  displayPosts("latestPostsContainer", posts);
  
  