const deleteButton1 = document.getElementsByClassName('del1');
const deleteButton2 = document.getElementsByClassName('del2');
const addButton = document.querySelectorAll(".add");
const tableBody = document.querySelectorAll("table .tbody");
const Next = document.getElementById("next");
const Finish = document.getElementById("finish");
const rows = document.getElementsByTagName('tr');
const Del3 = document.getElementsByClassName('del3');
const sections = document.getElementsByClassName('sec6');
const Save = document.getElementById("save");
const Title = document.getElementById("title");

/****************** Delete Button For All Levels *********************/
window.onclick = function () {
  for (var i = 0; i <= 4; i++) {
    if (tableBody[i].rows.length == "1") {
      const detect = tableBody[i].rows[0].cells[7];
      detect.children[0].style.transition = '0.1s';
      detect.children[0].style.color = 'grey';
      detect.children[0].style.backgroundColor = 'white';
      detect.children[0].style.border = 'solid 1px grey';
      detect.children[0].style.cursor = 'not-allowed';
      detect.children[0].disabled = true; 
    }else {
      const detect = tableBody[i].rows[0].cells[7];
      detect.children[0].style.transition = '0.1s';
      detect.children[0].style.color = 'white';
      detect.children[0].style.backgroundColor = 'var(--purple2)';
      detect.children[0].style.border = 'solid 1px var(--purple2)';
      detect.children[0].style.cursor = 'pointer';
      detect.children[0].disabled = false; 
    }
  }
}


