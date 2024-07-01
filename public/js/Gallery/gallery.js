const panels = document.querySelectorAll('.panel');
  let currentPanelIndex = 0;
  const intervalTime = 2000; // Change image every 5 seconds (adjust as needed)
  let intervalId;

  function startAutoChange() {
      intervalId = setInterval(() => {
          removeActiveClasses();
          currentPanelIndex = (currentPanelIndex + 1) % panels.length;
          panels[currentPanelIndex].classList.add('active');
      }, intervalTime);
  }

  function stopAutoChange() {
      clearInterval(intervalId);
  }

  panels.forEach((panel, index) => {
      panel.addEventListener('click', () => {
          stopAutoChange();
          removeActiveClasses();
          currentPanelIndex = index;
          panel.classList.add('active');
      });
  });

  function removeActiveClasses() {
      panels.forEach(panel => {
          panel.classList.remove('active');
      });
  }

  // Start auto-change on page load
  startAutoChange();
  
  