document.addEventListener('DOMContentLoaded', () => {
  // Unix timestamp (in seconds) for January 5, 2024
  var january5_2024 = new Date('2024-01-05T00:00:00').getTime() / 1000;

  // Set up FlipDown with a single theme color
  var flipdown = new FlipDown(january5_2024)
    .start()
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
