const urlDir =
  "https://lukebricknell.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
  const response = await fetch(urlDir);
  const data = await response.json();
  displayMembers(data);
}

const displayMembers = (members) => {
  const memberdir = document.querySelector("#member-directory");
  members.companies.forEach((member) => {
    const memberdiv = document.createElement("div");
    const img = document.createElement("img");
    const address = document.createElement("p");
    const website = document.createElement("a");

    memberdiv.class = "memberdiv";
    img.src = member.image;
    address.textContent = member.address;
    website.href = member.url;
    website.textContent = member.url;

    memberdiv.appendChild(img);
    memberdiv.appendChild(address);
    memberdiv.appendChild(website);
    memberdir.appendChild(memberdiv);
  });
};

getMembers();

const icon1 = document.querySelector(".toggle-icon-1");

const icon2 = document.querySelector(".toggle-icon-2");

const memberDir = document.querySelector("#member-directory");

icon1.addEventListener("click", () => {
  icon2.classList.remove("active");
  icon1.classList.add("active");

  if (memberDir.classList.contains("member-dir-flex")) {
    memberDir.classList.remove("member-dir-flex");
    memberDir.classList.add("member-dir-grid");
  }
});

icon2.addEventListener("click", () => {
  icon1.classList.remove("active");
  icon2.classList.add("active");

  if (memberDir.classList.contains("member-dir-grid")) {
    memberDir.classList.remove("member-dir-grid");
    memberDir.classList.add("member-dir-flex");
  }
});
