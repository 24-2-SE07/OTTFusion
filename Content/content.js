import { Categories } from "../Category/category.js";

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
  new Content(
    1,
    "content1.jpg",
    "오징어 게임",
    "⭐️⭐️⭐️⭐️⭐️",
    "Netflix",
    [Categories.MYSTERY, Categories.ACTION, Categories.DRAMA]
  ),
  new Content(
    2,
    "content2.jpg",
    "더 글로리",
    "⭐️⭐️⭐️⭐️☆",
    "Netflix",
    [Categories.MYSTERY, Categories.DRAMA]
  ),
  new Content(
    3,
    "content3.jpg",
    "환혼",
    "⭐️⭐️⭐️⭐️☆",
    "TVING",
    [Categories.ROMANCE, Categories.ACTION, Categories.DRAMA]
  ),
  new Content(
    4,
    "content4.jpg",
    "유미의 세포들",
    "⭐️⭐️⭐️⭐️☆",
    "TVING",
    [Categories.ROMANCE, Categories.DRAMA]
  ),
  new Content(
    5,
    "content5.jpg",
    "무빙",
    "⭐️⭐️⭐️⭐️⭐️",
    "Disney+",
    [Categories.ACTION, Categories.DRAMA]
  ),
  new Content(
    6,
    "content6.jpg",
    "완다비전",
    "⭐️⭐️⭐️⭐️☆",
    "Disney+",
    [Categories.MYSTERY, Categories.ACTION, Categories.DRAMA]
  ),
  new Content(
    7,
    "content7.jpg",
    "이세계 미궁에서 하렘을",
    "⭐️⭐️⭐️☆☆",
    "라프텔",
    [Categories.ROMANCE, Categories.DRAMA]
  ),
  new Content(
    8,
    "content8.jpg",
    "진격의 거인 파이널 시즌",
    "⭐️⭐️⭐️⭐️⭐️",
    "라프텔",
    [Categories.ACTION, Categories.DRAMA]
  ),
];
