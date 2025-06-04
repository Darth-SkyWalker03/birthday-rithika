function countdown() {
  const endDate = new Date("June 5, 2025 00:00:00").getTime();
  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "🎉 It's your day!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
function revealMessage() {
  document.getElementById("message").style.display = "block";
}
countdown();