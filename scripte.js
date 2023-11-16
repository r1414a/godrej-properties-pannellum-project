var distance_view = document.getElementById("sceneSelect");
const panorama = document.getElementById('panorama');
//console.log(panorama);


let setImage = "/images/130m.JPG";
let pano;

// 0  1  2  3  4   5  6  7  8  
// 1  2  3  4  5   6  7  8  9  1 2 3 4
// ms wh hh am sm asi og a gb kn k h vn


let pitch1 = -16;
let yaw1 = -175;
let pitch2 = -5;
let yaw2 = -143;
let pitch3 = -2;
let yaw3 = -118;
let pitch4 = -2;
let yaw4 = 30;
let pitch5 = -2;
let yaw5 = 35;
let pitch6 = -6;
let yaw6 = 167;
let pitch7 = -3;
let yaw7 = -160;
let pitch8 = 0;
let yaw8 = -77;
let pitch9 = -3;
let yaw9 = -155;
let pt1 = 2;
let yt1 = -135;
let pt2 = -1;
let yt2 = -35;
let pt3 = -8;
let yt3 = 20;
let pt4 = -2;
let yt4 = -110;
let pt5 = -25;
let yt5 = -125;
let pt6 = -58;
let yt6 = 50;
let pt7 = -46;
let yt7 = -70;



distance_view.addEventListener("change", LoadScene);

function LoadScene(setImage, pitch1, yaw1, pitch2, yaw2, pitch3, yaw3, pitch4, yaw4, pitch5, yaw5, pitch6, yaw6, pitch7, yaw7, pitch8, yaw8, pitch9, yaw9, pt1, yt1, pt2, yt2, pt3, yt3, pt4, yt4, pt5, yt5, pt6, yt6, pt7, yt7) {
  if (distance_view.value === 'scene_130') {
    document.body.classList.remove('vanilla-preloader');
    setImage = "/images/130m.JPG";
    pitch1 = -16;
    yaw1 = -170;
    pitch2 = -5;
    yaw2 = -143;
    pitch3 = -2;
    yaw3 = -118;
    pitch4 = -2;
    yaw4 = 30;
    pitch5 = -2;
    yaw5 = 35;
    pitch6 = -6;
    yaw6 = 167;
    pitch7 = -3;
    yaw7 = 160;
    pitch8 = 0;
    yaw8 = -77;
    pitch9 = -3;
    yaw9 = -155;
    pt1 = 0;
    yt1 = -135;
    pt2 = -3;
    yt2 = -35;
    pt3 = -8;
    yt3 = 20;
    pt4 = -5;
    yt4 = -110;
    pt5 = -25;
    yt5 = -125;
    pt6 = -58;
    yt6 = 50;
    pt7 = -46;
    yt7 = -70;
  } else if (distance_view.value === 'scene_40') {
    document.body.classList.remove('vanilla-preloader');
    setImage = "/images/40m.JPG";
    pitch1 = -3;
    yaw1 = -173;
    pitch2 = 0;
    yaw2 = -142;
    pitch3 = 4;
    yaw3 = -104;
    pitch4 = 1;
    yaw4 = 30;
    pitch5 = 1;
    yaw5 = 35;
    pitch6 = -1;
    yaw6 = 163;
    pitch7 = 1;
    yaw7 = -160;
    pitch8 = 0;
    yaw8 = -77;
    pitch9 = 1;
    yaw9 = -155;
    pt1 = 2;
    yt1 = -135;
    pt2 = 2;
    yt2 = -35;
    pt3 = -5;
    yt3 = 20;
    pt4 = 4;
    yt4 = -100;
    pt5 = -10;
    yt5 = -115;
    pt6 = -28;
    yt6 = 60;
    pt7 = -18;
    yt7 = -70;
  } else if (distance_view.value === 'scene_100') {
    document.body.classList.remove('vanilla-preloader');
    setImage = "/images/100m.JPG";
    pitch1 = -13;
    yaw1 = -170;
    pitch2 = -3;
    yaw2 = -143;
    pitch3 = 0;
    yaw3 = -118;
    pitch4 = -1;
    yaw4 = 30;
    pitch5 = -1;
    yaw5 = 35;
    pitch6 = -5;
    yaw6 = 165;
    pitch7 = -1;
    yaw7 = -160;
    pitch8 = 0;
    yaw8 = -77;
    pitch9 = -1;
    yaw9 = -155;
    pt1 = 0;
    yt1 = -130;
    pt2 = -1;
    yt2 = -35;
    pt3 = -8;
    yt3 = 20;
    pt4 = -2;
    yt4 = -100;
    pt5 = -20;
    yt5 = -125;
    pt6 = -51;
    yt6 = 50;
    pt7 = -40;
    yt7 = -70;
  } else if (distance_view.value === 'scene_70') {
    document.body.classList.remove('vanilla-preloader');
    setImage = "/images/70m.JPG";
    pitch1 = -6;
    yaw1 = -170;
    pitch2 = -2;
    yaw2 = -143;
    pitch3 = 3;
    yaw3 = -118;
    pitch4 = 0;
    yaw4 = 20;
    pitch5 = 0;
    yaw5 = 25;
    pitch6 = -2;
    yaw6 = 165;
    pitch7 = 1;
    yaw7 = -160;
    pitch8 = 1;
    yaw8 = -77;
    pitch9 = 1;
    yaw9 = -155;
    pt1 = 1;
    yt1 = -135;
    pt2 = 0;
    yt2 = -35;
    pt3 = -5;
    yt3 = 15;
    pt4 = 2;
    yt4 = -102;
    pt5 = -12;
    yt5 = -125;
    pt6 = -37;
    yt6 = 50;
    pt7 = -28;
    yt7 = -70;
  }
  panorama.innerHTML = " ";
  showPannellum(setImage, pitch1, yaw1, pitch2, yaw2, pitch3, yaw3, pitch4, yaw4, pitch5, yaw5, pitch6, yaw6, pitch7, yaw7, pitch8, yaw8, pitch9, yaw9, pt1, yt1, pt2, yt2, pt3, yt3, pt4, yt4, pt5, yt5, pt6, yt6, pt7, yt7);
}

