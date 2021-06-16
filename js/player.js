class Player {
  constructor() {
    this.index = null;
    this.distance = 0;
      this.name = null;
      this.rank = null
  }
  //read playerCount from database
  getCount() {
    database.ref("playerCount").on("value", (data) => {
      playerCount = data.val();
    });
  }
  // update player names
  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
     distance: this.distance,
      rank : this.rank
    });
  }

  //update count in database
  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }

  static getPlayerInfo() {
    database.ref("players").on("value", (data) => {
      allPlayers = data.val();
    });
  }

  getCarsAtEnd() {
    database.ref("CarsAtEnd").on("value", (data) => {
      CarsAtEnd = data.val();
    });
  }
  static updateCarsAtEnd() {

    database.ref("/").update({
        CarsAtEnd:CarsAtEnd + 1
    }
    );
      this.rank = this.rank+1
  }
}
