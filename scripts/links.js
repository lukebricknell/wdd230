const baseURL = "https://lukebricknell.github.io/wdd230/";

const linksURL = "https://lukebricknell.github.io/wdd230/data/links.json";

async function getLinks(linksurl) {
  const response = await fetch(linksurl);
  const data = await response.json();
  console.log(data);
}

getLinks();

const displayLinks = (links) => {
  const linkSection = document.querySelector("#link-section");

  links.forEach((item) => {
    let weekList = document.createElement("li");
    let week = document.createElement("span");

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

{
  /* <li>
              Week 1:
              <a href="./week-1/chamber-site-plan.html">Layout</a
              >&nbsp;|&nbsp;<a href="./week-1/media-query.html">Media Query</a
              >&nbsp;|&nbsp;<a>JS Pen</a>
            </li> */
}
