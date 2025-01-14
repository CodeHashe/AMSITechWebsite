import NavBar from "./Navigation/NavBar";
import HomePage from "./HomePage/HomePage";
import "./Styles/styles.css";
import CustomCursor from "./Misc/CustomCursor";

export default function App() {
  return (
    <div className="App">
      <CustomCursor/>
      <NavBar />
      <HomePage/>
    </div>
  );
}
