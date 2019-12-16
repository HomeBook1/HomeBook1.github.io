





      window.fbAsyncInit = function() {
        FB.init({
          appId : '763630314064160',
          autoLogAppEvents : true,
          xfbml : true,
          version : 'v5.0'  
        });
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
      };

     
      function testAPI(){
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
         // setElements(false);
        });
      }