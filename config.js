const DERIV_APP_ID = "YOUR_APP_ID";
const DERIV_WS_URL = `wss://ws.derivws.com/websockets/v3?app_id=${DERIV_APP_ID}`;
let ws = null;
let apiToken = "";
let accountInfo = null;
const state = { connected: false, authorized: false, balance: 0, currency: "", loginId: "", isVirtual: false, activeSymbol: "R_100", tickStreamId: null, proposalId: null };
function saveToken(token) { localStorage.setItem("deriv_api_token", token); }
function getSavedToken() { return localStorage.getItem("deriv_api_token") || ""; }
function clearSavedToken() { localStorage.removeItem("deriv_api_token"); }
function connectWebSocket() { if (ws) ws.close(); ws = new WebSocket(DERIV_WS_URL); ws.onopen = () => { console.log("Connected to Deriv WebSocket"); state.connected = true; notifyConnected(); }; ws.onclose = () => { console.log("Disconnected"); state.connected = false; notifyDisconnected(); }; ws.onerror = (err) => { console.error("WebSocket Error:", err); notifyError("WebSocket connection error"); }; }