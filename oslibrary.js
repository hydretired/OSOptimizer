// Jquery ve Bootstrap Gereklidir
// Bootstrap.css <head> içerisinde,
// Jquery.js ve Bootstrap.js </body> etiketi kapatılmadan önce eklenmelidir.
// Düzen aşağıdaki şekilde olmalıdır.
// <html>
// <head>
// <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"rel="stylesheet" />
// </head>
// <body>
// CONTENT
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
// <script src="./oslibrary.js"></script>
// </body>
// </html>

$(document).ready(function () {

    // Font-Size Settings - Begin
    $('[dt-font]').each(function (e,v) {
        var size = $(v).attr('dt-font');
        $(v).css({
            "font-size":size+"px"
        });
        $(v).removeAttr('dt-font');
    });
    // Font-Size Settings - Begin

    // Width Settings - Begin
    $('[dt-width]').each(function (e,v) {
        var wd = $(v).attr('dt-width');

        if (wd.indexOf("%") >= 0) {
            $(v).css({ "width": wd });
        } else {
            $(v).css({ "width": wd + "px" });
        }
        $(v).removeAttr('dt-width');
    });
    // Width Settings  - Begin

    // Text Align - Begin
    $('[dt-align-center]').each(function (e, v) {
        $(v).css({ "text-align": "center" });
        $(v).removeAttr('dt-align-center');
    });
    $('[dt-align-left]').each(function (e, v) {
        $(v).css({ "text-align": "left" });
        $(v).removeAttr('dt-align-left');
    });
    $('[dt-align-right]').each(function (e, v) {
        $(v).css({ "text-align": "right" });
        $(v).removeAttr('dt-align-right');
    });
    // Text Align - Begin

    // Padding Settings - Begin
    $('[dt-padding]').each(function (e, v) {
        var size = $(v).attr('dt-padding');

        if (size.indexOf("%") >= 0) {
            $(v).css({ "padding": size });
        } else {
            $(v).css({ "padding": size + "px" });
        }
        $(v).removeAttr('dt-padding');
    });
    $('[dt-pt]').each(function (e, v) {
        var size = $(v).attr('dt-pt');

        if (size.indexOf("%") >= 0) {
            $(v).css({ "padding-top": size });
        } else {
            $(v).css({ "padding-top": size + "px" });
        }
        $(v).removeAttr('dt-pt');
    });

    $('[dt-pr]').each(function (e, v) {
        var size = $(v).attr('dt-pr');

        if (size.indexOf("%") >= 0) {
            $(v).css({ "padding-right": size });
        } else {
            $(v).css({ "padding-right": size + "px" });
        }
        $(v).removeAttr('dt-pr');
    });

    $('[dt-pb]').each(function (e, v) {
        var size = $(v).attr('dt-pb');

        if (size.indexOf("%") >= 0) {
            $(v).css({ "padding-bottom": size });
        } else {
            $(v).css({ "padding-bottom": size + "px" });
        }
        $(v).removeAttr('dt-pb');
    });
    $('[dt-pl]').each(function (e, v) {
        var size = $(v).attr('dt-pl');

        if (size.indexOf("%") >= 0) {
            $(v).css({ "padding-left": size });
        } else {
            $(v).css({ "padding-left": size + "px" });
        }
        $(v).removeAttr('dt-pl');
    });
    // Margin Settings - End

    // Margin Settings - Begin
    $('[dt-margin]').each(function (e, v) {
        var size = $(v).attr('dt-margin');

        if (size.indexOf("%") >= 0) {
            $(v).css({ "margin": size });
        } else {
            $(v).css({ "margin": size + "px" });
        }
        $(v).removeAttr('dt-margin');
    });
    $('[dt-mt]').each(function (e, v) {
        var size = $(v).attr('dt-mt');

        if (size.indexOf("%") >= 0) {
            $(v).css({ "margin-top": size });
        } else {
            $(v).css({ "margin-top": size + "px" });
        }
        $(v).removeAttr('dt-mt');
    });

    $('[dt-mr]').each(function (e, v) {
        var size = $(v).attr('dt-mr');

        if (size.indexOf("%") >= 0) {
            $(v).css({ "margin-right": size });
        } else {
            $(v).css({ "margin-right": size + "px" });
        }
        $(v).removeAttr('dt-mr');
    });

    $('[dt-mb]').each(function (e, v) {
        var size = $(v).attr('dt-mb');

        if (size.indexOf("%") >= 0) {
            $(v).css({ "margin-bottom": size });
        } else {
            $(v).css({ "margin-bottom": size + "px" });
        }
        $(v).removeAttr('dt-mb');
    });
    $('[dt-ml]').each(function (e, v) {
        var size = $(v).attr('dt-ml');

        if (size.indexOf("%") >= 0) {
            $(v).css({ "margin-left": size });
        } else {
            $(v).css({ "margin-left": size + "px" });
        }
        $(v).removeAttr('dt-ml');
    });
    // Margin Settings - End

    // Color-Background Settings - Begin
    $('[dt-bgc]').each(function (e, v) {
        var color = $(v).attr('dt-bgc');
        $(v).css({ "background-color": color });
        $(v).removeAttr('dt-bgc');
    });
    $('[dt-color]').each(function (e, v) {
        var color = $(v).attr('dt-color');
        $(v).css({ "color": color });
        $(v).removeAttr('dt-color');
    });
    $('[dt-bg-image]').each(function (e, v) {
        var img = $(v).attr('dt-bg-image');
        $(v).css({ "background-image": img });
        $(v).removeAttr('dt-bg-image');
    });
    $('[dt-bg-size]').each(function (e, v) {
        var size = $(v).attr('dt-bg-size');
        $(v).css({ "background-size": size });
        $(v).removeAttr('dt-bg-size');
    });
    // Color Settings - End

    //Grid Settings - Begin
    $('[dt-col1]').each(function (e, v) {
        $(v).addClass("col-md-1");
        $(v).removeAttr('dt-col1');
    });
    $('[dt-col2]').each(function (e, v) {
        $(v).addClass("col-md-2");
        $(v).removeAttr('dt-col2');
    });
    $('[dt-col3]').each(function (e, v) {
        $(v).addClass("col-md-3");
        $(v).removeAttr('dt-col3');
    });
    $('[dt-col4]').each(function (e, v) {
        $(v).addClass("col-md-4");
        $(v).removeAttr('dt-col4');
    });
    $('[dt-col5]').each(function (e, v) {
        $(v).addClass("col-md-5");
        $(v).removeAttr('dt-col5');
    });
    $('[dt-col6]').each(function (e, v) {
        $(v).addClass("col-md-6");
        $(v).removeAttr('dt-col6');
    });
    $('[dt-col7]').each(function (e, v) {
        $(v).addClass("col-md-7");
        $(v).removeAttr('dt-col7');
    });
    $('[dt-col8]').each(function (e, v) {
        $(v).addClass("col-md-8");
        $(v).removeAttr('dt-col8');
    });
    $('[dt-col9]').each(function (e, v) {
        $(v).addClass("col-md-9");
        $(v).removeAttr('dt-col9');
    });
    $('[dt-col10]').each(function (e, v) {
        $(v).addClass("col-md-10");
        $(v).removeAttr('dt-col10');
    });
    $('[dt-col11]').each(function (e, v) {
        $(v).addClass("col-md-11");
        $(v).removeAttr('dt-col11');
    });
    $('[dt-col12]').each(function (e, v) {
        $(v).addClass("col-md-12");
        $(v).removeAttr('dt-col12');
    });
    //Grid Settings - End

    //Border Radius Settings - Begin
    $('[dt-radius]').each(function (e, v) {
        var size = $(v).attr('dt-radius');

        if (size.indexOf("%") >= 0) {
            $(v).css({ "border-radius": size });
        } else {
            $(v).css({ "border-radius": size + "px" });
        }
        $(v).removeAttr('dt-radius');
    });
    //Border Radius Settings - End
})
