var a_idx = 0;
jQuery(document).ready(function($) {
 $("body").click(function(e) {
 var a = new Array("小鸟游六花", "斯卡蒂", "千反田爱瑠", "星尘", "四宫辉夜", "椎名真白", "加藤惠" ,"她们", "都是", "我老婆", "不接受反驳", "╭(╯^╰)╮");
 var $i = $("<span/>").text(a[a_idx]);
 a_idx = (a_idx + 1) % a.length;
 var x = e.pageX,
 y = e.pageY;
 $i.css({
 "z-index": 999,
 "top": y - 20,
 "left": x,
 "position": "absolute",
 "font-weight": "bold",
 "color": "#ff6651"
 });
 $("body").append($i);
 $i.animate({
 "top": y - 180,
 "opacity": 0
 },
 1500,
 function() {
 $i.remove();
 });
 });
});