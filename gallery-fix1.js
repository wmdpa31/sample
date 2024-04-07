window.onload = () => {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const collapseBtn = document.getElementById("collapseBtn");
  const hiddenImages = document.querySelectorAll("#gallery img.hidden");

  showMoreBtn.addEventListener("click", () => {
    hiddenImages.forEach((img) => {
      img.classList.remove("hidden");
    });
    collapseBtn.style.display = "inline-block";
    collapseBtn.style.backgroundColor = "ffe08c";
    collapseBtn.style.width = "70px";
    collapseBtn.style.textAlign = "center";
    collapseBtn.style.display = "block";
    collapseBtn.style.margin = "7% auto";
    collapseBtn.style.borderRadius = "15px";

    showMoreBtn.style.display = "none";
  });

  collapseBtn.addEventListener("click", () => {
    const galleryImages = document.querySelectorAll("#addGalleyItem");
    galleryImages.forEach((img) => {
      img.classList.add("hidden");
    });
    collapseBtn.style.display = "none";

    showMoreBtn.style.display = "inline-block";
    showMoreBtn.style.backgroundColor = "ffe08c";
    showMoreBtn.style.width = "70px";
    showMoreBtn.style.textAlign = "center";
    showMoreBtn.style.display = "block";
    showMoreBtn.style.margin = "7% auto";
    showMoreBtn.style.borderRadius = "15px";
  });

  const galleryImages = document.querySelectorAll("#gallery img");
  galleryImages.forEach((img) => {
    img.onclick = () => {
      img.classList.toggle("full");
    };
  });
};
