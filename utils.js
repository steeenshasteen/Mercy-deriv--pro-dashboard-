function formatCurrency(amount, currency = "USD") { const value = Number(amount || 0); return `${currency} ${value.toFixed(2)}`; }
function formatPercent(value) { return `${Number(value).toFixed(2)}%`; }
function formatDate(timestamp) { if (!timestamp) return ""; return new Date(timestamp * 1000).toLocaleString(); }
function generateId() { return "ID-" + Date.now() + "-" + Math.floor(Math.random() * 10000); }
function validateStake(stake) { const value = Number(stake); if (isNaN(value)) return false; return value > 0; }
function validateDuration(duration) { const value = Number(duration); if (isNaN(value)) return false; return value > 0; }
function log(message) { console.log("[Deriv Dashboard]", message); }
function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function read(key) { const value = localStorage.getItem(key); if (!value) return null; return JSON.parse(value); }
function remove(key) { localStorage.removeItem(key); }
function sleep(ms) { return new Promise(resolve => { setTimeout(resolve, ms); }); }