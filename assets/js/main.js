const API_KEY = "058ec9d6-2e6a-42d5-b375-8ac49cdafcb8"
const API_URL = "http://146.59.242.125:3009"
let promoContainer = document.querySelector("#promosContainer")


async function getPromo() {
    const response = await fetch(API_URL + "/promos", {
        method: "GET",
        headers: {
            authorization: "Bearer " + API_KEY
        }
    })
    const data = await response.json()
    console.log(data);
    return data

}


function createPromo(promo) {
    let titreHtroa = document.createElement("h3")
    titreHtroa.textContent = promo.name
    promoContainer.appendChild(titreHtroa)


    let paragrapheUn = document.createElement("p")
    paragrapheUn.textContent = "date de debut : " + promo.startDate
    promoContainer.appendChild(paragrapheUn)


    let paragrapheDe = document.createElement("p")
    paragrapheDe.textContent = "date de fin : " + promo.endDate
    promoContainer.appendChild(paragrapheDe)


    let modifierBtn = document.createElement("button")
    modifierBtn.textContent = "Modifier"
    promoContainer.appendChild(modifierBtn)

    let supprimerBtn = document.createElement("button")
    supprimerBtn.textContent = "supprimer"
    promoContainer.appendChild(supprimerBtn)

    let infoBtn = document.createElement("button")
    infoBtn.textContent = "Info"
    promoContainer.appendChild(infoBtn)
}


async function displayPromos() {
    const promos = await getPromo()
    promos.forEach(promo => {
        createPromo(promo)
        deletepromo(promo)
    });
}


displayPromos()

function deletepromo(promo) {
   if (supprimerBtn) {
    supprimerBtn = document.addEventListener("click", function () {
    supprimerBtn.classlist.add("hidden");
})
   } 
   
 
}