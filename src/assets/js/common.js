$(function () {
    /*-------- Start Navigation menu Scripts --------*/
    $(window).resize(function () {
        if ($(window).width() >= 767) {
            $('.menu-items').removeAttr('style');
            $(".menu ul").removeAttr('style');
        } else {
            $(".main-menu .nav").css("display", "none");
        }
    });

    $('.menu-toggle').on('click', function (e) {
        e.preventDefault();
        $('.menu-toggle').toggleClass('toggle-on');
        $(".menu-active ul.active").removeClass('active').slideUp("slow");
        $('.menu ul.navbar-nav').toggleClass('menu-active').slideToggle("slow");
        $('.menu-layout-2 > ul').toggleClass('menu-active').slideToggle("slow");
    });

    $(".menu li a").on("click", function (e) {
        if ($(window).width() <= 767) {
            if ($(this).parent().has('ul').length > 0) {
                e.preventDefault();
                $(this).parent().children('ul').toggleClass("active").slideToggle("");
                return;
            }
        }
    });
    /*------ End Navigation menu scripts ------------*/

/*Sticky-Menu*/
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $("body").addClass("sticky-header");
    }
    else {
        $("body").removeClass("sticky-header");
    }



    /*Search-Overlay*/
    $("#open_overlay").click(function(){
        $("#myNav_search").width("100%");
    });
    $("#close_overlay").click(function(){
        $("#myNav_search").width("0");
    });

    /*------ Property Section Script ------*/
    $('.property-list').on('click', function (e) {
        e.preventDefault();
        var cls = $(this).attr('data-view');
        if (cls == 'grid-style') {
            $('.active').removeClass('active');
            $(this).addClass("active");
            $('#property-list').removeClass('list-style').addClass(cls);
        } else if (cls == 'list-style') {
            $('.active').removeClass('active');
            $(this).addClass("active");
            $('#property-list').removeClass('grid-style').addClass(cls);
        }
    });

    /*-------------- FAQ Page Script ---------------*/
    $(document).delegate(".toggle .toggle-title", "click", function (e) {
        if ($(this).hasClass("toggle-active")) {
            $(this).removeClass("toggle-active selected");
            $(this).next(".toggle-content").slideUp(400);
        } else {
            $(this).addClass("toggle-active selected");
            $(this).next(".toggle-content").addClass("selected").slideDown(400);
        }
        return false;
    });
    /*---------- Home Layout 3 Advance search navigation ------------*/
    $(".pro-search-advanced-toggle").click(function () {
        $(".pro-search-advanced-toggle").toggleClass("open");
        $(".pro-search-field-min, .pro-search-field-max, .pro-search-field-orderby, .pro-search-field-order, .pro-search-field-checkbox").fadeToggle("slow");
        $(".pro-search-advanced").slideToggle("slow");
    });
    $(".pro-search-reset").click(function () {
        $(".pro-search-reset").fadeToggle("slow");

    });

    $(".recently-property-description").mouseenter(function () {
        $(this).toggleClass("hovered");
    });

    $(".recently-property-description").mouseleave(function () {
        $(this).toggleClass("hovered");
    });

    /*-------------- Initial Fancy Box ------------*/
    if (jQuery.fn.fancybox) {
        $('.fancybox').fancybox();
    }

    /*------------Initial Owl Carousel ------------*/
    if (jQuery.fn.owlCarousel) {
        var sync1 = $("#property-detail-img");
        var sync2 = $("#property-thumbs-img");
        sync1.owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            navigation: false,
            pagination: false,
            afterAction: syncPosition,
            responsiveRefreshRate: 200
        });
        sync2.owlCarousel({
            items: 5,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 3],
            itemsMobile: [479, 3],
            responsiveRefreshRate: 100,
            afterInit: function (el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
    }
    function syncPosition(el) {
        var current = this.currentItem,
            $property_img = $("#property-thumbs-img");
        $property_img
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced");
        if ($property_img.data("owlCarousel") !== undefined) {
            center(current)
        }
    }
    /*------- jQuery Validator Script -------*/
    if (jQuery.fn.validate) {

        $('.footer-newsletter').validate({
           rules: {
               news_letter_email: {
                   required: true,
                   email: true
               }
           },
            message: {
                news_letter_email: "Please enter a valid email address"
            },
            submitHandler: function (form) {
                $("#submit").on('click', function (e) {
                    e.preventDefault();
                });
            }
        });
        $("#contact_form").validate({
            rules: {
                name: "required",
                message: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Please enter your name",
                email: "Please enter a valid email address",
                message: "Please enter a message"
            },
            submitHandler: function (form) {
                $("#submit").on('click', function (e) {
                    e.preventDefault();
                    $.ajax({
                        url: "send_mail.php",
                        data: $('#contact_form input, #contact_form textarea'),
                        type: "post",
                        dataType: 'text',
                        complete: function (data) {
                            $(':input', '#contact_form').not(':submit').val('');
                            $('.message-contact').html('Message sent successfully!');
                        }
                    });
                });
            }
        });
        $("#property-agent-form").validate({
            rules: {
                name: "required",
                message: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Please enter your name",
                email: "Please enter a valid email address",
                message: "Please enter a message"
            },
            submitHandler: function (form) {
                $("#submit").on('click', function (e) {
                    e.preventDefault();
                    $.ajax({
                        url: "send_mail.php",
                        data: $('#contact_form input, #contact_form textarea'),
                        type: "post",
                        dataType: 'text',
                        complete: function (data) {
                            $(':input', '#contact_form').not(':submit').val('');
                            $('.message-contact').html('Message sent successfully!');
                        }
                    });
                });
            }
        });
    }

    $("#property-thumbs-img").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo", number);
    });
});
/*Sticky Menu*/
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $("body").addClass("sticky-header");
    }
    else {
        $("body").removeClass("sticky-header");
    }
});
function center(number) {
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for (var i in sync2visible) {
        if (num === sync2visible[i]) {
            found = true;
        }
    }
    if (found === false) {
        if (num > sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", num - sync2visible.length + 2)
        } else {
            if (num - 1 === -1) {
                num = 0;
            }
            sync2.trigger("owl.goTo", num);
        }
    } else if (num === sync2visible[sync2visible.length - 1]) {
        sync2.trigger("owl.goTo", sync2visible[1])
    } else if (num === sync2visible[0]) {
        sync2.trigger("owl.goTo", num - 1)
    }
}
function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) {
        return false;
    }
    return true;
}
function initMap() {
    var myLatLng = {lat: 37.869260, lng: -122.254811};

    var map = new google.maps.Map(document.getElementById('contact-map'), {
        mapTypeId: 'roadmap',
        zoom: 15,
        center: myLatLng
    });
    map.setOptions({'scrollwheel': false});
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
function initialize() {
    new google.maps.StreetViewPanorama(
        document.getElementById('street-view'),
        {
            position: {lat: 37.869260, lng: -122.254811},
            pov: {heading: 165, pitch: 0},
            zoom: 1
        });

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
        parking: {
            icon: iconBase + 'parking_lot_maps.png'
        },
        library: {
            icon: iconBase + 'library_maps.png'
        },
        info: {
            icon: iconBase + 'info-i_maps.png'
        }
    };

    function addMarker(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
    }

}

