let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
// finds the expression Waldo 
//Won't work with variations WALDO, waldo, wAlDo etc. 