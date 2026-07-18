//EXAMPLE 1
const student = {
  name: "Mert",
  grade: 11,
  introduce() {
    console.log(`${this.name} isimi öğrenci ${this.grade}. sınıftadır.`);
  },
};

const student2 = {
  name: "Berk",
  grade: 9,
  introduce: student.introduce,
};

student.introduce();
student2.introduce();

//EXAMPLE 2
const book = {
  title: "Modern JavaScript",
  author: "Mert Dev",
  stock: 5,

  showDetails() {
    console.log(
      `Kitap adı: ${this.title} | Yazar: ${this.author} | Güncel Stok: ${this.stock}`,
    );
  },

  borrowBook: function () {
    if (this.stock > 0) {
      this.stock--;
      console.log(`🎁 "${this.title}" başarıyla ödünç alındı!`);
    } else {
      console.log(`❌ Maalesef "${this.title}" stoğu tükenmiş.`);
    }
  },
};

console.log("--- BAŞLANGIÇ DURUMU ---");
book.showDetails(); 

console.log("\n--- BİR KİTAP ÖDÜNÇ ALINIYOR ---");
book.borrowBook(); 

console.log("\n--- SON DURUM ---");
book.showDetails(); 
