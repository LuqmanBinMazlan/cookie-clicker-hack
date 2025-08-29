function giveInfiniteCookies() {
  setInterval(() => {
    Game.cookies += 1000000; // adds 1,000,000 cookies every 100 milliseconds
  }, 100);
}
