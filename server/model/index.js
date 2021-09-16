const MongoClient = require("mongoose"); // 创建Mongo的客户端对象
const url = "mongodb://localhost:27017"; // 连接数据库url
const dbName = "project"; // 连接的数据库名字
// 数据库的连接方法封装
function connect(callback) {
  // 使用connect方法连接到服务器
  // err:错误对象。client：客户端连接成功的对象
  MongoClient.connect(url, function (err, client) {
    if (err) {
      // 如果连接错误，打印错误信息
      console.log("数据库连接错误！", err);
    } else {
      console.log("数据库连接成功！");
      // 否则
      const db = client.db(dbName); // 数据库连接成功的对象
      callback && callback(db); // 利用回调函数处理
      client.close(); // 每次调用成功,还要再关闭数据库
    }
  });
}

module.exports = { connect };
