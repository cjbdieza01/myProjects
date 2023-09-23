let names = new Array ("john", "jay", "ana", "raul", 
"martin")



addName()
removeName()



function addName() {
    // let names2 = names.push("caleb")
    document.write(names.push("caleb") + "<br>");
    document.write(names + "<br>");
}

function removeName() {
    document.write(names.pop() + "<br>")
}

document.write(names);
