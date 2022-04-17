export const adduser = (nr) => {
     return {
          type: "ADDUSER",
          payload: nr,
     };
};

export const showall = () => {
     return {
          type: "SHOWALL",
     };
};

export const addart = (fav) => {
     return {
          type: "ADDART",
          payload: fav,
     };
};
