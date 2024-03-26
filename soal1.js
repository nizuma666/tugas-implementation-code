//function reverse kalimat
const reverseWord = (kalimat) => {
  console.log("----------Reverse Kalimat---------");
  console.log(`Kalimat awal          : ${kalimat}`);
  const changeToArray = kalimat.split(" ").reverse().join(" ");
  console.log(
    `Hasil reverse kalimat : ${changeToArray}\n`
  );
};
//function cek palindrom
const palindromWord = (word) => {
  const cekPalindrom = word.split("").reverse().join("");
  console.log("----------Cek Palindrom-----------");
  if (cekPalindrom == word) {
    console.log(`kata ${word} merupakan palindrom`);
  } else {
    console.log(`kata ${word} bukan palindrom`);
  }
};

reverseWord("saya ingin makan gacoan sepuasnya");
palindromWord('malam');
