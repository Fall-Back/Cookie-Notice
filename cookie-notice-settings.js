/*------------------------------------------------------------------------------------------------*\
    Fall-Back Cookie Notice Pattern v0.1
    ------------------------------------

    To avoid any confusion, it's probably best to copy these settings to another file that you're
    concatenating and then make any changes to the defaults.
\*------------------------------------------------------------------------------------------------*/

// Settings used in HTML.
// MAY BE REmoved: I'm considering moving the HTML into the main template markup via a
// `<script type="template">` tag. If I do, these won't be necessary.
var cookie_notice_id              = 'cookie_notice';
var cookie_button_id              = 'accept_cookies';
var cookie_notice_class           = 'cookie_notice';
var cookie_button_class           = '';
var cookie_close_class            = 'cookie_notice--close';

// Settings used to generate cookie.
// If I remove the HTML settings, I'd be tempted to remove these too, perhaps as attributes to the
// script tag. Then I won't need this file at all, and I've never liked having to configure JS in
// this way. I've always preferred doing it via markup.
// Not sure of the best way to handle this though:

// Example 1 (attribute-based):
// `<script type="template" cookie_notice cookie_notice_name="cookie_notice" cookie_expire_days="60" cookie_notice_effect_duration="1000">`

// Example 2 (JSON):
// `<script type="template" cookie_notice="{name:'cookie_notice', expire_days:60, effect_duration:1000}">`

// Example 3: (function-esque)
// `<script type="template" cookie_notice="cookie_notice, 60, 1000">`

var cookie_name                   = 'cookie_notice';
var cookie_expire_days            = 60;
var cookie_notice_effect_duration = 1000;

var cookie_html                   =
'<div id="' + cookie_notice_id + '" class="' + cookie_notice_class + '">' + "\n" +
'<p class="cookie_notice__message">This site uses <a href="http://www.allaboutcookies.org/" rel="external noopener noreferrer" target="_blank">cookies</a> to improve user experience. By using this site you agree to our use of cookies.</p>' + "\n" +
'<span class="cookie_notice__action"><button id="' + cookie_button_id + '" class="' + cookie_button_class + '">Dismiss</button></span>' + "\n" +
'</div>';
