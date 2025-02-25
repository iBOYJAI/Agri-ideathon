document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) for March 14, 2025
  var march14_2025 = new Date("2025-03-14T00:00:00").getTime() / 1000;

  // Set up FlipDown with a single theme color
  var flipdown = new FlipDown(march14_2025).start().ifEnded(() => {
    console.log("The countdown has ended!");
  });

  // Show version number (if available)
  var ver = document.getElementById("ver");
  if (ver && flipdown.version) {
    ver.innerHTML = flipdown.version;
  } else {
    console.error("Version element or FlipDown version not found.");
  }
});
