const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = 6060;
const model = require("./model");
var bodyParser = require("body-parser"); /*post方法*/
app.use(bodyParser.json()); // 添加json解析
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
//设置允许跨域访问该服务.
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 生成token
function generateToken() {
  return jwt.sign(
    {
      foo: "bar",
    },
    "hahaha",
    {
      expiresIn: "1d", // 1天 https://github.com/zeit/ms
    }
  );
}

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
app.post("/api/login", (req, res) => {
  console.log(req, "req");
  res.json({
    status: true,
    data: {
      token: generateToken(),
    },
    message: "登录成功！",
  });
  // console.log(req);
  // res.json({ data: req.body });
});

app.post("/api/create", (req, res) => {
  console.log(req.body);
  res.json({
    status: true,
    message: "创建成功！",
  });
  console.log(model, "model");
  model.connect((db) => {
    db.collection("list").insert(req.body, function (err, result) {
      console.log(result, "dbdbbd");
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
