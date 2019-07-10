class Wallet {
 constructor(money) {
  let _money = money;
  //pobiera zawartość portfela
  this.getWalletValue = () => _money;

  //sprawdza ilość cashu czy jest wystarczająca

  this.checkCanPlay = value => {
   if (_money >= value) return true;
   return false;
  }

  this.changeWallet = (value, type = "+") => {
   if (typeof value === "number" && !isNaN(value)) {
    if (type === "+") {
     return _money += value;
    } else if (type === "-") {
     return _money -= value;
    } else {
     throw new Error("Błąd")
    }

   } else {
    console.log(typeof value);
    throw new Error("Błąd")
   }
  }

 }

}

// const wallet = new Wallet(200)