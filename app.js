'use strict';
/*
Create a constructor function that creates an object associated with each 
product, and has the following properties:
Name of the product
File path of image

Create an algorithm that will randomly generate three unique product 
images from the images directory and display them side-by-side-by-side in the browser window.

Attach an event listener to the section of the HTML page where the 
images are going to be displayed.

Once the users ‘clicks’ a product, generate three new products for 
the user to pick from.
*/

var allImages = []; //this is for all the images i'll use

// now im gonna start writing the functions for the products

function Picture(name, imageSrc){
    this.name = name
    this.imageSrc = imageSrc
    this.clickCount = 0;
    this.totalshow = 0;

    Picture.push(this);
}

Picture.prototype.render = function(){
    
    var targetUl = document.getElementById('merchandise');
    var newLi = document.createElement('li');
    var newImg =  document.createElement('img');
    var newP = document.createElement('p');
   this.totalshow++;

    
    newP.textContent = (this.name)
    newLi.appendChild(newP);

    newImg.src = this.img;
    newImg.id = this.name;
    newLi.appendChild(newImg);
    targetUl.appendChild(newLi)

};


new Picture('alien', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/cthulhu.jpg')
new Picture('bag', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/bag.jpg')
new Picture('banana', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/banana.jpg')
new Picture('bathroom', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/bathroom.jpg')
new Picture('boots', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/boots.jpg')
new Picture('breakfast', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/breakfast.jpg')
new Picture('bubble gum', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/bubblegum.jpg')
new Picture('chair', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/chair.jpg')
new Picture('dog', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/dog-duck.jpg')
new Picture('dragon', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/dragon.jpg')
new Picture('pen', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/pen.jpg')
new Picture('pet', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/pet-sweep.jpg')
new Picture('pizza', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/scissors.jpg')
new Picture('shark', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/shark.jpg')
new Picture('sweep', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/sweep.png')
new Picture('tauntaun', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/tauntaun.jpg')
new Picture('unicorn', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/unicorn.jpg')
new Picture('usb', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/usb.gif')
new Picture('water can', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/water-can.jpg')
new Picture('wine glass', 'https://raw.githubusercontent.com/codefellows/seattle-201d62/master/class-11/assets/wine-glass.jpg')

allImages[0].render()