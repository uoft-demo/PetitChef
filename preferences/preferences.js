let saveFile = () => {
    var yes1 = document.getElementById("yes1")
    var no1 = document.getElementById("no1")
    var yes2 = document.getElementById("yes2")
    var no2 = document.getElementById("no2")
    var yes3 = document.getElementById("yes3")
    var no3 = document.getElementById("no3")
    var yes4 = document.getElementById("yes4")
    var no4 = document.getElementById("no4")
    var yes5 = document.getElementById("yes5")
    var no5 = document.getElementById("no5")
    var yes6 = document.getElementById("yes6")
    var no6 = document.getElementById("no6")
    var cuisine = document.getElementById("keyword");

    if((yes1.checked == true && no1.checked == true)||(yes2.checked == true && no2.checked == true)||(yes3.checked == true && no3.checked == true)||(yes4.checked == true && no4.checked == true)||(yes5.checked == true && no5.checked == true)||(yes6.checked == true && no6.checked == true)){
        return document.getElementById("error").innerHTML
    }

    else if(yes1.checked == true){
        var knife = true;
        return document.getElementById("result").innerHTML = knife;
    }

    else if(yes2.checked == true){
        var sharp = true;
        return document.getElementById("result").innerHTML = sharp;
    }

     else if(yes3.checked == true){
        var oven = true;
       return document.getElementById("result").innerHTML = oven;
    }  
    else if(yes4.checked == true){
        var stove = true;
        return document.getElementById("result").innerHTML = stove
    }  
    
    else if(yes5.checked == true){
        var raw = true; 
        return document.getElementById("result").innerHTML = raw;
    }  
    else if(yes6.checked == true){
        var irritants =true
        return document.getElementById("result").innerHTML = irritants;
    }  

    else if(no1.checked == true){
        var knife = false;
        return document.getElementById("result").innerHTML = knife;
    }

    else if(no2.checked == true){
        var sharp = false;
        return document.getElementById("result").innerHTML = sharp;
    }

     else if(no3.checked == true){
        var oven = false;
       return document.getElementById("result").innerHTML = oven;
    }  
    else if(no4.checked == true){
        var stove = false;
        return document.getElementById("result").innerHTML = stove
    }  
    
    else if(no5.checked == true){
        var raw = false; 
        return document.getElementById("result").innerHTML = raw;
    }  
    else if(no6.checked == true){
        var irritants = false
        return document.getElementById("result").innerHTML = irritants;
    }

    let keyworddata = keyword.value;
}