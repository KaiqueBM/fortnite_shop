import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function Items(item:any) {
  const [basicModal, setBasicModal] = useState(false);
  //console.log(item.all)
  const item_info = item.all
  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <div onClick={toggleShow} className="loja-price text-center">Mais informações</div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size="fullscreen">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className='d-flex justify-content-center'>{item_info.items[0].name}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row m-3 d-flex justify-content-center">
                <div className="col d-flex align-self-center justify-content-center">
                  <img width="100%" src={item_info.items[0].images.featured} />
                </div>
                <div className="col align-self-center">
                  <div className="d-flex justify-content-center modal-description"><b>Item:&nbsp;</b> {item_info.items[0].name}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Descrição:&nbsp;</b> {item_info.items[0].description}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Tipo:&nbsp;</b> {item_info.items[0].type.value}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Raridade:&nbsp;</b> {item_info.items[0].rarity.value}</div>
                  <div className="d-flex justify-content-center modal-description modal-raridade w-75 mt-3" id={item_info.items[0].rarity.value}>&nbsp;</div>
                </div>
              </div>
            
            {item_info.items[1] != null ? (
              
              <div className="row m-3 d-flex justify-content-center">
                <hr />
                <div className="col d-flex align-self-center justify-content-center">
                  <img width="70%" src={item_info.items[1].images.icon} />
                </div>
                <div className="col align-self-center">
                  <div className="d-flex justify-content-center modal-description"><b>Item:&nbsp;</b> {item_info.items[1].name}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Descrição:&nbsp;</b> {item_info.items[1].description}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Tipo:&nbsp;</b> {item_info.items[1].type.value}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Raridade:&nbsp;</b> {item_info.items[1].rarity.value}</div>
                  <div className="d-flex justify-content-center modal-description modal-raridade w-75 mt-3" id={item_info.items[1].rarity.value}>&nbsp;</div>
                </div>
              </div>
              ): (<></>)
            }
            
            {item_info.items[2] != null ? (
              
              <div className="row m-3 d-flex justify-content-center">
                <hr />
                <div className="col d-flex align-self-center justify-content-center">
                  <img width="70%" src={item_info.items[2].images.icon} />
                </div>
                <div className="col align-self-center">
                  <div className="d-flex justify-content-center modal-description"><b>Item:&nbsp;</b> {item_info.items[2].name}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Descrição:&nbsp;</b> {item_info.items[2].description}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Tipo:&nbsp;</b> {item_info.items[2].type.value}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Raridade:&nbsp;</b> {item_info.items[2].rarity.value}</div>
                  <div className="d-flex justify-content-center modal-description modal-raridade w-75 mt-3" id={item_info.items[2].rarity.value}>&nbsp;</div>
                </div>
              </div>
              ): (<></>)
            }

            {item_info.items[3] != null ? (
              
              <div className="row m-3 d-flex justify-content-center">
                <hr />
                <div className="col d-flex align-self-center justify-content-center">
                  <img width="70%" src={item_info.items[3].images.icon} />
                </div>
                <div className="col align-self-center">
                  <div className="d-flex justify-content-center modal-description"><b>Item:&nbsp;</b> {item_info.items[3].name}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Descrição:&nbsp;</b> {item_info.items[3].description}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Tipo:&nbsp;</b> {item_info.items[3].type.value}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Raridade:&nbsp;</b> {item_info.items[3].rarity.value}</div>
                  <div className="d-flex justify-content-center modal-description modal-raridade w-75 mt-3" id={item_info.items[3].rarity.value}>&nbsp;</div>
                </div>
              </div>
              ): (<></>)
            }

{item_info.items[4] != null ? (
              
              <div className="row m-3 d-flex justify-content-center">
                <hr />
                <div className="col d-flex align-self-center justify-content-center">
                  <img width="70%" src={item_info.items[4].images.icon} />
                </div>
                <div className="col align-self-center">
                  <div className="d-flex justify-content-center modal-description"><b>Item:&nbsp;</b> {item_info.items[4].name}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Descrição:&nbsp;</b> {item_info.items[4].description}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Tipo:&nbsp;</b> {item_info.items[4].type.value}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Raridade:&nbsp;</b> {item_info.items[4].rarity.value}</div>
                  <div className="d-flex justify-content-center modal-description modal-raridade w-75 mt-3" id={item_info.items[4].rarity.value}>&nbsp;</div>
                </div>
              </div>
              ): (<></>)
            }

{item_info.items[5] != null ? (
              
              <div className="row m-3 d-flex justify-content-center">
                <hr />
                <div className="col d-flex align-self-center justify-content-center">
                  <img width="70%" src={item_info.items[5].images.icon} />
                </div>
                <div className="col align-self-center">
                  <div className="d-flex justify-content-center modal-description"><b>Item:&nbsp;</b> {item_info.items[5].name}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Descrição:&nbsp;</b> {item_info.items[5].description}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Tipo:&nbsp;</b> {item_info.items[5].type.value}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Raridade:&nbsp;</b> {item_info.items[5].rarity.value}</div>
                  <div className="d-flex justify-content-center modal-description modal-raridade w-75 mt-3" id={item_info.items[5].rarity.value}>&nbsp;</div>
                </div>
              </div>
              ): (<></>)
            }

  {item_info.items[6] != null ? (
                
                <div className="row m-3 d-flex justify-content-center">
                  <hr />
                  <div className="col d-flex align-self-center justify-content-center">
                    <img width="70%" src={item_info.items[6].images.icon} />
                  </div>
                  <div className="col align-self-center">
                    <div className="d-flex justify-content-center modal-description"><b>Item:&nbsp;</b> {item_info.items[6].name}</div>
                    <div className="d-flex justify-content-center modal-description"><b>Descrição:&nbsp;</b> {item_info.items[6].description}</div>
                    <div className="d-flex justify-content-center modal-description"><b>Tipo:&nbsp;</b> {item_info.items[6].type.value}</div>
                    <div className="d-flex justify-content-center modal-description"><b>Raridade:&nbsp;</b> {item_info.items[6].rarity.value}</div>
                    <div className="d-flex justify-content-center modal-description modal-raridade w-75 mt-3" id={item_info.items[6].rarity.value}>&nbsp;</div>
                  </div>
                </div>
                ): (<></>)
              }

{item_info.items[7] != null ? (
              
              <div className="row m-3 d-flex justify-content-center">
                <hr />
                <div className="col d-flex align-self-center justify-content-center">
                  <img width="70%" src={item_info.items[7].images.icon} />
                </div>
                <div className="col align-self-center">
                  <div className="d-flex justify-content-center modal-description"><b>Item:&nbsp;</b> {item_info.items[7].name}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Descrição:&nbsp;</b> {item_info.items[7].description}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Tipo:&nbsp;</b> {item_info.items[7].type.value}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Raridade:&nbsp;</b> {item_info.items[7].rarity.value}</div>
                  <div className="d-flex justify-content-center modal-description modal-raridade w-75 mt-3" id={item_info.items[7].rarity.value}>&nbsp;</div>
                </div>
              </div>
              ): (<></>)
            }

{item_info.items[8] != null ? (
              
              <div className="row m-3 d-flex justify-content-center">
                <hr />
                <div className="col d-flex align-self-center justify-content-center">
                  <img width="70%" src={item_info.items[8].images.icon} />
                </div>
                <div className="col align-self-center">
                  <div className="d-flex justify-content-center modal-description"><b>Item:&nbsp;</b> {item_info.items[8].name}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Descrição:&nbsp;</b> {item_info.items[8].description}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Tipo:&nbsp;</b> {item_info.items[8].type.value}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Raridade:&nbsp;</b> {item_info.items[8].rarity.value}</div>
                  <div className="d-flex justify-content-center modal-description modal-raridade w-75 mt-3" id={item_info.items[8].rarity.value}>&nbsp;</div>
                </div>
              </div>
              ): (<></>)
            }

{item_info.items[9] != null ? (
              
              <div className="row m-3 d-flex justify-content-center">
                <hr />
                <div className="col d-flex align-self-center justify-content-center">
                  <img width="70%" src={item_info.items[9].images.icon} />
                </div>
                <div className="col align-self-center">
                  <div className="d-flex justify-content-center modal-description"><b>Item:&nbsp;</b> {item_info.items[9].name}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Descrição:&nbsp;</b> {item_info.items[9].description}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Tipo:&nbsp;</b> {item_info.items[9].type.value}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Raridade:&nbsp;</b> {item_info.items[9].rarity.value}</div>
                  <div className="d-flex justify-content-center modal-description modal-raridade w-75 mt-3" id={item_info.items[9].rarity.value}>&nbsp;</div>
                </div>
              </div>
              ): (<></>)
            }

{item_info.items[10] != null ? (
              
              <div className="row m-3 d-flex justify-content-center">
                <hr />
                <div className="col d-flex align-self-center justify-content-center">
                  <img width="70%" src={item_info.items[10].images.icon} />
                </div>
                <div className="col align-self-center">
                  <div className="d-flex justify-content-center modal-description"><b>Item:&nbsp;</b> {item_info.items[10].name}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Descrição:&nbsp;</b> {item_info.items[10].description}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Tipo:&nbsp;</b> {item_info.items[10].type.value}</div>
                  <div className="d-flex justify-content-center modal-description"><b>Raridade:&nbsp;</b> {item_info.items[10].rarity.value}</div>
                  <div className="d-flex justify-content-center modal-description modal-raridade w-75 mt-3" id={item_info.items[10].rarity.value}>&nbsp;</div>
                </div>
              </div>
              ): (<></>)
            }

            <hr></hr>

            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center modal-description"><b>Lançado:&nbsp;</b> Capítulo {item_info.items[0].introduction.chapter} - temporada {item_info.items[0].introduction.season}</div>
                <div className="d-flex justify-content-center modal-description"><b>Quantidade de vezes que apareceu na loja:&nbsp;</b> {item_info.items[0].shopHistory.length - 1}</div>
                <div className="d-flex justify-content-center modal-description"><b>Ultima vez foi em:&nbsp;</b> {item_info.items[0].shopHistory[item_info.items[0].shopHistory.length-2]}</div>
                <div className="d-flex justify-content-center modal-description"><b>Preço:&nbsp;</b> {item_info.finalPrice} v-bucks</div>
              </div>
            </div>
            
            

            </MDBModalBody>

          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}