let i = 0;
let btnClick = document.querySelector("#btnclick");
let numberofpraise = document.querySelector("#numberofpraise");

function increase() {
  let num = (numberofpraise.textContent = i);
  i++;
  if (num >= "33" && btnClick.textContent == "سبحان الله") {
    i = 1;
    btnClick.textContent = "الحمد لله";
  } else if (num >= "33" && btnClick.textContent == "الحمد لله") {
    btnClick.textContent = "الله اكبر";
    i = 1;
  } else if (num >= "33" && btnClick.textContent == "الله اكبر") {
    btnClick.textContent = "لا حول ولا قوة الا بالله";
    i = 1;
  } else if (
    num >= "33" &&
    btnClick.textContent == "لا حول ولا قوة الا بالله"
  ) {
    btnClick.textContent =
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ (255)";
    i = 1;
  } else if (
    num >= "3" &&
    btnClick.textContent ==
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ (255)"
  ) {
    btnClick.textContent = "سبحان الله";
    i = 1;
  }
}
increase();
