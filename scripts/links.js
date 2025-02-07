const baseURL = "https://lukebricknell.github.io/wdd230/";

const linksURL = "https://lukebricknell.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data);
  displayLinks(data);
}

getLinks();

const displayLinks = (links) => {
  const linkSection = document.querySelector("#link-section");

  links.forEach((item) => {
    let weekList = document.createElement("li");
    let week = document.createElement("span");
    console.log(item.week);

    week.textContent = item.week + ":";

    weekList.appendChild(week);

    list.forEach((anchor, i) => {
      const a = document.createElement("a");
      a.href = anchor.url;
      if (i.length - 1) {
        a.textContent = anchor.title;
      } else {
        a.textContent = anchor.title + "&nbsp | &nbsp";
      }
      weekList.appendChild(a);
    });
    linkSection.appendChild(weekList);
  });
};
