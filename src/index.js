function displayQuote(response) {
  new Typewriter("#quote", {
    strings: `${response.data.answer} <br/> ~ Written by AI.`,
    autoStart: true,
    pauseFor: 1200,
    delay: 50,
    cursor: null,
  });
}

function generateQuote(event) {
  event.preventDefault();
  console.log("This is working");

  let userInputElement = document.querySelector("#user-input");

  let apiKey = "1894f4b60349tcab94fb26933d94a5o1";
  let prompt = `Write me a motivational quote about the topic ${userInputElement.value}.`;
  let context =
    "You are an AI assistant who likes to write unique one-sentence motivational quotes about specific topics.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

let formElement = document.querySelector("#quote-generator-form");
formElement.addEventListener("submit", generateQuote);