deleteButton1[0].onclick = function () {
	const Row = this.parentElement.parentElement;
  //console.log("It's Deleted");
  //console.log(Row.children[0].children[0].textContent);
	Row.remove();
};
deleteButton2[0].onclick = function () {
	const Row = this.parentElement.parentElement;
  //console.log("It's Deleted");
	Row.remove();
};
deleteButton1[1].onclick = function () {
	const Row = this.parentElement.parentElement;
	Row.remove();
};
deleteButton2[1].onclick = function () {
	const Row = this.parentElement.parentElement;
	Row.remove();
};
deleteButton1[2].onclick = function () {
	const Row = this.parentElement.parentElement;
	Row.remove();
};
deleteButton2[2].onclick = function () {
	const Row = this.parentElement.parentElement;
	Row.remove();
};
deleteButton1[3].onclick = function () {
	const Row = this.parentElement.parentElement;
	Row.remove();
};
deleteButton2[3].onclick = function () {
	const Row = this.parentElement.parentElement;
	Row.remove();
};
deleteButton1[4].onclick = function () {
	const Row = this.parentElement.parentElement;
	Row.remove();
};
deleteButton2[4].onclick = function () {
	const Row = this.parentElement.parentElement;
	Row.remove();
};
/******************** Table 01 *******************/
addButton[0].addEventListener("click", () => {
  
  const lastRow = tableBody[0].lastElementChild.cloneNode(true);
  
  const selectInputs = lastRow.querySelectorAll("select");
  const textInput = lastRow.querySelector("input[type=text]");
  const timeInput = lastRow.querySelector("input[type=time]");
  const costInput = lastRow.querySelector("input[type=number]");
  selectInputs.forEach(input => input.selectedIndex = 0);
  textInput.value = "";
  timeInput.value = "";
  costInput.value = "";
  
  const deleteButton = lastRow.querySelector("#delete");

  deleteButton.style.color = 'white';
  deleteButton.style.backgroundColor = 'var(--purple2)';
  deleteButton.style.border = 'solid 1px var(--purple2)';
  deleteButton.style.cursor = 'pointer';
  deleteButton.disabled = false; 
  
  deleteButton.addEventListener("click", () => {
    lastRow.remove();
  });

  tableBody[0].appendChild(lastRow);
});
/******************** Table 02 *******************/
addButton[1].addEventListener("click", () => {
  
  const lastRow = tableBody[1].lastElementChild.cloneNode(true);
  
  const selectInputs = lastRow.querySelectorAll("select");
  const textInput = lastRow.querySelector("input[type=text]");
  const timeInput = lastRow.querySelector("input[type=time]");
  const costInput = lastRow.querySelector("input[type=number]");
  selectInputs.forEach(input => input.selectedIndex = 0);
  textInput.value = "";
  timeInput.value = "";
  costInput.value = "";

  const deleteButton = lastRow.querySelector("#delete");
  deleteButton.style.color = 'white';
  deleteButton.style.backgroundColor = 'var(--purple2)';
  deleteButton.style.border = 'solid 1px var(--purple2)';
  deleteButton.style.cursor = 'pointer';
  deleteButton.disabled = false; 

  deleteButton.addEventListener("click", () => {
    lastRow.remove();
  });

  tableBody[1].appendChild(lastRow);
});
/******************** Table 03 *******************/
addButton[2].addEventListener("click", () => {
  
  const lastRow = tableBody[2].lastElementChild.cloneNode(true);
  
  const selectInputs = lastRow.querySelectorAll("select");
  const textInput = lastRow.querySelector("input[type=text]");
  const timeInput = lastRow.querySelector("input[type=time]");
  const costInput = lastRow.querySelector("input[type=number]");
  selectInputs.forEach(input => input.selectedIndex = 0);
  textInput.value = "";
  timeInput.value = "";
  costInput.value = "";

  const deleteButton = lastRow.querySelector("#delete");
  deleteButton.style.color = 'white';
  deleteButton.style.backgroundColor = 'var(--purple2)';
  deleteButton.style.border = 'solid 1px var(--purple2)';
  deleteButton.style.cursor = 'pointer';
  deleteButton.disabled = false; 

  deleteButton.addEventListener("click", () => {
    lastRow.remove();
  });

  tableBody[2].appendChild(lastRow);
});
/******************** Table 04 *******************/
addButton[3].addEventListener("click", () => {
  
  const lastRow = tableBody[3].lastElementChild.cloneNode(true);
  
  const selectInputs = lastRow.querySelectorAll("select");
  const textInput = lastRow.querySelector("input[type=text]");
  const timeInput = lastRow.querySelector("input[type=time]");
  const costInput = lastRow.querySelector("input[type=number]");
  selectInputs.forEach(input => input.selectedIndex = 0);
  textInput.value = "";
  timeInput.value = "";
  costInput.value = "";

  const deleteButton = lastRow.querySelector("#delete");
  deleteButton.style.color = 'white';
  deleteButton.style.backgroundColor = 'var(--purple2)';
  deleteButton.style.border = 'solid 1px var(--purple2)';
  deleteButton.style.cursor = 'pointer';
  deleteButton.disabled = false; 

  deleteButton.addEventListener("click", () => {
    lastRow.remove();
  });

  tableBody[3].appendChild(lastRow);
});
/******************** Table 05 *******************/
addButton[4].addEventListener("click", () => {
  
  const lastRow = tableBody[4].lastElementChild.cloneNode(true);
  
  const selectInputs = lastRow.querySelectorAll("select");
  const textInput = lastRow.querySelector("input[type=text]");
  const timeInput = lastRow.querySelector("input[type=time]");
  const costInput = lastRow.querySelector("input[type=number]");
  selectInputs.forEach(input => input.selectedIndex = 0);
  textInput.value = "";
  timeInput.value = "";
  costInput.value = "";

  const deleteButton = lastRow.querySelector("#delete");
  deleteButton.style.color = 'white';
  deleteButton.style.backgroundColor = 'var(--purple2)';
  deleteButton.style.border = 'solid 1px var(--purple2)';
  deleteButton.style.cursor = 'pointer';
  deleteButton.disabled = false; 

  deleteButton.addEventListener("click", () => {
    lastRow.remove();
  });

  tableBody[4].appendChild(lastRow);
});

