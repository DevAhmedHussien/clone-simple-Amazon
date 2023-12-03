import { React, useEffect , useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import{ GlobalContext } from "./context/GlobalState";
import { auth } from "./firebase";
import Home from "./components/Home";

function App() {
  const [user , setUser] = useState({
  name:'',
  basket:[]
  })
//   price 
  let [price,setPrice]= useState(0)
  const getBasketTotal = ()=>{
    let total=0;
    user.basket?.map((item)=>{
      return total += item.price
    })
    setPrice(total)
  }   
// removeelement 
const removeFromBasket = (item) => {
  console.log(item)
  const index = user.basket.filter((obj) => obj.price !== item.price);
  setUser({...user, basket: index})
};
// when if u see authenticate set in user
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {  
      console.log('authUser', authUser )
      if (authUser) {
        setUser({...user,name:authUser})
    } else {
      setUser({...user,name:''})
    }
    });
}, []);
  
console.log('user in app',user)
  return (
    <GlobalContext.Provider value = {{ user: user , setUser: setUser ,removeFromBasket:removeFromBasket, getBasketTotal:getBasketTotal , price:price}}>
    <div className="app">
    <Routes>
      <Route path="/" element={
       <>
       <Header/>
       <Home/>
       </> 
      
      }/>        
      <Route path="/login" element={<Login />}/>
      <Route path="/checkout" element={
      <> 
      <Header/>
      <Checkout/>
      </>  
      }/>
       <Route path="/payment" element={
      <> 
      <Header/>
      <Payment/>
      </>  
      }/>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </div>
  
  </GlobalContext.Provider>
  );
}
export default App;

