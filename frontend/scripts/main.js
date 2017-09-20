//placeholder button for creating a new blog post
var myButton = document.querySelector('button').onclick = function(){
    alert('New post should be created');
}

//define an array of 3 images, that user will be able to go through
//for now, all these images are defined explicitly
var imgPath1 = 'images/img-me.jpg';
var imgPath2 = 'images/img-toronto.jpg';
var imgPath3 = 'images/img-school.jpg';

var images = [imgPath1, imgPath2, imgPath3]; 
var imgIndex = 0;
var img = document.getElementById('img-view');

var prevButton = document.getElementById('prev-btn');

prevButton.onclick = function() {
    if(imgIndex > 0) {
        //buttonOff(nextButton, false);
        imgIndex--;
        img.setAttribute('src', images[imgIndex]);
    }
    else{
        //buttonOff(prevButton, true);
    }
}

var nextButton = document.getElementById('next-btn');
nextButton.onclick = function() {
    if(imgIndex < 2) {
        //buttonOff(nextButton, false);
        imgIndex++;
        img.setAttribute('src', images[imgIndex]);
    }
    else{
        //buttonOff(nextButton, true);
    }
}

function buttonOff(button, state){
    if(state === true){
        button.setAttribute('disabled', true);
        //button.setAttribute('style'. 'border: 0px');
    }
    else{
        button.setAttribute('disabled', false);
    }
}