/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖",
  },
  {
    type: 40,
    count: 1,
    text: "小熊电动多功能绞馅机",
    title: "(40)",
    img: "../img/secrit.jpg",
  },
  {
    type: 39,
    count: 1,
    text: "小熊电热水壶",
    title: "(39)",
    img: "../img/secrit.jpg",
  },
  {
    type: 38,
    count: 1,
    text: "三只松鼠礼盒",
    title: "(38)",
    img: "../img/secrit.jpg",
  },
  {
    type: 37,
    count: 1,
    text: "小米充电宝",
    title: "(37)",
    img: "../img/secrit.jpg",
  },
  {
    type: 36,
    count: 1,
    text: "小米吹风机",
    title: "(36)",
    img: "../img/secrit.jpg",
  },
  {
    type: 35,
    count: 1,
    text: "安慕希风味酸奶",
    title: "(35)",
    img: "../img/secrit.jpg",
  },
  {
    type: 34,
    count: 1,
    text: "奥克斯净化加湿器",
    title: "(34)",
    img: "../img/secrit.jpg",
  },
  {
    type: 33,
    count: 1,
    text: "迪士尼蓝牙耳机",
    title: "(33)",
    img: "../img/secrit.jpg",
  },
  {
    type: 32,
    count: 1,
    text: "美的养生壶",
    title: "(32)",
    img: "../img/secrit.jpg",
  },
  {
    type: 31,
    count: 1,
    text: "山本空气炸锅",
    title: "(31)",
    img: "../img/secrit.jpg",
  },
  {
    type: 30,
    count: 1,
    text: "小米蓝牙耳机",
    title: "(30)",
    img: "../img/secrit.jpg",
  },
  {
    type: 29,
    count: 1,
    text: "山山牌暖手袋",
    title: "(29)",
    img: "../img/secrit.jpg",
  },
  {
    type: 28,
    count: 1,
    text: "飞科剃须刀",
    title: "(28)",
    img: "../img/secrit.jpg",
  },
  {
    type: 27,
    count: 1,
    text: "小米吹风机",
    title: "(27)",
    img: "../img/secrit.jpg",
  },
  {
    type: 26,
    count: 1,
    text: "良品铺子礼盒",
    title: "(26)",
    img: "../img/secrit.jpg",
  },
  {
    type: 25,
    count: 1,
    text: "三只松鼠礼盒",
    title: "(25)",
    img: "../img/secrit.jpg",
  },
  {
    type: 24,
    count: 1,
    text: "迪士尼蓝牙耳机",
    title: "(24)",
    img: "../img/secrit.jpg",
  },
  {
    type: 23,
    count: 1,
    text: "志高加湿器",
    title: "(23)",
    img: "../img/secrit.jpg",
  },
  {
    type: 22,
    count: 1,
    text: "九阳电热水壶",
    title: "(22)",
    img: "../img/secrit.jpg",
  },
  {
    type: 21,
    count: 1,
    text: "九阳5L紫砂电炖锅",
    title: "(21)",
    img: "../img/secrit.jpg",
  },
  {
    type: 20,
    count: 1,
    text: "多功能抱枕",
    title: "(20)",
    img: "../img/secrit.jpg",
  },
  {
    type: 19,
    count: 1,
    text: "飞科剃须刀",
    title: "(19)",
    img: "../img/secrit.jpg",
  },
  {
    type: 18,
    count: 1,
    text: "安慕希风味酸奶",
    title: "(18)",
    img: "../img/secrit.jpg",
  },
  {
    type: 17,
    count: 1,
    text: "飞科电动牙刷",
    title: "(17)",
    img: "../img/secrit.jpg",
  },
  {
    type: 16,
    count: 1,
    text: "志高加湿器",
    title: "(16)",
    img: "../img/secrit.jpg",
  },
  {
    type: 15,
    count: 1,
    text: "山山牌暖手袋",
    title: "(15)",
    img: "../img/secrit.jpg",
  },
  {
    type: 14,
    count: 1,
    text: "碗具套餐金枝玉叶（10碗10勺10筷）",
    title: "(14)",
    img: "../img/secrit.jpg",
  },
  {
    type: 13,
    count: 1,
    text: "徐福记全家福礼盒",
    title: "(13)",
    img: "../img/secrit.jpg",
  },
  {
    type: 12,
    count: 1,
    text: "九阳不粘煎锅",
    title: "(12)",
    img: "../img/secrit.jpg",
  },
  {
    type: 11,
    count: 1,
    text: "山本空气炸锅",
    title: "(11)",
    img: "../img/secrit.jpg",
  },
  {
    type: 10,
    count: 1,
    text: "迪士尼蓝牙耳机",
    title: "(10)",
    img: "../img/disneperji.jpg",
  },
  {
    type: 9,
    count: 1,
    text: "美的养生壶",
    title: "(9)",
    img: "../img/meidiyangshenghu.jpg",
  },
  {
    type: 8,
    count: 1,
    text: "小熊电热水壶",
    title: "(8)",
    img: "../img/xiaoxiongdianyeshuihu.jpg",
  },
  {
    type: 7,
    count: 1,
    text: "美的电热水壶",
    title: "(7)",
    img: "../img/meidireshuihu.jpg",
  },
  {
    type: 6,
    count: 1,
    text: "小米蓝牙耳机",
    title: "(6)",
    img: "../img/lanyaerji.jpg",
  },
  {
    type: 5,
    count: 1,
    text: "喜之郎新春礼盒",
    title: "(5)",
    img: "../img/xizhilang.jpg",
  },
  {
    type: 4,
    count: 1,
    text: "小米充电宝",
    title: "(4)",
    img: "../img/congdianbao.jpg",
  },
  {
    type: 3,
    count: 1,
    text: "九阳电饭煲（5L）",
    title: "(3)",
    img: "../img/dianfanbao.jpg",
  },
  {
    type: 2,
    count: 1,
    text: "九阳多功能蒸蛋器",
    title: "(2)",
    img: "../img/zengDan.jpg",
  },
  {
    type: 1,
    count: 1,
    text: "九阳电热水壶",
    title: "(1)",
    img: "../img/joyoung.jpg",
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = Array.from({ length: 41 }, (_v, k) => k + 1);

/**
 * 卡片公司名称标识
 */
const COMPANY = "中科德能";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY,
};
