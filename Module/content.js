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
  new Content(1, "오징어_게임.png", "오징어 게임", "⭐️ 5.0", "Netflix", [Categories.MYSTERY, Categories.ACTION, Categories.DRAMA]),
  new Content(2, "더_글로리.png", "더 글로리", "⭐️ 4.3", "Netflix", [Categories.MYSTERY, Categories.DRAMA]),
  new Content(3, "환혼.png", "환혼", "⭐️ 4.7", "TVING", [Categories.ROMANCE, Categories.ACTION, Categories.DRAMA]),
  new Content(4, "유미의_세포들.png", "유미의 세포들", "⭐️ 4.5", "TVING", [Categories.ROMANCE, Categories.DRAMA]),
  new Content(5, "무빙.png", "무빙", "⭐️ 5.0", "Disney+", [Categories.ACTION, Categories.DRAMA]),
  new Content(6, "완다비전.png", "완다비전", "⭐️ 4.7", "Disney+", [Categories.MYSTERY, Categories.ACTION, Categories.DRAMA]),
  new Content(7, "너의_이름은.png", "너의 이름은", "⭐️ 4.6", "라프텔", [Categories.ROMANCE, Categories.MOVIE]),
  new Content(8, "진격의_거인_파이널_시즌.png", "진격의 거인 파이널 시즌", "⭐️ 4.8", "라프텔", [Categories.ACTION, Categories.DRAMA]),
  new Content(9, "하이큐!!.png", "하이큐!!", "⭐️ 4.6", "Netflix", [Categories.ACTION, Categories.ENTERTAINMENT]),
  new Content(10, "디스커버리.png", "디스커버리", "⭐️ 4.1", "Disney+", [Categories.MYSTERY, Categories.ENTERTAINMENT]),
  new Content(11, "블랙_팬서.png", "블랙 팬서", "⭐️ 4.9", "Disney+", [Categories.ACTION, Categories.MOVIE]),
  new Content(12, "스파이더맨_노_웨이_홈.png", "스파이더맨: 노 웨이 홈", "⭐️ 4.7", "Disney+", [Categories.ACTION, Categories.MOVIE]),
  new Content(13, "도깨비.png", "도깨비", "⭐️ 4.8", "TVING", [Categories.ROMANCE, Categories.DRAMA]),
];
