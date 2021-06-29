function computerPlay() {
    let stance = ["rock", "paper", "scissors"];
    let computerHand = stance[Math.floor(Math.random()*stance.length)];

    return computerHand;
}