const Item = ({ selectableRef, isSelected, isSelecting, item, months, value }) => {

  const selected = isSelected ? "selected" : "";
  const selecting = isSelecting ? "selecting" : "";

  const mystyle = {
    height: parseFloat((item.importo / value) * 100).toFixed(2) + "%",
  };

  return (
    <div
      className={"list__item " + selected + " " + selecting}
      ref={selectableRef}
    >
      <div className="list__item_header">{months}</div>
      <div className="list__item_content">
        <div className="list__item_perc" style={mystyle}></div>
        <div className="list__item__content_details">
          <p>{item.documenti} doc.</p>
          <p>{item.importo} €</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
