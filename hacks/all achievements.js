function getAllAchievements() {
  if (typeof Game === 'undefined' || !Game.Achievements) {
    console.error('Cookie Clicker game not detected.');
    return [];
  }
  return Object.values(Game.Achievements).map(ach => ({
    name: ach.name,
    desc: ach.desc,
    won: ach.won,
    unlocked: ach.unlocked
  }));
}

// Example usage:
const allAchievements = getAllAchievements();
console.log(allAchievements);
