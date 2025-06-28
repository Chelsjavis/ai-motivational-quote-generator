function displayQuote(response) {
  new Typewriter("#quote", {
    strings: `${response.data.answer} <div class="sign-off"> ~ Written by AI.</div>`,
    autoStart: true,
    pauseFor: 1200,
    delay: 50,
    cursor: null,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let userInputElement = document.querySelector("#user-input");

  let apiKey = "1894f4b60349tcab94fb26933d94a5o1";
  let prompt = `Write me a motivational quote about the topic ${userInputElement.value}.`;
  let context =
    "You are an AI assistant who likes to write unique one-sentence motivational quotes about specific topics.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<span class="blink">Generating a quote to help motivate you...</span>`;

  axios.get(apiUrl).then(displayQuote);
}

let formElement = document.querySelector("#quote-generator-form");
formElement.addEventListener("submit", generateQuote);
