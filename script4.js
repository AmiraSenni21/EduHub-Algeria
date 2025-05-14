/******************** Learn More *******************/
/**************** Intial Content ***************/
let intialContent = document.getElementById('intialContent');
var SCROLL = document.getElementsByClassName('scroll');
var TabPrimair = document.getElementsByClassName('P-Table');
var TBody = document.getElementsByClassName('tbody');


window.onload = function() {
    var Item = parseInt(window.localStorage.getItem('item'));
    var UserItem = window.localStorage.getItem('userName'+Item);
    
    /**************** If the teacher name and language don't exist ***********/
    intialContent.children[0].textContent = "مدرسة " +window.localStorage.getItem(UserItem+'SchName');
    intialContent.children[1].children[1].textContent = window.localStorage.getItem(UserItem+'Wilaya');
    intialContent.children[1].children[4].textContent = window.localStorage.getItem(UserItem+'Dira');
    intialContent.children[2].children[1].textContent = window.localStorage.getItem(UserItem+'DirName');
    intialContent.children[3].children[1].textContent = window.localStorage.getItem(UserItem+'Nbr1');
    if(window.localStorage.getItem(UserItem+'Nbr2') != ""){
        intialContent.children[3].children[2].textContent = " / "+window.localStorage.getItem(UserItem+'Nbr2');
    }
    intialContent.children[4].children[1].textContent = window.localStorage.getItem(UserItem+'Tarea');
    for(var x=0; x<13; x++){
        for(var y=0; y<TBody[x].children.length; y++){
            if(TBody[x].children[y].children[1].children[0].textContent==""){
                TBody[x].children[y].remove();
            }
        }
    }
}

intialContent.children[5].onclick = function(){
    window.scrollTo({
        top: 730, 
        left: 0, 
        behavior: 'smooth'
    });
}

/**************** CONTROL ON SCROLL *******************/
window.onscroll = function(){
    const Level = document.getElementsByClassName('level');
    const Cem = Level[1].getBoundingClientRect().top + window.scrollY;
    const Lycee = Level[2].getBoundingClientRect().top + window.scrollY; 
    if(scrollY < 700){
        SCROLL[0].style.marginBottom = "0";
    }else if((scrollY >= 700)&&(scrollY < Cem-500)) { 
        setTimeout(function() {
            'use strict';
            SCROLL[0].style.visibility = "visible";
        },500); 
        TabPrimair[0].style.opacity = '1';
        SCROLL[0].style.bottom = scrollY * (-1/6.75)+"%";
    }else if((scrollY >= Cem-300)&&(scrollY < Lycee-500)) { 
        setTimeout(function() {
            'use strict';
            SCROLL[0].style.visibility = "visible";
        },500); 
        TabPrimair[1].style.opacity = '1';
        SCROLL[0].style.bottom = scrollY * (-1/6.75)+"%";
    }else if(scrollY >= Lycee-300){ 
        setTimeout(function() {
            'use strict';
            SCROLL[0].style.visibility = "visible";
        },500); 
        TabPrimair[2].style.opacity = '1';
        SCROLL[0].style.bottom = scrollY * (-1/6.75)+"%";
    }else{
        SCROLL[0].style.marginTop = "10%";
    }      
    var j=0; 
    var v=1;
    var b=1;
    for(var i=0; i<6; i++){
        if(i==0){
            let Pos = TabPrimair[0].children[0].getBoundingClientRect().top;
            if(Pos+200 < window.innerHeight){
                SCROLL[0].children[i].style.backgroundColor = "var(--purple2)";
                SCROLL[0].children[i].style.border = " solid 2px var(--purple2)";   
            }else{
                SCROLL[0].children[i].style.backgroundColor = "var(--purple3)";
                SCROLL[0].children[i].style.border = " solid 2px var(--purple3)"; 
            } 
        }else if(i>0){
            let Pos = TabPrimair[0].children[i+j].getBoundingClientRect().top;
            if(Pos+200 < window.innerHeight){
                SCROLL[0].children[i].style.backgroundColor = "var(--purple2)"; 
            }else{
                SCROLL[0].children[i].style.backgroundColor = "var(--purple3)";
            }
            j++;
        }else{
            console.log('Nothing');
        }
    }
    
    for(var i=6; i<11; i++){
        if(i==6){
            let Pos = TabPrimair[1].children[0].getBoundingClientRect().top;
            if(Pos+200 < window.innerHeight){
                SCROLL[0].children[i].style.backgroundColor = "var(--purple2)";
               SCROLL[0].children[i].style.border = " solid 2px var(--purple2)";   
            }else{
                SCROLL[0].children[i].style.backgroundColor = "var(--purple3)"; 
                SCROLL[0].children[i].style.border = " solid 2px var(--purple3)";  
            } 
        }else if(i>6){
            let Pos = TabPrimair[1].children[v].getBoundingClientRect().top;
            if(Pos+200 < window.innerHeight){
                //SCROLL[0].children[i].style.border = " solid 2px var(--purple2)"; 
                SCROLL[0].children[i].style.backgroundColor = "var(--purple2)";    
            }else{
               // SCROLL[0].children[i].style.border = " solid 2px var(--purple3)"; 
                SCROLL[0].children[i].style.backgroundColor = "var(--purple3)";
            }
            v=v+2;
        }else{
            console.log('Nothing');
        }
    }

    for(var i=11; i<15; i++){
        if(i==11){
            let Pos = TabPrimair[2].children[0].getBoundingClientRect().top;
            if(Pos+130 < window.innerHeight){
                SCROLL[0].children[i].style.backgroundColor = "var(--purple2)";
                SCROLL[0].children[i].style.border = " solid 2px var(--purple2)";   
            }else{
                SCROLL[0].children[i].style.backgroundColor = "var(--purple3)"; 
                SCROLL[0].children[i].style.border = " solid 2px var(--purple3)";  
            } 
        }else if(i>11){
            let Pos = TabPrimair[2].children[b].getBoundingClientRect().top;
            if(Pos+130 < window.innerHeight){
                SCROLL[0].children[i].style.backgroundColor = "var(--purple2)"; 
                SCROLL[0].children[i].style.border = " solid 2px var(--purple2)";    
            }else{
                SCROLL[0].children[i].style.backgroundColor = "var(--purple3)"; 
                SCROLL[0].children[i].style.border = " solid 2px var(--purple3)"; 
            }
            b=b+2;
        }else{
            console.log('Nothing');
        }
    }
}


