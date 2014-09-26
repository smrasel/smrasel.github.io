var utils = {loadTemplate: function(a, c) {
        var b = [];
        $.each(a, function(e, d) {
            if (window[d]) {
                b.push($.get("tpl/" + d + ".html", function(f) {
                    window[d].prototype.template = _.template(f)
                }))
            } else {
                alert(d + " not found")
            }
        });
        $.when.apply(null, b).done(c)
    },preloadGlobalImages: function() {
        var a = window.devicePixelRatio > 1.5;
        if (a) {
            var b = ["/img/static/nav-logo-blk@2x.png", "/img/work/sprite-logos@2x.png", "/img/work/myedu.jpg", "/img/work/umbel.jpg", "/img/about/sprite-lines@2x.png", "/img/about/bdr-vert-dot-wht2.png", "/img/process/phases@2x.png"]
        } else {
            var b = ["/img/static/nav-logo-blk.png", "/img/work/sprite-logos.png", "/img/work/myedu.jpg", "/img/work/umbel.jpg", "/img/about/sprite-lines.png", "/img/about/bdr-vert-dot-wht2.png", "/img/process/phases.png"]
        }
        $.each(b, function(d, c) {
            $("<img />").attr("src", c)
        })
    },preloadWorkImages: function() {
        var a = window.devicePixelRatio > 1.5;
        if (a) {
            var b = ["/img/work/project/myedu1.jpg", "/img/work/project/umbel1.jpg", "/img/work/project/dsic1.jpg", "/img/work/project/cox1.jpg", "/img/work/project/goog1.jpg", "/img/work/project/goog2.jpg", "/img/work/project/swa2.jpg", "/img/work/project/swa1.jpg"]
        } else {
            var b = ["/img/work/project/myedu1.jpg", "/img/work/project/umbel1.jpg", "/img/work/project/dsic1.jpg", "/img/work/project/cox1.jpg", "/img/work/project/goog1.jpg", "/img/work/project/goog2.jpg", "/img/work/project/swa2.jpg", "/img/work/project/swa1.jpg"]
        }
        $.each(b, function(d, c) {
            $("<img />").attr("src", c)
        })
    },retinaImages: function() {
        $("img").retina("@2x")
    },hideAddressBar: function() {
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            window.addEventListener("load", function() {
                setTimeout(function() {
                    window.scrollTo(0, 1)
                }, 1000)
            })
        }
    }};
