function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "73f0d06a58bdbf0dee0944t7de9b9o05";
  let prompt = `User instructions: Generate a funny poem about ${instructionsInput.value}`;
  let context =
    "You are a funny poet expert and love to write short poems. Your mission is to generate a 4 using line poem separating each line in basic HTML with <br /> - do not mention html or have a title. Make sure to follow the User instructions. At the end of the poem, sign off with 'Powered by AI' inside a <strong> element";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="loader"></div><div class="generating">Generating a poem about ${instructionsInput.value}...</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemForm = document.querySelector("#poem-gen-form");
poemForm.addEventListener("submit", generatePoem);
