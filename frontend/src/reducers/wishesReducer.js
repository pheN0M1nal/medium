const wishesReducer = (
     state = [
          {
               user: "not_Logged_in",
          },
     ],
     action
) => {
     switch (action.type) {
          case "ADDUSER":
               return [action.payload];
          default:
               return state;
     }
};

export default wishesReducer;
