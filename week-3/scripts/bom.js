const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// button.addEventListener("click", () => {
//   if (input.value == "") return;
//   console.log(input.value);

//   const li = document.createElement("li");
//   const deleteBtn = document.createElement("button");
//   li.textContent = input.value;
//   deleteBtn.textContent = "❌";
//   li.append(deleteBtn);
//   list.appendChild(li);
//   input.value = "";
//   deleteBtn.addEventListener("click", () => {
//     list.removeChild(li);
//     input.focus();
//   });
// });

button.addEventListener("click", () => {
  if (input.value == "") return;
  displayList(input.value);
  chaptersArray.push(input.value);
  setChapterList();
  input.value = "";
  input.focus();
});

function getChapterList() {
  return JSON.parse(localStorage.getItem("FavBomChapters"));
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

function displayList(item) {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  li.textContent = item;
  deleteBtn.textContent = "❌";
  li.append(deleteBtn);
  list.appendChild(li);
  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem("FavBomChapters", JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
