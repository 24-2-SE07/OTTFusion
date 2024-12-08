$(document).ready(function () {
    const folders = [
      { name: "폴더 1", icon: "fa-folder" },
      { name: "폴더 2", icon: "fa-folder" },
      { name: "폴더 3", icon: "fa-folder" },
      { name: "폴더 4", icon: "fa-folder" },
      { name: "폴더 5", icon: "fa-folder" },
    ];
  
    const $folderGrid = $(".folder-grid");
  
    // 폴더를 동적으로 추가
    folders.forEach((folder) => {
      const folderHTML = `
        <div class="folder-item">
          <i class="fas ${folder.icon}"></i> <!-- 폴더 아이콘 -->
          <span class="folder-name">${folder.name}</span> <!-- 폴더 이름 -->
        </div>
      `;
      $folderGrid.append(folderHTML);
    });
  });
  