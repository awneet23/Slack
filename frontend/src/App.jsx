import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
function App() {
  return (
    <>
      <SignedIn>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/auth" element={<Navigate to={"/"} />}></Route>
        </Routes>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Routes>
          <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
          <Route path="*" element={<Navigate to={"/auth"} />}></Route>
        </Routes>
        <SignInButton />
      </SignedOut>
    </>
  );
}
export default App;
