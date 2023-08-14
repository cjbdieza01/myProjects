const legs = document.querySelectorAll('.leg');

function animateLegs() {
  legs.forEach((leg, index) => {
    leg.style.transform = `rotate(${Math.sin(Date.now() / 500 + index * Math.PI * 0.5) * 90}deg)`;
  });

  requestAnimationFrame(animateLegs);
}

animateLegs();
