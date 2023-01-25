import { useState } from "react"

export function Imagem(loja: any){
    const [trocaImagem, setTrocaImagem] = useState<any>([loja.img.newDisplayAsset.materialInstances[0].images.Background])
    function trocarImagem(loja: any) {
        const maximo = loja.img.newDisplayAsset.materialInstances.length
        for(let i=0; i<= maximo; i++){
            setTimeout(() => {
                setTrocaImagem(loja.img.newDisplayAsset.materialInstances[i].images.Background)
            }, 5000)
        }
    }

    return (
        <div className="loja-fundo d-flex justify-content-center" id={loja.img.items[0].rarity.value}>
            <img width="100%" className="" src={loja.img.newDisplayAsset.materialInstances[0].images.Background != null ? (loja.img.newDisplayAsset.materialInstances[0].images.Background) : (loja.img.items[0].image.icon)} />
        </div>
    )
}