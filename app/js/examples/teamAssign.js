let teamsArray = [];
let teamsObjList = [];

// Get all the HTML content from a URL as a string
let getURL = function (url, success, error) {
  if (!window.XMLHttpRequest) return;

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if(request.status !== 200) {
        if (error && typeof error === 'function') {
          error(request.responseText, request);
        }
        return;
      }

      if (success && typeof success === 'function') {
        success(request.responseText, request);
      }
    }
  }

  request.open('GET', url);
  request.send();
}

// using getURL function to scrape teams from Worldcup site.
getURL(
  'http://www.fifa.com/worldcup/teams/index.html',
  function(data) {
    console.log('success:');

    var div = document.createElement(div);
    div.innerHTML = data;

    var element = div.querySelectorAll('.team');
    // Grab element on the page to spit the list in to
    // var teamList = document.querySelector( '#teams' );

    console.log(element);

    if (!element) return;

    for (let i = 0; i < element.length; i++) {
      teamsObjList[i] = {
        teamName: element[i].innerText,
        assigned: {
          isAssigned: false,
          assignTo: ''
        },
        flagImg: element[i].childNodes[0].currentSrc,
        teamUrl: 'http://www.fifa.com' + element[i].pathname
      };
      // Add each team found to the page
      // teamList.innerHTML += element[i].innerHTML;
    }
  },
  function(data) {
    console.log('error:');
  }
);

// for (let i = 0; i < teamsArray.length; i++) {
//   teamsObjList[i] = {
//     teamName: teamsArray[i],
//     assigned: false,
//     assignedTo: ''
//   };
// }

console.log(teamsObjList);

var assignTeam = function (name, obj) {
  var objLength = obj.length;
}
