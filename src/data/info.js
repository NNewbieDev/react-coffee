import {
  faHome,
  faBox,
  faCoffee,
  faTruck,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export const info = [
  {
    title: "SỐ LƯỢNG SẢN PHẨM ĐÃ BÁN",
    amount: 10000,
  },
  {
    title: "SỐ LƯỢNG NHÀ ĐẦU TƯ",
    amount: 4,
  },
  {
    title: "SỐ LƯỢNG CHI NHÁNH",
    amount: 25,
  },
];

export const payments = [
  {
    name: "Thanh toán khi nhận hàng",
    img: faTruck,
  },
  {
    name: "Thẻ Visa",
    img: faCreditCard,
  },
];

export const products = [
  {
    name: "Cà phê đen",
    image: "react-coffee/assets/images/darkCF.png",
    type: 1,
    price: 13000,
    limit: 100,
    quantity: 1,
  },
  {
    name: "Cà phê đen (ít đường)",
    image: "react-coffee/assets/images/darkCF.png",
    type: 1,
    price: 13000,
    limit: 100,
    quantity: 1,
  },
  {
    name: "Cà phê sữa",
    type: 2,
    image: "react-coffee/assets/images/milkCF.png",
    price: 15000,
    limit: 20,
    quantity: 1,
  },
];

export const branches = [
  {
    address:
      "Số 100, phường 8, đường Quang Trung, Quận Gò Vấp, TP. Hồ Chí Minh",
    time: "7:30 - 22:00",
    img: "react-coffee/assets/images/branch1.jpg",
  },
  {
    address:
      "A11, phường Thạnh Xuân, đường Nguyễn Văn Quá, Quận 12, TP.Hồ Chí Minh",
    time: "6:30 - 22:30",
    img: "react-coffee/assets/images/branch2.jpg",
  },
];

export const nav = [
  {
    name: "Trang chủ",
    link: "/",
    icon: faHome,
  },
  {
    name: "Trải nghiệm thử",
    link: "/trial",
    icon: faCoffee,
  },
  {
    name: "Mua hàng",
    link: "/purchase",
    icon: faBox,
  },
];
