import { contents } from '../Content/content.js'; 

$(document).ready(function () {
    const $contentGrid = $(".content-grid");

    contents.forEach(content => {
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