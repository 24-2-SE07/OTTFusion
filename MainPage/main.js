$(document).ready(function () {
    // 콘텐츠 데이터 배열
    const contents = [
        {
          image: "content1.jpg",
          title: "오징어 게임",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          platform: "Netflix",
        },
        {
          image: "content2.jpg",
          title: "더 글로리",
          rating: "⭐️⭐️⭐️⭐️☆",
          platform: "Netflix",
        },
        {
          image: "content3.jpg",
          title: "환혼",
          rating: "⭐️⭐️⭐️⭐️☆",
          platform: "TVING",
        },
        {
          image: "content4.jpg",
          title: "유미의 세포들",
          rating: "⭐️⭐️⭐️⭐️☆",
          platform: "TVING",
        },
        {
          image: "content5.jpg",
          title: "무빙",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          platform: "Disney+",
        },
        {
          image: "content6.jpg",
          title: "완다비전",
          rating: "⭐️⭐️⭐️⭐️☆",
          platform: "Disney+",
        },
        {
          image: "content7.jpg",
          title: "이세계 미궁에서 하렘을",
          rating: "⭐️⭐️⭐️☆☆",
          platform: "라프텔",
        },
        {
          image: "content8.jpg",
          title: "진격의 거인 파이널 시즌",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          platform: "라프텔",
        },
    ];
  
    // 콘텐츠 동적으로 추가
    const $contentGrid = $(".content-grid");
  
    contents.forEach((content) => {
      const contentHTML = `
        <div class="content-item">
          <img src="../image/image.png" alt="${content.title}" class="content-image">
          <h2 class="content-title">${content.title}</h2>
          <div class="rating">${content.rating}</div>
          <p class="platform">플랫폼: ${content.platform}</p>
        </div>
      `;
      $contentGrid.append(contentHTML);
    });
  });
  