/****************** GET INFORMATION FROM DATA BASE *****************/
let Item = parseInt(window.localStorage.getItem('item'));
let UserItem = window.localStorage.getItem('userName'+Item);
/**************** PRIMARE ***************/
//Table 01
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsP0")); n++){
    for(var x=0; x<7; x++){
        if(TBody[0].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsP0"))){
            if(window.localStorage.getItem(UserItem+" P 0col"+n+1)!=""){
                let NewRow = TabPrimair[0].children[2].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[0].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 0col"+n+x)+"   س/د";
            }else{
                TBody[0].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 0col"+n+x)+"  دج";
            }
        }else{
           TBody[0].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 0col"+n+x); 
        }
    }
    if((n==0) && (TBody[0].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[0].parentElement.style.display = "none";
        TabPrimair[0].children[1].appendChild(par);
        TabPrimair[0].children[1].children[0].textContent="  غير متوفر";
        TabPrimair[0].children[1].children[0].style.fontSize = "1.5rem";
        TabPrimair[0].children[1].children[0].style.fontWeight = "200";
        TabPrimair[0].children[1].children[0].style.paddingRight = "20px";
        TabPrimair[0].children[1].children[0].style.color = "var(--purple2)";
    }
}

//Table 02
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsP1")); n++){
    for(var x=0; x<7; x++){
        if(TBody[1].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsP1"))){
            if(window.localStorage.getItem(UserItem+" P 1col"+n+1)!=""){
                let NewRow = TabPrimair[0].children[4].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[1].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 1col"+n+x)+"   س/د";
            }else{
                TBody[1].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 1col"+n+x)+"  دج";
            }
        }else{
           TBody[1].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 1col"+n+x); 
        }
    }
    if((n==0) && (TBody[1].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[1].parentElement.style.display = "none";
        TabPrimair[0].children[3].appendChild(par);
        TabPrimair[0].children[3].children[0].textContent="  غير متوفر";
        TabPrimair[0].children[3].children[0].style.fontSize = "1.5rem";
        TabPrimair[0].children[3].children[0].style.fontWeight = "200";
        TabPrimair[0].children[3].children[0].style.paddingRight = "20px";
        TabPrimair[0].children[3].children[0].style.color = "var(--purple2)";
    } 
}

