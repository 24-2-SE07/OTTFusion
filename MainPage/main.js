import { contents } from '../Content/content.js'; 

$(document).ready(function () {
    const $contentGrid = $(".content-grid");

    contents.forEach(content => {
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
        if ($(this).hasClass("far")) {
          $(this).removeClass("far").addClass("fas"); // 빈 하트 -> 꽉 찬 하트
        } else {
          $(this).removeClass("fas").addClass("far"); // 꽉 찬 하트 -> 빈 하트
        }
      });
});