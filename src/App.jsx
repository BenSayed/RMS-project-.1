import Home from "./page-index/Home/Home";
import WaitingPage from "./Handel Page/Waiting page/waitingPage";
import PageErorr500 from "./Page Erorr/Page500/pageErorr500";
import Erorr404 from "./Page Erorr/page404/Erorr404";
import Countact from "./page-index/Contaut us/ContautUs";
import Header from "./Component/Header/Header";
import Login from "./LoginPage/login/login";
import SignUp from "./LoginPage/Sign up/SignUp";
import ExploreMenu from "./page-index/MenuPage/ExploreMenu";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      {/* <Countact /> */}
      {/* <WaitingPage/> */}
      {/* <PageErorr500/> */}
      {/* <Erorr404/> */}
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      <ExploreMenu />
    </>
  );
}

export default App;
