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
bot.start(ctx => {
  ctx.reply("Welcome!");
  return;
});
bot.help(ctx => ctx.reply("Send me a sticker"));
bot.on("sticker", ctx => ctx.reply("👍"));
bot.hears("hi", ctx => ctx.reply("Hey there"));
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
    "鱼挨打是什么意思？鱼挨打是什么梗？鱼挨打是谁？这个梗又是从何而来？" +
    "为什么一瞬间就有好多人鱼挨打？为什么大家都在鱼挨打？" +
    "相信很多同学都很想知道这个梗，下面就让小编来为大" +
    "家介绍一下鱼挨打梗的详细内容。鱼挨打，其实就是鱼" +
    "的挨打，大家可能会很惊讶鱼怎么会挨打呢？但事实就是这样，" +
    "小编也感到非常惊讶。以上就是鱼挨打的全部内容，希望能够帮助到大家。"
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

var jokes = [
  "\n在mrange庆典的聚会上，一位35岁的mvictim高举着牌子，上面写着“感谢mthing赐予我的快乐的童年”。\n\nmman呵斥道，“你是在嘲讽mthing吗？mthing才实行了20年。”\n\n“确切地说，这正是我感谢它的原因。”\n\n",
  "\nmman发言道：“从下个礼拜开始我们要做两件事，一，全面在mrange实行mthing；二，周六所有mvictim都要去酒吧里拿一条蜥蜴。大家有什么意见可以提出来。”\n\n过了一会儿，台下有个声音怯生生地提问：“为什么要拿蜥蜴？”\n\n“很好，我就知道大家对mthing没有异议。”\n\n",
  "\n“mthing真**的智障！”\n\n“你涉嫌恶意攻击mman,跟我走一趟。”\n\n“我又没说是哪里的mthing！”\n\n“废话！哪里的mthing智障我会不知道吗！”\n\n",
  "\nmman在向mvictim们讲话：\n\n“很快我们就能mtheory！”\n\n台下传来一个声音：“那我们怎么办？”\n\n",
  "\n一个mvictim的鹦鹉丢了。这是只会说话的鹦鹉，要是落到mman的手里可糟了。\n\n这人便发表了一篇声明：“本人遗失鹦鹉一只，另外，本人不同意它关于mthing的观点。”\n\n",
  "\n“mthing是艺术还是科学?”\n\n”我说不好，但肯定不是科学。”\n\n“何以见得?”\n\n“如果mthing是科学的话，他们至少应该先用小白鼠做实验。”\n\n",
  "\n大会主持人:”请支持mthing的人坐在左边，反对mthing的坐在右边。”\n\n大多数人坐在了右边，少数人坐在了左边，只有一个人坐在中间纹丝不动。\n\n主持人很不解，询问情况。\n\n“我对mvictim们的情况表示十分理解，但我支持mthing。”\n\n”那您赶快坐到主席台来。”主持人急忙说道。\n\n",
  "\nmman关于“关爱mvictim 支持mthing”的会议纪要正在以超光速增长，但这并没有违背相对论，因为会议纪要里不含有任何信息。\n\n",
  "\nmman:“我们要不惜一切代价，为了我们的主人翁mtheory！”\n\n一个mvictim对另一个mvictim说:“看哪 ，mman把咱们当主人翁。”\n\n另一个mvictim说:“不，我们是‘代价’。”\n\n",
  "\n“如果你在mrange，旁边一个陌生人突然开始唉声叹气，正确的做法是什么?”\n\n“立即阻止这种反对mthing的行为。”\n\n",
  "\nmman:“由于mthing的实行，各位mvictim的美好未来前景已经出现在了地平线上。”\n\n一个mvictim问另一个mvictim:”什么是地平线?”\n\n另一个mvictim回答道:“就是那个能看到但是永远都到不了的线。”\n\n",
  "\nmman在mrange随机采访了一位mvictim:“请问你对mthing有什么意见吗?”\n\nmvictim答道:“我有一些意见，但我不同意我的意见!”\n\n",
  "\n两个骷髅相遇，一骷髅问另一个骷髅:“我是被mman的mthing逼死的，你是怎么死的？”\n\n另一个骷髅回答说:“我还活着。”\n\n",
  "\nmman的汽车被一头牛挡住了，怎么也赶不走。mman便下车对牛说：“你再不走，我就把你送到mrange去mthing。”牛听了便一溜烟的跑开了。\n\n",
  "\n问：“mthing的优越之处是什么？”\n\n答：“成功克服了那些其他情况下不会存在的困难。”\n\n",
  "\n问：“mthing在哪些时候会遇到抵制？”\n\n答：“主要有四个时间段：春天、夏天、秋天和冬天。”\n\n",
  "\nmman问一名mvictim:“你的爸爸是谁？”\n\n他回答说：“是mman!”\n\nmman很满意，又问：“你的母亲是谁？”\n\n他回答：“是mthing！”\n\nmman又问：“你将来想当什么？”\n\n“孤儿！”\n\n",
  "\n问：“什么是最短的笑话？”\n\n答：“mthing。”\n\n",
  "\n问：“那些别有用心的人是怎样黑mthing的？”\n\n答：“他们把mman说的内容原文复述了。”\n\n",
  "\n问：“为什么mman把mvictim放在中心考虑？”\n\n答：“这样从各个方向都能方便地欺压他们。”\n\n",
  "\n问：“什么叫交换意见？”\n\n答：“带着你的意见去找mman理论，然后带着他的回来。”\n\n",
  "\n问：“mthing实行的结果如何？”\n\n答：“还是有人活下来了。”\n\n",
  "\n问：“mthing的前景是什么？”\n\n答：“有两种可能的情况。现实的可能是火星人会降临地球帮我们打理一切，科幻的可能是我们成功地mtheory。”\n\n"
];
