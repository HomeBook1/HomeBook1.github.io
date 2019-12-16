





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

     

      function logout(){
        FB.logout(function(response){
         // setElements(false);
        });
      }