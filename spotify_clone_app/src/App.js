import React, { useEffect} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  //setting a variable inside a memory for access
  const [{user, token}, dispatch] = useDataLayerValue();
  // Run code based on a given condition. It runs a code based on a given condition
  //If u want to run once u put an empty bracket.
  //if u want it to run based on changes, put variables to be changed in the callback.
  useEffect(() => {
    //got the token from the url
    const hash = getTokenFromUrl();
    //stripe the url from displaying on the url bar
    window.location.hash ="";    
    const _token = hash.access_token;
    
    //Stored it inside a state
    if (_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
         dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        })
      )};

      spotify.getPlaylist('6TlSPvA3bXUon30syqDmnY').then((response) =>
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
      )

    console.log("I HAVE A TOKEN", token);

  }, []);



  return (
    //if there's a token it renders the player pag if not, the login page
    <div className="App">
      {
        token ? (
          <Player spotify={spotify}/>
        ): (
          <Login />
        )
      }       
    </div>
  );
}

export default App;
