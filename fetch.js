function verileriOku() {
  fetch("https://randomuser.me/api/?results=10")
    .then((hamVeri) => hamVeri.json())
    .then((jsonSonuc) => {
      const userCard = document.getElementById("user-card");

      for (let i = 0; i < 10; i++) {
        let usernameDiv = document.createElement("div");
        let usernameText = document.createTextNode(
          "Username: " + jsonSonuc.results[i].name.first
        );
        usernameDiv.appendChild(usernameText);

        let lastNameDiv = document.createElement("div");
        let lastNameText = document.createTextNode(
          "Lastname: " + jsonSonuc.results[i].name.last
        );
        lastNameDiv.appendChild(lastNameText);

        let mailDiv = document.createElement("div");
        let mailText = document.createTextNode(
          "Email: " + jsonSonuc.results[i].email
        );
        mailDiv.appendChild(mailText);

        let genderDiv = document.createElement("div");
        let genderText = document.createTextNode(
          "Gender: " + jsonSonuc.results[i].gender
        );
        genderDiv.appendChild(genderText);

        let telefonDiv = document.createElement("div");
        let telefonText = document.createTextNode(
          "Telefon: " + jsonSonuc.results[i].phone
        );
        telefonDiv.appendChild(telefonText);

        userCard.appendChild(usernameDiv);
        userCard.appendChild(lastNameDiv);
        userCard.appendChild(mailDiv);
        userCard.appendChild(genderDiv);
        userCard.appendChild(telefonDiv);

        let hr = document.createElement("hr");
        userCard.appendChild(hr);
      }
    });
}

verileriOku();
