import { Categories } from "./category.js";

export class Content {
  constructor(id, image, title, rating, platform, categories) {
    this.id = String(id).padStart(8, '0');
    this.image = image;
    this.title = title;
    this.rating = rating;
    this.platform = platform;
    this.categories = new Set(categories);
  }
}

export const contents = [
  new Content(1, "content1.jpg", "오징어 게임", "⭐️ 5.0", "Netflix", [Categories.MYSTERY, Categories.ACTION, Categories.DRAMA]),
  new Content(2, "content2.jpg", "더 글로리", "⭐️ 4.3", "Netflix", [Categories.MYSTERY, Categories.DRAMA]),
  new Content(3, "content3.jpg", "환혼", "⭐️ 4.7", "TVING", [Categories.ROMANCE, Categories.ACTION, Categories.DRAMA]),
  new Content(4, "content4.jpg", "유미의 세포들", "⭐️ 4.5", "TVING", [Categories.ROMANCE, Categories.DRAMA]),
  new Content(5, "content5.jpg", "무빙", "⭐️ 5.0", "Disney+", [Categories.ACTION, Categories.DRAMA]),
  new Content(6, "content6.jpg", "완다비전", "⭐️ 4.7", "Disney+", [Categories.MYSTERY, Categories.ACTION, Categories.DRAMA]),
  new Content(7, "content7.jpg", "이세계 미궁에서 하렘을", "⭐️ 3.4", "라프텔", [Categories.ROMANCE, Categories.DRAMA]),
  new Content(8, "content8.jpg", "진격의 거인 파이널 시즌", "⭐️ 4.8", "라프텔", [Categories.ACTION, Categories.DRAMA]),
  new Content(9, "content9.jpg", "하이큐!!", "⭐️ 4.6", "Netflix", [Categories.ACTION, Categories.ENTERTAINMENT]),
  new Content(10, "content10.jpg", "디스커버리", "⭐️ 4.1", "Disney+", [Categories.MYSTERY, Categories.ENTERTAINMENT]),
  new Content(11, "content11.jpg", "블랙 팬서", "⭐️ 4.9", "Disney+", [Categories.ACTION, Categories.MOVIE]),
  new Content(12, "content12.jpg", "스파이더맨: 노 웨이 홈", "⭐️ 4.7", "Disney+", [Categories.ACTION, Categories.MOVIE]),
  new Content(13, "content13.jpg", "고블린", "⭐️ 3.8", "TVING", [Categories.ROMANCE, Categories.DRAMA]),
];
