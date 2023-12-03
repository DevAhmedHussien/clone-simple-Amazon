import { createContext } from "react";
export const GlobalContext = createContext();
// const GlobalProvider = ({ children }) => {
//     const [user , setUser] = useState({})
//     return (
//         <GlobalContext.Provider value = {{ user: user , setUser: setUser }}>
//         {children}
//         </GlobalContext.Provider>
//     );
// };
// export default GlobalProvider;
// export const useAuth = () => {
//   return useContext(GlobalContext);
// };