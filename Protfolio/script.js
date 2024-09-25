// // Typewriter Effect
// const typewriterElement = document.getElementById("typewriter");
// const text = "Welcome to NAITRO 07";
// let index = 0;

// function typeWriter() {
//   if (index < text.length) {
//     typewriterElement.textContent += text.charAt(index);
//     index++;
//     setTimeout(typeWriter, 100);
//   } else {
//     typewriterElement.style.borderRight = "none";
//   }
// }

// window.onload = () => {
//   typeWriter(); // Starts immediately without delay
// };

// // Command-line Processing
// const commandInput = document.getElementById("commandInput");
// const commandOutput = document.getElementById("commandOutput");
// const socialLinks = document.getElementById("socialLinks");
// const whoamiOutput = document.getElementById("whoamiOutput");

// // Social media links as buttons with icons
// const socialMediaData = [
//   {
//     name: "Twitter",
//     url: "https://twitter.com/yourhandle",
//     icon: "assets/twitter.png",
//   },
//   {
//     name: "GitHub",
//     url: "https://github.com/yourhandle",
//     icon: "assets/github.png",
//   },
//   {
//     name: "LinkedIn",
//     url: "https://linkedin.com/in/yourhandle",
//     icon: "assets/linkedin.png",
//   },
// ];

// const commands = {
//   ls: () => {
//     socialLinks.innerHTML = ""; // Clear previous links
//     whoamiOutput.style.display = "none"; // Hide whoami card if displayed
//     socialMediaData.forEach((link) => {
//       const button = document.createElement("a");
//       button.href = link.url;
//       button.className = "social-btn";
//       button.target = "_blank";
//       button.innerHTML = `<img src="${link.icon}" alt="${link.name}"> ${link.name}`;
//       socialLinks.appendChild(button);
//     });
//   },
//   whoami: () => {
//     // Hide social links and show whoami card
//     socialLinks.innerHTML = "";
//     whoamiOutput.style.display = "block";
//     whoamiOutput.innerHTML = `
//             <h2>About Me</h2>
//             <p>Name: NAITRO 07</p>
//             <p>Occupation: Ethical Hacker</p>
//             <p>Skills: Penetration Testing, Cybersecurity, Command Line Mastery</p>
//             <p>Hobbies: Coding, Exploring Vulnerabilities, CTF Challenges</p>`;
//   },
//   clear: () => {
//     // Clear all outputs
//     socialLinks.innerHTML = "";
//     whoamiOutput.style.display = "none";
//     commandOutput.innerHTML = "";
//   },
// };

// commandInput.addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     const userCommand = commandInput.value.trim();
//     if (commands[userCommand]) {
//       commands[userCommand]();
//     } else {
//       commandOutput.innerHTML = `<p>Command not found: ${userCommand}</p>`;
//     }
//     commandInput.value = "";
//   }
// });
// Terminal functionality
const terminalInput = document.getElementById("terminal-input");
const output = document.getElementById("output");

// Sample commands
const commands = {
    about: "I am a cybersecurity enthusiast and penetration tester who enjoys exploiting vulnerabilities.",
    skills: "Skills: Penetration Testing, Network Security, Web Exploitation, Python, Bash, Metasploit",
    contact: "You can contact me via email: your-email@example.com"
};

// Function to handle commands
terminalInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const input = terminalInput.value.trim().toLowerCase();
        if (commands[input]) {
            output.textContent += `> ${input}\n${commands[input]}\n\n`;
        } else {
            output.textContent += `> ${input}\nCommand not found. Try 'about', 'skills', or 'contact'.\n\n`;
        }
        terminalInput.value = ""; // Clear the input after the command is processed
        output.scrollTop = output.scrollHeight; // Auto scroll to the bottom of output
    }
});
