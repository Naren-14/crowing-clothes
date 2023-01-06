import { Route, Routes } from "react-router-dom";
import Home from "./components/router/Home/home.component";
import Navigation from "./components/router/Navigation/navigation.component";
import SignIn from "./components/router/Sign-in/sign-in.component";
function App() {
  const Shop = () => {
    return <h1>I am the Shop Page</h1>;
  };
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
