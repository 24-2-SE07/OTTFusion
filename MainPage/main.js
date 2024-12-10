import { contents } from '../Module/content.js'; 

let isLoggedIn = true; // 로그인 상태 플래그

$(document).ready(function () {
  renderContents(contents);

  loadSidebar();
  $(".menu").on("click", function() {
    $("#sidebar").toggleClass("open"); // 'open' 클래스를 토글하여 사이드바 열기/닫기
    }); 
  
  $(".category-list").on("click", "a", function (event) {
    event.preventDefault(); // 기본 링크 동작 방지
    const category = $(this).data("category");

    const filteredContents = category === "all"
      ? contents
      : contents.filter(content => content.categories.has(category));

    filteredContents.sort((a, b) => {
      const ratingA = parseFloat(a.rating.replace('⭐️', '').trim()); 
      const ratingB = parseFloat(b.rating.replace('⭐️', '').trim()); 
      return ratingB - ratingA; 
    });
    renderContents(filteredContents);
  });
});

function renderContents(filteredContents) {
  const $contentGrid = $(".content-grid");
  $contentGrid.empty(); // 콘텐츠 그리드 초기화

  filteredContents.forEach(content => {
    const contentHTML = `
      <div class="content-item">
        <img src="../image/image.png" alt="${content.title}" class="content-image">
        <i class="far fa-heart"></i>
        <h2 class="content-title">${content.title}</h2>
        <div class="rating">${content.rating}</div>
        <p class="platform">플랫폼: ${content.platform}</p>
      </div>
    `;
    $contentGrid.append(contentHTML);
  });

  $(".content-item").on("click", ".fa-heart", function () {
    toggleHeart($(this));
  });
}

function toggleHeart($heartIcon) {
  if ($heartIcon.hasClass("far")) {
    $heartIcon.removeClass("far").addClass("fas"); // 빈 하트 -> 꽉 찬 하트
  } else {
    $heartIcon.removeClass("fas").addClass("far"); // 꽉 찬 하트 -> 빈 하트
  }
}


function loadSidebar() {
  const authSection = $('#auth-section');
  if (isLoggedIn) {
      authSection.html(`
          <hr>
          <p>user1 님</p>
          <a href="#" id="logout-link">로그아웃</a>
      `);
      $('#logout-link').on('click', function (event) {
        event.preventDefault(); // 기본 동작 방지 (페이지 이동을 방지)
        logout();  // 로그아웃 처리 함수 호출
      });
  } else {
      authSection.html(`
          <hr>
          <a href="../AccountPage/login.html">로그인하기</a>
      `);
  }
}

function logout() {
  isLoggedIn = false;
  loadSidebar(); // 로그아웃 후 사이드바 업데이트
}


