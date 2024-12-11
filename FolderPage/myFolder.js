import { folders } from "../Module/folder.js";
import { contents } from "../Module/content.js";

$(document).ready(function () {
  const $folderGrid = $(".folder-grid");
  const $contentGrid = $(".folder-grid");

  folders.forEach((folder, index) => {
    const folderHTML = `
      <div class="folder-item" id="folder-${index}">
        <i class="fas fa-folder"></i>
        <span class="folder-name">${folder.name}</span>
      </div>
    `;
    $folderGrid.append(folderHTML);
  });

  $(".folder-item").click(function () {
    const folderId = $(this).attr("id").split("-")[1];
    const folder = folders[folderId];

    if (folder) {
      $("section.my-contents h2").text(folder.name);

      $contentGrid.empty();

      folder.contentIds.forEach((contentId) => {
        const content = contents.find(c => c.id === contentId);
        if (content) {
          const contentHTML = `
            <div class="content-item">
              <img src="../image/${content.image}" alt="${content.title}" class="content-image">
              <i class="fas fa-heart"></i>
              <h3 class="content-title">${content.title}</h3>
              <div class="rating">${content.rating}</div>
              <p class="platform">플랫폼: ${content.platform}</p>
            </div>
          `;
          $contentGrid.append(contentHTML);
        }
      });
    }
    $(".folder-grid").removeClass("folder-grid").addClass("content-grid");
    $(".add-folder").prev("hr").remove();
    $(".add-folder").remove();
    
    $(".content-item").on("click", ".fa-heart", function () {
      const contentItem = $(this).closest(".content-item");  // 클릭된 아이콘의 부모 .content-item 요소 찾기
      const contentTitle = contentItem.find(".content-title").text();  // 콘텐츠 제목 찾기
      
      if (confirm(`${contentTitle}을 삭제하시겠습니까?`)) {
          // "확인" 클릭 시 콘텐츠 삭제
          contentItem.remove();
          alert("삭제되었습니다.");
      }
    });
  });  
  
  $(".add-folder").on("click", function () {
    const folderName = prompt("폴더 이름을 입력하세요:");
    if (folderName) {
      console.log("hi");
      // 폴더 리스트에 새 폴더 추가
      const folderHTML = `
        <div class="folder-item" id="folder-${folders.length - 1}">
          <i class="fas fa-folder"></i>
          <span class="folder-name">${folderName}</span>
        </div>
      `;
      $folderGrid.append(folderHTML);
    }
  });
  
});
