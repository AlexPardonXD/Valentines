let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let question = document.querySelector('.question'); // Updated selector
let gif = document.getElementById('gif');

let clickCount = 0;

noButton.addEventListener('click', function() {
  clickCount++;
  if (clickCount <= 50) {
    question.textContent = generateNoText(clickCount);
    gif.src = generateGif(clickCount);
  }
  yesButton.style.fontSize = `${16 + clickCount}px`;
});

yesButton.addEventListener('click', function() {
  window.location.href = 'thankyou.html';
});

function generateNoText(count) {
  let texts = ["Are you sure?", "Really Sure?", "Think again!!", "Last Chance", "You might regret this!", "Give it another thought!", "Are you absolutely certain?", "This could be mistake!", "Have a Heart T_T!", "Don't be so cold!", "Change of heart!", "wouldn't you reconsider!", "Is that your final answer?", "You are breaking my heart :(", "Think again!!",  "How manyyy more noo's???", "No more jokes. Can you be serious now?","Can't you see my love for you in my eyes?(OPEN INSTAGRAM)", "Pleaseeeeeeeee I Begggg!!!", "You know na I can do this all day right? ", "so now can I make a reservation for two?"];
  return texts[count % texts.length];
}

function generateGif(count) {
  let gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3Jrb3J3d25zN2lmbWhvem1oNTE4cHhwcWh4YXVjeHE4aHF3MDJqbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GRk3GLfzduq1NtfGt5/giphy-downsized-large.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanV0cnBxejd0dGMyYzd2aDZoZTliOXQ0ZWEzN2I3dm41aXkyNjIxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ys9SXSEczO5nW/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2xsaHVlcjVuMmsxODg0cmNjcTVjOTk1NmszeGFxY25wemdveDFwOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pyFsc5uv5WPXN9Ocki/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmtrbXZjNHRlNXdmaXMycDk4cHhjMHhyMmgybjZpdnVwM2gzdWlyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HSvpy6Jk396SI/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnk3MW13c2owMWpwcnJjM25vM2k5NjQ0OTlodzg5czBvdm52M3hwcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MFIsOqzodLr7ewnkUb/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjU2b3RiN3V6YnJhbWRzZHVnOWc0bXB2amo2bXBtYzNhZDVzbnhmZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZWYOfX41X1XVXymyfp/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzc0cmd5NXpoZGtncmJoNms3ZWUzanpzczExbzB2bGJsb2R5cDB5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lwYxf0qKEjnoI/giphy-downsized-large.gif",
    "https://media.giphy.com/media/fhLgA6nJec3Cw/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzMwODhzZ2Y1dDZ6cGZ6djV3Ymd6MDA1OXRkaHRqZWg3N3hvbXVsbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OY1f83t3CVnbhLvxat/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXptcmV1ODg3a3RoNXJ0bHgycGN5cXppNm50emJ6eTZkMzE5amlhcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o9qT6CP4XyICY/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnRsNjJ1N2U1Y2xxNGtieXdvMDRuMjducHIxaHBheW1icTBjdzNzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P0JxT7Ouam532/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajNna3QzYm0wYWRqM2I0YXN0YjdpODYzeXRsMTUwdDNybjkyY3E4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/21I909B1Us5hsGiupn/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGViZDE5OWdpdXM1dzF5NzVybGFzZXlyZWJwZnV3Y296eG9oa2dkOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ekBEInfmgZ60Dn1X1r/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnB5ejN4amluY2Jrd282MXY1eGhtNWdzcDMyenpzem93YmtqMWxpeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0O9x4lh4wvUEKPi8/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3U3dXd4azJma3ZucGMxZGsyM3JkcjhtN2R2aWhuOXcwZm52MWd2MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WopAXouz9s24reavN3/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm1sejNvOG9henFvbXJ6MnM1dWs4MXFyb3gwZzBvZGk1c29oazVpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5mfealjkCZgsGLhO0X/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjJ1ZnY4Y2ZuejhpZTdhdzRnZGZiNjR4YmtvcHdvbDluYW9mejhmNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/byx9xW3W6G771bwgQw/giphy.gif",
    "https://giphy.com/gifs/andha-yeh-sab-accha-hai-me-hu-bCFQtU4knWWCqNj3uH",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExem9hNGoza3ZnNWFzamh1d2M5eWpuampkdHY2cTh1dXg1YmRyZjRmbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11qbpyJNLZM5YQ/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWgybjZiYXdwYWZna3l4Z2x3MXRweHQ3dWNsbDB3Ymxibm56bnB5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jF9gFVcrNoN7q/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlqbzNrN2c1bGg4ZTZjYTlhMGhteWI5NnE5cmlsYXdpdjI0ZjI3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwD7PaGPFUZX9Wo/giphy.gif"
  ];
  return gifs[count % gifs.length];
}

