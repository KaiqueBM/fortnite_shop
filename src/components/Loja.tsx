import { useState, useEffect } from "react";
import apiFetch from "../axios/config";
import 'bootstrap/dist/css/bootstrap.min.css';

import Items from "./Items";
import { Imagem } from "./Imagem";


const Loja = (tipo: any) => {

    const [loja, setLoja] = useState([])

    const loja_tipo = tipo.tipo

    const getLoja = async () => {
        try {
            const response = await apiFetch.get("/combined?language=pt-BR")
            const data = response.data;
            const daily_entries = tipo_filter(data, loja_tipo)
            
            
            const items_all = daily_entries.filter(items_filter);
            setLoja(items_all)
            console.log(items_all)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLoja();
    }, [])


    function items_filter(props: any) {
        if (props.bundle == null) {
            return props;
        }
    }

    function tipo_filter(props: any, tipo: string){
        if (tipo == "featured")
            return props.data.featured.entries
        if (tipo == "daily")
            return props.data.daily.entries
    } 


    return ( 
        <div className="container-fluid">
            <div className="subtitle text-center mt-5 mb-2 ">{loja_tipo}</div>

            <div className="row d-flex flex-wrap justify-content-center m-2">
                {loja.length === 0 ? (<p>Carregando...</p>) : (
                    loja.map((loja: any, index: number) => (
                        
                        <div className="col-xl-3 col-md-6 gap-2 mb-2 loja" key={index}>
                                                            <div className="loja-fundo d-flex justify-content-center" id={loja.items[0].rarity.value}>
                                                                {loja.newDisplayAsset == null ? (<img width="100%" className="" src={loja.items[0].images.featured} />) : (<img width="100%" className="" src={loja.newDisplayAsset.materialInstances[0].images.Background != null ? (loja.newDisplayAsset.materialInstances[0].images.Background) : (loja.newDisplayAsset.materialInstances[0].images.OfferImage)} />)}
                                                            
                                        </div>
                            <div className="loja-bar" id={loja.items[0].rarity.value}>
                                <div className="text-center loja-title">{loja.items[0].name} </div>
                                <div className="text-center loja-price" >{loja.finalPrice} v-bucks</div>
                                <Items all={loja} />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
     )
};

export default Loja;