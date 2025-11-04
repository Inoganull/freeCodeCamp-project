function imageSearch(images, term) {
    const lowerCaseTerm = term.toLowerCase();
  
    return images.filter(imageName => {
      const lowerCaseImageName = imageName.toLowerCase();
  
      return lowerCaseImageName.includes(lowerCaseTerm);
    });
  }
  
  console.log(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"));
  console.log(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"));
  console.log(imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat"))