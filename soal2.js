const PijarFood = (totalBelanja, voucher, jarak, pajak) => {
  diskon = PotonganHarga(totalBelanja, voucher);
  let tarifAntar = [];

  if (jarak >= 2) {
    tarifAntar.push(5000);
    for (let i = 0; i >= jarak; i++) {
      tarifAntar.push(3000);
    }
  }

  tarifAntar.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  if ((pajak = true)) {
    pajak = (totalBelanja * 5) / 100;
  }
  // console.log(typeof totalBelanja, typeof diskon, typeof tarifAntar, typeof pajak);
  // console.log(totalBelanja, diskon, parseInt(tarifAntar) ,  pajak);
  let subtotal = totalBelanja - diskon + parseInt(tarifAntar) + pajak;

  console.log("Rincian harga");
  console.log(`Harga       : ${new Intl.NumberFormat().format(totalBelanja)}`);
  console.log(`Potongan    : ${new Intl.NumberFormat().format(diskon)}`);
  console.log(`Biaya Antar : ${new Intl.NumberFormat().format(tarifAntar)}`);
  console.log(`Pajak       : ${new Intl.NumberFormat().format(pajak)}`);
  console.log(`Subtotal    : ${new Intl.NumberFormat().format(subtotal)}`);
};
const PotonganHarga = (totalBelanja, voucher) => {
  let potongan = 0;
  if(totalBelanja > 100000){
    potongan = 50000
    console.log(`!!Selamat anda mendapatkan diskon ${voucher}!!`);
    return potongan;
  }else if (totalBelanja >= 50000 && totalBelanja <= 100000) {
    potongan = (totalBelanja * 50) / 100;
    console.log(`!!Selamat anda mendapatkan diskon ${voucher}!!`);
    return potongan;
  } else if (totalBelanja >= 25000) {
    potongan = (totalBelanja * 60) / 100;
    console.log(`!!Selamat anda mendapatkan diskon ${voucher}!!`);
    return potongan;
  } else {
    return 0;
  }
};

PijarFood(100000, "DITRAKTIRPIJAR", 2, true);
