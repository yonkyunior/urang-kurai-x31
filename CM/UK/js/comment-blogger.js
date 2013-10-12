loader = document.createElement('script');
loader.src = "//www.blogger.com/static/v1/jsbin/1347259804-comment_from_post_iframe.js";
document.getElementsByTagName('head')[0].appendChild(loader);
var form_c = '.form';
var form_e = $('#comment-editor').attr('src');
function Valid_Par_Id(par_id) {
    r = par_id.indexOf('c');
    if (r != -1) par_id = par_id.substring(r + 1);
    return par_id
}
function Cform_Ins_ParID(par_id) {
    par_id = '&parentID=' + par_id + '#%7B';
    n_cform_url = form_e.replace(/#%7B/, par_id);
    return n_cform_url
}
function form() {
    html = $(form_c).html();
    $(form_c).html('');
    form_c = '.form';
    $(form_c).html(html);
    $('#comment-editor').attr('src', form_e)
}
function reset(e) {
    par_id = $(e).attr('id');
    par_id = Valid_Par_Id(par_id);
    html = $(form_c).html();
    if (form_c == '.form') {
        form_html = '<a href="#form" onclick="form()">' + Msgs.addComment + '</a><a name="form"/>';
        $(form_c).html(form_html)
    } else {
        $(form_c).html('')
    }
    form_c = '#reply_id_c' + par_id;
    $(form_c).html(html);
    $('#comment-editor').attr('src', Cform_Ins_ParID(par_id))
}
cur_url = window.location.href;
search_formid = '#comment-form_';
search_index = cur_url.indexOf(search_formid);
if (search_index != -1) {
    ret_id = cur_url.substring(search_index + search_formid.length);
    reset('#rc' + ret_id)
}
for (var i = 0; i < Items.length; i++) {
    if ('parentId' in Items[i]) {
        var par_id = Items[i].parentId;
        var par_level = parseInt($('#c' + par_id + ':first').attr('level'));
        $('#c' + par_id + ' .new_item:first').html(function (index, oldhtml) {
            var child_id = Items[i].id;
            if (par_level >= Config.maxThreadDepth) {
                $('#c' + child_id + ':first .reply').remove()
            }
            var child_html = $('#c' + child_id + ':first').html();
            child_html = '<div class="comment_wrap reply level' + (par_level + 1) + '" id="c' + child_id +
                '" >' + child_html + '</div>';
            $('#c' + child_id).remove();
            return (oldhtml + child_html)
        })
    }
}