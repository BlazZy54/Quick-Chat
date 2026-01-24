const activityEmojis = [
  "💻", "👨‍💻", "👀", "📚", "📝", "🎮", "🎧", "🏋️‍♂️", "🏄",
  "🍕", "🍔", "☕", "😴", "🚀", "🌍", "📱", "💬", "🔥", "⛳", "🥊"
];

const getRandomActivityEmoji = (id) => {
  //if not found set in local storage
  if (!localStorage.getItem(id)) {
    localStorage.setItem(id, activityEmojis[Math.floor(Math.random() * activityEmojis.length)])
  }

  //consume it
  return localStorage.getItem(id)

};

export default getRandomActivityEmoji