//pnlm-preview-img

showPannellum(setImage, pitch1, yaw1, pitch2, yaw2, pitch3, yaw3, pitch4, yaw4, pitch5, yaw5, pitch6, yaw6, pitch7, yaw7, pitch8, yaw8, pitch9, yaw9, pt1, yt1, pt2, yt2, pt3, yt3, pt4, yt4, pt5, yt5, pt6, yt6, pt7, yt7);

function showPannellum(image, pitch1, yaw1, pitch2, yaw2, pitch3, yaw3, pitch4, yaw4, pitch5, yaw5, pitch6, yaw6, pitch7, yaw7, pitch8, yaw8, pitch9, yaw9, pt1, yt1, pt2, yt2, pt3, yt3, pt4, yt4, pt5, yt5, pt6, yt6, pt7, yt7) {
  pano = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": image,
    "preview": "./preview.jpg",
    "northOffset": 75,
    "autoLoad": true,
    "pitch": -25,
    "yaw": -75,
    "compass": true,
    "multiResMinHfov": true,
    "hfov": 120,
    //"hotSpotDebug": true,
    "hotSpots": [
      {
        "pitch": pitch1,
        "yaw": yaw1,
        "createTooltipFunc": hotspot3,
        "cssClass": "spot2",
        "type": "info",
        "createTooltipArgs": "Marriott Suites",
        // "createTooltipArgs": "",
      },
      {
        "pitch": pitch2,
        "yaw": yaw2,
        "createTooltipFunc": hotspot3,
        "cssClass": "spot2",
        "type": "info",
        "createTooltipArgs": "Westin Hotel",
        // "createTooltipArgs": "",
      },
      {
        "pitch": pitch3,
        "yaw": yaw3,
        "createTooltipFunc": hotspot3,
        "cssClass": "location",
        "type": "info",
        // "createTooltipArgs": "",
        "createTooltipArgs": "Hyatt Hotel",
      },
      {
        "pitch": pitch4,
        "yaw": yaw4,
        "createTooltipFunc": hotspot3,
        "cssClass": "spot2",
        "type": "info",
        // "createTooltipArgs": "",
        "createTooltipArgs": "Amanora Mall",
      },
      {
        "pitch": pitch5,
        "yaw": yaw5,
        "createTooltipFunc": hotspot3,
        "cssClass": "spot2",
        "type": "info",
        // "createTooltipArgs": "",
        "createTooltipArgs": "Seasons Mall",
      },
      {
        "pitch": pitch6,
        "yaw": yaw6,
        "createTooltipFunc": hotspot3,
        "cssClass": "location",
        "type": "info",
        // "createTooltipArgs": "",
        "createTooltipArgs": "Army Sports Institute",
      },
      {
        "pitch": pitch7,
        "yaw": yaw7,
        "createTooltipFunc": hotspot3,
        "cssClass": "spot2",
        "type": "info",
        // "createTooltipArgs": "",
        "createTooltipArgs": "Osho Garden",
      },
      {
        "pitch": pitch8,
        "yaw": yaw8,
        "createTooltipFunc": hotspot,
        "cssClass": "custom-hotspot",
        "type": "info",
        // "createTooltipArgs": "",
        "createTooltipArgs": "Airport",
      },
      {
        "pitch": pitch9,
        "yaw": yaw9,
        "createTooltipFunc": hotspot3,
        "cssClass": "spot2",
        "type": "info",
        // "createTooltipArgs": "",
        "createTooltipArgs": "German Bakery",
      },
      {
        "pitch": pt1,
        "yaw": yt1,
        "cssClass": "custom-hotspot-roadname",
        "createTooltipFunc": hotspot,
        "createTooltipArgs": "Kalyani Nagar"
      },
      {
        "pitch": pt2,
        "yaw": yt2,
        "cssClass": "custom-hotspot",
        "createTooltipFunc": hotspot,
        "createTooltipArgs": "Kharadi"
      },
      {
        "pitch": pt3,
        "yaw": yt3,
        "cssClass": "custom-hotspot-roadname",
        "createTooltipFunc": hotspot,
        "createTooltipArgs": "Hadapsar"
      },
      {
        "pitch": pt4,
        "yaw": yt4,
        "cssClass": "custom-hotspot-roadname",
        "createTooltipFunc": hotspot,
        "createTooltipArgs": "Viman Nagar"
      },
    ],

  });


  pano.on('load', function () {
    console.log('panorama loaded');
    setTimeout(function () {
      document.body.classList.add('vanilla-preloader');
    }, 910);
    text = document.getElementsByClassName('hotspot_text');
    // console.log(text);
    var kalyani_nagar = document.getElementsByClassName('custom-hotspot-roadname')[0].querySelector('span');
    var hadapsar = document.getElementsByClassName('custom-hotspot-roadname')[1].querySelector('span');
    var viman_nagar = document.getElementsByClassName('custom-hotspot-roadname')[2].querySelector('span');
    var location_pointer1 = document.getElementsByClassName('location')[0];
    var location_pointer2 = document.getElementsByClassName('location')[1];
    var hyatt_hotel = document.getElementsByClassName('location')[0].querySelector('span');
    var army_sports_institute = document.getElementsByClassName('location')[1].querySelector('span');

    if (distance_view.value === 'scene_40') {
      kalyani_nagar.style.visibility = "hidden";
      hadapsar.style.visibility = "hidden";
      viman_nagar.style.visibility = "hidden";
      hyatt_hotel.style.visibility = "hidden";
      army_sports_institute.style.visibility = "hidden";
      location_pointer1.style.display = "none";
      location_pointer2.style.display = "none";
    } else if (distance_view.value === 'scene_70') {
      kalyani_nagar.style.visibility = "hidden";
      hyatt_hotel.style.visibility = "hidden";
      location_pointer1.style.display = "none";
    }

    // console.log(text[3]);
    // text[0].style.width = "195px";
    // text[0].style.opacity = "1";
    // text[0].style.height = "95px";

    // text[1].style.height = "165px";
    // text[1].style.width = "165px";
    // text[1].style.opacity = "1";

    text[2].style.width = "182px";
    text[2].style.opacity = "1";
    text[2].style.height = "133px";

    // text[3].style.width = "200px";
    // text[3].style.opacity = "1";
    // text[3].style.height = "150px";

    // text[4].style.width = "200px";
    // text[4].style.opacity = "1";
    // text[4].style.height = "150px";

    // text[5].style.width = "340px";
    // text[5].style.opacity = "1";
    // text[5].style.height = "155px";

    // text[6].style.width = "238px";
    // text[6].style.opacity = "1";
    // text[6].style.height = "133px";

    // text[8].style.width = "220px";
    // text[8].style.opacity = "1";
    // text[8].style.height = "160px";
  })


  // 0 1  2  3  4   5  6  7  8  
  //ms wh hh am sm asi og a  gb 
  panorama.addEventListener("click", (event) => {

    X_cord = Math.round(pano.getYaw());
    // console.log("Y_cord: " + Y_cord);
    console.log("X_cord: " + X_cord);
    if (X_cord > -45 && X_cord < -20) {
      //hide hh
      text[2].style.height = "0";
      text[2].style.transition = "all 1s ease";
      //hide am
      text[3].style.height = "0";
      text[3].style.transition = "all 1s ease";
      //hide sm
      text[4].style.height = "0";
      text[4].style.transition = "all 1s ease";
    } else if (X_cord > -20 && X_cord < 90) {
      //am visible
      text[3].style.width = "200px";
      text[3].style.opacity = "1";
      text[3].style.height = "150px";
      text[3].style.transition = "height 1s ease";
      //sm visible
      text[4].style.width = "200px";
      text[4].style.opacity = "1";
      text[4].style.height = "150px";
      text[4].style.transition = "height 1s ease";
    } else if (X_cord > 90 && X_cord < 120) {
      //hide am
      text[3].style.height = "0";
      text[3].style.transition = "all 1s ease";
      //hide sm
      text[4].style.height = "0";
      text[4].style.transition = "all 1s ease";

      //hide asi
      text[5].style.opacity = "0";
      text[5].style.transition = "all 1s ease";
      //hide ms
      text[0].style.height = "0";
      text[0].style.transition = "all 1s ease";
    } else if (X_cord > 120 && X_cord < 160) {

      //asi visible
      text[5].style.width = "257px";
      text[5].style.opacity = "1";
      text[5].style.height = "167px";
      text[5].style.transition = " opacity 1s ease";

      //ms visible
      text[0].style.width = "160px";
      text[0].style.opacity = "1";
      text[0].style.height = "102px";
      text[0].style.transition = "height 1s ease";

      //hide og
      text[6].style.height = "0";
      text[6].style.transition = "all 1s ease";
      //hide gb
      text[7].style.height = "0";
      text[7].style.transition = "all 1s ease";
      //hide wh
      text[1].style.height = "0";
      text[1].style.transition = "all 1s ease";
    } else if (X_cord > 160 && X_cord < 180) {

      //asi visible
      text[5].style.width = "257px";
      text[5].style.opacity = "1";
      text[5].style.height = "167px";
      text[5].style.transition = " opacity 1s ease";

      //ms visible
      text[0].style.width = "160px";
      text[0].style.opacity = "1";
      text[0].style.height = "102px";
      text[0].style.transition = "height 1s ease";

      //hide hh
      text[2].style.height = "0";
      text[2].style.transition = "all 1s ease";

    } else if (X_cord > -180 && X_cord < -120) {
      //gb visible
      text[7].style.width = "220px";
      text[7].style.opacity = "1";
      text[7].style.height = "160px";
      text[7].style.transition = "height 1s ease";

      //og visible
      text[6].style.width = "201px";
      text[6].style.opacity = "1";
      text[6].style.height = "143px";
      text[6].style.transition = "height 1s ease";


      //wh visible
      text[1].style.height = "165px";
      text[1].style.width = "165px";
      text[1].style.opacity = "1";
      text[1].style.transition = "height 1s ease";

      //hh visible
      text[2].style.width = "182px";
      text[2].style.opacity = "1";
      text[2].style.height = "133px";
      text[2].style.transition = "height 1s ease";

      //hide asi
      text[5].style.opacity = "0";
      text[5].style.transition = "all 1s ease";
    } else if (X_cord > -120 && X_cord < -90) {
      //hide ms
      text[0].style.height = "0";
      text[0].style.transition = "all 1s ease";
      //hide og
      text[6].style.height = "0";
      text[6].style.transition = "all 1s ease";
      //hide gb
      text[7].style.height = "0";
      text[7].style.transition = "all 1s ease";
    } else if (X_cord > -90 && X_cord < -45) {
      //hide wh
      text[1].style.height = "0";
      text[1].style.transition = "all 1s ease";
      //hh visible 
      text[2].style.width = "182px";
      text[2].style.opacity = "1";
      text[2].style.height = "133px";
      text[2].style.transition = "height 1s ease";
    }
  })
  panorama.addEventListener("touchstart", (event) => {
    X_cordi = Math.round(pano.getYaw());
    console.log(X_cordi);
    if (X_cordi > -45 && X_cordi < -20) {
      //hide hh
      text[2].style.height = "0";
      text[2].style.transition = "all 1s ease";
      //hide am
      text[3].style.height = "0";
      text[3].style.transition = "all 1s ease";
      //hide sm
      text[4].style.height = "0";
      text[4].style.transition = "all 1s ease";
    } else if (X_cordi > -20 && X_cordi < 90) {

      //am visible
      text[3].style.width = "200px";
      text[3].style.opacity = "1";
      text[3].style.height = "150px";
      text[3].style.transition = "height 1s ease";
      //sm visible
      text[4].style.width = "200px";
      text[4].style.opacity = "1";
      text[4].style.height = "150px";
      text[4].style.transition = "height 1s ease";
    } else if (X_cordi > 90 && X_cordi < 120) {
      //hide am
      text[3].style.height = "0";
      text[3].style.transition = "all 1s ease";
      //hide sm
      text[4].style.height = "0";
      text[4].style.transition = "all 1s ease";

      //hide asi
      text[5].style.opacity = "0";
      text[5].style.transition = "all 1s ease";
      //hide ms
      text[0].style.height = "0";
      text[0].style.transition = "all 1s ease";
    } else if (X_cordi > 120 && X_cordi < 160) {

      //asi visible
      text[5].style.width = "257px";
      text[5].style.opacity = "1";
      text[5].style.height = "167px";
      text[5].style.transition = " opacity 1s ease";

      //ms visible
      text[0].style.width = "160px";
      text[0].style.opacity = "1";
      text[0].style.height = "102px";
      text[0].style.transition = "height 1s ease";

      //hide og
      text[6].style.height = "0";
      text[6].style.transition = "all 1s ease";
      //hide gb
      text[7].style.height = "0";
      text[7].style.transition = "all 1s ease";
      //hide wh
      text[1].style.height = "0";
      text[1].style.transition = "all 1s ease";
    } else if (X_cordi > 160 && X_cordi < 180) {

      //asi visible
      text[5].style.width = "257px";
      text[5].style.opacity = "1";
      text[5].style.height = "167px";
      text[5].style.transition = " opacity 1s ease";

      //ms visible
      text[0].style.width = "160px";
      text[0].style.opacity = "1";
      text[0].style.height = "102px";
      text[0].style.transition = "height 1s ease";

      //hide hh
      text[2].style.height = "0";
      text[2].style.transition = "all 1s ease";

    } else if (X_cordi > -180 && X_cordi < -120) {
      //gb visible
      text[7].style.width = "220px";
      text[7].style.opacity = "1";
      text[7].style.height = "160px";
      text[7].style.transition = "height 1s ease";

      //og visible
      text[6].style.width = "201px";
      text[6].style.opacity = "1";
      text[6].style.height = "143px";
      text[6].style.transition = "height 1s ease";


      //wh visible
      text[1].style.height = "165px";
      text[1].style.width = "165px";
      text[1].style.opacity = "1";
      text[1].style.transition = "height 1s ease";

      //hh visible
      text[2].style.width = "182px";
      text[2].style.opacity = "1";
      text[2].style.height = "133px";
      text[2].style.transition = "height 1s ease";

      //hide asi
      text[5].style.opacity = "0";
      text[5].style.transition = "all 1s ease";
    } else if (X_cordi > -120 && X_cordi < -90) {
      //hide ms
      text[0].style.height = "0";
      text[0].style.transition = "all 1s ease";
      //hide og
      text[6].style.height = "0";
      text[6].style.transition = "all 1s ease";
      //hide gb
      text[7].style.height = "0";
      text[7].style.transition = "all 1s ease";
    } else if (X_cordi > -90 && X_cordi < -45) {
      //hide wh
      text[1].style.height = "0";
      text[1].style.transition = "all 1s ease";
      //hh visible 
      text[2].style.width = "182px";
      text[2].style.opacity = "1";
      text[2].style.height = "133px";
      text[2].style.transition = "height 1s ease";
    }
  })

}


