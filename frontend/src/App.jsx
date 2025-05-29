import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import CallPage from "./pages/CallPage"
import NotificationPage from "./pages/NotificationPage"
import OnboardingPage from "./pages/OnboardingPage"
import ChatPage from "./pages/ChatPage"
import toast, { Toaster } from "react-hot-toast"

import { useQuery } from "@tanstack/react-query"

function App() {
//tanstack query
const {data,isLoading,error }=useQuery({queryKey:['todos'], queryFn:async()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const data = await response.json()
  return data
 },

});
console.log(data);








//  const [data, setData] = useState([]);
//   const [isloading, setisLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(()=>{
//   const getData = async () => {
//    setisLoading(true);
//     try {
//       const data = await fetch("https://jsonplaceholder.typicode.com/todos")
//       const json = await data.json();
//       setData(json);
//     } catch (error) {
//       setError(error);
//     }
//     finally {
//       setisLoading(false);
//     }
//   };
//   getData(); 
//   },[])
//   console.log(data);
  return (
    <>
      <button onClick={()=>toast.success("Hello world")}>Create a toast</button>
      <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/signup" element={<SignUpPage/>} />
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/call" element={<CallPage/>} />
         <Route path="/notification" element={<NotificationPage/>} />
          <Route path="/chat" element={<ChatPage/>} />
         <Route path="/onboarding" element={<OnboardingPage/>} />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
