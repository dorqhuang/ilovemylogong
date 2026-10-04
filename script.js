// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const title = document.getElementById("letter-title");
const buttons = document.getElementById("letter-buttons");
const nextBtn    = document.getElementById("next-btn");
const newMessageText = document.getElementById("new-message-text");
const letterGif = document.getElementById("letter-gif");
const scrollText  = document.getElementById("scroll-text");
const letterGifContainer = document.getElementById("letter-gif-container");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);

    playIntro();
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

const introPopup = document.getElementById("intro-popup");

function playIntro() {
  // 1. show the popup
  introPopup.classList.add("show");

  // 2. after 3 seconds, start fading it out
  setTimeout(() => {
    introPopup.classList.add("fade-out");
  }, 3000);

  // 3. after the fade finishes (1 more second), hide it completely
  setTimeout(() => {
    introPopup.classList.remove("show", "fade-out");
  }, 4000);
}
envelope.addEventListener("click", () => {
  // ...your existing code that shows the letter...
  playIntro();
});

const loveMessage      = document.getElementById("letter-title");   // 
yesBtn.addEventListener("click", () => {
    document.querySelector(".letter-window").classList.add("final");

    buttons.classList.add("fade-out");

    setTimeout(() => {
        buttons.style.display = "none";

        // Show "i knew it, HEEEHEEEEEE!"
        title.textContent = "i knew it, HEEEHEEEEEE!";
        title.classList.remove("fade-out");

        // After 2.5s, fade the title out
        setTimeout(() => {
            title.classList.add("fade-out");

            setTimeout(() => {
                // 1. POP the next button up from the bottom
                nextBtn.classList.add("pop");

                // 2. AFTER the pop finishes (0.8s), fade the text in
                setTimeout(() => {
                    newMessageText.style.display = "block";
                    setTimeout(() => {
                        newMessageText.classList.add("show");
                    }, 50);
                }, 800);   // matches popUp animation duration

            }, 800);   // matches title fade duration

        }, 2500);      // how long "i knew it" stays
    }, 500);           // buttons fade out duration
});

nextBtn.addEventListener("click", () => {
    const letterWindow = document.querySelector(".letter-window");

    letterWindow.style.transition = "opacity 0.8s ease";
    letterWindow.style.opacity = "0";

    setTimeout(() => {                                              // A opens
        document.getElementById("letter-container").style.display = "none";

        letterGifContainer.style.display = "flex";
        setTimeout(() => {                                          // B opens
            letterGifContainer.classList.add("show");
        }, 50);                                                     // B closes

        setTimeout(() => {                                          // C opens
            scrollText.style.display = "block";
            setTimeout(() => {                                      // D opens
                scrollText.classList.add("show");
            }, 50);                                                 // D closes
        }, 6000);                                                    // C closes
    }, 800);                                                        // A closes
});