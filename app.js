function verileriOku() {
    fetch("https://randomuser.me/api/?results=10")
      .then((hamVeri) => hamVeri.json())
      .then((jsonSonuc) => {
        const users = jsonSonuc.results;
        users.forEach((user) => {
          const userData = {
            name: user.name.first + " " + user.name.last,
            gender: user.gender,
            email: user.email,
          };
          addPlanToPage(userData);
        });
      });
  }
  
  function addPlanToPage(userData) {
    const planContainer = document.getElementById("plan-div");
  
    const planDiv = document.createElement("div");
    planDiv.classList.add("plan");
  
    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");
  
    const priceHeader = document.createElement("h1");
    priceHeader.textContent = userData.name;
  
    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = userData.email;
  
    priceDiv.appendChild(priceHeader);
    priceDiv.appendChild(priceParagraph);
  
    const subscriptionHeader = document.createElement("h2");
    subscriptionHeader.textContent = userData.gender;
  
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  
    const hrElement = document.createElement("hr");
  
    planDiv.appendChild(priceDiv);
    planDiv.appendChild(subscriptionHeader);
    planDiv.appendChild(descriptionParagraph);
    planDiv.appendChild(hrElement);
  
    planContainer.appendChild(planDiv);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    verileriOku();
  });