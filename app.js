 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAESS8eOFB7gjpS1sFwe6uD5cUK2ZChvaZA5ldNPYKvr6zSPZBffzG5HbCcj8cSTcdniHe7VFAcIHvNx7XthejTroP2m42eNoU0MOulZAySLVDu5HocSGoXWWWcZCqOwyrtWmru26DAEl2PGf8Rcf2CIHY8YewpX2AFVETixQQ6OzSwCALdVjvC9ILGOCZBQVz93gJTpnHjfZACPaZCLZArJ10MlvbZBxZCY7AZDZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);

                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });