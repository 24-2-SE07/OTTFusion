export class Folder {
    constructor(name, contentIds) {
        this.name = name; // 폴더 이름
        this.contentIds = contentIds || []; // 포함된 콘텐츠 ID 리스트
    }

    addContent(contentId) {
        if (!this.contentIds.includes(contentId)) {
          this.contentIds.push(contentId);
        }
    }
    
      // 콘텐츠 ID 삭제
    removeContent(contentId) {
        this.contentIds = this.contentIds.filter(id => id !== contentId);
    }
}

export const folders = [
    new Folder('여름', ['00000001', '00000007']),
    new Folder('보고싶은', []),
];