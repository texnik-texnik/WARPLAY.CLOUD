document.addEventListener("DOMContentLoaded", function () {
  const logImg = document.querySelector("img");
  const logBtn = document.querySelector(".loginBtn");
  const regBtn = document.querySelector(".regBtn");

  const ohReg = document.querySelector(".oh1");
  const ohLog = document.querySelector(".oh2");

  logBtn.addEventListener("click", (evt) => {
    form1.classList.add("d-none");
    form2.classList.remove("d-none");
    ohReg.classList.add("order-3");
    ohReg.classList.remove("order-2");
    ohLog.style.marginLeft = 0;
    ohLog.style.marginRight = "1rem";
    ohLog.classList.add("order-2");
    ohLog.classList.remove("order-3");
    regBtn.classList.remove("text-white");
    logBtn.classList.add("text-white");
    logImg.classList.remove("d-none");
  });

  regBtn.addEventListener("click", (evt) => {
    form2.classList.add("d-none");
    form1.classList.remove("d-none");
    ohReg.classList.add("order-2");
    ohReg.classList.remove("order-3");
    ohLog.style.marginRight = 0;
    ohLog.style.marginLeft = "1rem";
    ohLog.classList.add("order-3");
    ohLog.classList.remove("order-2");
    regBtn.classList.add("text-white");
    logBtn.classList.remove("text-white");
    logImg.classList.add("d-none");
  });

  let formDataReg = {};
  let formDataLog = {};
  const form1 = document.querySelector("#form");
  const form2 = document.querySelector("#form1");
  const Ls = localStorage;
  const inputs1 = form1.querySelectorAll("input");
  const inputs2 = form2.querySelectorAll("input");

  form1.addEventListener("input", function (evt) {
    formDataReg[evt.target.name] = evt.target.value;
    Ls.setItem("formDataReg", JSON.stringify(formDataReg));
  });

  if (Ls.getItem("formData")) {
    formDataReg = JSON.parse(Ls.getItem("formData"));

    for (let key in formDataReg) {
      if (
        form1.elements[key].type === "checkbox" &&
        formDataReg[key] === "on"
      ) {
        form1.elements[key].checked = true;
      } else {
        form1.elements[key].value = formDataReg[key];
      }
    }
  }
  form2.addEventListener("submit", clearStorage);
  form2.addEventListener("input", function (evt) {
    formDataLog[evt.target.name] = evt.target.value;
    Ls.setItem("formDataReg", JSON.stringify(formDataLog));
  });

  if (Ls.getItem("formData")) {
    formDataLog = JSON.parse(Ls.getItem("formData"));

    for (let key in formDataLog) {
      if (
        form2.elements[key].type === "checkbox" &&
        formDataLog[key] === "on"
      ) {
        form2.elements[key].checked = true;
      } else {
        form2.elements[key].value = formDataLog[key];
      }
    }
  }
  form2.addEventListener("submit", clearStorage2);

  function clearStorage(e) {
    e.preventDefault();
    inputs1.forEach((input) => {
      if (input.value === "") {
        input.classList.add("error_input");
      }
      if (input.value !== "") {
        input.classList.remove("error_input");
      }
    });
  }
  function clearStorage2(e) {
    e.preventDefault();
    inputs2.forEach((input) => {
      if (input.value === "") {
        input.classList.add("error_input");
      }
      if (input.value !== "") {
        input.classList.remove("error_input");
      }
    });
  }
});
