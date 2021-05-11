function getPrice(parentBlock) {
  payTable = parentBlock.find(".table");
  tableRow = payTable.find(".table_row");  
  price = 0;
  tableRow.each(function() {
    filterCheckbox = $(this).find(".ch_childrens input");
    if(filterCheckbox.is(":checked")) {
      radio = $(this).find(".radio input");
      radio.each(function() {
        if( $(this).is(":checked") ) {
          radioVal = parseInt($(this).val());
          console.log(radioVal);
          price += radioVal;
        }
      });
    } else {
      console.log(0);
    }
  });
  parentBlock.find(".priceVal").text(price);
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".portfolio_slider").length > 0 ) {
        $(".portfolio_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 1,
            // fade: true,
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 540,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }

    $(".dropdown_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dropdown_box");
      parent.toggleClass("active");
    });

    $(".val").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dropdown_box");
      activeVal = parent.find(".active_val");
      parent.find(".hide_val").val($(this).html());
      activeVal.html($(this).html());
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".dropdown_box").removeClass("active");
      }
    });

    $(document).on("mouseup", function(e) {
        e.preventDefault();
        hide_element = $(".dropdown_box");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0
            && hide_element.hasClass("active")) {
          hide_element.removeClass("active")
        }
    });

    // -----------

    if($(".chart_1").length > 0) {
      new Chartist.Line('.chart_1', {
        labels: [4, 5, 6, 7, 8],
        series: [
          [0, 1, 0, 1, 0]
          ]
        }, {
          fullWidth: true,
          chartPadding: {
            right: 40,
            left: -15
          },
          // showLine: false,
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return value + " sep";
            }
          },
          height: '80px'
      });
    }

    // ------------

    $(".ch_childrens input").on("change", function() {
      parentBlock = $(this).closest(".checkboxes_array");
      chChildrens = parentBlock.find(".ch_childrens input");
      mainCheckbox = parentBlock.find(".main_checkbox input");
      chChildrens.each(function() {
        if (!$(this).is(":checked")) {
          mainCheckbox.prop("checked", false);
          return false;
        } else {
          mainCheckbox.prop("checked", true);
        }
      });
      getPrice(parentBlock);
    });

    $(".main_checkbox input").on("change", function() {
      parentBlock = $(this).closest(".checkboxes_array");
      chChildrens = parentBlock.find(".ch_childrens input");
      if (!$(this).is(":checked")) {
        chChildrens.prop("checked", false);
      } else {
        chChildrens.prop("checked", true);
      }
    });

    // ------------

    $('.info_table').on('mouseover', '.cell', function() {
      index = $(this).index();
      parentTable = $(this).closest(".info_table");
      tableRow = parentTable.find(".table_row");
      tableRow.find(".cell").removeClass("bg");
      tableRow.find(".cell:eq("+index+")").addClass("bg");
    });

    $('.info_table').on('mouseleave', '.cell', function() {
      parentTable.find(".cell").removeClass("bg");
    });

    // ------------

    $(".show_pass").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".input_wrapp");
      parentBlock.toggleClass("show_password");
    });

    $(".pass_back").on("keyup", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".input_wrapp");
      passFront = parentBlock.find(".pass_front");
      passFront.val($(this).val());
      console.log(passFront.val());
    });

    $(".pass_front").on("keyup", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".input_wrapp");
      passBack = parentBlock.find(".pass_back");
      passBack.val($(this).val());
      console.log(passBack.val());
    });

});