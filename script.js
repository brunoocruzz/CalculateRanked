let win;
let defeat;
let rank;

console.log(calculateRanked(99, 20))

function calculateRanked (win, defeat) {
  let balanceVictory = win - defeat;

  if (balanceVictory >= 0 && balanceVictory <= 10) {
     rank = "Ferro";
     return (`O Herói tem de saldo de ${balanceVictory} está no nível de ${rank}`);
  } else if (balanceVictory >= 11 && balanceVictory <= 20) {
    (rank = "Bronze");
    return (`O Herói tem de saldo de ${balanceVictory} está no nível de ${rank}`);
  } else if (balanceVictory >= 21 && balanceVictory <= 50) {
    (rank = "Prata");
    return (`O Herói tem de saldo de ${balanceVictory} está no nível de ${rank}`);
  } else if (balanceVictory >= 51 && balanceVictory <= 80) {
    (rank = "Ouro");
    return (`O Herói tem de saldo de ${balanceVictory} está no nível de ${rank}`);

  } else if (balanceVictory >= 81 && balanceVictory <= 90) {
    (rank = "Diamante");
    return (`O Herói tem de saldo de ${balanceVictory} está no nível de ${rank}`);

  } else if (balanceVictory >= 91 && balanceVictory <= 100) {
    (rank = "Lendário");
    return (`O Herói tem de saldo de ${balanceVictory} está no nível de ${rank}`);
  } else if (balanceVictory >= 101) {
    (rank = "Imortal");
    return (`O Herói tem de saldo de ${balanceVictory} está no nível de ${rank}`);
  }else {
    return 'Valor negativo não é válido'
  }
};
