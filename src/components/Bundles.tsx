import { useState, useEffect } from "react";
import apiFetch from "../axios/config";
import 'bootstrap/dist/css/bootstrap.min.css';

import Items from "./Items";


const Bundles = () => {

    const [loja2, setLoja2] = useState([])


    const getLoja = async () => {
        try {
            const response = await apiFetch.get("/combined?language=pt-BR")
            const data = response.data;
            const daily_entries = data.data.featured.entries
            const bundles = daily_entries.filter(bundles_filter);
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
            <div className="row d-flex flex-wrap justify-content-center m-2">
                {loja2.length === 0 ? (<p>Carregando...</p>) : (
                    loja2.map((loja: any, index: number) => (
                        <div className="col-xl-3 col-md-6 gap-2 mb-2" key={index}>
                            {loja.regularPrice-loja.finalPrice != 0 ? 
                            (
                                <div className="bundle-off">
                                    <div className="text-center bundle-off-text"><span>Economize {loja.regularPrice-loja.finalPrice} V-Bucks</span><div className="bundle-quantidade"><span>{loja.items.length}</span></div></div>
                                </div>
                            ) : 
                            (
                                <div className="bundle-off-1">
                                    <div className="text-center bundle-off-text"><span>{loja.bundle.info}</span><div className="bundle-quantidade-1"><span>{loja.items.length}</span></div></div>
                                </div>
                            )
                            }

                            
                            <div className="d-flex justify-content-center" id={loja.items[0].rarity.value}>
                                <img width="100%" className="" src={loja.newDisplayAsset.materialInstances[0].images.Background != null ? (loja.newDisplayAsset.materialInstances[0].images.Background) : (loja.bundle.image)} />
                            </div>
                            <div className="bundle-bar" id={loja.items[0].rarity.value}>
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