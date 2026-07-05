const SIDEBAR_KEY = "sidebar_state";
function loadSidebarState() { const sidebarState = localStorage.getItem(SIDEBAR_KEY); if (sidebarState === "collapsed") { document.body.classList.add("sidebar-collapsed"); } }
function toggleSidebar() { document.body.classList.toggle("sidebar-collapsed"); const collapsed = document.body.classList.contains("sidebar-collapsed"); localStorage.setItem(SIDEBAR_KEY, collapsed ? "collapsed" : "expanded"); }
document.addEventListener("DOMContentLoaded", () => { loadSidebarState(); });