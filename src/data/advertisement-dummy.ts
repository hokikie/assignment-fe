import Advertisement from "../models/advertisement/advertisement";

const dummyAdvertisement: Advertisement[] = [
  {
    id: "AD_001",
    types: "GROCERY",
    contents: "매일 아침 신선한 야채를 만나보세요!",
    displayDate: "2022-11-05",
    startAt: "12:00",
    endAt: "19:00",
    limitPerDay: 5,
  },
  {
    id: "AD_002",
    types: "DELIVERY",
    contents: "원하시는 시간대에 착즙 음료를 보내드립니다.",
    displayDate: "2022-11-05",
    startAt: "12:00",
    endAt: "18:00",
    limitPerDay: 20,
  },
  {
    id: "AD_003",
    types: "INTERNET",
    contents: "신규 가입 시 50% 할인 혜택드립니다.",
    displayDate: "2022-11-05",
    startAt: "12:00",
    endAt: "24:00",
    limitPerDay: 10,
  },
  {
    id: "AD_004",
    types: "NEWS",
    contents: "11월 한파주의보 발령",
    displayDate: "2022-11-05",
    startAt: "12:00",
    endAt: "20:00",
    limitPerDay: 30,
  },
];

export default dummyAdvertisement;
