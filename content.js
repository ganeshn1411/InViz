$(document).ready(function(){
var tData;

var btn= $('<button>', {"class": "button toggle"});
btn.text('Insights');

$('table.wikitable').before(btn);

var chart_div = $("<div>", {id: "chart_div", "class": "container-fluid chart showMe"});
$(btn).after(chart_div);

$(btn).click(function(){
    $('.showMe').slideToggle('slow');   
});

var row = $("<div>", {"class": "row"});
var row2 = $("<div>", {"class": "row row2"});
var row3 = $("<div>", {"class": "row row3"});
var row4 = $("<div>", {"class": "row row4"});

var chart1 = $("<div>", {id: "chart1_div", "class": "col-sm chart1"});
var chart2 = $("<div>", {id: "chart2_div", "class": "col-sm chart2"});
var map = $('<iframe title="Death toll by location" aria-label="USA states choropleth map" src="//datawrapper.dwcdn.net/RcERF/3/" scrolling="no" frameborder="0" style="border: none; background: #FFFFFF" width="400" height="390"></iframe>');

var chart3 = $("<div>", {id: "chart3_div", "class": "col-sm chart3"}).append(map);

var chart4 = $("<div>");

$(row).append(chart1).append(chart2).append(chart3);

var p = $('<div><p>').text("Topics discussed in this page  :");
var p0 = $('<div><p>').text(":  Science,   Weather,   Meteorological Disaster,   Hurricane,   Tornado").css('font-weight', 'bold');;

var p1 = $('<div><p>').text("Feedback question- Please check the topics you feel are related to this page : ");
var p4 = $('<div><button style="margin-left: 25px;margin-right: 15px;" type="button" class="btn btn-outline-primary btn-sm">Agriculture</button><button type="button" style="margin-right: 15px;" class="btn btn-outline-primary btn-sm">Ecology</button></div><button type="button" class="btn btn-outline-primary btn-sm">News</button></div>');


$(row2).append(p).append(p0);
$(row3).append(p1);
$(row4).append(p4);

$(row2).append(row3);
$(row3).append(row4);


$(chart_div).append(row).append(row2).append(row3);

// $.ajaxSetup({
//    headers:{
//     'Access-Control-Allow-Credentials' : true,
//     'Access-Control-Allow-Origin':'*',
//     'Access-Control-Allow-Methods':'GET',
//     'Access-Control-Allow-Headers':'application/json'
//    }
// });

// var jqxhr = $.get( "https://the-matrix.mybluemix.net/wiki", function() {
//   console.log( "success" );
// })
//   .done(function(data) {
//     console.log(tData);

//   })
//   .fail(function() {
//     console.log( "error" );
//   })
//   .always(function() {
//     console.log( "finished" );
//   });

  var table = $('.wikitable').tableToJSON();
  console.log(table);
  tData = JSON.stringify(table);

  // chart_div.append(chart1);

  Highcharts.chart('chart1_div', {
   chart: {
        // shadow: {
        //     color: 'rgba(0, 0, 0, 0.07)',
        //     offsetX: 1,
        //     offsetY: 1,
        //     opacity: '0.05',
        //     width: 10
        // }
    },
    title: {
        text: 'Natural Disaster death toll from 1816-2018'
    },

    // subtitle: {
    //     text: 'Source: thesolarfoundation.com'
    // },

    yAxis: {
        title: {
            text: 'Death toll'
        }
    },
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'middle'
    // },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1816
        }
    },

    series: [{
        showInLegend: false, 
        // name: 'Installation',
        data: [
[1816,0],
[1862,0],
[1871,0],
[1888,400],
[1889,2209],
[1893,2000],
[1894,418],
[1896,0],
[1900,0],
[1906,0],
[1910,96],
[1913,1289],
[1918,453],
[1919,600],
[1925,0],
[1926,16],
[1927,246],
[1928,3000],
[1935,423],
[1936,69],
[1937,385],
[1938,715],
[1940,154],
[1946,165],
[1950,353],
[1951,28],
[1953,114],
[1957,10],
[1960,61],
[1964,115],
[1965,271],
[1969,256],
[1970,26],
[1971,65],
[1972,238],
[1974,315],
[1976,145],
[1977,23],
[1980,1757],
[1988,2],
[1989,118],
[1990,29],
[1991,25],
[1992,26],
[1993,50],
[1994,57],
[1995,745],
[1996,8],
[1997,0],
[1998,30],
[1999,319],
[2002,41],
[2004,59],
[2005,2105],
[2006,19],
[2007,14],
[2008,59],
[2009,31],
[2010,20],
[2011,526],
[2012,153],
[2013,50],
[2014,121],
[2015,94],
[2016,154],
[2017,5981],
[2018,88]
        ]

    }],

    // responsive: {
    //     rules: [{
    //         condition: {
    //             maxWidth: 300,
    //             maxHeight: 350
    //         },
    //         chartOptions: {
    //             legend: {
    //                 layout: 'horizontal',
    //                 align: 'left',
    //                 verticalAlign: 'bottom'
    //             }
    //         }
    //     }]
    // }

});