var Project = Backbone.Model.extend({});
var project1 = new Project({name: "MyEDU",description: "<p>How do you evolve a successful brand and redefine the way students manage college? MyEdu tackled this challenge in the summer of 2012.</p><p>To solidify their position as a leading student platform for managing college, myEdu began rethinking their product from the ground up. They wanted to pull together highly trafficked but isolated features and extend their offering to include job and internship matching. Together, myEdu and Smith envisioned and designed an experience that allowed students to stay on top of day-to-day activities, build an employable skill-set while graduating on time, cross-reference their social network and course schedules, and allow employers to easily search and find recruits.</p><p>The result: fewer graduates living in their parents&rsquo; basements.</p>",categories: "Information Architecture / Product Strategy / Interaction Design / Creative Concepting / Visual Design / Infographics & Illustration / Iconography",image1: "<img src='/img/work/project/myedu1.jpg' alt='' />",image2: "<img src='/img/work/project/myedu2.jpg' alt='' />",image3: "<img src='/img/work/project/myedu3.jpg' alt='' />",image4: "<img src='/img/work/project/myedu4.jpg' alt='' />",image5: "",image6: "",image7: "",prev: "/work/southwest/",next: "/work/umbel/"});
var project2 = new Project({name: "Umbel",description: "<p>Smith was lucky enough to partner with Umbel early on, before they became the standard way to measure digital audiences. We helped design their initial application, concept what an Umbel looked like (an umbel is a type of flower, like a dandelion), and visualize audience data. More recently we created a marketing site that showcases their offerings, expertise, and personality. We love seeing smart clients with great ideas blossom. Viva el umbel!</p>",categories: "Product Strategy / Information Architecture / Interaction Design / Creative Concepting / Visual Design / Application Design / Infographics / Iconography",image1: "<img src='/img/work/project/umbel1.jpg' alt='' />",image2: "<img src='/img/work/project/umbel2.jpg' alt='' />",image3: "<img src='/img/work/project/umbel3.jpg' alt='' />",image4: "<img src='/img/work/project/umbel4.jpg' alt='' />",image5: "<img src='/img/work/project/umbel5.jpg' alt='' />",image6: "",image7: "",prev: "/work/myedu/",next: "/work/dell-social-innovation-challenge/"});
var project3 = new Project({name: "Dell Social Innovation Challenge",description: "<p>Initially conceived to encourage students to save the world AND make money, this social entrepreneurship program spawned from the University of Texas and backed by $5M from Dell, has grown to be a global platform for positive social change. The team approached Smith in late 2011 as they eyed a transformation from a dated website to a a global experience and competition platform. The new site needed to inspire creativity, encourage the participation of a global audience that included students, faculty, judges and the voting public, and educate students on the ins and outs of entrepreneurship. In the first year after the redesign over 250,000 people joined and entered over 2,500 projects.</p>",categories: "Information Architecture / Content Strategy / Interaction Design / Creative Concepting / Visual Design",image1: "<img src='/img/work/project/dsic1.jpg' alt='' />",image2: "<img src='/img/work/project/dsic2.jpg' alt='' />",image3: "<img src='/img/work/project/dsic3.jpg' alt='' />",image4: "<img src='/img/work/project/dsic4.jpg' alt='' />",image5: "<img src='/img/work/project/dsic5.jpg' alt='' />",image6: "<img src='/img/work/project/dsic6.jpg' alt='' />",image7: "",prev: "/work/umbel/",next: "/work/newsreader/"});
var project4 = new Project({name: "Newsreader",description: "<p>As digital channels (apps!) place increasing pressure on traditional publisher outlets (newspapers!) they have been seeking partners for distributing content in new and cost-effective ways (we need an app!). We partnered with LibreDigital (digital publisher) to envision an experience for their partner, Cox Media (traditional publisher), to distribute content across all digital channels (web, mobile, tablets, desktop!) from a single, scalable platform. When you throw in the unique requirement that COX owns dozens of publications that would need to brand the newsreader it was an enormous design challenge. The result was a badass HTML5 newsreader that behaved like an app and is designed responsively to across all possible devices. Unfortunately it&rsquo;s no longer available, and, based on their current app ratings, traditional publishers still have a lot to learn.</p>",categories: "Product Strategy / Information Architecture / Interaction Design / Creative Concepting / Visual Design / Application Design",image1: "<img src='/img/work/project/cox1.jpg' alt='' />",image2: "<img src='/img/work/project/cox2.jpg' alt='' />",image3: "<img src='/img/work/project/cox3.jpg' alt='' />",image4: "<img src='/img/work/project/cox4.jpg' alt='' />",image5: "",image6: "",image7: "",prev: "/work/dell-social-innovation-challenge/",next: "/work/google/"});
var project5 = new Project({name: "Google",description: "<p>When you&rsquo;re Google and you launch an augmented reality game meant to challenge the nature of gaming, you need a marketing campaign that&rsquo;s equally as crazy. Smith worked with the Niantic Labs team at Google to help conceptualize and design the digital marketing experience for Ingress. It&rsquo;s WarGames meets X-Files and way too complicated to describe. Just dive in. Its fun, but beware. The world around you is not what it seems.</p>",categories: "Information Architecture  /  Experience Design  /  Visual Design  /  Visual Concepting",image1: "<img src='/img/work/project/goog1.jpg' alt='' />",image2: "<img src='/img/work/project/goog2.jpg' alt='' />",image3: "<img src='/img/work/project/goog3.jpg' alt='' />",image4: "<img src='/img/work/project/goog4.jpg' alt='' />",image5: "<img src='/img/work/project/goog5.jpg' alt='' />",image6: "<img src='/img/work/project/goog6.jpg' alt='' />",image7: "<img src='/img/work/project/goog7.jpg' alt='' />",prev: "/work/newsreader/",next: "/work/southwest/"});
var project6 = new Project({name: "Southwest",description: "<p>There are brands you want to work with and then there are companies you love working with. Southwest is a unique combination of both. We have enjoyed great relationships with these great people over the years. With the most recent engagement we were asked to help envision concepts to breathe life into an essential but under-appreciated property of their website.  After several meetings and mounds of data, Smith proposed a more socially-integrated, full-lifecycle experience.</p>",categories: "Website Analytics / Product & Mobile Strategy / Experience Concepting / Creative Concepting",image1: "<img src='/img/work/project/swa2.jpg' alt='' />",image2: "<img src='/img/work/project/swa1.jpg' alt='' />",image3: "<img src='/img/work/project/swa3.jpg' alt='' />",image4: "<img src='/img/work/project/swa4.jpg' alt='' />",image5: "<img src='/img/work/project/swa5.jpg' alt='' />",image6: "<img src='/img/work/project/swa6.jpg' alt='' />",image7: "",prev: "/work/google/",next: "/work/myedu/"});
var NavView = Backbone.View.extend({tagName: "nav",events: {"click a.home-nav": "updateUI","click a.menu-nav": "openMenu","click a.work-nav": "updateUI","click a.about-nav": "updateUI","click a.process-nav": "updateUI","click a.feed-nav": "updateUI","click a.contact-nav": "updateUI"},initialize: function() {
        $(window).on("resize", this.setNav);
        this.render()
    },render: function() {
        $(this.el).html(this.template());
        _.defer(function(a) {
            a.setNav()
        }, this);
        this.addShadow();
        return this
    },remove: function() {
        $(window).off("resize", this.setNav);
        Backbone.View.prototype.remove.apply(this, arguments)
    },setNav: function() {
        var a = $(window).width();
        var b = parseInt($("#navigation").css("border-left-width"), 10);
        var c = parseInt($("#navigation").css("border-right-width"), 10);
        var d = a - (b + c);
        $("#navigation").width(d)
    },updateNav: function(a) {
        $("#navigation a").removeClass("active");
        $("#wrapper").removeClass();
        $("." + a).addClass("active");
        this.updateMenu(a)
    },toggleHome: function() {
        var b = $("section.meet-intro");
        var a = $("section.meet-details");
        if (b.is(":hidden")) {
            b.slideDown(400)
        }
    },updateUI: function(b) {
        var a = $(b.currentTarget).attr("href");
        var c = $(b.currentTarget).attr("class");
        if (c === "home-nav active") {
            this.toggleHome()
        }
        app.navigate(a, true);
        this.closeMenu();
        b.preventDefault()
    },openMenu: function(a) {
        $("#navigation ul").toggleClass("hidden-phone");
        $("#navigation a.menu-nav").text("Menu");
        a.preventDefault()
    },closeMenu: function() {
        $("#navigation ul").removeClass().addClass("hidden-phone")
    },updateMenu: function(a) {
        if (a === "home-nav") {
            $("#navigation a.menu-nav").removeClass("active");
            $("#navigation a.menu-nav").text("Menu")
        } else {
            $("#navigation a.menu-nav").addClass("active");
            var b = $("#navigation a." + a).text();
            $("#navigation a.menu-nav").text(b)
        }
    },setSection: function(a) {
        $("#wrapper").removeClass().addClass(a)
    },checkScroll: function() {
        var a = $(window).scrollTop();
        if (a !== 0) {
            $(window).scrollTop(0)
        }
    },addShadow: function() {
        $("#wrapper").waypoint(function(a, b) {
            $("#navigation").toggleClass("shadow")
        }, {offset: "-2"})
    }});
