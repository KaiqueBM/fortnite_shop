import 'bootstrap/dist/css/bootstrap.min.css';

import Loja from "../components/Loja"
import Bundles from "../components/Bundles";
import Teste from '../components/Teste';

const Home = () => {

    return (
        <div className="container-fluid">
            

            

            <div className="title text-center mt-3">Loja do fortnite</div>

            <div id='bundles'></div>
            <Bundles />
            <div id='featured'></div>
            <Loja tipo="featured" />
            <div id='daily'></div>
            <Loja tipo="daily" />

            <div className="subtitle text-center m-5"></div>

            


        </div>
    )
};

export default Home;
