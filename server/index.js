const express = require("express");
const app = express();
const port = 6060;

var bodyParser = require("body-parser"); /*post方法*/
app.use(bodyParser.json()); // 添加json解析
app.use(bodyParser.urlencoded({ extended: false }));

//设置允许跨域访问该服务.
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/api/list", (req, res) =>
  res.json({
    code: 200,
    list: [
      {
        id: 1,
        title: "文章标题1",
        content: "contentcontentcontentcontentcontentcontentcontent",
        image:
          "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      },
      {
        id: 2,
        title: "文章标题2",
        content: "contentcontentcontentcontentcontentcontentcontent2",
        image:
          "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      },
      {
        id: 3,
        title: "文章标题3",
        content: "contentcontentcontentcontentcontentcontentcontent3",
        image:
          "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      },
    ],
  })
);
app.post("/login", (req, res) => {
  console.log(req);
  res.json({ data: req.body });
});

app.post("/interface/batch_info_mask", (req, res) => {
  console.log(Date.now());
  console.log(req.body);
  res.json({
    code: 0,
    result: [
      {
        user_id: 4155112,
      },
    ],
  });
});

app.get("/log", (req, res) =>
  res.json([
    {
      sign: "测试",
      name: "包名",
      cid: "测试渠道",
      phone: "18888888888",
      content: "噔噔噔噔噔噔噔噔噔噔",
      success: false,
      ts: 123123123,
    },
    {
      sign: "测试",
      name: "包名",
      cid: "测试渠道",
      phone: "18888888888",
      content: "噔噔噔噔噔噔噔噔噔噔",
      success: false,
      ts: 158762391932111114,
    },
    {
      sign: "测试",
      name: "包名",
      cid: "测试渠道",
      phone: "18888888888",
      content: "噔噔噔噔噔噔噔噔噔噔",
      success: false,
      ts: 1587623919321324,
    },
  ])
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
