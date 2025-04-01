export const fileData = [
  { userId: 1, file: "", carnumber: "123가4567" },
  { userId: 2, file: "", carnumber: "223가4567" },
  { userId: 3, file: "", carnumber: "323가4567" },
];

export const itemData = [
  { userId: 1, img: "", carnumber: "123가4567", startPrice: "50000원" },
  { userId: 2, img: "", carnumber: "123가4567", startPrice: "50000원" },
  { userId: 3, img: "", carnumber: "123가4567", startPrice: "50000원" },
];

export const pointData = [
  { userId: 1, bank: "kakao", bankNumber: "123213213", returnPrice: "50000원" },
  { userId: 2, bank: "kakao", bankNumber: "123213213", returnPrice: "50000원" },
  { userId: 3, bank: "kakao", bankNumber: "123213213", returnPrice: "50000원" },
];

export const userInfoData = [
  { userId: 1, userName: "홍길동", phone: "010-1231-1231" },
  { userId: 2, userName: "홍홍홍", phone: "010-1231-4412" },
  { userId: 3, userName: "홍동갈", phone: "010-1231-2134" },
];

export const gradeData = [
  { grade: 1, startPrice: 50000 },
  { grade: 2, startPrice: 100000 },
  { grade: 3, startPrice: 150000 },
];
export const img = [
  { title: 1, img: 50000 },
  { title: 2, img: 50000 },
  { title: 3, img: 50000 },
];
export const getDataByType = (type: string) => {
  switch (type) {
    case "file":
      return fileData;
    case "item":
      return itemData;
    case "point":
      return pointData;
    case "userInfo":
      return userInfoData;
    case "grade":
      return gradeData;
    case "img":
      return img;
    default:
      return [];
  }
};