//Table 03
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsP2")); n++){
    for(var x=0; x<7; x++){
        if(TBody[2].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsP2"))){
            if(window.localStorage.getItem(UserItem+" P 2col"+n+1)!=""){
                let NewRow = TabPrimair[0].children[6].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[2].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 2col"+n+x)+"   س/د";
            }else{
                TBody[2].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 2col"+n+x)+"  دج";
            }
        }else{
           TBody[2].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 2col"+n+x); 
        }
    }
    if((n==0) && (TBody[2].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[2].parentElement.style.display = "none";
        TabPrimair[0].children[5].appendChild(par);
        TabPrimair[0].children[5].children[0].textContent="  غير متوفر";
        TabPrimair[0].children[5].children[0].style.fontSize = "1.5rem";
        TabPrimair[0].children[5].children[0].style.fontWeight = "200";
        TabPrimair[0].children[5].children[0].style.paddingRight = "20px";
        TabPrimair[0].children[5].children[0].style.color = "var(--purple2)";
    }
}

//Table 04
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsP3")); n++){
    for(var x=0; x<7; x++){
        if(TBody[3].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsP3"))){
            if(window.localStorage.getItem(UserItem+" P 3col"+n+1)!=""){
                let NewRow = TabPrimair[0].children[8].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[3].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 3col"+n+x)+"   س/د";
            }else{
                TBody[3].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 3col"+n+x)+"  دج";
            }
        }else{
           TBody[3].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 3col"+n+x); 
        }
    }
    if((n==0) && (TBody[3].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[3].parentElement.style.display = "none";
        TabPrimair[0].children[7].appendChild(par);
        TabPrimair[0].children[7].children[0].textContent="  غير متوفر";
        TabPrimair[0].children[7].children[0].style.fontSize = "1.5rem";
        TabPrimair[0].children[7].children[0].style.fontWeight = "200";
        TabPrimair[0].children[7].children[0].style.paddingRight = "20px";
        TabPrimair[0].children[7].children[0].style.color = "var(--purple2)";
    }
}

//Table 05
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsP4")); n++){
    for(var x=0; x<7; x++){
        if(TBody[4].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsP4"))){
            if(window.localStorage.getItem(UserItem+" P 4col"+n+1)!=""){
                let NewRow = TabPrimair[0].children[10].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[4].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 4col"+n+x)+"   س/د";
            }else{
                TBody[4].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 4col"+n+x)+"  دج";
            }
        }else{
           TBody[4].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" P 4col"+n+x); 
        }
    }
    if((n==0) && (TBody[4].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[4].parentElement.style.display = "none";
        TabPrimair[0].children[9].appendChild(par);
        TabPrimair[0].children[9].children[0].textContent="  غير متوفر";
        TabPrimair[0].children[9].children[0].style.fontSize = "1.5rem";
        TabPrimair[0].children[9].children[0].style.fontWeight = "200";
        TabPrimair[0].children[9].children[0].style.paddingRight = "20px";
        TabPrimair[0].children[9].children[0].style.color = "var(--purple2)";
    }
    if(n>0){
        if(TBody[4].children[n].children[1].children[0].textContent ===""){
            TBody[4].children[n].style.display="none";
        }
    }
}
/**************** CEM ***************/
//Table 01
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsC0")); n++){
    for(var x=0; x<7; x++){
        if(TBody[5].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsC0"))){
            if(window.localStorage.getItem(UserItem+" C 0col"+n+1)!=""){
                let NewRow = TabPrimair[1].children[2].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[5].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 0col"+n+x)+"   س/د";
            }else{
                TBody[5].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 0col"+n+x)+"  دج";
            }
        }else{
           TBody[5].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 0col"+n+x); 
        }
    }
    if((n==0) && (TBody[5].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[5].parentElement.style.display = "none";
        TabPrimair[1].children[1].appendChild(par);
        TabPrimair[1].children[1].children[0].textContent="  غير متوفر";
        TabPrimair[1].children[1].children[0].style.fontSize = "1.5rem";
        TabPrimair[1].children[1].children[0].style.fontWeight = "200";
        TabPrimair[1].children[1].children[0].style.paddingRight = "20px";
        TabPrimair[1].children[1].children[0].style.color = "var(--purple2)";
    }
}
//Table 02
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsC1")); n++){
    for(var x=0; x<7; x++){
        if(TBody[6].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsC1"))){
            if(window.localStorage.getItem(UserItem+" C 1col"+n+1)!=""){
                let NewRow = TabPrimair[1].children[4].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[6].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 1col"+n+x)+"   س/د";
            }else{
                TBody[6].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 1col"+n+x)+"  دج";
            }
        }else{
           TBody[6].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 1col"+n+x); 
        }
    }
    if((n==0) && (TBody[6].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[6].parentElement.style.display = "none";
        TabPrimair[1].children[3].appendChild(par);
        TabPrimair[1].children[3].children[0].textContent="  غير متوفر";
        TabPrimair[1].children[3].children[0].style.fontSize = "1.5rem";
        TabPrimair[1].children[3].children[0].style.fontWeight = "200";
        TabPrimair[1].children[3].children[0].style.paddingRight = "20px";
        TabPrimair[1].children[3].children[0].style.color = "var(--purple2)";
    } 
}