/********************* After Complete Each Level ***********************/
Save.onclick = function () {
  // confirm("هل أنت متأكد من المعلومات التي قمت بإدخالها ؟");

  if(window.location.href == "Primair.html"){
    window.localStorage.setItem(window.localStorage.getItem("currentAccount")+" vb0","visible");
    window.localStorage.setItem("currentLevel","P");
  }else if (window.location.href == "cem.html") {
    window.localStorage.setItem(window.localStorage.getItem("currentAccount")+" vb1","visible");
    window.localStorage.setItem("currentLevel","C");
  }else if (window.location.href == "lycee.html") {
    window.localStorage.setItem(window.localStorage.getItem("currentAccount")+" vb2","visible");
    window.localStorage.setItem("currentLevel","L");
  }else{
    // alert("هنالك مشكلة الرجاء إعادة تحميل الصفحة");
  }
  Save.children[0].setAttribute("href","Director.html#aboutUs"); 
  /*************** Data Base ****************/

  for(var n=0; n<tableBody[0].children.length; n++){
    for(var x=0; x<7; x++){
      let Row = tableBody[0].children[n].children[x];
      window.localStorage.setItem(window.localStorage.getItem("currentAccount")+" "+window.localStorage.getItem("currentLevel")+" 0col"+n+x, Row.children[0].value);
      window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"0",tableBody[0].children.length);
    }
  }
  for(var n=0; n<tableBody[1].children.length; n++){
    for(var x=0; x<7; x++){
      let Row = tableBody[1].children[n].children[x];
      window.localStorage.setItem(window.localStorage.getItem("currentAccount")+" "+window.localStorage.getItem("currentLevel")+" 1col"+n+x, Row.children[0].value);
      window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"1",tableBody[1].children.length);
    }
  }
  for(var n=0; n<tableBody[2].children.length; n++){
    for(var x=0; x<7; x++){
      let Row = tableBody[2].children[n].children[x];
      window.localStorage.setItem(window.localStorage.getItem("currentAccount")+" "+window.localStorage.getItem("currentLevel")+" 2col"+n+x, Row.children[0].value);
      window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"2",tableBody[2].children.length);
    }
  }
  
  if(tableBody[3].parentElement.parentElement.style.display===""){
    for(var n=0; n<tableBody[3].children.length; n++){
      for(var x=0; x<7; x++){
        let Row = tableBody[3].children[n].children[x];
        window.localStorage.setItem(window.localStorage.getItem("currentAccount")+" "+window.localStorage.getItem("currentLevel")+" 3col"+n+x, Row.children[0].value);
        window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"3",tableBody[3].children.length);
      }
    }
  }else {
    console.log("Don't do anything !");
  }

  if(tableBody[4].parentElement.parentElement.style.display===""){
    for(var n=0; n<tableBody[4].children.length; n++){
      for(var x=0; x<7; x++){
        let Row = tableBody[4].children[n].children[x];
        window.localStorage.setItem(window.localStorage.getItem("currentAccount")+" "+window.localStorage.getItem("currentLevel")+" 4col"+n+x, Row.children[0].value);
        window.localStorage.setItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"4",tableBody[4].children.length);
      }
      
    }
  }else {
    console.log("Don't do anything !");
  }
}
 
