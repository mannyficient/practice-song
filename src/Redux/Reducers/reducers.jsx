import { combineReducers } from "redux";

const songListReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:05" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it that way", duration: "1:45" },
  ];
};

const songSelectReducer = (selectedSong = null, action) => {
  switch (action) {
    case "SONG_SELECTED":
      return action.payload;

    default:
      return selectedSong;
  }
};

export const rootReducers = combineReducers({
  song: songListReducer,
  selectedSong: songSelectReducer,
});
