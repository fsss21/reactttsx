import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Home from "./pages/Home";
import Main from "./pages/Main/index";
import "./index.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Main />
      <Main />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
