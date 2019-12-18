var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


      window.fbAsyncInit = function() {
        FB.init({
          appId : '763630314064160',
          autoLogAppEvents : true,
          xfbml : true,
          version : 'v5.0'  
        });
        FB.getLoginStatus(function(response) {
            //statusChangeCallback(response);
        });
      };

       (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
       function statusChangeCallback(response){
         if(response.status === 'connected'){
           console.log('Logged in and authenticated');
          // setElements(true);
           //window.location.replace("head-menu.html");
           //testAPI();
         } else {
           console.log('Not authenticated');
           //setElements(false);
         }
       }
      function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
      }

     

      function logout(){
        FB.logout(function(response){
         // setElements(false);
        });
      }