var HomeView = Backbone.View.extend({id: "home",events: {"click a.btn-jump": "slideDn","click h3 a": "updateUI","click .client-thumb a": "updateUI"},initialize: function() {
        $(window).on("resize", this.setHeight);
        $(window).on("resize", this.swapPosition);
        this.render()
    },render: function() {
        $(this.el).html(this.template());
        _.defer(function(a) {
            a.setHeight()
        }, this);
        _.defer(function(a) {
            a.swapPosition()
        }, this);
        _.defer(function(a) {
            a.triggerCarousel()
        }, this);
        _.defer(function() {
            utils.retinaImages()
        });
        return this
    },remove: function() {
        $(window).off("resize", this.setHeight);
        $(window).off("resize", this.swapPosition);
        Backbone.View.prototype.remove.apply(this, arguments)
    },setHeight: function() {
        var d = $(window).height();
        var c = $(window).width();
        var h = $(window).height() / 2;
        var a = $("#navigation").height();
        var k = parseInt($("#navigation").css("border-top-width"), 10);
        var f = parseInt($("section.meet-intro").css("paddingTop"), 10);
        var l = parseInt($("section.meet-intro").css("paddingBottom"), 10);
        var e = parseInt($("#content").css("border-bottom-width"), 10);
        var g = d - k - f - l;
        if (g < 450) {
            g = 450
        }
        var m = $("section.meet-intro header").height();
        var j = m / 2;
        var b = h - f - j;
        if (b < 40) {
            b = 40
        }
        $("section.meet-intro").css("height", g);
        $("section.meet-intro header").css("margin-top", b)
    },slideDn: function(a) {
        this.$("section.meet-intro").slideUp(400);
        a.preventDefault()
    },swapPosition: function() {
        var a = $(window).width();
        if (a < 768) {
            this.$("div.description").insertBefore($("div.clients"))
        } else {
            if (a > 768) {
                this.$("div.clients").insertBefore($("div.description"))
            }
        }
    },triggerCarousel: function() {
        this.$("#logos").cycle({fx: "fade",speed: 200,timeout: 6000});
        this.$("#quotes").cycle({fx: "fade",speed: 200,timeout: 6000,pager: "#controls",activePagerClass: "active"})
    },updateUI: function(b) {
        var a = $(b.currentTarget).attr("href");
        app.navigate(a, true);
        b.preventDefault()
    }});
