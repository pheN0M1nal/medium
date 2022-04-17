const favReducer = (
     state = [
          {
               username:
                    "https://i.gadgets360cdn.com/large/Edge-Of-Tomorrow_1494244371909.jpg",
               title: "Edge of tomorrow",
               body: "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
               img: "https://www.imdb.com/title/tt1631867/",
          },
     ],
     action
) => {
     switch (action.type) {
          case "ADDART":
               return [action.payload];
          default:
               return state;
     }
};

export default favReducer;
