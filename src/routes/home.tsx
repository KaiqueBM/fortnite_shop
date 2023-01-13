import 'bootstrap/dist/css/bootstrap.min.css';

import Loja from "../components/Loja"
import Bundles from "../components/Bundles";

const Home = () => {

    return (
        <div className="container-fluid">

            <div className="title text-center mt-3">loja</div>

            <Bundles />

            <Loja tipo="featured" />

            <Loja tipo="daily" />

            <div className="subtitle text-center m-5"></div>

            


        </div>
    )
};

export default Home;