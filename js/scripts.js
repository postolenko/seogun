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

function getIconsPostion() {
  $(".big_chart_icons img").each(function() {
      iconIndex = $(this).index();
      icon = $(this);
      iconWidth = $(this).width() / 2;
      $("#big_chart svg .ct-labels foreignObject").each(function() {
        foreignObjectIndex = $(this).index();
        foreignObjectWidth = $(this).width() / 2;
        if(iconIndex == foreignObjectIndex) {
          offsetTop = $(this).offset().top + 15;
          offsetleft = $(this).offset().left + foreignObjectWidth - iconWidth;
          icon.offset({"left" : offsetleft, "top" : offsetTop});
        }
      });
    });
}

function getBarsWidth() {
  ctHorizontalLeftCoord1 = $("#chart_9 .ct-grid.ct-horizontal:eq(2)").offset().left;
  ctHorizontalLeftCoord2 = $("#chart_9 .ct-grid.ct-horizontal:eq(1)").offset().left;
  barWidth = parseInt( ctHorizontalLeftCoord1 - ctHorizontalLeftCoord2 - 1 );

}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


var barWidth;

$(window).load(function() {



});

$(window).resize(function() {

  getIconsPostion();
  getBarsWidth();
  $("#chart_9 .ct-bar").attr('style', 'stroke-width: '+barWidth+'px !important');

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
    });

    $(".pass_front").on("keyup", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".input_wrapp");
      passBack = parentBlock.find(".pass_back");
      passBack.val($(this).val());
    });

    // ------------

    if($("#chart_2").length> 0) {
      new Chartist.Line('#chart_2', {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
          ]
        }, {
          low: 0,
          showArea: true,
          height: '55px',
          showLine: true,
          showPoint: false,
          fullWidth: true,
          showLabel: false,
          axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
          },
          axisY: {
            showGrid: false,
            showLabel: false,
            offset: 0
          }
        });
      }

    if($("#chart_3").length> 0) {
      new Chartist.Line('#chart_3', {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
          ]
        }, {
          low: 0,
          showArea: true,
          height: '55px',
          showLine: true,
          showPoint: false,
          fullWidth: true,
          showLabel: false,
          axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
          },
          axisY: {
            showGrid: false,
            showLabel: false,
            offset: 0
          }
        });
      }

    if($("#chart_4").length> 0) {
      new Chartist.Line('#chart_4', {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
          ]
        }, {
          low: 0,
          showArea: true,
          height: '55px',
          showLine: true,
          showPoint: false,
          fullWidth: true,
          showLabel: false,
          axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
          },
          axisY: {
            showGrid: false,
            showLabel: false,
            offset: 0
          }
        });
      }

      window.addEventListener('DOMContentLoaded', () => {
        const circle = new CircularProgressBar('pie');
      });

      if($("#chart_5").length> 0) {
        new Chartist.Line('#chart_5', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
              [5, 9, 7, 8, 5, 3, 5, 4]
            ]
          }, {
            low: 0,
            showArea: false,
            height: '35px',
            showLine: true,
            // showPoint: false,
            fullWidth: true,
            showLabel: false,
            axisX: {
              showGrid: false,
              showLabel: false,
              offset: 0
            },
            axisY: {
              showGrid: false,
              showLabel: false,
              offset: 0
            }
          });
      }

      if($("#chart_6").length> 0) {
        new Chartist.Line('#chart_6', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
              [5, 9, 7, 8, 5, 3, 5, 4]
            ]
          }, {
            low: 0,
            showArea: false,
            height: '35px',
            showLine: true,
            // showPoint: false,
            fullWidth: true,
            showLabel: false,
            axisX: {
              showGrid: false,
              showLabel: false,
              offset: 0
            },
            axisY: {
              showGrid: false,
              showLabel: false,
              offset: 0
            }
          });
      }

      if($("#chart_7").length> 0) {
        new Chartist.Line('#chart_7', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
              [5, 9, 7, 8, 5, 3, 5, 4]
            ]
          }, {
            low: 0,
            showArea: false,
            height: '35px',
            showLine: true,
            // showPoint: false,
            fullWidth: true,
            showLabel: false,
            axisX: {
              showGrid: false,
              showLabel: false,
              offset: 0
            },
            axisY: {
              showGrid: false,
              showLabel: false,
              offset: 0
            }
          });
      }

      if($("#chart_8").length> 0) {
        new Chartist.Line('#chart_8', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
              [5, 9, 7, 8, 5, 3, 5, 4]
            ]
          }, {
            low: 0,
            showArea: false,
            height: '35px',
            showLine: true,
            // showPoint: false,
            fullWidth: true,
            showLabel: false,
            axisX: {
              showGrid: false,
              showLabel: false,
              offset: 0
            },
            axisY: {
              showGrid: false,
              showLabel: false,
              offset: 0
            }
          });
      }

      // --------------

      if($("#pie_chart")) {
        new Chartist.Pie('#pie_chart', {
          series: [20, 10]
        }, {
          donut: true,
          donutWidth: 2,
          startAngle: 270,
          total: 60,
          showLabel: false
        });
      }

      // --------------

      if($("#chart_9").length > 0) {
        new Chartist.Bar('#chart_9', {
          labels: [0, 2, 4, 6, 8, 10],
          series: [
            [0, 0, 2, 2, 10, 0, 0],
            [6, 6, 6, 6, 6, 6, 6],
            [3, 3, 3, 3, 3, 3, 3]
            ]
          }, {
            fullWidth: true,
            chartPadding: {
              right: 0,
              left: 0
            },
            // showLine: false,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return "Sep " + value;
              }
            },
            height: '250px',
            stackBars: true,
        }).on('created', function(data) {
          getBarsWidth();
          $("#chart_9 .ct-bar").attr('style', 'stroke-width: '+barWidth+'px !important');
        });
      }

      // ------------

      if($("#big_chart").length > 0) {

        new Chartist.Bar('#big_chart', {
          labels: ['icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon6', 'icon7', 'icon8', 'icon9', 'icon10', 'icon11', 'icon12', 'icon13', 'icon14', 'icon15', 'icon16'],
          series: [
            [1, 10, 2, 4, 1, 10, 2, 4, 1, 10, 2, 4, 1, 10, 2, 4],
            [0, 8, 4, 3, 9, 3, 5, 1, 10, 1, 4, 5, 2, 3, 5, 7],
            [10, 3, 4, 6, 3, 7, 8, 9, 10, 4, 5, 6, 3, 5, 6, 10],
          ]
        }, {
          stackBars: true,
          height: '210px'
        }).on('draw', function(data) {
          if(data.type === 'bar') {
            data.element.attr({
              style: 'stroke-width: 40px'
            });
          }
        }).on('created', function() {
          getIconsPostion();
        });
      }

});