/*
状态对象
 */
export default {
  latitude: 47.359833, // 纬度
  longitude: 123.933413, // 经度
  address: {}, //地址相关信息对象
  categorys: [], // 食品分类数组
  shops: [], // 商家数组
  userInfo: {}, // 用户登陆信息
  // 商品的详细信息
  goods: [],     // 预约附近小区信息
  subscribe: [], // 可预约情况
  info:{},       // 收费情况

  shopGoods: [],      // ShopGoods
  shopSubscribe: [],  // ShopSubscribe
  shopInfo: {},       // ShopInfo
  /*
  cartFoods    ---  shopGoods;
  searchShops  ---  shopSubscribe;
  info         ---  shopInfo
  */
}
