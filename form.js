"use strict"

let form1 = document.getElementById("form-1");
let form2 = document.getElementById("form-2");
let form3 = document.getElementById("form-3");
let line = document.querySelectorAll(".line");
let circles = document.querySelectorAll(".circle");

let next1 = document.getElementById('next1');
let next2 = document.getElementById('next2');
let alert1 = document.querySelectorAll('.alert1');
let alert2 = document.querySelectorAll('.alert2');
let alert3 = document.querySelectorAll('.alert3');
let input_f1 = document.querySelectorAll('.input1'); 
let input_f2 = document.querySelectorAll('.input2');
let input_f3 = document.querySelectorAll('.input3');
let previous1 = document.getElementById("previous1");
let previous2 = document.getElementById("previous2");
let alldata = []

circles.forEach((circle)=>{
    circle.addEventListener("click",(e)=>{
        let circlenum = circle.innerHTML;
        // // form1.classList.add('hide');
        // form2.classList.add('hide');
        // form3.classList.add('hide');
        line[0].classList.remove('lines');
        line[1].classList.remove('lines');
        if(circlenum == 1){
            
           form1.classList.remove('hide');
           form2.classList.add('hide');
           form3.classList.add('hide');
           line[0].classList.remove('lines');
           line[1].classList.remove('lines');
           
        }
        else if(circlenum == 2){

            console.log(nextbtn1(e));
            if(nextbtn1(e)){
                form1.classList.add('hide');
                form3.classList.add('hide');
                form2.classList.remove('hide');
                line[0].classList.add('lines');
            }

        }
        else if(circlenum == 3){
            if(nextbtn2(e)){
            form1.classList.add('hide');
            form2.classList.add('hide');
            form3.classList.remove('hide');
            line[0].classList.add('lines');
            line[1].classList.add('lines');
            }
            
        }
        
    })
})

function nextbtn1(event){
    event.preventDefault()

    let flag = true
    
    input_f1.forEach((msg1,i)=>{
        if(msg1.value.trim() === ""){
            alert1[i].style.display="block";
            flag = false
        }
        else{
            alert1[i].style.display="none";
            temporary()
        }
    })
    if(flag){
        form1.classList.add('hide');
        form2.classList.remove('hide');
        line[0].classList.add('lines');
    }
    return flag

}

function nextbtn2(event){
    event.preventDefault()

    let flag = true

    input_f2.forEach((msg2,i)=>{
        if(msg2.value.trim() === ""){
            alert2[i].style.display="block";
            
            flag = false
        }
        else{
            alert2[i].style.display="none";
            temporary()
        }
    })
    if(flag){
        form2.classList.add('hide');
        form3.classList.remove('hide');
        line[0].classList.add('lines');
        line[1].classList.add('lines');
    }
    return flag

}

function submitbtn(event){
    event.preventDefault()
    let flag = true
    input_f3.forEach((msg3,i)=>{
        if(msg3.value.trim() === ""){
            alert3[i].style.display="block";
            flag = false
        }
        else{
            alert3[i].style.display="none";
            
        }
    })
    
            let name = document.getElementById("name").value;
            let age =  document.getElementById("age").value;
            let dob = document.getElementById("dob").value;
            let father  = document.getElementById("fname").value; 
            let mother = document.getElementById('mname').value;
            let ph = document.getElementById("num").value;
            let degree = document.getElementById("degree").value;
            let college = document.getElementById("college").value;
            let course = document.getElementById("course").value;
            let aadhar = document.getElementById("aadhar").value;
            let pan = document.getElementById("pan").value;
            const totaldata={
                myname : name,
                myage : age,
                mydob : dob,
                myfather : father,
                mymother : mother,
                myph : ph,
                mydegree : degree,
                mycollege : college,
                mycourse : course,
                myaadhar : aadhar,
                mypan : pan 
            }
        alldata.push(totaldata);
        localStorage.setItem('data',JSON.stringify(alldata))||"";
        localStorage.removeItem('temp');
    return flag
    
    
}

function temporary(){
    let name = document.getElementById("name").value;
    let age =  document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let father  = document.getElementById("fname").value; 
    let mother = document.getElementById('mname').value;
    let ph = document.getElementById("num").value;
    let degree = document.getElementById("degree").value;
    let college = document.getElementById("college").value;
    let course = document.getElementById("course").value;
    let aadhar = document.getElementById("aadhar").value;
    let pan = document.getElementById("pan").value;

    let temporarydata={
        myname : name,
        myage : age,
        mydob : dob,
        myfather : father,
        mymother : mother,
        myph : ph,
        mydegree : degree,
        mycollege : college,
        mycourse : course,
        myaadhar : aadhar,
        mypan : pan 
    }
    localStorage.setItem('temp',JSON.stringify(temporarydata))||"";

}

window.addEventListener('load',()=>{
    let loading = JSON.parse(localStorage.getItem('temp'));
    if(loading){
        document.getElementById("name").value = loading.myname
        document.getElementById("age").value = loading.myage
        document.getElementById("dob").value = loading.mydob
        document.getElementById("fname").value = loading.myfather
        document.getElementById('mname').value = loading.mymother
        document.getElementById("num").value = loading.myph
        document.getElementById("degree").value = loading.mydegree
        document.getElementById("college").value = loading.mycollege
        document.getElementById("course").value = loading.mycourse
        document.getElementById("aadhar").value = loading.myaadhar
        document.getElementById("pan").value = loading.mypan
    }
})


previous1.addEventListener('click',()=>{
    form1.classList.remove('hide');
    form2.classList.add('hide');
    line[0].classList.remove('lines');
    line[1].classList.remove('lines');
})


previous2.addEventListener('click',()=>{
    form2.classList.remove('hide');
    form3.classList.add('hide');
    line[0].classList.add('lines');
    line[1].classList.remove('lines');
})

