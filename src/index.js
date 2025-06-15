function generateQuote(event) {
  event.preventDefault();
  console.log("This is working");

  new Typewriter("#quote", {
    strings: "This is a motivational quote.",
    autoStart: true,
    pauseFor: 1200,
    delay: 50,
    cursor: null,
  });

  new Typewriter("#quote-sign-off", {
    strings: "Written by AI",
    autoStart: true,
    delay: 100,
    cursor: null,
  });
}

let formElement = document.querySelector("#quote-generator-form");
formElement.addEventListener("submit", generateQuote);
