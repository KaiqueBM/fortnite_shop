import { useState } from "react"

export function Imagem(loja1: any){
    console.log(loja1)
    const loja = loja1.filter(items_filter);
    console.log(loja)

    function items_filter(props: any) {
        console.log(props)
        if (props.img.newDisplayAsset != null) {
            return props;
        }
    }

    return (
        <div className="loja-fundo d-flex justify-content-center" id={loja.img.items[0].rarity.value}>
            <img width="100%" className="" src={loja.img.newDisplayAsset.materialInstances[0].images.Background != null ? (loja.img.newDisplayAsset.materialInstances[0].images.Background) : (loja.img.items[0].images.icon)} />
        </div>
    )
}