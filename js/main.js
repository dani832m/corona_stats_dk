/* Get Data from API */
const xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const dataObj = JSON.parse(this.responseText);
    document.querySelector(".stats-today-confirmed").innerHTML = dataObj.data.today.confirmed;
    document.querySelector(".stats-today-deaths").innerHTML = dataObj.data.today.deaths;

    document.querySelector(".stats-total-confirmed").innerHTML = dataObj.data.latest_data.confirmed;
    document.querySelector(".stats-total-critical").innerHTML = dataObj.data.latest_data.critical;
    document.querySelector(".stats-total-deaths").innerHTML = dataObj.data.latest_data.deaths;
    document.querySelector(".stats-total-recovered").innerHTML = dataObj.data.latest_data.recovered;

    /* For Tooltips */
    document.querySelector(
      ".stats-total-tooltip-death-rate"
    ).innerHTML = `Udgør ${dataObj.data.latest_data.calculated.death_rate.toFixed(2)} %`;
    document.querySelector(
      ".stats-total-tooltip-recovery-rate"
    ).innerHTML = `Udgør ${dataObj.data.latest_data.calculated.recovery_rate.toFixed(2)} %`;
  }
};

xmlhttp.open("GET", "https://corona-api.com/countries/DK", true);
xmlhttp.send();

/* Toggle Footer Text */
const sourceBtn = document.querySelector(".toggle-source");
const footerTxt = document.querySelector(".footer");
let footerTxtVisible = false;

sourceBtn.addEventListener("click", () => {
  if (footerTxtVisible === false) {
    footerTxt.style.visibility = "visible";
    footerTxt.style.bottom = "0";
    footerTxtVisible = true;
  } else {
    footerTxt.style.visibility = "";
    footerTxt.style.bottom = "";
    footerTxtVisible = false;
  }
});

/* Close Footer via X */
const footerCloseBtn = document.querySelector(".footer-close-button");

footerCloseBtn.addEventListener("click", () => {
  footerTxt.style.visibility = "";
  footerTxt.style.bottom = "";
  footerTxtVisible = false;
});
