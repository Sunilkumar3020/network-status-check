const statusBox = document.querySelector(".status");

window.addEventListener("load", () => {
  const handleNetworkChange = () => {
    if (navigator.onLine) {
      statusBox.classList.remove("offline");
    } else {
      statusBox.classList.add("offline");
    }
  };

  window.addEventListener("online", handleNetworkChange);
  window.addEventListener("offline", handleNetworkChange);
});