var WorkView = Backbone.View.extend({id: "work",events: {"click .thumb a": "loadProject"},initialize: function() {
        this.render()
    },render: function() {
        $(this.el).html(this.template());
        _.defer(function() {
            utils.retinaImages()
        });
        _.defer(function() {
            utils.preloadWorkImages()
        });
        return this
    },loadProject: function(b) {
        var a = $(b.currentTarget).attr("href");
        app.navigate(a, true);
        b.preventDefault()
    }});
var ProjectView = Backbone.View.extend({id: "project",events: {"click a.prev": "loadWork","click a.next": "loadWork","click a.back": "loadWork"},initialize: function() {
        $(window).on("resize", this.swapPosition);
        this.render()
    },render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
        _.defer(function(a) {
            a.swapPosition()
        }, this);
        _.defer(function() {
            utils.retinaImages()
        });
        return this
    },remove: function() {
        $(window).off("resize", this.swapPosition);
        Backbone.View.prototype.remove.apply(this, arguments)
    },loadWork: function(b) {
        var a = $(b.currentTarget).attr("href");
        app.navigate(a, true);
        b.preventDefault()
    },swapPosition: function() {
        var a = $(window).width();
        if (a < 980) {
            this.$("div.span4").insertBefore($("div.span8"))
        } else {
            if (a > 980) {
                this.$("div.span8").insertBefore($("div.span4"))
            }
        }
    }});
