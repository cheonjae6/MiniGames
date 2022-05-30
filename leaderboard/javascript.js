var tabs = document.querySelectorAll(".lboard_tabs ul li");
var today = document.querySelector(".today");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var items = document.querySelectorAll(".lboard_item");

var names = document.querySelectorAll(".name-text");
var points = document.querySelectorAll(".points");
var bars = document.querySelectorAll(".inner_bar");

var loadingBackdrop = document.querySelector("#loading");

tabs.forEach(function (tab) {
  tab.addEventListener("click", handleClick);
});

window.onload = () => {
  handleClick({ target: tabs[0] });
};

// ----------

async function handleClick(e) {
  console.log(e);
  var tab = e.target;
  // get selected game's name
  var currenttab = tab.getAttribute("data-li");

  // mark selected game as white text
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });
  tab.classList.add("active");

  // get ranking data from server
  const requestData = {
    gamename: currenttab,
    getNumber: 5,
    sortMethod: "descending",
  };
  loading(true); // start loading
  const response = await getData(requestData);
  loading(false); // end loading

  console.log(response);
  const rankingData = response.data[requestData.gamename];
  const dataNum = rankingData.length;

  // render about exist ranking data
  for (var i = 0; i < dataNum; i++) {
    const { username, score } = rankingData[i];

    names[i].textContent = username;
    points[i].textContent = `${score} points`;

    const barWidth = parseInt(100 * (score / rankingData[0].score));
    bars[i].style.width = `${barWidth}%`;
  }

  // render about 'NO DATA'
  for (var i = dataNum; i < 5; i++) {
    names[i].textContent = "NO Data";
    points[i].textContent = "-";
    bars[i].style.width = "0%";
  }
}

function loading(isloading) {
  if (isloading) loadingBackdrop.style.display = "flex";
  else loadingBackdrop.style.display = "none";
}

async function getData(params) {
  const baseURL =
    "https://script.google.com/macros/s/AKfycbzl7yTwWaIYtiF1kVcQ6vxtLTAU5v3WPa7j9Cyd1VD6S1QTz97kmTDAiJKToOMP0_G2/exec";
  const { gamename, getNumber, sortMethod } = params;

  const res = await fetch(
    `${baseURL}?gamename=${gamename}&getNumber=${getNumber}&sortMethod=${sortMethod}`
  );
  return res.json();
}
