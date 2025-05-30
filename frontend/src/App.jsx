import { Navigate, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import CallPage from "./pages/CallPage"
import NotificationPage from "./pages/NotificationPage"
import OnboardingPage from "./pages/OnboardingPage"
import ChatPage from "./pages/ChatPage"
import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "./lib/axios"
import SignupPage from "./pages/SignupPage"
import { Toaster } from "react-hot-toast";
import PageLoader from "./components/PageLoader"
import { getAuthUser } from "./mutations/useSignup"
function App() {
//tanstack query
const {data:authData ,isLoading, }=useQuery({queryKey:['authUser'], queryFn:getAuthUser,
retry:false,
});
const authUser = authData?.user || null;

if(isLoading) return <PageLoader/>







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
          <Toaster />
        <Routes>
         <Route path="/" element={authUser? <HomePage/> : <Navigate to="/login" />} />
         <Route path="/signup" element={!authUser ? <SignupPage/> : <Navigate to="/"/>} />
         <Route path="/login" element={!authUser ?  <LoginPage/> :<Navigate to="/"/> } />
         <Route path="/call" element={ authUser? <CallPage/> :<Navigate to="/login" /> } />
         <Route path="/notification" element={authUser? <NotificationPage/>:<Navigate to="/login" />} />
          <Route path="/chat" element={authUser?<ChatPage/>:<Navigate to="/login" /> } />
         <Route path="/onboarding" element={ authUser?<OnboardingPage/>:<Navigate to="/login" /> } />
      </Routes>
      
    </>
  )
}

export default App
