import 'reset-css';
import "./main.scss";
import RoutesList from "./components/RoutesList/RoutesList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useEffect} from "react";
import {fetchCategories} from "./asyncActions/categories";
import {fetchBrands} from "./asyncActions/brands";
import {fetchGoods} from "./asyncActions/goods";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchBrands());
        dispatch(fetchGoods());
    }, []);

    return (
        <div className="App">
            <Header/>
            <main>
                <RoutesList/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
