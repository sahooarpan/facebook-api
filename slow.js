 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    $('.loader').hide();

    function getResponse(){

        $.ajax('https://api.edwisor.com/api/v1/public/slow/request/1000',{

                success : function(response){
                    console.log(response);
                    //alert(response.userMessage);
                    $('#result').html('<h2>'+response.userMessage+'</h2>');

                },

                error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                },

                timeout:500, // in ms

                beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }

            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#loadDataBtn").on('click',getResponse)



  });