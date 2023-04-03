type BannerData = [
  {
    buttonText: string;
    desc: string;
    discount: string;
    image: {
      asset: {
        _ref: string;
        _type: string;
      };
      _type: string;
    };
    largeText1: string;
    largeText2: string;
    midText: string;
    product: string;
    saleTime: string;
    smallText: string;
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  },
  {},
  {}
];

type Product = {
  name: string;
  image: string;
  _id: string;
  slug: Slug;
  current: string;
  price: number;
};