window.onload = function() { 
  // if(window.location.href == "file:///E:/Memory/Main/Primair.html"){
  //   window.localStorage.setItem("currentLevel","P");
  // }else if (window.location.href == "file:///E:/Memory/Main/cem.html") {
  //   window.localStorage.setItem("currentLevel","C");
  // }else if (window.location.href == "file:///E:/Memory/Main/lycee.html") {
  //   window.localStorage.setItem("currentLevel","L");
  // }else{
  //   alert('THERE IS A PROBLEM');
  // }

  //Table 00
  for(var n=0; n<window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"0"); n++){
    for(var x=0; x<7; x++){
      let Row = tableBody[0].children[n].children[x];
      Row = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+" "+window.localStorage.getItem("currentLevel")+" 0col"+n+x);
      let Td = tableBody[0].children[n].children[x].children[0];

      if(n>0){
        const lastRow = tableBody[0].lastElementChild.cloneNode(true);
        const selectInputs = lastRow.querySelectorAll("select");
        const textInput = lastRow.querySelector("input[type=text]");
        const timeInput = lastRow.querySelector("input[type=time]");
        const costInput = lastRow.querySelector("input[type=number]");
        selectInputs.forEach(input => input.selectedIndex = 0);
        textInput.value = "";
        timeInput.value = "";
        costInput.value = "";
        
        const deleteButton = lastRow.querySelector("#delete");

        deleteButton.style.color = 'white';
        deleteButton.style.backgroundColor = 'var(--purple2)';
        deleteButton.style.border = 'solid 1px var(--purple2)';
        deleteButton.style.cursor = 'pointer';
        deleteButton.disabled = false; 
        
        deleteButton.addEventListener("click", () => {
          lastRow.remove();
        });

        tableBody[0].appendChild(lastRow);
        Td.value = Row;

      }
      if(tableBody[0].children.length > window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"0")){
        tableBody[0].lastElementChild.remove();
      }
      for(var i=0; i<Td.children.length; i++){ 
        if (Row == Td.children[i].textContent){ //search for if the value of Row variable is exist in the module list
          Td.children[i].selected = true;  //select the value to appear 
        }
      }
      if(x==1 || x==5 || x==6){
        Td.value = Row;
      }
    }
  }

  //Table 01
  for(var n=0; n<window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"1"); n++){
    for(var x=0; x<7; x++){
      let Row = tableBody[1].children[n].children[x];
      Row = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+" "+window.localStorage.getItem("currentLevel")+" 1col"+n+x);
      let Td = tableBody[1].children[n].children[x].children[0];

      if(n>0){
        const lastRow = tableBody[1].lastElementChild.cloneNode(true);
        const selectInputs = lastRow.querySelectorAll("select");
        const textInput = lastRow.querySelector("input[type=text]");
        const timeInput = lastRow.querySelector("input[type=time]");
        const costInput = lastRow.querySelector("input[type=number]");
        selectInputs.forEach(input => input.selectedIndex = 0);
        textInput.value = "";
        timeInput.value = "";
        costInput.value = "";
        
        const deleteButton = lastRow.querySelector("#delete");

        deleteButton.style.color = 'white';
        deleteButton.style.backgroundColor = 'var(--purple2)';
        deleteButton.style.border = 'solid 1px var(--purple2)';
        deleteButton.style.cursor = 'pointer';
        deleteButton.disabled = false; 
        
        deleteButton.addEventListener("click", () => {
          lastRow.remove();
        });

        tableBody[1].appendChild(lastRow);
        Td.value = Row;

      }
      if(tableBody[1].children.length > window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"1")){
        tableBody[1].lastElementChild.remove();
      }
      for(var i=0; i<Td.children.length; i++){ 
        if (Row == Td.children[i].textContent){ //search for if the value of Row variable is exist in the module list
          Td.children[i].selected = true;  //select the value to appear 
        }
      }
      if(x==1 || x==5 || x==6){
        Td.value = Row;
      }
    }
  }

  //Table 02
  for(var n=0; n<window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"2"); n++){
    for(var x=0; x<7; x++){
      let Row = tableBody[2].children[n].children[x];
      Row = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+" "+window.localStorage.getItem("currentLevel")+" 2col"+n+x);
      let Td = tableBody[2].children[n].children[x].children[0];

      if(n>0){
        const lastRow = tableBody[2].lastElementChild.cloneNode(true);
        const selectInputs = lastRow.querySelectorAll("select");
        const textInput = lastRow.querySelector("input[type=text]");
        const timeInput = lastRow.querySelector("input[type=time]");
        const costInput = lastRow.querySelector("input[type=number]");
        selectInputs.forEach(input => input.selectedIndex = 0);
        textInput.value = "";
        timeInput.value = "";
        costInput.value = "";
        
        const deleteButton = lastRow.querySelector("#delete");

        deleteButton.style.color = 'white';
        deleteButton.style.backgroundColor = 'var(--purple2)';
        deleteButton.style.border = 'solid 1px var(--purple2)';
        deleteButton.style.cursor = 'pointer';
        deleteButton.disabled = false; 
        
        deleteButton.addEventListener("click", () => {
          lastRow.remove();
        });

        tableBody[2].appendChild(lastRow);
        Td.value = Row;

      }
      if(tableBody[2].children.length > window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"2")){
        tableBody[2].lastElementChild.remove();
      }
      for(var i=0; i<Td.children.length; i++){ 
        if (Row == Td.children[i].textContent){ //search for if the value of Row variable is exist in the module list
          Td.children[i].selected = true;  //select the value to appear 
        }
      }
      if(x==1 || x==5 || x==6){
        Td.value = Row;
      }
    }
  }

  //Table 03
  if(tableBody[3].parentElement.parentElement.style.display===""){ 
    for(var n=0; n<window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"3"); n++){
      for(var x=0; x<7; x++){
        let Row = tableBody[3].children[n].children[x];
        Row = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+" "+window.localStorage.getItem("currentLevel")+" 3col"+n+x);
        let Td = tableBody[3].children[n].children[x].children[0];

        if(n>0){
          const lastRow = tableBody[3].lastElementChild.cloneNode(true);
          const selectInputs = lastRow.querySelectorAll("select");
          const textInput = lastRow.querySelector("input[type=text]");
          const timeInput = lastRow.querySelector("input[type=time]");
          const costInput = lastRow.querySelector("input[type=number]");
          selectInputs.forEach(input => input.selectedIndex = 0);
          textInput.value = "";
          timeInput.value = "";
          costInput.value = "";
          
          const deleteButton = lastRow.querySelector("#delete");

          deleteButton.style.color = 'white';
          deleteButton.style.backgroundColor = 'var(--purple2)';
          deleteButton.style.border = 'solid 1px var(--purple2)';
          deleteButton.style.cursor = 'pointer';
          deleteButton.disabled = false; 
          
          deleteButton.addEventListener("click", () => {
            lastRow.remove();
          });

          tableBody[3].appendChild(lastRow);
          Td.value = Row;

        }
        if(tableBody[3].children.length > window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"3")){
          tableBody[3].lastElementChild.remove();
        }
        for(var i=0; i<Td.children.length; i++){ 
          if (Row == Td.children[i].textContent){ //search for if the value of Row variable is exist in the module list
            Td.children[i].selected = true;  //select the value to appear 
          }
        }
        if(x==1 || x==5 || x==6){
          Td.value = Row;
        }
      }
    }
  }

  //Table 04
  if(tableBody[4].parentElement.parentElement.style.display===""){ 
    for(var n=0; n<window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"4"); n++){
      for(var x=0; x<7; x++){
        let Row = tableBody[4].children[n].children[x];
        Row = window.localStorage.getItem(window.localStorage.getItem("currentAccount")+" "+window.localStorage.getItem("currentLevel")+" 4col"+n+x);
        let Td = tableBody[4].children[n].children[x].children[0];

        if(n>0){
          const lastRow = tableBody[4].lastElementChild.cloneNode(true);
          const selectInputs = lastRow.querySelectorAll("select");
          const textInput = lastRow.querySelector("input[type=text]");
          const timeInput = lastRow.querySelector("input[type=time]");
          const costInput = lastRow.querySelector("input[type=number]");
          selectInputs.forEach(input => input.selectedIndex = 0);
          textInput.value = "";
          timeInput.value = "";
          costInput.value = "";
          
          const deleteButton = lastRow.querySelector("#delete");

          deleteButton.style.color = 'white';
          deleteButton.style.backgroundColor = 'var(--purple2)';
          deleteButton.style.border = 'solid 1px var(--purple2)';
          deleteButton.style.cursor = 'pointer';
          deleteButton.disabled = false; 
          
          deleteButton.addEventListener("click", () => {
            lastRow.remove();
          });

          tableBody[4].appendChild(lastRow);
          Td.value = Row;

        }
        if(tableBody[4].children.length > window.localStorage.getItem(window.localStorage.getItem("currentAccount")+"Rows"+window.localStorage.getItem("currentLevel")+"4")){
          tableBody[4].lastElementChild.remove();
        }
        for(var i=0; i<Td.children.length; i++){ 
          if (Row == Td.children[i].textContent){ //search for if the value of Row variable is exist in the module list
            Td.children[i].selected = true;  //select the value to appear 
          }
        }
        if(x==1 || x==5 || x==6){
          Td.value = Row;
        }
      }
    }
  }
  // For remove all the empty rows unless first row.
  for(var x=0; x<5; x++){
    for(var n=0; n<tableBody[x].children.length; n++){
      if(n>0){
        if(tableBody[x].children[n].children[1].children[0].value ===""){
          tableBody[x].children[n].remove();
          console.log('yes its deleted!!!!');
          //tableBody[0].children[0].children[6].children[0].value
          for(var i=0; i<7; i++){
            localStorage.removeItem(window.localStorage.getItem("currentAccount")+" "+window.localStorage.getItem("currentLevel")+" "+x+"col"+n+i);
          }
        }
      }
      if(tableBody[x].children.length == 1){
        const detect = tableBody[x].rows[0].cells[7];
        detect.children[0].style.transition = '0.1s';
        detect.children[0].style.color = 'grey';
        detect.children[0].style.backgroundColor = 'white';
        detect.children[0].style.border = 'solid 1px grey';
        detect.children[0].style.cursor = 'not-allowed';
        detect.children[0].disabled = true; 
      }else {
        const detect = tableBody[x].rows[0].cells[7];
        detect.children[0].style.transition = '0.1s';
        detect.children[0].style.color = 'white';
        detect.children[0].style.backgroundColor = 'var(--purple2)';
        detect.children[0].style.border = 'solid 1px var(--purple2)';
        detect.children[0].style.cursor = 'pointer';
        detect.children[0].disabled = false; 
      }
    }
  }
}