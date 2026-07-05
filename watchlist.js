const WATCHLIST_KEY = "deriv_watchlist";
let watchlist = [];
function loadWatchlist() { const saved = localStorage.getItem(WATCHLIST_KEY); if (saved) { watchlist = JSON.parse(saved); } else { watchlist = ["R_10", "R_25", "R_50", "R_75", "R_100"]; } renderWatchlist(); }
function saveWatchlist() { localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist)); }
function addMarket(symbol) { if (!watchlist.includes(symbol)) { watchlist.push(symbol); saveWatchlist(); renderWatchlist(); showNotification(`Added ${symbol} to watchlist`, "success"); } }
function removeMarket(symbol) { watchlist = watchlist.filter(item => item !== symbol); saveWatchlist(); renderWatchlist(); showNotification(`Removed ${symbol} from watchlist`, "info"); }
function renderWatchlist() { const list = document.getElementById("watchlist"); if (!list) return; list.innerHTML = ""; if (watchlist.length === 0) { list.innerHTML = "<p style='color: #8b949e;'>No markets in watchlist</p>"; return; } watchlist.forEach(symbol => { const row = document.createElement("div"); row.className = "watch-item"; row.innerHTML = `<span>${symbol}</span><button onclick="removeMarket('${symbol}')">Remove</button>`; list.appendChild(row); }); }
document.addEventListener("DOMContentLoaded", loadWatchlist);