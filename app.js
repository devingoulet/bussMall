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

function babySweeper(somethingSomething, imageSrc){
    this.name = somethingSomething
    this.imageSrc = imageSrc
    this.clickCount = 0;

    allImages.push(this);
}

babySweeper.prototype.render = function(){
    
    var target = document.getElementById('baby');
    var newLi = document.createElement('li');

    var newP = document.createElement('p');
    newP.textContent = 'clicks : ' + this.clickCount

    var newImg =  document.createElement('img');
    newImg.src = this.imageSrc;
    newImg.id = this.imageSrc;

    newLi.appendChild(newImg);
    newLi.appendChild(newP);

    target.appendChild(newLi)

};