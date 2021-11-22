// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

 export const authEndpoint = "https://accounts.spotify.com/authorize";
 
 // The url to be redirected to after authentication
 const redirectUri = "http://localhost:3000/";

 //Client ID produced from developer.spotify
 const clientId = "ff5b699bb55441cf8066d8483f20d9f6";

 //Scopes in which the user can navigate through
 const scopes = [
     "user-read-currently-playing",
     "user-read-recently-played",
     "user-read-playback-state",
     "user-top-read",
     "user-modify-playback-state",
 ];

 // To get the access token from the string in the url
 export const getTokenFromUrl = () =>{
     return window.location.hash
     .substring(1)
     .split("&")
     .reduce((initial, item) => {
         let parts = item.split('=');
         initial[parts[0]] = decodeURIComponent(parts[1]);

         return initial;
     }, {});
 }

 //Exports the url which combines all the parameters above into a URL
 export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;