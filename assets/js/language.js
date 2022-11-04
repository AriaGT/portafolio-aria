const languageBtn = document.querySelector(".language_icon");
const languageList = document.querySelector(".flags");
const flagBtn = document.querySelectorAll(".flags_item");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`/languages/${language}.json`);

  const texts = await requestJson.json();
  console.log(texts);
  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];
  }
};

languageBtn.addEventListener("click", () => {
  languageList.classList.toggle("flags_hiden");
});

flagBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    changeLanguage(e.target.dataset.language);
  });
});
