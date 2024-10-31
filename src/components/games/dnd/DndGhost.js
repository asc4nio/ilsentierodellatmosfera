export const ghost = {
  init: (event) => {
    let dragGhost = document.createElement("div");
    dragGhost.setAttribute("id", "drag-ghost");

    let itemClone = event.target.cloneNode(true);
    dragGhost.appendChild(itemClone);

    let left, top;

    if (event.type === "drag") {
      left = event.pageX;
      top = event.pageY;
    } else if (event.type === "touchmove") {
      left = event.touches[0].pageX;
      top = event.touches[0].pageY;
    }

    dragGhost.style.left = left + "px";
    dragGhost.style.top = top + "px";

    document.getElementById("app").appendChild(dragGhost);
  },
  update: (event) => {
    let dragGhost = document.getElementById("drag-ghost");

    let left, top;

    if (event.type === "drag") {
      left = event.pageX;
      top = event.pageY;
    } else if (event.type === "touchmove") {
      left = event.touches[0].pageX;
      top = event.touches[0].pageY;
    }

    dragGhost.style.left = left + "px";
    dragGhost.style.top = top + "px";
  },
  remove: () => {
    let dragGhost = document.getElementById("drag-ghost");
    if (dragGhost) dragGhost.remove();
  },
  // hideDraggedOption: (element) => {
  //   element.style.display = "none";
  // },
  // unhideDraggedOption: (element) => {
  //   element.style.display = "block";
  // },
};
