window.onload = () => {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const collapseBtn = document.getElementById("collapseBtn");
  const hiddenImages = document.querySelectorAll("#gallery img.hidden");

  showMoreBtn.addEventListener("click", () => {
    hiddenImages.forEach((img) => {
      img.classList.remove("hidden");
    });
    showMoreBtn.style.display = "none";
    collapseBtn.style.display = "inline-block";
  });

  collapseBtn.addEventListener("click", () => {
    const galleryImages = document.querySelectorAll("#addGalleyItem");
    galleryImages.forEach((img) => {
      img.classList.add("hidden");
    });
    collapseBtn.style.display = "none";
    showMoreBtn.style.display = "inline-block";
  });

  const galleryImages = document.querySelectorAll("#gallery img");
  galleryImages.forEach((img) => {
    img.onclick = () => {
      img.classList.toggle("full");
    };
  });
};
