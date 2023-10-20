  /* code to list the partners picture */
  var photos = []; //declaring an empty array to store image element
  var fileNames = []; // declaring an empty elemtn to store iamge fiilename
  var imageList = []; // declaring an empty array to store html list that contains image
  var image; //declaring empty variable to store the assembled image list codes
  var openList = "<li class='partner'>" // declaring a variable to contain the open list tag
  var closeList = "</li>"; // declaring a variable to contain the close list tag

  // create a loop to create 6 images starting with index of 0
  var imageListNoComma = ""; // create a list to add an element to not print comma
  for (var i = 0; i < 6; i++) {
      fileNames.push(""+(i+1)); // create image filename and store in the array
      photos.push("<img src='images/partners/partner" + fileNames[i]+ ".png'>"); // assembling the filename into a large element
      image = openList + photos[i] + closeList; // assemble image element from previous arrays
      imageList.push(image); //store the image element code into an array 
      imageListNoComma = imageListNoComma + (image.toString().replace(',',' '));
  }
  // console.log(imageListNoComma);
  // display all six images
  document.getElementById("partners").innerHTML = imageListNoComma;

  