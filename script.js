const btn = document.getElementById("btn")



function locate() {
  window.location.href =
    "https://docs.google.com/forms/d/e/1FAIpQLScDewntvdKrnlgtXIE9puC9CmNnGlTS3ElCZPjfRVl3aAHiRg/viewform";
}
// btn.addEventListener("click", function() {
//   window.location.href =
//     "https://docs.google.com/forms/d/e/1FAIpQLScDewntvdKrnlgtXIE9puC9CmNnGlTS3ElCZPjfRVl3aAHiRg/viewform";
// });






let animateElements = document.querySelectorAll(".animation");
  


  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animation");
        } else {
          entry.target.classList.remove("scroll-animation");
        }
      });
    },
    {
      threshold: 0,
    }
  );

  animateElements.forEach((element) => {
    observer.observe(element);
  });

 

  






  const textElement = document.getElementById("text");
  const textToType = textElement.innerText;
  const wordsToType = [
    "Department of Artificial Intelligence & Machine Learning",
    "dyptechfest",
  ];

  const maxWordLength = Math.max(...wordsToType.map((word) => word.length));

  let currentWordIndex = 0;
  let currentWord = wordsToType[currentWordIndex];

  let index = 0;
  function typeText() {
    textElement.innerText = currentWord.slice(0, index++);

    if (index <= currentWord.length) {
      setTimeout(typeText, 150);
    } else {
      setTimeout(eraseText, 5000);
    }
  }

  function eraseText() {
    textElement.innerText = currentWord.slice(0, index);

    if (index > 0) {
      index--;
      setTimeout(eraseText, 150);
    } else {
      currentWordIndex = (currentWordIndex + 1) % wordsToType.length;
      currentWord = wordsToType[currentWordIndex];
      setTimeout(typeText, maxWordLength * 50);
    }
  }

  typeText();







