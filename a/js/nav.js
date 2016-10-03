$(document).ready(function() {
    var h = $(".desktop-nav-trigger"),
        a = $(".second-row-header");
    $(".global-header").on("mouseenter touchstart", function() {
            a.addClass("visible"),
                h.addClass("open")
        }),
        h.on("click touchstart", function(t) {
            t.preventDefault(),
                t.stopPropagation(),
                $(this).toggleClass("open"),
                a.toggleClass("visible")
        }),
        a.find("li.has-submenu > a").on("touchstart", function(t) {
            t.preventDefault(),
                t.stopPropagation(),
                $(this).parent().toggleClass("submenu-open"),
                $(this).parent().hasClass("submenu-open") && $(this).siblings("ul").css("opacity", 0),
                $(this).siblings("ul").fadeToggle(200, function() {
                    $(this).css("opacity", "")
                })
        }),
        a.find("li.has-submenu").on("mouseenter", function(t) {
            $(this).addClass("submenu-open"),
                $(this).children("ul").fadeIn(200)
        }).on("mouseleave", function(t) {
            $(this).children("ul").fadeOut(200),
                $(this).removeClass("submenu-open")
        }),
        a.find("li.has-submenu ul").on("mouseenter", function(t) {
            t.preventDefault(),
                t.stopPropagation()
        }),
        $(".mobile-nav-trigger").on("click touchstart", function(t) {
            t.preventDefault(),
                t.stopPropagation();
            var e = $("html"),
                i = $("body"),
                n = ($(".global-header"),
                    $(".sidebar-nav"));
            $(this).toggleClass("open"),
                e.toggleClass("sidebar-visible"),
                e.hasClass("sidebar-visible") ? (n.addClass("pre-visible"),
                    i.css("height", "100%")) : (n.removeClass("visible"),
                    i.css("height", "auto")),
                $(".site-wrapper", e).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                    n.toggleClass("visible", e.hasClass("sidebar-visible")),
                        n.toggleClass("pre-visible", e.hasClass("sidebar-visible"))
                })
        }),
        $(".sidebar-nav li.has-submenu > a").on("click", function(t) {
            t.preventDefault(),
                $(this).next("ul").slideToggle(300),
                $(this).parent().toggleClass("submenu-open")
        });
});