import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
// import toast from "react-hot-toast";
import * as Sentry from "@sentry/react";
const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);
function App() {
  return (
    <>
      <SignedIn>
        <SentryRoutes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/auth" element={<Navigate to={"/"} />}></Route>
        </SentryRoutes>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SentryRoutes>
          <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
          <Route path="*" element={<Navigate to={"/auth"} />}></Route>
        </SentryRoutes>
        <SignInButton />
      </SignedOut>
    </>
  );
}
export default App;
