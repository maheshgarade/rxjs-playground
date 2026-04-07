const input = document.getElementById("search");

async function loadExample(type) {
  const module = await import(`./examples/input/${type}.js`);

  module.default(input);
}

loadExample("debounce");
