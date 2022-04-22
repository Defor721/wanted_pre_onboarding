function Slider() {
  function mover1() {
    const silde = document.querySelector(".sliderBar");
    silde.value = 1;
    const numberBox = document.querySelector(".numberBox");
    numberBox.value = 1;
  }
  function mover2() {
    const silde = document.querySelector(".sliderBar");
    silde.value = 25;
    const numberBox = document.querySelector(".numberBox");
    numberBox.value = 25;
  }
  function mover3() {
    const silde = document.querySelector(".sliderBar");
    silde.value = 50;
    const numberBox = document.querySelector(".numberBox");
    numberBox.value = 50;
  }
  function mover4() {
    const silde = document.querySelector(".sliderBar");
    silde.value = 75;
    const numberBox = document.querySelector(".numberBox");
    numberBox.value = 75;
  }
  function mover5() {
    const silde = document.querySelector(".sliderBar");
    silde.value = 100;
    const numberBox = document.querySelector(".numberBox");
    numberBox.value = 100;
  }
  function sliderChange() {
    const numberBox = document.querySelector(".numberBox");
    const sliderBa = document.querySelector(".sliderBar");
    numberBox.value = sliderBa.value;
  }

  return (
    <>
      <div className="sliderDiv">
        <div className="valueBox">
          <input type="text" className="numberBox" />
          <em className="em">%</em>
        </div>
        <div className="sliderBox">
          <input type="range" className="sliderBar" onChange={sliderChange} />
        </div>
        <table className="numTable">
          <td>
            <button onClick={mover1} value="1">
              1%
            </button>
          </td>
          <td>
            <button onClick={mover2}>25%</button>
          </td>
          <td>
            <button onClick={mover3}>50%</button>
          </td>
          <td>
            <button onClick={mover4}>75%</button>
          </td>
          <td>
            <button onClick={mover5}>100%</button>
          </td>
        </table>
      </div>
    </>
  );
}

export default Slider;
