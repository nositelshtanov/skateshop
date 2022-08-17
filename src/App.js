import 'reset-css';
import "./main.scss";
import RoutesList from "./components/RoutesList/RoutesList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <RoutesList />
        </main>
        <Footer />
    </div>
  );
}

export default App;
