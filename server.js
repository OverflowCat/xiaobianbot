// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const http = require("http");

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + process.env.PORT);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const jieba = require("nodejieba");
function de(t) {
  return jieba.cut(t);
}
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.XNBM);

//inline
bot.on("inline_query", async ({ inlineQuery, answerInlineQuery }) => {
  const q = inlineQuery.query;
  var results = [];
  var thing = q;
  var t1 = de(q)[0];
  var t2 = de(q)[-1];
  if (t2) {
    t2 = "的" + t2;
  } else {
    t2 = "";
  }
  var res = "鱼挨打是什么意思？鱼挨打是什么梗？鱼挨打是谁？这个梗又是从何而来？为什么一瞬间就有好多人鱼挨打？为什么大家都在鱼挨打？相信很多同学都很想知道这个梗，下面就让小编来为大家介绍一下鱼挨打梗的详细内容。鱼挨打，其实就是鱼的挨打，大家可能会很惊讶鱼怎么会挨打呢？但事实就是这样，小编也感到非常惊讶。以上就是鱼挨打的的全部内容，希望能够帮助到大家。"
    .replace("鱼挨打", thing)
    .replace("鱼的", t1)
    .replace("挨打", t2);

  if (res === "") return;
  results = [
    {
      type: "article",
      id: 1,
      title: "让我来解释一下 " + thing,
      description: res,
      input_message_content: {
        message_text: res
      },
      thumb_url:
        "https://cdn.glitch.com/e41d8351-01f6-4af8-b0ee-bd4710cb3769%2F5BF7709A-BD2D-47DA-9C00-48A22E619F73.jpeg?v=1569941377839"
    }
  ];
  //Telegram requests results even if the query is blank when the user typed and deleted

  console.log(JSON.stringify(results));
  return answerInlineQuery(results);
});
