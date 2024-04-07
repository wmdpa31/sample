window.onload = () => {
  const btnShareFb = document.querySelector(".shareFb");
  btnShareFb.addEventListener("click", () => {
    const pageUrl = "mo1.luvle.co.kr/";
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
  });

  const shareViaSMSBtn = document.querySelector(".shareTwoG");
  shareViaSMSBtn.addEventListener("click", () => {
    const message = "모바일 청첩장을 확인해주세요! " + window.location.href;
    const link = "sms:?body=" + encodeURIComponent(message);
    window.location.href = link;
  });
};
