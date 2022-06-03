import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sobre from "pages/Sobre";
import ProductDetails from "pages/ProductDetails";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/products" exact>
                    <Catalog/>
                </Route>
                <Route path="/products/:productId">
                    <ProductDetails/>
                </Route>
                <Route path="/sobre">
                    <Sobre/>
                </Route>
                <Route path="/admin">
                    <Admin/>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default Routes;