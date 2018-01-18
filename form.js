 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    $('.loader').hide();

    function sendFormData(event){

        // prevent the default behaviour of the form
        event.preventDefault();
        console.log($('form').serialize());
        $.ajax('https://api.edwisor.com/api/v1/public/send/mail/aditya@edwisor.com',{

                type:'POST',
                data: $('form').serialize(),
                dataType: "json",
                success : function(response){
                    console.log(response);
                    alert("Data success");
                    $('form').remove();
                    document.write('<h2>'+response.userMessage+'</h2>')
                },
                error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    document.write('<h2>'+response.userMessage+'</h2>')
                },
                timeout:3000,
                beforeSend : function(){
                    $('.loader').show();
                },
                complete : function(){
                   $('.loader').hide();

                }

            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("form").on('submit',sendFormData)



  });