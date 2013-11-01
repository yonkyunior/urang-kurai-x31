

var maxTopCommenters = 200,
  rca = 1,
  rcb = 0,
  rcc = true,
  rcd = ["Anonymous", "Admin"],
  rce = 20,
  rcf = '[image] [user]',
  rcg = 'No commentators',
  rch = '',
  rci =40,
  rcj = true,
  rck = 'http://lh4.googleusercontent.com/-069mnq7DV_g/TvgRrBI_JaI/AAAAAAAAAic/Iot55vywnYw/s' + rci + '/avatar_blue_m_96.png',
  rcl = 'http://www.gravatar.com/avatar/0000?d=mm&s=' + rci,
  rcm = '',
  rcn = '';
if (!Array.indexOf) {
  Array.prototype.indexOf = function (obj) {
    for (var i = 0; i < this.length; i++) if (this[i] == obj) return i;
    return -1
  }
}
function replaceTopCmtVars(text, item, position) {
  if (!item || !item.author) return text;
  var author = item.author;
  var authorUri = "";
  if (author.uri && author.uri.$t != "") authorUri = author.uri.$t;
  var avaimg = rcl;
  var bloggerprofile = "http://www.blogger.com/profile/";
  if (author.gd$image && author.gd$image.src && authorUri.substr(0, bloggerprofile.length) == bloggerprofile) {
    avaimg = author.gd$image.src
  } else {
    var parseurl = document.createElement('a');
    if (authorUri != "") {
      parseurl.href = authorUri;
      avaimg = 'http://www.google.com/s2/favicons?domain=' + parseurl.hostname
    }
  }
  if (rcm != "" && authorUri == rcm && rcn != "") avaimg = rcn;
  if (avaimg == "http://img2.blogblog.com/img/b16-rounded.gif" && rck != "") avaimg = rck;
  var newsize = "s" + rci;
  avaimg = avaimg.replace(/\/s\d\d+-c\//, "/" + newsize + "-c/");
  if (rcj) newsize += "-c";
  avaimg = avaimg.replace(/\/s\d\d+(-c){0,1}\//, "/" + newsize + "/");
  var authorName = author.name.$t;
  if (authorName == 'Anonymous' && rch != '' && avaimg == rcl) authorName = rch;
  var imgcode = '<li class="items-cmx"><img height="' + rci + '" width="' + rci + '" src="' + avaimg + '" />';
  if (authorUri != "") imgcode = '<a href="' + authorUri + '" target="_blank">' + imgcode + '</a>';
  if (rce > 3 && authorName.length > rce) authorName = authorName.substr(0, rce - 3) + "...";
  var authorcode = authorName;
  if (authorUri != "") authorcode = '<div class="tolltip item' + position + '" ><span class="tol_wrap"><span class="num-count">' + item.count + '</span><span class="small-tol">' + authorName.substring(0, 14) + '<br/>Comment <br/>this post</span></span></span></li>';
  text = text.replace('[user]', authorcode);
  text = text.replace('[image]', imgcode);
  text = text.replace('[count]', item.count);
  return text
}
var topcommenters = {};
var ndxbase = 1; 

function showTopCommenters(json) {
  var one_day = 1000 * 60 * 60 * 24;
  var today = new Date();
  if (rcm == "") {
    var elements = document.getElementsByTagName("*");
    var expr = /(^| )profile-link( |$)/;
    for (var i = 0; i < elements.length; i++) if (expr.test(elements[i].className)) {
      rcm = elements[i].href;
      break
    }
  }
  for (var i = 0; i < json.feed.entry.length; i++) {
    var entry = json.feed.entry[i];
    if (rcb > 0) {
      var datePart = entry.published.$t.match(/\d+/g);
      var cmtDate = new Date(datePart[0], datePart[1] - 1, datePart[2], datePart[3], datePart[4], datePart[5]);
      var days = Math.ceil((today.getTime() - cmtDate.getTime()) / (one_day));
      if (days > rcb) break
    }
    var authorUri = "";
    if (entry.author[0].uri && entry.author[0].uri.$t != "") authorUri = entry.author[0].uri.$t;
    if (rcc && authorUri != "" && authorUri == rcm) continue;
    var authorName = entry.author[0].name.$t;
    if (rcd.indexOf(authorName) != -1) continue;
    var hash = entry.author[0].name.$t + "-" + authorUri;
    if (topcommenters[hash]) topcommenters[hash].count++;
    else {
      var commenter = new Object();
      commenter.author = entry.author[0];
      commenter.count = 1;
      topcommenters[hash] = commenter
    }
  }
  if (json.feed.entry.length > 200) {
    ndxbase += 200;
    document.write('<script type="text/javascript" src="'+ BLOGURL +'/feeds/'+ POSTID +'/comments/default?redirect=false&max-results=200&alt=json-in-script&callback=showTopCommenters"></' + 'script>');
    return
  }
  var tuplear = [];
  for (var key in topcommenters) tuplear.push([key, topcommenters[key]]);
  tuplear.sort(function (a, b) {
    if (b[1].count - a[1].count) return b[1].count - a[1].count;
    return (a[1].author.name.$t.toLowerCase() < b[1].author.name.$t.toLowerCase()) ? -1 : 1
  });
  var realcount = 0;
  for (var i = 0; i < maxTopCommenters && i < tuplear.length; i++) {
    var item = tuplear[i][1];
    if (item.count < rca) break;
    document.write(replaceTopCmtVars(rcf, item, realcount + 1));
    realcount++
  }
  if (!realcount) document.write(rcg)
}

document.write('<script type="text/javascript" src="'+ BLOGURL +'/feeds/'+ POSTID +'/comments/default?redirect=false&max-results=200&alt=json-in-script&callback=showTopCommenters"></' + 'script>');
