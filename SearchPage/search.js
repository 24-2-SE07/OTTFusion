const tags = [
    "넷플릭스", "왓챠", "티빙", "한국 드라마",
    "코미디", "스릴러", "판타지", "액션",
    "SF", "로맨스", "공포", "다큐멘터리",
    "가족", "역사", "음악", "스포츠"
  ];
  
  const contents = [
    { title: "더 글로리", ott: "넷플릭스", rating: 4.8, image: "https://via.placeholder.com/150", tags: ["넷플릭스", "드라마", "복수"] },
    { title: "괴물", ott: "왓챠", rating: 4.6, image: "https://via.placeholder.com/150", tags: ["왓챠", "스릴러", "미스터리"] },
    { title: "스위트홈", ott: "넷플릭스", rating: 4.4, image: "https://via.placeholder.com/150", tags: ["넷플릭스", "공포", "액션"] },
    { title: "시그널", ott: "티빙", rating: 4.9, image: "https://via.placeholder.com/150", tags: ["티빙", "스릴러", "미스터리"] },
    { title: "미드소마", ott: "왓챠", rating: 3.4, image: "https://via.placeholder.com/150", tags: ["왓챠", "스릴러", "미스터리", "공포"]}
  ];
  
  let selectedTags = [];
  
  // 태그 생성
  document.getElementById("tagsContainer").innerHTML = tags
    .map(tag => `<div class="tag" onclick="toggleTag('${tag}')">${tag}</div>`)
    .join("");
  
  // 태그 선택 토글
  function toggleTag(tag) {
    const index = selectedTags.indexOf(tag);
    if (index === -1) {
      selectedTags.push(tag);
    } else {
      selectedTags.splice(index, 1);
    }
  
    document.querySelectorAll(".tag").forEach(el => {
      if (selectedTags.includes(el.textContent)) {
        el.classList.add("selected");
      } else {
        el.classList.remove("selected");
      }
    });
  }
  
  // 검색 버튼 클릭 시 필터링
  function filterContents() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const contentList = document.getElementById("contentList");
  
    contentList.style.display = "flex"; // 검색 버튼 클릭 시 콘텐츠 표시
  
    contentList.innerHTML = contents
      .filter(content =>
        content.title.toLowerCase().includes(searchInput) &&
        (selectedTags.length === 0 || selectedTags.every(tag => content.tags.includes(tag)))
      )
      .map(content => `
        <div class="content-item">
          <img src="${content.image}" alt="${content.title}">
          <div class="content-info">
            <h3>${content.title}</h3>
            <p>${content.ott}</p>
            <p>⭐ ${content.rating}</p>
          </div>
          <div class="heart-button" onclick="toggleHeart(this)">♡</div>
        </div>
      `).join("");
  
    if (contentList.innerHTML === "") {
      contentList.innerHTML = "<p>일치하는 콘텐츠가 없습니다.</p>";
    }
  }
  
  function toggleHeart(element) {
    element.classList.toggle("selected");
    element.textContent = element.classList.contains("selected") ? "♥ " : "♡ ";
  }
  