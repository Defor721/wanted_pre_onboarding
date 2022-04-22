function Dropdown() {
  return (
    <>
      <div className="dropDiv">
        <input type="text" list="datalist" className="dropInput" />
        <datalist id="datalist">
          <option value="All Symbols"></option>
          <option value="BTCUSD.PERP"></option>
          <option value="ETHUSD.PERP"></option>
          <option value="BCHUSD.PERP"></option>
          <option value="LTCUSD.PERP"></option>
          <option value="XRPUSD.PERP"></option>
          <option value="HEXUSD.PERP"></option>
          <option value="DOGEUSD.PERP"></option>
        </datalist>
      </div>
    </>
  );
}

export default Dropdown;
