/*
  For You, Baby 💗
  The decision sequence follows the user's uploaded flowchart.
  Edit the Romanized Burmese text below if you want to adjust spelling or wording.
*/

const screens = {
  start: {
    step: 0,
    eyebrow: "A tiny message for my favourite person",
    heading: "Hey, my baby… 💗",
    message: "I made a little something for you. Will you hear me out?",
    note: "Made with a little courage and a lot of love.",
    buttons: [{ label: "Okay, let's see ♡", style: "primary", next: "q1" }]
  },
  q1: {
    step: 1,
    eyebrow: "Question 1 · be honest, baby",
    heading: "A sin pyay yae lr? 🥺",
    message: "Can you forgive me?",
    note: "It's okay to take your time.",
    buttons: [
      { label: "Yes ♡", style: "primary", next: "q2" },
      { label: "Not yet…", style: "secondary", next: "q2" }
    ]
  },
  q2: {
    step: 2,
    eyebrow: "Question 2 · one more thing",
    heading: "Sate soe nyy tone lr? 🥹",
    message: "Are you still upset with me, baby?",
    note: "I really want to understand how you feel.",
    buttons: [
      { label: "A little bit…", style: "primary", next: "q3" },
      { label: "I'm okay", style: "secondary", next: "q3" }
    ]
  },
  q3: {
    step: 3,
    eyebrow: "Question 3 · please hear me out",
    heading: "Sate m soe pr nae tot a sin pyay yin pyn twl kya ml lyy? 💗",
    message: "If you aren't angry anymore, can we talk again?",
    note: "Choose whichever answer feels right to you.",
    buttons: [
      { label: "Twl ml ♡ (Okay)", style: "primary", next: "final" },
      { label: "Not yet", style: "secondary", next: "q4" }
    ]
  },
  q4: {
    step: 4,
    eyebrow: "I want to make things right",
    heading: "Br loh ll ako lel a sin m pyay loh pr pyn twl kya ml lyy nw? 🥺",
    message: "Even if you're still upset, can we please talk again?",
    note: "No pressure. I just want to listen.",
    buttons: [
      { label: "Okay, let's talk ♡", style: "primary", next: "final" },
      { label: "I'm not ready", style: "secondary", next: "q5" }
    ]
  },
  q5: {
    step: 5,
    eyebrow: "One last little question",
    heading: "Br loh ll Candy ko lel cx pr tl pyn twl ml lyy nw? 🐰",
    message: "Can we please talk again, baby? I miss you.",
    note: "You can be honest with me.",
    buttons: [
      { label: "Yes, we can talk ♡", style: "primary", next: "final" },
      { label: "Not yet…", style: "secondary", next: "q6" }
    ]
  },
  q6: {
    step: 6,
    eyebrow: "I'll give you space if you need it",
    heading: "No m ywy pr nae tot pyn twl ml lyy nw… 💌",
    message: "If you don't want to talk just yet, can you tell me when you're ready? I don't want us to stay hurt.",
    note: "If you're not ready, it's okay to close this page and come back later.",
    buttons: [
      { label: "Okay, I'll tell you ♡", style: "primary", next: "final" },
      { label: "I need more time", style: "secondary", next: "q4" }
    ]
  },
  final: {
    step: 7,
    eyebrow: "From my heart to yours",
    heading: "I'm sorry, baby. 💗",
    message: "A sa ka nyy pyn cx kya ml nw lane lane mhr mhr ll nyy ml nw lwn lel lwn tl a myr gyee cx tl nw, baby.\\n\\nI'm truly sorry for hurting you. You mean so much to me. I don't want to force you to forgive me, but I hope we can talk when you're ready. I'll listen, and I'll try to do better. I miss you. ♡",
    note: "No pressure to reply right away. I love you, and I'm sorry.",
    buttons: [
      { label: "Read my apology again 💌", style: "primary", next: "final" },
      { label: "Start again ↺", style: "soft", next: "start" }
    ]
  }
};

const heading = document.getElementById("heading");
const message = document.getElementById("message");
const eyebrow = document.getElementById("step-label");
const note = document.getElementById("tiny-note");
const buttonArea = document.getElementById("button-area");
const progressFill = document.getElementById("progress-fill");

function render(screenName) {
  const screen = screens[screenName] || screens.start;
  heading.textContent = screen.heading;
  message.textContent = screen.message.replace(/\\n/g, "\n");
  eyebrow.textContent = screen.eyebrow;
  note.textContent = screen.note;
  progressFill.style.width = `${Math.max(8, (screen.step / 7) * 100)}%`;

  buttonArea.replaceChildren();
  screen.buttons.forEach((buttonInfo) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `btn btn-${buttonInfo.style}`;
    button.textContent = buttonInfo.label;
    button.addEventListener("click", () => render(buttonInfo.next));
    buttonArea.appendChild(button);
  });
}

render("start");
