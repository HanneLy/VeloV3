function main() {

  var station1 = document.getElementById("tr1");
  var stationname1 = document.getElementById("tr1td1");
  var stationstatus1 = document.getElementById("tr1td2");
  var status1 = document.getElementsByClassName("station1status");
  var station2 = document.getElementById("tr2");
  var stationname2 = document.getElementById("tr2td1");
  var stationstatus2 = document.getElementById("tr2td2")
  var status2 = document.getElementsByClassName("station2status");
  var station3 = document.getElementById("tr3");
  var stationname3 = document.getElementById("tr3td1");
  var stationstatus3 = document.getElementById("tr3td2");
  var status3 = document.getElementsByClassName("station3status");
  var station4 = document.getElementById("tr4");
  var stationname4 = document.getElementById("tr4td1");
  var stationstatus4 = document.getElementById("tr4td2");
  var status4 = document.getElementsByClassName("station4status");
  var station5 = document.getElementById("tr4");
  var stationname5 = document.getElementById("tr4td1");
  var stationstatus5 = document.getElementById("tr4td2");
  var status5 = document.getElementsByClassName("station5status");

  var submitbutton = document.getElementById("submit");
  var outbutton = document.getElementById("out");
  var choice = document.getElementById("stationchoice");
  var managediv = document.getElementById("manage");
  var adminbutton = document.getElementById("adminlink");
  var inlogbutton = document.getElementById("loginbutton");
  var inlogform = document.getElementById("inloggen");
  var loginmain = document.getElementById("mainlogin");

  inlogbutton.onclick=function(){
    if (inlogform.value==="detoffecollegasvanvelo") {
      managediv.classList.remove("invisible");
      loginmain.classList.add("invisible");
    }
  }

  submitbutton.onclick=function(){managestation()}

  outbutton.onclick = function(){
    managediv.classList.add("invisible")
  }

  adminbutton.onclick = function() {
    loginmain.classList.remove("invisible")
  }

  function managestation(choice) {
    var choice = document.getElementById("stationchoice");
    if (choice.value==="station1open") {
      stationname1.classList.remove("stillclosed");
      stationname1.classList.add("reopened");
      stationstatus1.classList.remove("stillclosed");
      stationstatus1.classList.add("reopened");
      var x = 0;
      while (x<status1.length) {
            status1[x].innerHTML="OPEN";
            x++;
      };
    }
    else if (choice.value==="station1close") {
      stationname1.classList.remove("reopened");
      stationname1.classList.add("stillclosed");
      stationstatus1.classList.remove("reopened");
      stationstatus1.classList.add("stillclosed");
      var x = 0;
      while (x<status1.length) {
            status1[x].innerHTML="CLOSED";
            x++;
      };
    }
    else if (choice.value==="station2open") {
      stationname2.classList.remove("stillclosed");
      stationname2.classList.add("reopened");
      stationstatus2.classList.remove("stillclosed");
      stationstatus2.classList.add("reopened");
      var x = 0;
      while (x<status2.length) {
            status2[x].innerHTML="OPEN";
            x++;
      };
    }
    else if (choice.value==="station2close") {
      stationname2.classList.remove("reopened");
      stationname2.classList.add("stillclosed");
      stationstatus2.classList.remove("reopened");
      stationstatus2.classList.add("stillclosed");
      var x = 0;
      while (x<status2.length) {
            status2[x].innerHTML="CLOSED";
            x++;
      };
    }
    else if (choice.value==="station3open") {
      stationname3.classList.remove("stillclosed");
      stationname3.classList.add("reopened");
      stationstatus3.classList.remove("stillclosed");
      stationstatus3.classList.add("reopened");
      var x = 0;
      while (x<status3.length) {
            status3[x].innerHTML="OPEN";
            x++;
      };
    }
    else if (choice.value==="station3close") {
      stationname3.classList.remove("reopened");
      stationname3.classList.add("stillclosed");
      stationstatus3.classList.remove("reopened");
      stationstatus3.classList.add("stillclosed");
      var x = 0;
      while (x<status3.length) {
            status3[x].innerHTML="CLOSED";
            x++;
      };
    }
    else if (choice.value==="station4open") {
      stationname4.classList.remove("stillclosed");
      stationname4.classList.add("reopened");
      stationstatus4.classList.remove("stillclosed");
      stationstatus4.classList.add("reopened");
      var x = 0;
      while (x<status4.length) {
            status4[x].innerHTML="OPEN";
            x++;
      };
    }
    else if (choice.value==="station4close") {
      stationname4.classList.remove("reopened");
      stationname4.classList.add("stillclosed");
      stationstatus4.classList.remove("reopened");
      stationstatus4.classList.add("stillclosed");
      var x = 0;
      while (x<status4.length) {
            status4[x].innerHTML="CLOSED";
            x++;
      };
    }
    else if (choice.value==="station5open") {
      stationname5.classList.remove("stillclosed");
      stationname5.classList.add("reopened");
      stationstatus5.classList.remove("stillclosed");
      stationstatus5.classList.add("reopened");
      var x = 0;
      while (x<status5.length) {
            status5[x].innerHTML="OPEN";
            x++;
      };
    }
    else if (choice.value==="station5close") {
      stationname5.classList.remove("reopened");
      stationname5.classList.add("stillclosed");
      stationstatus5.classList.remove("reopened");
      stationstatus5.classList.add("stillclosed");
      var x = 0;
      while (x<status2.length) {
            status2[x].innerHTML="CLOSED";
            x++;
      };
    };
  };

  var nearby1 = document.getElementById("nearbyLocation1");
  var nearby2 = document.getElementById("nearbyLocation2");
  var nearby3 = document.getElementById("nearbyLocation3");
  var nearby4 = document.getElementById("nearbyLocation4");
  var nearby5 = document.getElementById("nearbyLocation5");

  nearby1.onclick=function() {showNearbyStations()};
  nearby2.onclick=function() {showNearbyStations()};
  nearby3.onclick=function() {showNearbyStations()};
  nearby4.onclick=function() {showNearbyStations()};
  nearby5.onclick=function() {showNearbyStations()};

  function showNearbyStations(){
    var thisStation = event.srcElement.parentNode.parentNode;
    var nearbyStations = thisStation.getElementsByClassName("nearby");
    for (var i = 0; i < nearbyStations.length; i++) {
      if (nearbyStations[i].classList.contains("invisible")) {
            nearbyStations[i].classList.remove("invisible")
      } else {
        nearbyStations[i].classList.add("invisible")
      };
    };
  };

};


window.onload=function(){main()};
