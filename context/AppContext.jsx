import { createContext, useReducer } from 'react';

export const AppContext = createContext({
   users: null,
   addUser: (user) => {},
});

const initialState = [{ name: 'Francis' }, { name: 'Mike' }];

export const AppContextProvider = ({ children }) => {
   const [users, dispatch] = useReducer((state, action) => {
      return [...state, ...action];
   }, initialState);

   const handleAddUser = (user) => {
      dispatch([user]);
   };
   const actions = {
      users,
      addUser: handleAddUser,
   };

   return <AppContext.Provider value={actions}>{children}</AppContext.Provider>;
};