function hotspot3(hotSpotDiv, args) {
  hotSpotDiv.classList.add('new-tooltip1');
  var span = document.createElement('span');
  span.setAttribute("class", 'hotspot_text');
  hotSpotDiv.appendChild(span);
  span.style.marginTop = "-113px";
  span.style.marginLeft = "-35px";
  span.style.width = "0px";
  span.style.height = "0px";
  span.style.opacity = "0";
  span.style.position = "absolute";
  span.style.visibility = "visible";
  if (args === 'Marriott Suites') {
    span.style.marginTop = "-82px";
    span.style.marginLeft = "-75px";
    span.style.backgroundImage = "url('./Locations/Marriott\ Suites.svg')";

  } else if (args === 'Westin Hotel') {
    span.style.marginTop = "-40px";
    span.style.marginLeft = "-78px";
    span.style.backgroundImage = "url('./Locations/Westin\ Hotel.svg')";
  } else if (args === 'Hyatt Hotel') {
    span.style.marginTop = "-102px";
    span.style.marginLeft = "-32px";
    span.style.backgroundImage = "url('./Locations/Hyatt\ Hotel.svg')";
  } else if (args === 'Amanora Mall') {
    span.style.marginTop = "-110px";
    span.style.marginLeft = "-155px";
    span.style.backgroundImage = "url('./Locations/Amanora\ Mall.svg')";
  } else if (args === 'Seasons Mall') {
    span.style.backgroundImage = "url('./Locations/Seasons\ Mall.svg')";
  } else if (args === 'Army Sports Institute') {
    span.style.marginTop = "-127px";
    span.style.marginLeft = "-199px";
    span.style.backgroundImage = "url('./Locations/Army\ Sports\ Institute.svg')";
  } else if (args === 'Osho Garden') {
    span.style.marginTop = "-104px";
    span.style.marginLeft = "-155px";
    span.style.backgroundImage = "url('./Locations/Osho\ Garden.svg')";
  } else if (args === 'Airport') {
    span.style.marginTop = "-112px";
    span.style.marginLeft = "-25px";
    span.style.backgroundImage = "url('./Locations/Airport.svg')";
  } else if (args === 'German Bakery') {
    span.style.marginTop = "-132px";
    span.style.marginLeft = "-40px";
    span.style.backgroundImage = "url('./Locations/German\ Bakery.svg')";
  }

}
/*
 else if (window.screen.width < 667) {
  function hotspot3(hotSpotDiv, args) {
    hotSpotDiv.classList.add('new-tooltip1');
    var span = document.createElement('span');
    span.setAttribute("class", 'hotspot_text');
    hotSpotDiv.appendChild(span);
    span.style.marginTop = "-113px";
    span.style.marginLeft = "-35px";
    span.style.width = "0px";
    span.style.height = "0px";
    span.style.opacity = "0";
    span.style.position = "absolute";
    span.style.visibility = "visible";
      if (args === 'Marriott Suites') {
        span.style.marginTop = "-70px";
        span.style.marginLeft = "-78px";
        span.style.backgroundImage = "url('./Locations/Marriott\ Suites.svg')";
      } else if (args === 'Westin Hotel') {
        span.style.marginTop = "-60px";
        span.style.marginLeft = "-80px";
        span.style.backgroundImage = "url('./Locations/Westin\ Hotel.svg')";
      } else if (args === 'Hyatt Hotel') {
        span.style.marginTop = "-90px";
        span.style.marginLeft = "-53px";
        span.style.backgroundImage = "url('./Locations/Hyatt\ Hotel.svg')";
      } else if (args === 'Amanora Mall') {
        span.style.marginTop = "-96px";
        span.style.marginLeft = "-137px";
        span.style.backgroundImage = "url('./Locations/Amanora\ Mall.svg')";
      } else if (args === 'Seasons Mall') {
        span.style.marginTop = "-100px";
        span.style.marginLeft = "-58px";
        span.style.backgroundImage = "url('./Locations/Seasons\ Mall.svg')";
      } else if (args === 'Army Sports Institute') {
        span.style.marginTop = "-110px";
        span.style.marginLeft = "-177px";
        span.style.backgroundImage = "url('./Locations/Army\ Sports\ Institute.svg')";
      } else if (args === 'Osho Garden') {
        span.style.marginTop = "-94px";
        span.style.marginLeft = "-137px";
        span.style.backgroundImage = "url('./Locations/Osho\ Garden.svg')";
      } else if (args === 'Airport') {
        span.style.marginTop = "-98px";
        span.style.marginLeft = "-42px";
        span.style.backgroundImage = "url('./Locations/Airport.svg')";
      } else if (args === 'German Bakery') {
        span.style.marginTop = "-115px";
        span.style.marginLeft = "-64px";
        span.style.backgroundImage = "url('./Locations/German\ Bakery.svg')";
      }

  }

}
*/


function hotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-tooltip');
  var span = document.createElement('span');
  span.innerHTML = args;
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

