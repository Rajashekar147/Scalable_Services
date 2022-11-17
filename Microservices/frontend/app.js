var count=0;
function getMessage() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'api/config', true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      count++;
      var xhr2 = new XMLHttpRequest();
      xhr2.open('GET', xhr.response.service1endpoint + '/message', true);
      xhr2.responseType = 'json';
      xhr2.onload = function() {
        var status2 = xhr2.status;
        if (status2 === 200) {
          count++;
          
          document.getElementById("service1message").innerHTML = xhr2.response.service1.message;
          document.getElementById("service2message").innerHTML = xhr2.response.service2.message;
        
        } else {
          document.getElementById("errormessage").innerHTML = JSON.stringify(xhr2.response);
        }
      };

      xhr2.send();
    } else {
      document.getElementById("errormessage").innerHTML = JSON.stringify(xhr2.response);
    }
  };

  xhr.send();
}
function ifmessagesprinted(){
  if(count == 2)
    console.log("Two services are received");
}

function validateMessages(){
  console.log("Validates messages");
}