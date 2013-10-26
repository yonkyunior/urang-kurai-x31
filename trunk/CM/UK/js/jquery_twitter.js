(function (e) {
    e.fn.tweetable = function (t) {
        var n = {
            limit: 3,
            username: "andre_pandet",
            time: false,
            replies: false,
            position: "append"
        };
        var t = e.extend(n, t);
        return this.each(function (t) {
            var r = e(this);
            var i;
            var s = "";
            var o = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var u = "http://cdn.api.twitter.com/1/statuses/user_timeline.json?screen_name=";
            var a = "&count=";
            e.getJSON(u + n.username + a + n.limit + "&callback=?", r, function (t) {
                e.each(t, function (t, u) {
                    if (t == 0) {
                        i = e('<ul class="tweetList">')[n.position.toLowerCase() + "To"](r)
                    }
                    if (n.replies === false) {
                        if (u.in_reply_to_status_id === null) {
                            i.append('<li class="tweet_content_' + t + '"><span class="tweet_link_' + t + '">' + u.text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1">@$1 </a>$2') + "</span></li>")
                        }
                    } else {
                        i.append('<li class="tweet_content_' + t + '"><span class="tweet_link_' + t + '">' + u.text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1">@$1 </a>$2'))
                    } if (n.time == true) {
                        for (var a = 0; a <= 12; a++) {
                            if (o[a] == u.created_at.substr(4, 3)) {
                                s = a + 1;
                                if (s < 10) {
                                    s = "0" + s
                                }
                            }
                        }
                        e(".tweet_content_" + t).append("<small> " + u.created_at.substr(8, 2) + "/" + s + "/" + u.created_at.substr(26, 4) + " " + u.created_at.substr(11, 8) + "</small>")
                    }
                })
            })
        })
    }
})(jQuery);
$(function () {
    $("#tweets").tweetable({
        username: "andre_pandet",
        time: true,
        limit: 3,
        replies: false,
        position: "append"
    })
})