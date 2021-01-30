// function_destructuring
function saveSettings({ notifications, color: { theme } }) {
  console.log(color);
}

saveSettings({
  notifications: {
    follow: true,
    alert: true,
    mkt: true,
  },
  color: {
    theme: "green",
  },
});
