function createGame(player1, hour, player2) {
  return `
 <li>
   <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
   <strong>${hour}</strong>
   <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
 </li>
 `
}

let delay = -0.3

function createCard(date, day, games, link) {
  delay = delay + 0.3
  return `
          
          <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
            
            <ul>
           ${games}
          </ul>
          
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "Quinta", createGame("brazil", "07:00", "camaroes")) +
  createCard(
    "28/11",
    "Sexta",
    createGame("hungria", "09:00", "india") +
      createGame("japao", "19:00", "camaroes")
  ) +
  createCard(
    "30/02",
    "Sabado",
    createGame("comoros", "13:00", "argentina") +
      createGame("japao", "19:00", "brazil")
  )
