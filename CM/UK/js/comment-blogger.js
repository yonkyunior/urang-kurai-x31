$('.content_body').each(function () {
    $(this).html(
        $(this).html()
        .replace(/\[video\](.*?)\[\/video\]/ig, "<div class='span18 video_con'><iframe src='$1' frameborder='0'></iframe></div>")

    );

    $(this).html(
        $(this).html()
        .replace(/\[iframe\](.*?)\[\/iframe\]/ig, "<div class='span18 iframe_con'><iframe src='$1' frameborder='0'></iframe></div>")

    );

    $(this).html(
        $(this).html()
        .replace(/\[img\](.*?)\[\/img\]/ig, "<img src='$1'/>")

    );
    $(this).html(
        $(this).html()
        .replace(/\[code\](.*?)\[\/code\]/ig, "<pre><code class='language-html'>$1</code></pre>")

    );
    $('i[rel="image_big"],i[rel="javascript"],i[rel="script"]').replaceWith(function () {
        return $('<div class="span18 bigpic_con"><img src="' + $(this).html() + '"/></div>');
    });
    $('i[rel="image"],i[rel="img"]', this).replaceWith(function () {
        return $('<img src="" />').attr('src', $(this).text());
    });
    $('1[rel="h3"]', this).replaceWith(function () {
        return $('<h3></h3>').append($(this).contents());
    });
    $('1[rel="quote"]', this).replaceWith(function () {
        return $('<blockquote></blockquote>').append($(this).contents());
    });

    $('i[rel="js"],i[rel="javascript"],i[rel="script"]').replaceWith(function () {
        return $('<pre><code class="language-javascript">' + $(this).html() + '</code></pre>');
    });

    $('i[rel="html"],i[rel="code"]').replaceWith(function () {
        return $('<pre><code class="language-markup">' + $(this).html() + '</code></pre>');
    });

    $('i[rel="css"]').replaceWith(function () {
        return $('<pre><code class="language-css">' + $(this).html() + '</code></pre>');
    });
    $('i[rel="java"]').replaceWith(function () {
        return $('<pre><code class="language-java">' + $(this).html() + '</code></pre>');
    });



});