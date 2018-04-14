let data = [];
let markers = [];

$(document).ready(function(){

    $.getJSON('js/sound.json',function(json) {
      data = json;
      google.maps.event.addDomListener(window, 'load', initialize);
    });
})

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng( data[0].coordinates[0], data[0].coordinates[1]),
    disableDefaultUI: true
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  $("#noisyBtn").click(function() {
    for (var i = 0; i < markers.length; i++) {
      if (markers[i]){
        markers[i].setMap(null);
      }
    }
    for (var i = 0; i < data.length; i++) {
      if (data[i].noise == "noisy") {
        let lat = data[i].coordinates[0];
        let long = data[i].coordinates[1];

          var myLatlng = new google.maps.LatLng(lat ,long);

          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: ''
          });
          markers.push(marker);

        //  console.log(marker)
      }
    }
  });

  $("#calmBtn").click(function() {
    for (var i = 0; i < markers.length; i++) {
      if (markers[i]){
        markers[i].setMap(null);
      }
    }
    for (var i = 0; i < data.length; i++) {
      if (data[i].noise == "calm") {
        let lat = data[i].coordinates[0];
        let long = data[i].coordinates[1];

          var myLatlng = new google.maps.LatLng(lat ,long);

          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: ''
          });
          markers.push(marker);
      }
    }
  });


  let moy1 = 0;
  let moy2 = 0;
  let moy3 = 0;
  let moy4 = 0;

  for (var i = 0; i < data.length; i++) {
    if (data[i].circle == 1) {
      moy1 = moy1 + data[i].laeq15;
    } else if (data[i].circle == 2) {
      moy2 = moy2 + data[i].laeq15;
    } else if (data[i].circle == 3) {
      moy3 = moy3 + data[i].laeq15;
    } else if (data[i].circle = 4) {
      moy4 = moy4 + data[i].laeq15;
    }
  }

  moy1 = moy1/10;
  moy2 = Math.round(moy2/7);
  moy3 = moy3;
  moy4 = moy4/2;

}



$('.list').hide();

$('.navBar').on('click', function() {
  $('.list').slideToggle('slow');
})


// Load google charts
// google.charts.load("current", {packages:["corechart"]});
// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//     ['Decibel', 'Each 15min'],
//     ['DB',     11],
//     ['',      2]
//   ]);

  // var options = {
  //   pieHole: 0.3,
  //   pieSliceText: 'value',
  //
  //   pieSliceTextStyle: {
  //     0: {color: 'black'},
  //     1: {color: 'transparent'}
  //   },
  //   // legend: {
  //   //   0: {position: 'right', textStyle: {color: 'blue'}},
  //   //   1: {position: 'right', textStyle: {color: 'transparent'}}
  //   // },
  //   legend: {
  //         position: 'right',
  //         alignment: 'center'
  //     },
  //     chartArea: {
  //            left: 10,
  //            top: 10,
  //            width: '100%',
  //            height: '65%'
  //        },
  //   slices: {
  //           0: { color: '#00BFFF' },
  //           1: { color: 'transparent' }
  //         },
  //   tooltip: {
  //     text: 'value'
  //   }
  // };

//   var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
//   chart.draw(data, options);
//
//   var data2 = google.visualization.arrayToDataTable([
//     ['Decibel', 'Each 15min'],
//     ['°C',     5],
//     ['',      8]
//   ]);
//
//   var chart2 = new google.visualization.PieChart(document.getElementById('donutchart2'));
//   chart2.draw(data2, options);
// }
