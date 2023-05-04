function add(){
    var lastValue = 0,b=0

    act=f.ddd.value;
    b = act.charAt(act.length - 1)
    if(b == '+' || b == "-" || b == "*" || b == "/"){
        f.ddd.value = act.substring(0,act.length - 1)
        f.ddd.value += "+"
    }else{
        f.ddd.value += "+"
    }
}

function minus(){
    var lastValue = 0,b=0

    act=f.ddd.value;
    b = act.charAt(act.length - 1)
    if(b == '+' || b == "-" || b == "*" || b == "/"){
        f.ddd.value = act.substring(0,act.length - 1)
        f.ddd.value += "-"
    }else{
        f.ddd.value += "-"
    }
}

function multiply(){
    var lastValue = 0,b=0

    act=f.ddd.value;
    b = act.charAt(act.length - 1)
    if(b == '+' || b == "-" || b == "*" || b == "/"){
        f.ddd.value = act.substring(0,act.length - 1)
        f.ddd.value += "*"
    }else{
        f.ddd.value += "*"
    }
}
function divide(){
    var lastValue = 0,b=0

    act=f.ddd.value;
    b = act.charAt(act.length - 1)
    if(b == '+' || b == "-" || b == "*" || b == "/"){
        f.ddd.value = act.substring(0,act.length - 1)
        f.ddd.value += "/"
    }else{
        f.ddd.value += "/"
    }
}