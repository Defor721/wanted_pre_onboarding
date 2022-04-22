function Input() {
  // email

  function emailChanger() {
    const userEmail = document.querySelector("#email");
    let userValue = userEmail.value;
    let tester = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    const invalid = document.querySelector(".invalid");
    const emailIcon = document.querySelector("#emailIcon");

    let tested = tester.test(userValue);
    if (tested === false) {
      invalid.style = "visibility:visible";
      emailIcon.style = "opacity:40%";
    } else {
      invalid.style = "visibility:hidden";
      emailIcon.style = "opacity:100%";
    }
  }
  // password
  let pwCheck = true;
  function pwChanger() {
    if (pwCheck === true) {
      document.querySelector("#password").type = "text";
      document.querySelector("#pwIcon").className = "fa-solid fa-eye";
      pwCheck = false;
    } else {
      document.querySelector("#password").type = "password";
      document.querySelector("#pwIcon").className = "fa-solid fa-eye-slash";
      pwCheck = true;
    }
  }
  return (
    <>
      <div className="inputDiv">
        <label for="email">
          &nbsp;E-mail
          <br></br>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            className="emailBox"
            onChange={emailChanger}
          />
          <i class="fa-solid fa-circle-check" id="emailIcon"></i>
        </label>
        <br></br>
        <p className="invalid">Invalid e-mail address</p>
        <br></br>
        <label for="password">
          &nbsp;Password
          <br></br>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="passwordBox"
          />
          <i
            className="fa-solid fa-eye-slash"
            id="pwIcon"
            onClick={pwChanger}
          ></i>
        </label>
      </div>
    </>
  );
}

export default Input;
