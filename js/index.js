let isSideNavOpen = true;

document.getElementById("toggleNav") &&
  document
    .getElementById("toggleNav")
    .addEventListener("click", toggleSideNavBar);

function toggleSideNavBar() {
  if (!isSideNavOpen) {
    document.getElementById("sideNavBar").style.display = "flex";
  } else {
    document.getElementById("sideNavBar").style.display = "none";
  }
  isSideNavOpen = !isSideNavOpen;
}
