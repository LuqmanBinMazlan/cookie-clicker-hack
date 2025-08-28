function giveMeCookies(amount) {
    if (typeof amount !== "number" || amount <= 0) {
        console.log("Please enter a positive number.");
        return;
    }
    if (typeof Game !== "undefined" && typeof Game.Earn === "function") {
        Game.Earn(amount);
        console.log(`You received ${amount} cookies!`);
    } else {
        console.log("Cookie Clicker game not detected.");
    }
}

// Example usage:
giveMeCookies(1000000); // Adds 1,000,000 cookies
