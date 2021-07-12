function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}

const launched = document.getElementById("launched");
const orders = document.getElementById("orders")
satLaunched = 514;
newOrders = 984;


window.onscroll = function() {
  animateValue(launched, 0, satLaunched, 4000);
  animateValue(orders, 0, newOrders, 4000);
}
  