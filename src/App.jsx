import "./App.css";
import Spinner from "./components/Spinner"; // <-- add
import { useState } from "react"; // <-- add
import ImprovedMovieList from "./components/ImprovedMovieList";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        <ImprovedMovieList />;
      </div>
    );
  }
}

export default App;