function enableDevTools() {
  if (typeof Game === 'undefined') {
    console.error('Cookie Clicker game not detected.');
    return false;
  }
  Game.OpenSesame = 1; // Enable the dev menu
  if (typeof Game.ShowDevTools === 'function') {
    Game.ShowDevTools();
  } else {
    Game.ToggleDevTools(); // For some versions
  }
  return true;
}

// Usage:
enableDevTools();
