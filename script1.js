/******************** SEARCHING PAGE ********************/
let Adrar = ["أدرار (وسط المدينة)", "رغان", "أوقروت", "شروين", "أولاد عيسى"];
let Chlef = ["شلف (وسط المدينة)", "وادي الفضة", "بوقادير", "تنس", "عين مران"];
let Laghout = ["الأغواط (وسط المدينة)", "أفلو", "سيدي مخلوف", "عين سيدي علي", "قصر الحيران"];
let OumElBouaghi = ["أم البواقي(وسط المدينة)", "عين البيضاء", "عين فكرون", "عين مليلة", "أولاد قاسم"];
let Batna = ["باتنة(وسط المدينة)", "بريكة", "تازولت", "آريس", "عين توتة"];
let sel1 = document.getElementById("sel1");
let sel2 = document.getElementById("sel2");
let module = document.getElementById("sel3");
let Search = document.getElementById("search");
let TechName = document.getElementById("techName");

sel2.innerHTML = "<option><a>الدائرة</a></option>";

sel1.onchange = function () {
  sel2.innerHTML = "<option><a>الدائرة</a></option>";
  if (this.value == "Adrar") {
    addToSel2(Adrar);
  } else if (this.value == "Chlef") {
    addToSel2(Chlef);
  } else if (this.value == "Laghout") {
    addToSel2(Laghout);
  } else if (this.value == "OumElBouaghi") {
    addToSel2(OumElBouaghi);
  } else if (this.value == "Batna") {
    addToSel2(Batna);
  } else{
    console.log('there is a error !');
  }
};

function addToSel2(arr) {
  arr.forEach(function (item) {
    let option = document.createElement("option"),
    a = document.createElement("a");
    a.text = item;
    option.value = item;

    option.appendChild(a);
    sel2.appendChild(option);
  });
};

// FOR SEARCH BUTTON
Search.onclick = function() {
  if(sel1.value == "الولاية"){ 
    // alert("الرجاء إختيار الولاية.");
  }else if(sel2.value == "الدائرة"){
    // alert("الرجاء إختيار الدائرة.");
  }else if((sel1.value != "الولاية")&&(sel2.value != "الدائرة")){ 
    window.localStorage.setItem("Sdira",sel2.value);
    window.localStorage.setItem("Lang",module.value);
    window.localStorage.setItem("techName",TechName.value);

    if((window.localStorage.getItem("techName") == "")&&(window.localStorage.getItem("Lang") == "المادة (إختياري)")){
      if (sel1.value == "Adrar") {
        addToSel2(Adrar);
        window.localStorage.setItem("Swilaya","أدرار");
      } else if (sel1.value == "Chlef") {
        addToSel2(Chlef);
        window.localStorage.setItem("Swilaya","شلف");
      } else if (sel1.value == "Laghout") {
        addToSel2(Laghout);
        window.localStorage.setItem("Swilaya","الأغواط");
      } else if (sel1.value == "OumElBouaghi") {
        addToSel2(OumElBouaghi);
        window.localStorage.setItem("Swilaya","أم البواقي");
      } else if (sel1.value == "Batna") {
        addToSel2(Batna);
        window.localStorage.setItem("Swilaya","باتنة");
      } else{
        // alert('there is a error!');
      }
      this.children[0].setAttribute("href","Searching Results.html");
    }else if((window.localStorage.getItem("techName") != "")&&(window.localStorage.getItem("Lang") == "المادة (إختياري)")){
      // alert('الرجاء إدخال المادة');
    }else if((window.localStorage.getItem("techName") == "")&&(window.localStorage.getItem("Lang") != "المادة (إختياري)")){
      // alert('الرجاء إدخال أستاذ المادة');
    }else{
      if (sel1.value == "Adrar") {
        addToSel2(Adrar);
        window.localStorage.setItem("Swilaya","أدرار");
      } else if (sel1.value == "Chlef") {
        addToSel2(Chlef);
        window.localStorage.setItem("Swilaya","شلف");
      } else if (sel1.value == "Laghout") {
        addToSel2(Laghout);
        window.localStorage.setItem("Swilaya","الأغواط");
      } else if (sel1.value == "OumElBouaghi") {
        addToSel2(OumElBouaghi);
        window.localStorage.setItem("Swilaya","أم البواقي");
      } else if (sel1.value == "Batna") {
        addToSel2(Batna);
        window.localStorage.setItem("Swilaya","باتنة");
      } else{
        // alert('there is a error!');
      }
      this.children[0].setAttribute("href","Searching Results.html");
    }
  }else{
    console.log('No one of them');
  }
}
window.onload = function() {
  sel1.value = "الولاية";
  sel2.value = "الدائرة";
  module.value = "المادة (إختياري)";
  TechName.value = "";
}