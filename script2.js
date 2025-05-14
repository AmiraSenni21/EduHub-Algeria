let Adrar = ["أدرار (وسط المدينة)", "رغان", "أوقروت", "شروين", "أولاد عيسى"];
let Chlef = ["شلف (وسط المدينة)", "وادي الفضة", "بوقادير", "تنس", "عين مران"];
let Laghout = ["الأغواط (وسط المدينة)", "أفلو", "سيدي مخلوف", "عين سيدي علي", "قصر الحيران"];
let OumElBouaghi = ["أم البواقي(وسط المدينة)", "عين البيضاء", "عين فكرون", "عين مليلة", "أولاد قاسم"];
let Batna = ["باتنة(وسط المدينة)", "بريكة", "تازولت", "آريس", "عين توتة"];
const sel4 = document.getElementById("sel4");
const sel5 = document.getElementById("sel5");


sel5.innerHTML = "<option><a>الدائرة</a></option>";

sel4.onchange = function () {
	sel5.innerHTML = "<option><a>الدائرة</a></option>";
	if (this.value == "Adrar") {
	  addToSel5(Adrar);
	  window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Wilaya","أدرار");
	} else if (this.value == "Chlef") {
	  addToSel5(Chlef);
	  window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Wilaya","شلف");
	} else if (this.value == "Laghout") {
	  addToSel5(Laghout);
	  window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Wilaya","الأغواط");
	} else if (this.value == "OumElBouaghi") {
	  addToSel5(OumElBouaghi);
	  window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Wilaya","أم البواقي");
	} else if (this.value == "Batna") {
	  addToSel5(Batna);
	  window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Wilaya","باتنة");
	} else{
	  console.log('there is a error !');
	}
};

function addToSel5(arr) {
	arr.forEach(function (item) {
	  let option = document.createElement("option"),
	  a = document.createElement("a");
	  a.text = item;
	  option.value = item;
	  option.appendChild(a);
	  sel5.appendChild(option);
	});
};

const Next1 = document.getElementById("nextInfo");
const Input = document.getElementsByTagName("input");
const Tarea = document.getElementsByTagName('textarea'); 
Next1.onclick = function() {
	if(sel4.value == "الولاية"){ 
		// alert("الرجاء إختيار الولاية.");
		this.children[0].setAttribute("href","Director.html");

	}else if(sel5.value == "الدائرة"){
		// alert("الرجاء إختيار الدائرة.");
		this.children[0].setAttribute("href","Director.html");

	}else if ((Input[0].value == "")||(Input[1].value == "")){
		// alert("الرجاء ملئ كل الخانات المطلوبة");
		this.children[0].setAttribute("href","Director.html");

	}else if (Input[2].value == ""){
		// alert("الرجاء إدخال رقم الهاتف");
		this.children[0].setAttribute("href","Director.html");

	}else if (isNaN(Input[2].value)||isNaN(Input[3].value)){
		// alert("يجب إدخال أرقام في حقل إدخال رقم الهاتف.");
		this.children[0].setAttribute("href","Director.html");

		Input[2].value = "";
		Input[3].value = "";
	}else if (Tarea[0].value == ""){
		// alert("الرجاء تقديم وصف دقيق لموقع المدرسة لمساعدة الطلاب على إيجادها.");
		this.children[0].setAttribute("href","Director.html");

	}else{
		window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Dira",sel5.value);
		window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"SchName",Input[0].value);
		window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"DirName",Input[1].value);
		window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Nbr1",Input[2].value);
		window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Nbr2",Input[3].value);
		window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Tarea",Tarea[0].value);

		this.children[0].setAttribute("href","Director.html");
	}
}

window.onload = function (){
    let Wilaya = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Wilaya");
    let Dira = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Dira");
    let SchName = document.getElementById('SchName');
	let DirName = document.getElementById('DirName');
	let Nbr1 = document.getElementById('Nbr1');
	let Nbr2 = document.getElementById('Nbr2');
	let Tarea = document.getElementById('Tarea');

	for(var i=1; i<6; i++){ 
		if (Wilaya == sel4.children[i].textContent){ 
			sel4.children[i].selected = true; 

			if (sel4.children[i].value == "Adrar") {
			   addToSel5(Adrar);
			} else if (sel4.children[i].value == "Chlef") {
			   addToSel5(Chlef);
			} else if (sel4.children[i].value == "Laghout") {
			   addToSel5(Laghout); 
			} else if (sel4.children[i].value == "OumElBouaghi") {
			   addToSel5(OumElBouaghi);
			} else if (sel4.children[i].value == "Batna") {
			   addToSel5(Batna);
			} else{
			   console.log('there is a error !');
			}
		}
    }

    for(var j=1; j<6; j++){ 	
		if (Dira == sel5.children[j].textContent){ 
			sel5.children[j].selected = true; 
		}
	}

	SchName.value = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"SchName");
    DirName.value = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"DirName");
	Nbr1.value = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Nbr1");
	Nbr2.value = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Nbr2");
	Tarea.value = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Tarea");	
}
