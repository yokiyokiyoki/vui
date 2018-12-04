module.exports = {
  //当前根目录下，不覆盖其他目录下的文件
  root: true,
  env: {
    //指定环境，才能使用全局变量，不然浏览器Image会报错
    browser: true,
    node: true
  },
  extends: ["standard", "prettier"],
  //兼容新特性
  parser: "babel-eslint",
  rules: {
    "prettier/prettier": "error"
    //覆写规则
  },
  plugins: ["prettier"]
};
