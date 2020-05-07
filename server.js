const jieba = require("nodejieba");
function de(t) {
  return jieba.cut(t);
}
const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.XNBM);
console.log("ss");
bot.start(ctx => ctx.reply("Welcome!"));
bot.help(ctx => ctx.reply("Send me a sticker"));
bot.on("sticker", ctx => ctx.reply("👍"));
bot.hears("hi", ctx => ctx.reply("Hey there"));
bot.on("text", ctx => {
  console.log(ctx);
  const q = ctx.inlineQuery.query;
  var results = [];
  var thing = q;
  var t1 = (q)[0];
  var t2 = (q)[-1];
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
      }
      // thumb_url:
    }
  ];
  //Telegram requests results even if the query is blank when the user typed and deleted

  console.log(JSON.stringify(results));
  ctx.telegram.answerInlineQuery(results);
});
