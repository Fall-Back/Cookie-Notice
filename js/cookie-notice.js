/*------------------------------------------------------------------------------------------------*\
    Fall-Back Cookie Notice Pattern v0.1
\*------------------------------------------------------------------------------------------------*/

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


var accepted_cookies = readCookie(cookie_name);
if (!accepted_cookies) {
    var body_el = document.getElementsByTagName('body')[0];
    body_el.insertAdjacentHTML('afterbegin', cookie_html);
    
    document.getElementById(cookie_button_id).onclick = function(){
        createCookie(cookie_name, 'true', cookie_expire_days);
        document.getElementById(cookie_notice_id).className += '  ' + cookie_close_class;
        /*
            Without CSS (or transition suport - IE9) the notice won't disappear, so wait until fade 
            has finished then remove:
        */
        setTimeout(function(){
            var c = document.getElementById(cookie_notice_id);
            c.parentNode.removeChild(c);
        }, cookie_notice_effect_duration);
    };
}
