import './App.scss';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/content/about/about";

function App() {
    return (
        <div className="App">
            <Header/>
            <About />
            <Footer/>
        </div>
    );
}

export default App;
