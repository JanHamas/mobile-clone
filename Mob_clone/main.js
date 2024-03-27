function hideSlider() {
  var hide = document.querySelector(".main-slider");
  hide.classList.add("hide-slider");
}
// sleep function

function sleep() {
  var hide = document.querySelector(".screen");
  if (hide.classList.contains("sleep-screen")) {
    hide.classList.remove("sleep-screen");
    hide.classList.add("on-screen");
  } else {
    hide.classList.remove("on-screen");
    hide.classList.add("sleep-screen");
  }
}

function OnChatsBody() {
  var v = document.querySelector(".whatsapp");
  v.classList.remove("status-under", "calls-under");
  v.classList.add("chats-under");

  v.classList.remove("close-chat");
  v.classList.remove("show-status", "show-calls");
}
function OnStatusBody() {
  var v = document.querySelector(".whatsapp");
  v.classList.remove("chats-under", "calls-under");
  v.classList.add("status-under");

  v.classList.add("show-status");
  v.classList.add("close-chat");
  v.classList.remove("show-calls");
}
function OnCallsBody() {
  var v = document.querySelector(".whatsapp");
  v.classList.remove("chats-under", "status-under");
  v.classList.add("calls-under");

  v.classList.add("show-calls", "close-chat");
  v.classList.remove("show-status");
}
// on click open whatsapp
function openWhatsApp() {
  var whatsappScreen = document.querySelector(".screen");
  whatsappScreen.classList.add("show");
}
// close app
function closeScreen() {
  var screen = document.querySelector(".screen");
  screen.classList.remove("show");
}
// back one step
function back() {
  var whatsapp = document.querySelector(".whatsapp");
  var screen = document.querySelector(".screen");
  if (whatsapp.classList.contains("show-status")) {
    whatsapp.classList.remove("show-status");
    whatsapp.classList.remove("close-chat");
    whatsapp.classList.remove("status-under");
    whatsapp.classList.add("chats-under");
  } else if (whatsapp.classList.contains("show-calls")) {
    whatsapp.classList.remove("show-calls");
    whatsapp.classList.add("show-status");
    whatsapp.classList.remove("calls-under");
    whatsapp.classList.add("status-under");
  } else {
    screen.classList.remove("show");
  }
}