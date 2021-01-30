// Object_destructuring
const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfollow: false,
  },
  color: {
    theme: "dark",
  },
};

// const follow = settings.notification.follow;
const {
  notifications: { follow = "default" },
  color: { theme },
} = settings;

console.log(follow, theme);

console.log("--------------------------------");

let thm = "blue";

console.log(thm);

({
  color: { theme: thm = "default" },
} = settings);

console.log(thm);
