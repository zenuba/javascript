//first part
document.getElementById("main-heading").innerHTML= "New DOM Layout";
document.getElementById('page-header').classList.remove('bg-dark');
document.getElementById("page-header").classList.add("bg-success");


//second part
document.getElementById('para1').textContent="The Document object Model(DOM) is a cross-platform and language-independent interface that treats an xml or HTML document as a tree structure.";

//third part
document.getElementById('para2').textContent='The Document object model(DOM) is a programing interface for HTML and  XML documents. It represent the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programing languages can connect to the page.';

// fourth part 
let button = document.getElementById('btn');
let para4 = document.getElementById('para4');

button.addEventListener('click', () => {
    //let para4= document. createElement('p')
    para4.textContent = 'The Document object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.';
});
//fiveth part
const red = document.getElementById('red');
red.classList.remove('bg-white');
red.classList.add('bg-danger')

const blue = document.getElementById('blue');
blue.classList.remove('bg-white');
blue.classList.add('bg-primary')

const yellow = document.getElementById('yellow');
yellow.classList.remove('bg-white');
yellow.classList.add('bg-warning')

const green = document.getElementById('green');
green.classList.remove('bg-white');
green.classList.add('bg-success')

const black = document.getElementById('black');
black.classList.remove('bg-white');
black.classList.add('bg-dark');
black.classList.add('text-white');
