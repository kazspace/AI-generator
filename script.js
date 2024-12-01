function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "roses are red, violets are blue",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-gen-form");
poemForm.addEventListener("submit", generatePoem);
