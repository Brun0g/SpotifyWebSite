const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeSidebar = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar")


sidebarToggle.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
});
closeSidebar.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});