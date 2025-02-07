const baseURL = "https://lukebricknell.github.io/wdd230/";

const linksURL = "https://lukebricknell.github.io/wdd230/data/links.json";

async function getLinks(linksurl) {
  const response = await fetch(linksurl);
  const data = await response.json();
  console.log(data);
}

getLinks();