var AboutView = Backbone.View.extend({id: "about",initialize: function() {
        this.render()
    },render: function() {
        $(this.el).html(this.template());
        this.toggleDetails();
        return this
    },toggleDetails: function() {
        var b = this.$(".partners .span4");
        var c = this.$(".partners h4");
        var a = this.$(".partners ul");
        var d = this.$("p.toggle span");
        this.$("p.toggle a").toggle(function() {
            var e = $(window).width();
            if (e < 768) {
                b.toggleClass("show")
            }
            a.slideToggle(200);
            $(this).addClass("open");
            d.text("That's enough")
        }, function() {
            var e = $(window).width();
            if (e < 768) {
                b.toggleClass("show")
            }
            a.slideToggle(200);
            $(this).removeClass("open");
            d.text("Partner details")
        })
    }});
var ProcessView = Backbone.View.extend({id: "process",initialize: function() {
        this.render()
    },render: function() {
        $(this.el).html(this.template());
        _.defer(function(a) {
            a.animateProcess()
        }, this);
        return this
    },animateProcess: function() {
        this.$("#learn").waypoint(function(a) {
            if (a === "down") {
                ProcessView.prototype.animateParents();
                ProcessView.prototype.animateChildren()
            }
        }, {offset: "35%",onlyOnScroll: true,triggerOnce: true})
    },animateParents: function() {
        var b = 200, a = 100;
        $(".phase").each(function(c) {
            if ($(this).attr("id") != "learn") {
                if ($(this).attr("id") == "experience") {
                    $(this).delay(b).animate({marginTop: "-74px"}, 200)
                } else {
                    if ($(this).attr("id") == "visual") {
                        $(this).delay(b).animate({marginTop: "-90px"}, 200)
                    } else {
                        if ($(this).attr("id") == "build") {
                            $(this).delay(b).animate({marginTop: "-25px"}, 200)
                        } else {
                            $(this).delay(b).animate({marginTop: "-40px"}, 200)
                        }
                    }
                }
                b = b + a
            }
        })
    },animateChildren: function(a) {
        var c = 200, b = 100;
        $(".phase").find("li").delay(600).each(function(d) {
            if ($(this).attr("class") == "line") {
                $(this).delay(c).animate({opacity: 1}, 200)
            } else {
                $(this).delay(c).animate({opacity: 1}, 200)
            }
            c = c + b
        })
    }});
