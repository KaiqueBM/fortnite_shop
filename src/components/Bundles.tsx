import { useState, useEffect } from "react";
import apiFetch from "../axios/config";
import 'bootstrap/dist/css/bootstrap.min.css';

import Items from "./Items";


const Bundles = () => {

    const [loja2, setLoja2] = useState([])


    const getLoja = async () => {
        try {
            const response = await apiFetch.get("/combined")
            const data = response.data;
            //console.log(data.data)
            const daily_entries = data.data.featured.entries
            const bundles = daily_entries.filter(bundles_filter);
            console.log(bundles)
            setLoja2(bundles)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLoja();
    }, [])


    function bundles_filter(props: any) {
        if (props.bundle != null) {
            return props;
        }
    }

    return ( 
        <div className="container-fluid">
            
            <div className="subtitle text-center mt-2 mb-2">Bundles</div>
            <div className="row d-flex justify-content-center">
                {loja2.length === 0 ? (<p>Carregando...</p>) : (
                    loja2.map((loja: any, index: number) => (
                        <div className="col-lg-2 col-12 m-1" key={index}>
                            {loja.regularPrice-loja.finalPrice != 0 ? 
                            (
                                <div className="bundle-off">
                                    <div className="text-center bundle-off-text"><span>Economize {loja.regularPrice-loja.finalPrice} V-Bucks</span><div className="bundle-quantidade"><span>{loja.items.length}</span></div></div>
                                </div>
                            ) : 
                            (
                                <div className="bundle-off-1">
                                    <div className="text-center bundle-off-text"><span>Novo!</span><div className="bundle-quantidade-1"><span>{loja.items.length}</span></div></div>
                                </div>
                            )
                            }

                            
                            <div className="bundle d-flex justify-content-center">
                                <img width="70%" className="" src={loja.bundle.image} />
                            </div>
                            <div className="bundle-bar">
                                <div className="text-center loja-title">{loja.bundle.name}</div>
                                <div className="text-center loja-price"><b>{loja.finalPrice}</b> V-Bucks </div>
                                
                                <Items all={loja} />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
     )
};

export default Bundles;