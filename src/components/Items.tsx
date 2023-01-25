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

              <Item_info props={item_info.items} />

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