//Table 03
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsC2")); n++){
    for(var x=0; x<7; x++){
        if(TBody[7].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsC2"))){
            if(window.localStorage.getItem(UserItem+" C 2col"+n+1)!=""){
                let NewRow = TabPrimair[1].children[6].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[7].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 2col"+n+x)+"   س/د";
            }else{
                TBody[7].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 2col"+n+x)+"  دج";
            }
        }else{
           TBody[7].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 2col"+n+x); 
        }
    }
    if((n==0) && (TBody[7].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[7].parentElement.style.display = "none";
        TabPrimair[1].children[5].appendChild(par);
        TabPrimair[1].children[5].children[0].textContent="  غير متوفر";
        TabPrimair[1].children[5].children[0].style.fontSize = "1.5rem";
        TabPrimair[1].children[5].children[0].style.fontWeight = "200";
        TabPrimair[1].children[5].children[0].style.paddingRight = "20px";
        TabPrimair[1].children[5].children[0].style.color = "var(--purple2)";
    }
}

//Table 04
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsC3")); n++){
    for(var x=0; x<7; x++){
        if(TBody[8].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsC3"))){
            if(window.localStorage.getItem(UserItem+" C 3col"+n+1)!=""){
                let NewRow = TabPrimair[1].children[8].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[8].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 3col"+n+x)+"   س/د";
            }else{
                TBody[8].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 3col"+n+x)+"  دج";
            }
        }else{
           TBody[8].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" C 3col"+n+x); 
        }
    }
    if((n==0) && (TBody[8].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[8].parentElement.style.display = "none";
        TabPrimair[1].children[7].appendChild(par);
        TabPrimair[1].children[7].children[0].textContent="  غير متوفر";
        TabPrimair[1].children[7].children[0].style.fontSize = "1.5rem";
        TabPrimair[1].children[7].children[0].style.fontWeight = "200";
        TabPrimair[1].children[7].children[0].style.paddingRight = "20px";
        TabPrimair[1].children[7].children[0].style.color = "var(--purple2)";
    }
}

