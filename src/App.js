import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Home/Header/Header";
import Footer from "./Components/Home/Footer/Footer";
import Content from "./Components/Home/Content/Content";

function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
