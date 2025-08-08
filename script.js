// alert("hi")
const locations = [
  "London",
  "Paris",
  "Birmingham",
  "Slough",
  "the moon",
  "Coventry",
  "Manchester",
]
function roll() {
  // alert("roll")
  place.textContent = locations[Math.floor(Math.random() * locations.length)];
  laugh.textContent += "(cue laugh track again)";
}
