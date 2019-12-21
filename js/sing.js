





      window.fbAsyncInit = function() {
        FB.init({
          appId : '763630314064160',
          autoLogAppEvents : true,
          xfbml : true,
          verification_uri: "head-menu.html",
          version : 'v5.0'  
        });
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
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
          testAPI();
          window.location.replace("head-menu.html");
           
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
      /*function testAPI(){
        FB.api('/me?fields=name,email', function(response){
          if(response && !response.error){
            console.log(response);
            buildProfile(response);
          }
          FB.api('/me/feed', function(response){
            if(response && !response.error){
              //buildFeed(response);
            }
          });
        })
      }*/

      function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

      function setElements(isLoggedIn){
        if(isLoggedIn){
          document.getElementById('logout').style.display = 'block';
          document.getElementById('profile').style.display = 'block';
          document.getElementById('feed').style.display = 'block';
          document.getElementById('fb-btn').style.display = 'none';
          document.getElementById('heading').style.display = 'none';
        } else {
          document.getElementById('logout').style.display = 'none';
          document.getElementById('profile').style.display = 'none';
          document.getElementById('feed').style.display = 'none';
          document.getElementById('fb-btn').style.display = 'block';
          document.getElementById('heading').style.display = 'block';
        }
      }
      function logout(){
        FB.logout(function(response){
          window.location.replace("sing-in.html");
        });
      }