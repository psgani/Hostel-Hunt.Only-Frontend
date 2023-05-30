function togglehide(){
    let btn=document.getElementsByClassName('gandipet');
    let para=document.getElementById('sm1');
    let para1=document.getElementById('sdb1');
    let para2=document.getElementById('sbn1');
    if(para.style.display !='none' & para1.style.display !='none'){
        para2.style.display = 'none';
    }
    else{
        para.style.display ='block';
        para1.style.display ='block';
        para2.style.display='none';
    }
    para.style.display="";

}
function togglehide2(){
    let btn=document.getElementsByClassName('gachibowli');
    let para=document.getElementById('sbn1');
    let para1=document.getElementById('sm1');
    let para2=document.getElementById('sdb1');
    if(para.style.display !='none'){
        para1.style.display='none';
        para2.style.display='none';
    }
    else{
        para.style.display ='block';
        para1.style.display='none';
        para2.style.display='none';
    }
    para.style.display="";

}
function sdh_fee(){
    let btn=document.getElementsByClassName('nav_item_fee');
    let para=document.getElementById('table_nav_id');
    let para1=document.getElementById('food_nav_id');
    let para2=document.getElementById('accommodations_nav_id');

    if(para.style.display !='none'){
        para1.style.display='none';
        para2.style.display='none';
    }
    else{
        para.style.display ='block';
        para1.style.display='none';
        para2.style.display='none';
    }
}
function sdh_food(){
    let btn=document.getElementsByClassName('nav_item_food');
    let para=document.getElementById('food_nav_id');
    let para1=document.getElementById('table_nav_id');
    let para2=document.getElementById('accommodations_nav_id');
    if(para.style.display !='none'){
        para1.style.display='none';
        para2.style.display='none';
    }
    else{
        para.style.display ='block';
        para1.style.display='none';
        para2.style.display='none';
    }
    para.style.display="";
}
function sdh_accom(){
    let btn=document.getElementsByClassName('nav_item_accom');
    let para=document.getElementById('accommodations_nav_id');
    let para1=document.getElementById('table_nav_id');
    let para2=document.getElementById('food_nav_id');
    if(para.style.display !='none'){
        para1.style.display='none';
        para2.style.display='none';
    }
    else{
        para.style.display ='block';
        para1.style.display='none';
        para2.style.display='none';
    }
    para.style.display="";
}
function sm_accom(){
    let btn=document.getElementsByClassName('nav_item_accom');
    let para=document.getElementById('accommodations_nav_id_sm');
    let para1=document.getElementById('table_nav_id_sm');
    let para2=document.getElementById('food_nav_id_sm');
    if(para.style.display !='none'){
        para1.style.display='none';
        para2.style.display='none';
    }
    else{
        para.style.display ='block';
        para1.style.display='none';
        para2.style.display='none';
    }
    para.style.display="";
}
function sm_food(){
    let btn=document.getElementsByClassName('nav_item_food');
    let para=document.getElementById('food_nav_id_sm');
    let para1=document.getElementById('table_nav_id_sm');
    let para2=document.getElementById('accommodations_nav_id_sm');
    if(para.style.display !='none'){
        para1.style.display='none';
        para2.style.display='none';
    }
    else{
        para.style.display ='block';
        para1.style.display='none';
        para2.style.display='none';
    }
    para.style.display="";
}
function sm_fee(){
    let btn=document.getElementsByClassName('nav_item_fee');
    let para=document.getElementById('table_nav_id_sm');
    let para1=document.getElementById('food_nav_id_sm');
    let para2=document.getElementById('accommodations_nav_id_sm');

    if(para.style.display !='none'){
        para1.style.display='none';
        para2.style.display='none';
    }
    else{
        para.style.display ='block';
        para1.style.display='none';
        para2.style.display='none';
    }
}
function sbn_accom(){
    let btn=document.getElementsByClassName('nav_item_accom');
    let para=document.getElementById('accommodations_nav_id_sbn');
    let para1=document.getElementById('table_nav_id_sbn');
    let para2=document.getElementById('food_nav_id_sbn');
    if(para.style.display !='none'){
        para1.style.display='none';
        para2.style.display='none';
    }
    else{
        para.style.display ='block';
        para1.style.display='none';
        para2.style.display='none';
    }
    para.style.display="";
}
function sbn_fee(){
    let btn=document.getElementsByClassName('nav_item_fee');
    let para=document.getElementById('table_nav_id_sbn');
    let para1=document.getElementById('food_nav_id_sbn');
    let para2=document.getElementById('accommodations_nav_id_sbn');

    if(para.style.display !='none'){
        para1.style.display='none';
        para2.style.display='none';
    }
    else{
        para.style.display ='block';
        para1.style.display='none';
        para2.style.display='none';
    }
}
function sbn_food(){
    let btn=document.getElementsByClassName('nav_item_food');
    let para=document.getElementById('food_nav_id_sbn');
    let para1=document.getElementById('table_nav_id_sbn');
    let para2=document.getElementById('accommodations_nav_id_sbn');
    if(para.style.display !='none'){
        para1.style.display='none';
        para2.style.display='none';
    }
    else{
        para.style.display ='block';
        para1.style.display='none';
        para2.style.display='none';
    }
    para.style.display="";
}

function submitit(){
        alert("Your details are submitted successfully!!");
    }