var FeedView = Backbone.View.extend({id: "feed",initialize: function() {
        this.render()
    },render: function() {
        $(this.el).html(this.template());
        this.getTweets();
        return this
    },getTweets: function() {
        $.getJSON("http://search.twitter.com/search.json?q=%22smith%20is%22%20-dick%20-pussy%20-cunt%20-vagina%20-cocksucker%20-motherfucker%20-blowjob%20-fuck%20-fucker%20-fucking%20-fucked%20-gay%20-fag%20-faggot%20-lesbian%20-pedophile%20-nigga%20-nigger%20-ass%20-nude%20-anal%20-penis%20-rt%20-filter%3Alinks&rpp=10&callback=?", function(g) {
            for (i = 0; i < g.results.length; i++) {
                var h = g.results[i].text;
                var e = h.toLowerCase();
                var e = e.replace(/["]{1}/gi, "");
                var e = e.replace(new RegExp("[^\\x00-\\x7f]", "g"), "");
                var e = e.replace(/(#\w+)/g, "");
                var e = e.replace(/(@\w+)/g, "");
                var e = e.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, "");
                var e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                var c = e.search("smith is");
                var f = e.length;
                var j = e.slice((c + 8), f);
                var b = g.results[i].from_user_name;
                var d = b.replace(new RegExp("[^\\x00-\\x7f]", "g"), "");
                console.log(i + ": " + g.results[i].text);
                $("#tweets").append('<li><p class="smith-is">&ldquo;<span>Smith is</span></p><p>' + j + "&rdquo;</p><cite>- " + d + ", <em>" + a(g.results[i].created_at) + "</em></cite></li>")
            }
            console.log(g)
        });
        function a(h) {
            var k = new Date();
            var f = new Date(h);
            if ($.browser.msie) {
                f = Date.parse(h.replace(/( \+)/, " UTC$1"))
            }
            var j = k - f;
            var c = 1000, d = c * 60, e = d * 60, g = e * 24, b = g * 7;
            if (isNaN(j) || j < 0) {
                return ""
            }
            if (j < c * 2) {
                return "right now"
            }
            if (j < d) {
                return Math.floor(j / c) + " seconds ago"
            }
            if (j < d * 2) {
                return "1 minute ago"
            }
            if (j < e) {
                return Math.floor(j / d) + " minutes ago"
            }
            if (j < e * 2) {
                return "1 hour ago"
            }
            if (j < g) {
                return Math.floor(j / e) + " hours ago"
            }
            if (j > g && j < g * 2) {
                return "yesterday"
            }
            if (j < g * 365) {
                return Math.floor(j / g) + " days ago"
            } else {
                return "over a year ago"
            }
        }
    }});
var ContactView = Backbone.View.extend({id: "contact",initialize: function() {
        this.render()
    },render: function() {
        $(this.el).html(this.template());
        return this
    }});
var Router = Backbone.Router.extend({routes: {"": "home","work/": "work","work/:project/": "project","about/": "about","process/": "process","feed/": "feed","contact/": "contact"},initialize: function() {
        this.navView = new NavView();
        $("#navigation").html(this.navView.el)
    },home: function() {
        this.homeView = new HomeView();
        $("#content").html(this.homeView.el);
        this.navView.updateNav("home-nav");
        this.navView.setSection("home");
        this.navView.checkScroll()
    },work: function() {
        this.workView = new WorkView();
        $("#content").html(this.workView.el);
        this.navView.updateNav("work-nav");
        this.navView.setSection("work");
        this.navView.checkScroll()
    },project: function(a) {
        if (a === "myedu") {
            this.projectView = new ProjectView({model: project1})
        } else {
            if (a === "umbel") {
                this.projectView = new ProjectView({model: project2})
            } else {
                if (a === "dell-social-innovation-challenge") {
                    this.projectView = new ProjectView({model: project3})
                } else {
                    if (a === "newsreader") {
                        this.projectView = new ProjectView({model: project4})
                    } else {
                        if (a === "google") {
                            this.projectView = new ProjectView({model: project5})
                        } else {
                            if (a === "southwest") {
                                this.projectView = new ProjectView({model: project6})
                            }
                        }
                    }
                }
            }
        }
        $("#content").html(this.projectView.el);
        this.navView.updateNav("work-nav");
        this.navView.setSection("project");
        this.navView.checkScroll()
    },about: function() {
        this.aboutView = new AboutView();
        $("#content").html(this.aboutView.el);
        this.navView.updateNav("about-nav");
        this.navView.setSection("about");
        this.navView.checkScroll()
    },process: function() {
        this.processView = new ProcessView();
        $("#content").html(this.processView.el);
        this.navView.updateNav("process-nav");
        this.navView.setSection("process");
        this.navView.checkScroll()
    },feed: function() {
        this.feedView = new FeedView();
        $("#content").html(this.feedView.el);
        this.navView.updateNav("feed-nav");
        this.navView.setSection("feed");
        this.navView.checkScroll()
    },contact: function() {
        this.contactView = new ContactView();
        $("#content").html(this.contactView.el);
        this.navView.updateNav("contact-nav");
        this.navView.setSection("contact");
        this.navView.checkScroll()
    }});
$(document).ready(function() {
    utils.loadTemplate(["NavView", "HomeView", "WorkView", "ProjectView", "AboutView", "ProcessView", "FeedView", "ContactView"], function() {
        app = new Router();
        Backbone.history.start({pushState: true})
    });
    utils.hideAddressBar()
});
$(window).load(function() {
    utils.preloadGlobalImages()
});
