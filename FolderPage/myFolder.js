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
              <img src="../image/image.png" alt="${content.title}" class="content-image">
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
  });
});