Highcharts.chart('chart2_div', {
 chart: {
                renderTo: 'container',
                type: 'pie'
            },
            title: {
                text: 'Frequency of Disaster types'
            },
            yAxis: {
                // title: {
                //     text: 'Total percent market share'
                // }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            series: [{
                name: 'Browsers',
                data: [
				["Flood ",23],
				["Hurricane ",21],
				["Tornado ",16],
				["Wildfire ",11],
				["Blizzard ",9],
				["Earthquake ",4],
				["Heat wave ",4],
				["Tsunami ",4],
				["Cold wave ",2],
                ["Avalanche ",1],
				["Snow storm ",2],
				["Drought",1],
				["Famine ",1],
				["Landslide ",1],
				["Mudflow ",1],
				["Storm",1],
				["Volcano ",1],
                ],
                size: '60%',
                innerSize: '40%',
                showInLegend:false,
                dataLabels: {
                    enabled: true
                }
            }]


});






// Highcharts.chart('chart3_div', {
//    chart: {
//         shadow: {
//             color: 'rgba(0, 0, 0, 0.07)',
//             offsetX: 1,
//             offsetY: 1,
//             opacity: '0.05',
//             width: 10
//         }
//     },
//     title: {
//         text: 'Natural Disaster death toll from 1816-2018'
//     },

//     // subtitle: {
//     //     text: 'Source: thesolarfoundation.com'
//     // },

//     yAxis: {
//         title: {
//             text: 'Death toll'
//         }
//     },
//     // legend: {
//     //     layout: 'vertical',
//     //     align: 'right',
//     //     verticalAlign: 'middle'
//     // },

//     plotOptions: {
//         series: {
//             label: {
//                 connectorAllowed: false
//             },
//             pointStart: 1816
//         }
//     },

//     series: [{
//         showInLegend: false, 
//         // name: 'Installation',
//         data: [
// [1816,0],
// [1862,0],
// [1871,0],
// [1888,400],
// [1889,2209],
// [1893,2000],
// [1894,418],
// [1896,0],
// [1900,0],
// [1906,0],
// [1910,96],
// [1913,1289],
// [1918,453],
// [1919,600],
// [1925,0],
// [1926,16],
// [1927,246],
// [1928,3000],
// [1935,423],
// [1936,69],
// [1937,385],
// [1938,715],
// [1940,154],
// [1946,165],
// [1950,353],
// [1951,28],
// [1953,114],
// [1957,10],
// [1960,61],
// [1964,115],
// [1965,271],
// [1969,256],
// [1970,26],
// [1971,65],
// [1972,238],
// [1974,315],
// [1976,145],
// [1977,23],
// [1980,1757],
// [1988,2],
// [1989,118],
// [1990,29],
// [1991,25],
// [1992,26],
// [1993,50],
// [1994,57],
// [1995,745],
// [1996,8],
// [1997,0],
// [1998,30],
// [1999,319],
// [2002,41],
// [2004,59],
// [2005,2105],
// [2006,19],
// [2007,14],
// [2008,59],
// [2009,31],
// [2010,20],
// [2011,526],
// [2012,153],
// [2013,50],
// [2014,121],
// [2015,94],
// [2016,154],
// [2017,5981],
// [2018,88]
//         ]

//     }],

//     // responsive: {
//     //     rules: [{
//     //         condition: {
//     //             maxWidth: 300,
//     //             maxHeight: 350
//     //         },
//     //         chartOptions: {
//     //             legend: {
//     //                 layout: 'horizontal',
//     //                 align: 'left',
//     //                 verticalAlign: 'bottom'
//     //             }
//     //         }
//     //     }]
//     // }

// });

// chart_div.append(chart1);

//  $('.chart').slick({
//   });

});