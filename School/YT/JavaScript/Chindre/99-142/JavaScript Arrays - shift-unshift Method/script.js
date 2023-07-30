let names = new Array ("jay", "joy", "jake", "jack"," jass", "jing")

document.write(names + "<br>");
addName();
removeName();
function addName() {
document.write(names.unshift("JAYA") + "<br>" )
    
}

function removeName() {
    document.write(names.shift() + "<br>");
    document.write(names + "<br>");
    document.write(names.shift());
} 