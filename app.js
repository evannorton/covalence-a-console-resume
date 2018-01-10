function displayPosition(company, job, desc) {
    console.log("* " + job + " at " + company + " - " + desc);
}
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
}

console.log("Evan Norton".toUpperCase());
console.log("Career: Full Stack Developer");
console.log("Description: A pretty cool dude");
console.log("My Interests (in order)");
console.log("* wife");
console.log("* music");
console.log("* programming");
console.log("* video games");
console.log("My previous experiences:");
displayPosition("fake company 1", "fake job 1", "ummmmm did stuff")
displayPosition("fake company 2", "fake job 2", "ummmmm did stuff")
displayPosition("fake company 3", "fake job 3", "ummmmm did stuff")
displayPosition("fake company 4", "fake job 4", "ummmmm did stuff")
console.log("My skills:");
displaySkill("programming", true);
displaySkill("sleeping", false);
displaySkill("eating", false);
displaySkill("playing guitar", true);
displaySkill("walking", false);
displaySkill("more sleeping", false);