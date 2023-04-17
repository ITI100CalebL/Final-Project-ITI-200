$(document).ready(function(){


    function loadMessages() {

        $(".list").empty();
    
        $.get("/api/messages", function (response) {
    
            for (const book of response) {
                $(".list").append("<li>" + messages.id + " " + messages.username + ": " + messages.response + " - " + messages.timestamp + "</li>")
            }
        });
    }
    
   
    
        // Call this function when the open is opened
        loadMessages();
    
        $("form").submit(function () {
    
            const data = {
                author: $("#author").val(),
                title: $("#title").val()
            }
    
            $.post("/api/messages/create", data, function (response) {
                loadMessages();
                console.log("Done");
            });
    
            return false;
        })
    


$("#homeLink").click(function(){

alert("Redirecting to nav-link-Home");

});

$("#friendsLink").click(function(){

    alert("Redirecting to nav-link-Friends");
    
    });

    $("#homeButton").click(function(){

        alert("Redirecting to Home");
        
        });

        $("#friendsButton").click(function(){

            alert("Redirecting to Friends List");
            
            });

            $("#addButton").click(function(){

                alert("Redirecting to Add Friends");
                
                });
                $("#getStarted").click(function(){

                    alert("Redirecting to Account Manager");
                    
                    });
                    $("#privateMeeting").click(function(){

                        alert("Redirecting to Private Meeting");
                        
                        });
                        $("#browseForums").click(function(){

                            alert("Redirecting to Forums");
                            
                            });
                            $("#settings").click(function(){

                                alert("Redirecting to Settings");
                                
                                });
                                $("#connectUs").click(function(){

                                    alert("Redirecting to Connect with Us");
                                    
                                    });
                                    $("#improvements").click(function(){

                                        alert("Redirecting to Suggestions & Improvements");
                                        
                                        });
                
            
});
