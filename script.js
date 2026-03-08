const myname = document.querySelector(".nameplate");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
const betterletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const hearts = ['<3', ' mwah ', ' <3', '<3 ', ' <3 ', ' love ', ':)', ' :) ', ':) ', ' :)', ':D', ' :D ', ' :D', ':D ', ':0', ' :0 ', ' :0', ':0 '];
const readable_hearts = ['<3', ':)', ':D', ':0', '._.', ':3']
const aadiname = "AADI (YOUR LOVE) SARIKONDA";
const babiname = "SCARLETT (BABBLES) HYUN <3";
const names = [babiname, aadiname, babiname];
let iters = 0;
let length = 0;
let val = 0;
let text = ""
let arr = [];

setInterval(scramble, 4197);

function scramble() {
    const interval = setInterval(function () {
        text = names[val].split("").map((letter, index) => {
            if (index < iters) {
                return names[val][index];
            }
            return betterletters[Math.floor(Math.random() * betterletters.length)];
        }).join("");
        myname.innerText = text;
        iters += 1 / 3;

        if (iters > names[val].length) {
            myname.innerText = names[val];
            if (val === names.length - 2) {
                val = 0;
            } else {
                val++;
            }
            iters = 0;
            clearInterval(interval);
        }
    }, 35);
}

