import 'bootstrap/dist/css/bootstrap.min.css';

import Loja from "../components/Loja"
import Bundles from "../components/Bundles";
import Teste from '../components/Teste';

const Home = () => {

    return (
        <div className="container-fluid">
            <div className='container-fluid header d-flex align-items-center'>
                <div className='container d-flex flex-row justify-content-between'>  
                    <a href='#bundles'><button className='btn-loja'>BUNDLES</button></a>
                    <a href='#featured'><button className='btn-loja'>FEATURED</button></a>
                    <a href='#daily'><button className='btn-loja'>DAILY</button></a>
                </div>
            </div>
            

            

            <div className="title text-center mt-3">loja</div>

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
