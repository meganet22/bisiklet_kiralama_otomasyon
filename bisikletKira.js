let bisikletKiralama ={
    ad:"Can",
    soyad:"Ata",
    gunFiyat:20,
    kacGun:4,
    tutar:0,
    borcHesapla:function(){
      
      if(this.kacGun <= 7){
        this.tutar = this.kacGun * this.gunFiyat;
      }else if(this.kacGun > 7 && this.kacGun <= 14){
        this.tutar = (this.kacGun * this.gunFiyat) * 0.9;
      }else if(this.kacGun > 14){
        this.tutar = (this.kacGun * this.gunFiyat) * 0.75;
      }
      return this.tutar * 1.18;
    }
  }
  
  let borcTutari = bisikletKiralama.borcHesapla();
  console.log( "Sayın: " + bisikletKiralama.ad + " " + bisikletKiralama.soyad + " Borcunuz: " + borcTutari + " TL" );
  
  
