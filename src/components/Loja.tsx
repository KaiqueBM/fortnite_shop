import { useState, useEffect } from "react";
import apiFetch from "../axios/config";
import 'bootstrap/dist/css/bootstrap.min.css';
import vbucks from '../assets/vbucks.webp'

import Items from "./Items";


const Loja = (tipo: any) => {

    const [loja, setLoja] = useState<any>([])
    const [abas, setAbas] = useState<any>([])

    const loja_tipo = tipo.tipo

    const getLoja = async () => {
        try {
            const response = await apiFetch.get("/combined?language=pt-BR")
            const data = response.data;
            const daily_entries = tipo_filter(data, loja_tipo)


            const items_all = daily_entries.filter(items_filter);

            const sectionedItems = organizeItemsBySection(items_all);
            const abasFiltradas: any = section(items_all)
            //console.log(sectionedItems)
            setAbas(abasFiltradas)
            setLoja(sectionedItems)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLoja();
    }, [])

    function organizeItemsBySection(items: any[]) {
        const sections: any = [];
        items.forEach(item => {
            const sectionName = item.section.id;
            if (!sections[sectionName]) {
                sections[sectionName] = [];
            }
            sections[sectionName].push(item)
        });

        return sections;
    }

    function section(items: any[]) {
        const sectionsSet = new Set<string>();
        const uniqueSectionNames: string[] = [];
        items.forEach((item) => {
            const sectionName = item.section.id;
            if (!sectionsSet.has(sectionName)) {
                sectionsSet.add(sectionName);
                uniqueSectionNames.push(sectionName);
            }
        });
        uniqueSectionNames.sort()
        return uniqueSectionNames;
    }


    function items_filter(props: any) {
        if (props.bundle == null) {
            return props;
        }
    }

    function tipo_filter(props: any, tipo: string) {
        if (tipo == "featured")
            return props.data.featured.entries
        if (tipo == "daily")
            return props.data.daily.entries
    }


    return (
        <div className="container-fluid">
            <div className="subtitle text-center mt-5 mb-2 ">{loja_tipo}</div>
                {loja && abas && (
                    <>
                        {abas.map((aba:string, index:number)=>(
                            <div className="row d-flex flex-wrap justify-content-start m-2" key={index}>
                                <div className="subtitle text-start mt-5 mb-2 ">{loja[aba][0].section.name + " ["+index+"]"}</div>
                            {loja[aba].map((loja: any, index: number) => (

                                <div className="col-xl-3 col-md-6 gap-2 mb-2 loja" key={index}>
                                    <div className="loja-fundo d-flex justify-content-center" id={loja.items[0].rarity.value}>
                                        {loja.newDisplayAsset == null ? (<img width="100%" className="" src={loja.items[0].images.featured} />) : (<img width="100%" className="" src={loja.newDisplayAsset.materialInstances[0].images.Background != null ? (loja.newDisplayAsset.materialInstances[0].images.Background) : (loja.newDisplayAsset.materialInstances[0].images.OfferImage)} />)}
        
                                    </div>
                                    <div className="loja-bar" id={loja.items[0].rarity.value}>
                                        <div className="text-center loja-title">{loja.items[0].name} </div>
                                        <div className="text-center loja-price" ><img width="20px" src={vbucks} />{loja.finalPrice} v-bucks</div>
                                        <Items all={loja} />
                                    </div>
                                </div>
                            ))}
                            </div>
                        ))}
                    </>
                )}
     

        </div>
    )
};

export default Loja;