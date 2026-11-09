let acap = document.getElementById('arama-cap');
let icap = document.getElementById('icerik-cap');
let arama = document.createElement('input');
let but = document.createElement('button');
let but2 = document.createElement('button');
let t = document.getElementById('toplam');
let k = document.getElementById('kalan');

acap.appendChild(arama);
acap.appendChild(but);
acap.appendChild(but2);

but.textContent = 'ekle';
but2.textContent = 'temizle';
arama.classList.add('arama-bar');
but.classList.add('ekle-buton');
but2.classList.add('ekle-buton');
arama.setAttribute('placeholder', 'Görev Giriniz');


let sayac1 = 0;
let sayac2 = 0;

t.textContent = "Toplam = " + sayac1;
k.textContent = "Tamamlanan = " + sayac2;

but.addEventListener('click', function(){
    let deger = arama.value;

    if(deger == ""){
       window.alert('boþ býrakýlmaz');
    }

    else{
       let rutin = document.createElement('li');
       let tarih = new Date();
       rutin.textContent = deger + " -- " + tarih.toLocaleDateString('tr-TR');
       rutin.classList.add('gunluk');
       rutin.classList.add('Rutin');
       icap.appendChild(rutin);
       arama.value = "";

       sayac1 += 1;
       t.textContent = "Toplam = " + sayac1;

       rutin.addEventListener('click', function(){
         if(rutin.style.textDecoration != 'line-through'){
          sayac2 += 1;
          k.textContent = "Tamamlanan = " + sayac2;
        }
        
         rutin.style.color = "rgba(252, 76, 2, 0.8)";
         rutin.textContent = deger + " -- " + tarih.toLocaleDateString('tr-TR') + "  ?";
         rutin.style.textDecoration = 'line-through';
         
        
         
       })

       rutin.addEventListener('dblclick', function(){
         rutin.remove();
         sayac2 -= 1;
        k.textContent = "Tamamlanan = " + sayac2;
       })
    }
})

but2.addEventListener('click', function(){
   icap.innerHTML = "";
    sayac1 = 0;
    sayac2 = 0;
    k.textContent = "Tamamlanan = " + sayac2;
    t.textContent = "Toplam = " + sayac1;
})
