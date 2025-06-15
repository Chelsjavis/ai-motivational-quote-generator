function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
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

function generateQuote(event) {
  event.preventDefault();
  console.log("This is working");

  let userInputElement = document.querySelector("#user-input");

  let apiKey = "1894f4b60349tcab94fb26933d94a5o1";
  let prompt = `Generate a one-sentence quote to give the user motivation for ${userInputElement}`;
  let context =
    "You are an AI assistant who likes to give motivation to users in short quotes.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

let formElement = document.querySelector("#quote-generator-form");
formElement.addEventListener("submit", generateQuote);
