import "./App.css";
import Header from "./header/Header.js";
import Features from "./features/Features.js";
import ContentCard from "./content/Content.js";
import SignUp from "./signup/SignUp.js";
import Footer from "./footer/Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Features />
      <ContentCard />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