/**************** Lycee ***************/
//Table 01
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsL0")); n++){
    for(var x=0; x<7; x++){
        if(TBody[9].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsL0"))){
            if(window.localStorage.getItem(UserItem+" L 0col"+n+1)!=""){
                let NewRow = TabPrimair[2].children[2].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[9].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" L 0col"+n+x)+"   س/د";
            }else{
                TBody[9].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" L 0col"+n+x)+"  دج";
            }
        }else{
           TBody[9].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" L 0col"+n+x); 
        }
    }
    if((n==0) && (TBody[9].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[9].parentElement.style.display = "none";
        TabPrimair[2].children[1].appendChild(par);
        TabPrimair[2].children[1].children[0].textContent="  غير متوفر";
        TabPrimair[2].children[1].children[0].style.fontSize = "1.5rem";
        TabPrimair[2].children[1].children[0].style.fontWeight = "200";
        TabPrimair[2].children[1].children[0].style.paddingRight = "20px";
        TabPrimair[2].children[1].children[0].style.color = "var(--purple2)";
    }
}
//Table 02
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsL1")); n++){
    for(var x=0; x<7; x++){
        if(TBody[10].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsL1"))){
            if(window.localStorage.getItem(UserItem+" L 1col"+n+1)!=""){
                let NewRow = TabPrimair[2].children[4].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[10].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" L 1col"+n+x)+"   س/د";
            }else{
                TBody[10].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" L 1col"+n+x)+"  دج";
            }
        }else{
           TBody[10].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" L 1col"+n+x); 
        }
    }
    if((n==0) && (TBody[10].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[10].parentElement.style.display = "none";
        TabPrimair[2].children[3].appendChild(par);
        TabPrimair[2].children[3].children[0].textContent="  غير متوفر";
        TabPrimair[2].children[3].children[0].style.fontSize = "1.5rem";
        TabPrimair[2].children[3].children[0].style.fontWeight = "200";
        TabPrimair[2].children[3].children[0].style.paddingRight = "20px";
        TabPrimair[2].children[3].children[0].style.color = "var(--purple2)";
    } 
}

//Table 03
for(var n=0; n<parseInt(window.localStorage.getItem(UserItem+"RowsL2")); n++){
    for(var x=0; x<7; x++){
        if(TBody[11].children.length < parseInt(window.localStorage.getItem(UserItem+"RowsL2"))){
            if(window.localStorage.getItem(UserItem+" L 2col"+n+1)!=""){
                let NewRow = TabPrimair[2].children[6].insertRow(-1); //-1 to insert under the old rows || 0 to insert up the older rows
                for(i=0; i<7; i++){
                    var paragraph = document.createElement("p");
                    NewRow.insertCell(i).appendChild(paragraph);
                }              
            }
        }
        
        if(x==5 || x==6){
            if(x==5){
                TBody[11].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" L 2col"+n+x)+"   س/د";
            }else{
                TBody[11].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" L 2col"+n+x)+"  دج";
            }
        }else{
           TBody[11].children[n].children[x].children[0].textContent = window.localStorage.getItem(UserItem+" L 2col"+n+x); 
        }
    }
    if((n==0) && (TBody[11].children[0].children[1].children[0].textContent=="")){
        var par = document.createElement("p");
        TBody[11].parentElement.style.display = "none";
        TabPrimair[2].children[5].appendChild(par);
        TabPrimair[2].children[5].children[0].textContent="  غير متوفر";
        TabPrimair[2].children[5].children[0].style.fontSize = "1.5rem";
        TabPrimair[2].children[5].children[0].style.fontWeight = "200";
        TabPrimair[2].children[5].children[0].style.paddingRight = "20px";
        TabPrimair[2].children[5].children[0].style.color = "var(--purple2)";
    }
}

/**************** If the teacher name and language are exists ***********/
if((window.localStorage.getItem("techName") !="")&&(window.localStorage.getItem("Lang") != "المادة (إختياري)")){
    for(var z=0; z<20; z++){
        if(UserItem == window.localStorage.getItem('userName'+z)){
            var IndexTable = parseInt(window.localStorage.getItem('indexTable'+z));
            TBody[IndexTable].parentElement.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
            for(var i=0; i<12; i++){
                for(var r=0; r<TBody[IndexTable+i].children.length; r++){
                    var Lang = window.localStorage.getItem('Lang');
                    var techName = window.localStorage.getItem('techName');
                    if((TBody[IndexTable+i].children[r].children[0].children[0].textContent === Lang) && (TBody[IndexTable+i].children[r].children[1].children[0].textContent === techName)){
                        TBody[IndexTable+i].children[r].style.background = "#6fc76f";
                    }
                }
            }
        }
    }   
}