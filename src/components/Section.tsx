import Items from "./Items";
import vbucks from '../assets/vbucks.webp'
import 'bootstrap/dist/css/bootstrap.min.css';

const Section = (props: any) => {
  console.log(props)
  const loja = props.sectionLoja;
  return (
      <div className="row d-flex flex-wrap justify-content-center m-2">
      {loja.length === 0 ? (<p>Carregando...</p>) : (
                    loja.map((loja: any, index: number) => (
                        
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
                    ))
                )}
                </div>
  );
};

export default Section;
