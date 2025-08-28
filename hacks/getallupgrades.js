function getAllUpgrades() {
  if (typeof Game === 'undefined' || !Game.Upgrades) {
    console.error('Cookie Clicker game not detected.');
    return [];
  }
  return Object.values(Game.Upgrades).map(upg => ({
    name: upg.name,
    desc: upg.desc,
    basePrice: upg.basePrice,
    unlocked: upg.unlocked,
    bought: upg.bought
  }));
}

// Example usage:
const allUpgrades = getAllUpgrades();
console.log(allUpgrades);
