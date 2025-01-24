const visitMessage = document.querySelector(".visit-message");

const currentTime = new Date().getTime();

const lastVisit = localStorage.getItem("lastVisited");

if (!lastVisit) {
  visitMessage.textContent =
    "Welcome to our website! We're so glad you're here!";
} else {
  const timeDiff = currentTime - parseInt(lastVisit, 10);
  const oneDay = 24 * 60 * 60 * 1000;

  if (timeDiff < oneDay) {
    visitMessage.textContent = "It's great to see you again so soon!";
  } else {
    const days = Math.floor(timeDiff / oneDay);
    visitMessage.textContent = `You last visited ${days} day${
      days > 1 ? "s" : ""
    } ago.`;
  }
}

// Update localStorage with the current time
localStorage.setItem("lastVisited", currentTime.toString());
