const Item_info = (props: any) => {
  const item = props.props;
  return (
    <div>
      {item.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        item.map((props: any, i: number) => (
          <div key={i} className="row m-3 d-flex justify-content-center">
            <div className="col-md d-flex align-self-center justify-content-center mb-md-0 mb-3">
              <img
                width={props.images.featured != null ? "100%" : "70%"}
                src={
                  props.images.featured != null
                    ? props.images.featured
                    : props.images.icon
                }
              />
            </div>
            <div className="col-md align-self-center">
              <div className="justify-content-center modal-description">
                <b>Item:&nbsp;</b> {props.name}
              </div>
              <div className="justify-content-center modal-description">
                <b>Descrição:&nbsp;</b> {props.description}
              </div>
              <div className="justify-content-center modal-description">
                <b>Tipo:&nbsp;</b> {props.type.value}
              </div>
              <div className="justify-content-center modal-description">
                <b>Raridade:&nbsp;</b> {props.rarity.value}
              </div>
              <div
                className="justify-content-center modal-description modal-raridade w-75 mt-3"
                id={props.rarity.value}
              >
                &nbsp;
              </div>
            </div>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Item_info;
