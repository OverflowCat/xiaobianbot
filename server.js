const jieba = require("nodejieba");
function de(t) {
  return jieba.cut(t);
}
var crc32 = function(r) {
  for (var a, o = [], c = 0; c < 256; c++) {
    a = c;
    for (var f = 0; f < 8; f++) a = 1 & a ? 3988292384 ^ (a >>> 1) : a >>> 1;
    o[c] = a;
  }
  for (var n = -1, t = 0; t < r.length; t++)
    n = (n >>> 8) ^ o[255 & (n ^ r.charCodeAt(t))];
  return ((-1 ^ n) >>> 0).toString(10);
};
const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.XNBM);
console.log("ss");
//bot.start(ctx => {
//  ctx.reply("Welcome!");
//  return;
//});
//bot.help(ctx => ctx.reply("Send me a sticker"));
//bot.on("sticker", ctx => ctx.reply("👍"));
//bot.hears("hi", ctx => ctx.reply("Hey there"));
//bot.on("inline_query", ctx => {
bot.on("inline_query", async ({ inlineQuery, answerInlineQuery }) => {
  var q = inlineQuery.query;
  //const q = ctx.inlineQuery.query;
  var results = [];
  if (q == "") q = "小 编 屎";
  var thing = q;
  var des = de(q);
  var t1 = des[0];
  var t2 = des[des.length - 1];
  if (thing.indexOf(" ") >= 1) {
    var ts = thing.split(" ");
    t1 = ts[0];
    t2 = ts[1];
    if (ts[2]) var t3 = ts[2];
    thing = t1 + t2;
  }
  if (t2) {
    //t2 = "的" + t2;
  } else {
    t2 = "";
  }
  var res =
    ("鱼挨打是什么意思？鱼挨打是什么梗？鱼挨打是谁？这个梗又是从何而来？" +
    "为什么一瞬间就有好多人鱼挨打？为什么大家都在鱼挨打？" +
    "相信很多同学都很想知道这个梗，下面就让小编来为大" +
    "家介绍一下鱼挨打梗的详细内容。鱼挨打，其实就是鱼" +
    "的挨打，大家可能会很惊讶鱼怎么会挨打呢？但事实就是这样，" +
    "小编也感到非常惊讶。以上就是鱼挨打的全部内容，希望能够帮助到大家。")
      .split("鱼挨打")
      .join(thing)
      .split("鱼的挨打")
      .join(!t3 ? t1 + "的" + t2 : t3)
      .split("鱼怎么")
      .join(t1 + "怎么")
      .split("会挨打呢")
      .join("会" + t2 + "呢")
      .split("undefined")
      .join("");

  if (res === "") return;
  results = [
    {
      type: "article",
      id: crc32(res),
      title: "让我来解释一下 " + thing,
      description: res,
      input_message_content: {
        message_text: res
      }
      // thumb_url:
    }
  ];
  //Telegram requests results even if the query is blank when the user typed and deleted

  console.log(JSON.stringify(results));
  //ctx.telegram.answerInlineQuery(results);
  return answerInlineQuery(results);
});

bot.launch();