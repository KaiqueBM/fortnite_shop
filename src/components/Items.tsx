import React, { useState } from 'react';
import Item_info from './Item_info';
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
  const item_info = item.all
  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
    
      <div onClick={toggleShow} className="loja-price text-center cursor-pointer"><span className='p-2'>Mais informações</span></div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size="fullscreen">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className='d-flex justify-content-center'>DETALHES</MDBModalTitle>
              <MDBBtn className='btn-close p-4' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

              <Item_info props={item_info.items} />
              {item_info === 0 ? (<p>Carregando...</p>) : (
            <div className="row">
              <div className="col">
                <div className="justify-content-center modal-description"><b>Lançado:&nbsp;</b> {item_info.items[0].introduction == null ? (<>Sem informação</>) : (<>Capítulo {item_info.items[0].introduction.chapter} - temporada {item_info.items[0].introduction.season}</>)} </div>
                <div className="justify-content-center modal-description"><b>Quantidade de vezes que apareceu na loja:&nbsp;</b> {item_info.items[0].shopHistory.length - 1}</div>
                <div className="justify-content-center modal-description"><b>Ultima vez foi em:&nbsp;</b> {item_info.items[0].shopHistory[item_info.items[0].shopHistory.length-2]}</div>
                <div className="justify-content-center modal-description"><b>Preço:&nbsp;</b> {item_info.finalPrice} v-bucks</div>
              </div>
            </div>
            )}
            

            </MDBModalBody>

          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}