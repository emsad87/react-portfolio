document.querySelectorAll(".copy-year").forEach((element) => {
  element.innerText = new Date().getFullYear();
});
