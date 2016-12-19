/**
 * Created by MrIggyman1234 on 19/12/2016.
 */

$(document).ready(function(){
    var $nav = $("nav");
    $("#compare-link").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $nav.fadeOut(200);
        $nav.html("<a class=\"nav-link\" id=\"back-link\" href=\"#\">Back</a>" +
                     "<a class=\"nav-link\" id=\"bootstrap-link\" href=\"#\">Bootstrap</a>" +
                     "<a class=\"nav-link\" id=\"foundation-link\" href=\"#\">Foundation</a>");
        $nav.fadeIn(400);
    });

    $("#back-link").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $nav.fadeOut(200);
        $nav.html('<a class="nav-link" id="about-link" href="about.html">About</a>' +
                              '<a class="nav-link" id="contribute-link" href="contribute.html">Contribute</a>' +
                              '<a class="nav-link" id="compare-link" href="#">How we compare with:</a>' +
                              '<a class="nav-link" id="contact-link" href="contact.html">Contact Us</a>');
        $nav.fadeIn(400);
    });
});