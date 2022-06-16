import { combineReducers } from "redux";


const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macerena', duration: '2:30' },
        { title: 'Thunder', duration: '3:15' },
        { title: 'All Star', duration: '1:45' }
    ];
};

const selectedSongReducer = (selectedSong = null,action) =>{
      if(action.type === 'SONG_SELECTED'){
          return action.payload;
      }
      return selectedSong;
}; 


 export default combineReducers({
   songs: songReducer,
   selectedSong: selectedSongReducer,
});