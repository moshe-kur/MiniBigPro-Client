import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
//import LinkRoute from "./components/linksRoute/linksRoute";
import { Welcome } from "./Pages";
import LinkRoute from "./components/linkRoute/linksRoute";

export const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    <h1>Loading</h1>;
  } else {
    if (isAuthenticated) {
      return <LinkRoute></LinkRoute>;
    } else {
      return <Welcome></Welcome>;
    }
  }
};

export default App;
