export const productData = {
  title: "Kapşonlu Sweatshirt",
  basePrice: 70,
  currency: "TL",
  properties: [
    {
      type: "radio",
      label: "Yaş Grubu",
      variants: [
        { value: "children", label: "Çocuk", priceModifier: -10 },
        { value: "adult", label: "Yetişkin", priceModifier: 0 },
      ],
    },
    {
      type: "color",
      label: "Hediye Paketi Rengi",
      variants: [
        { value: "#1b9132", label: "Yeşil", priceModifier: 0 },
        { value: "#f36180", label: "Pembe", priceModifier: 0 },
        {
          value: "#40bbdf",
          label: "Mavi",
          priceModifier: (basePrice) => basePrice * 0.05,
        },
        { value: "#ded068", label: "Sarı", priceModifier: 0 },
        { value: "#5e3999", label: "Mor", priceModifier: 0 },
        { value: "#2e1545", label: "Koyu Mor", priceModifier: 3 },
      ],
    },
    {
      type: "radio",
      label: "Beden",
      variants: [
        { value: "S", label: "S", priceModifier: 0 },
        {
          value: "M",
          label: "M",
          priceModifier: (basePrice) => basePrice * 0.1,
        },
        {
          value: "L",
          label: "L",
          priceModifier: (basePrice) => basePrice * 0.2,
        },
        {
          value: "XL",
          label: "XL",
          priceModifier: (basePrice) => basePrice * 0.3,
        },
        {
          value: "XXL",
          label: "XXL",
          priceModifier: (basePrice) => basePrice * 0.4,
        },
      ],
    },
    {
      type: "image",
      label: "Örnek Görsel",
      // resim url'leri public/assets klasörü altında olacak şekilde düzenlenmiştir.
      variants: [
        {
          value: "beige",
          label: "Bej",
          imageUrl: "./assets/preview/beige.png",
          buttonImage: "./assets/image-button/beige.png",
          priceModifier: 0,
        },
        {
          value: "gray-white",
          label: "Gri Beyaz",
          imageUrl: "./assets/preview/gray-white.png",
          buttonImage: "./assets/image-button/gray-white.png",
          priceModifier: (basePrice) => basePrice * 0.05,
        },
        {
          value: "green",
          label: "Yeşil",
          imageUrl: "./assets/preview/green.png",
          buttonImage: "./assets/image-button/green.png",
          priceModifier: 0,
        },
        {
          value: "navy-green",
          label: "Lacivert Yeşil",
          imageUrl: "./assets/preview/navy-green.png",
          buttonImage: "./assets/image-button/navy-green.png",
          priceModifier: (basePrice) => basePrice * 0.05,
        },
        {
          value: "white-school",
          label: "Beyaz Okul",
          imageUrl: "./assets/preview/white-school.png",
          buttonImage: "./assets/image-button/white-school.png",
          priceModifier: (basePrice) => basePrice * 0.05,
        },
        {
          value: "navy-lightblue",
          label: "Lacivert Mavi",
          imageUrl: "./assets/preview/navy-blue.png",
          buttonImage: "./assets/image-button/navy-blue.png",
          priceModifier: (basePrice) => basePrice * 0.05,
        },
        {
          value: "navy-orange",
          label: "Lacivert Turuncu",
          imageUrl: "./assets/preview/navy-orange.png",
          buttonImage: "./assets/image-button/navy-orange.png",
          priceModifier: (basePrice) => basePrice * 0.05,
        },
        {
          value: "navy-red",
          label: "Lacivert Kırmızı",
          imageUrl: "./assets/preview/navy-red.png",
          buttonImage: "./assets/image-button/navy-red.png",
          priceModifier: (basePrice) => basePrice * 0.05,
        },
        {
          value: "navy-white",
          label: "Lacivert Beyaz",
          imageUrl: "./assets/preview/navy-white.png",
          buttonImage: "./assets/image-button/navy-white.png",
          priceModifier: (basePrice) => basePrice * 0.05,
        },
        {
          value: "orange",
          label: "Turuncu",
          imageUrl: "./assets/preview/orange.png",
          buttonImage: "./assets/image-button/orange.png",
          priceModifier: 0,
        },
        {
          value: "pink",
          label: "Pembe",
          imageUrl: "./assets/preview/pink.png",
          buttonImage: "./assets/image-button/pink.png",
          priceModifier: 0,
        },
        {
          value: "purple",
          label: "Mor",
          imageUrl: "./assets/preview/purple.png",
          buttonImage: "./assets/image-button/purple.png",
          priceModifier: 0,
        },
        {
          value: "white-red",
          label: "Beyaz Kırmızı",
          imageUrl: "./assets/preview/white-red.png",
          buttonImage: "./assets/image-button/white-red.png",
          priceModifier: (basePrice) => basePrice * 0.05,
        },
        {
          value: "white",
          label: "Beyaz",
          imageUrl: "./assets/preview/white.png",
          buttonImage: "./assets/image-button/white.png",
          priceModifier: 0,
        },
      ],
    },
    {
      type: "dropdown",
      label: "Kargo Şirketi",
      variants: [
        { value: "Kargo", label: "Standart Kargo", priceModifier: 0 },
        { value: "Yurtiçi Kargo", label: "Yurtiçi Kargo", priceModifier: 10 },
        { value: "Aras Kargo", label: "Aras Kargo", priceModifier: 10 },
        { value: "MNG Kargo", label: "MNG Kargo", priceModifier: 15 },
      ],
    },
  ],
};
