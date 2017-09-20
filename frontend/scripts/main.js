//define an array of 3 images, that user will be able to go through
//for now, all these images are defined explicitly
/*var imgPath1 = 'frontend/images/img-me.JPG';
var imgPath2 = 'frontend/images/img-toronto.jpg';
var imgPath3 = 'frontend/images/img-school.jpg';
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
}*/

// setting onclick listener for create button.
var pressed = false;
var createButton = document.getElementById("create-btn");
createButton.onclick = function() {
    if(pressed === false){
        pressed = true;
        switchColorScheme(createButton);
        openInputForm();
    }
    else{
        pressed = false;
        switchColorScheme(createButton);
        hideInputForm();
    }
};

function switchColorScheme(button){
    if(pressed){
        createButton.style.backgroundColor = '#0084ff';
        createButton.style.color = '#ffffff';
    }
    else{
        createButton.style.color = '#0084FF';
        createButton.style.backgroundColor = '#FFFFFF';
    }
}

function openInputForm(){
    inputHtml = '<input id="input-title" type="text" placeholder="Title of the post"><br>\
    <input  id="input-content" type="text" placeholder="Content of the post"><br>\
    <button id="submit-btn">Submit</button>';
    var inputDiv = document.getElementById("input-div");
    inputDiv.innerHTML = inputHtml;
    submitButton = document.getElementById("submit-btn");
    submitButton.onclick = function(){
        var title = document.getElementById("input-title").value;
        var content = document.getElementById("input-content").value;
        if(title !== '' && content !== ''){
            insertPostHtml(title, content);
            hideInputForm();
        }
        else
            alert('Title/content cannot be empty');
    }
}
function insertPostHtml(title, content){
    //creating HTML to be inserted into the post div
    postHtml='<h2 id="post-title">' + title + 
    '</h2> <p id="post-date"><i>Posted on: 09/20/17</i></p>\
    <p id="post-content">' + content + '</p>\
    <hr>';
    document.getElementById("post-div").innerHTML = postHtml;
}

function hideInputForm(){
    document.getElementById("input-div").innerHTML = '';
}