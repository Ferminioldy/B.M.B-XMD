const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VVyY7bRhD9FaOv0ljcJQoYICRFjSRqofYlyKFFNilK4qLu5iZDQBAYueSQHDyHHJRzjjk4wPyO/QOZTwg4moEHcexMeGo0u1+9qnr1+g0IQo8gA+Wg/gZE2EsgRcWS5hECdaDGjoMwKAMbUgjqYGj0ptpA3qY7vTkJFaxHLdZdbkt8pI5h49BKWT7rWIshMxWuwakMoni996yvAOamVoK12BnvRpVZl8l4qDR2bQY6SspU4213KlSIiBdipOyuwalAhB72AlePNshHGO4NlJvQwy+jn5qbqsOzwaQn12bGwm4vyXaaKguSbzymPasgsWfox3XSmlkvoz8yZ0dpXMrk5k2bGcaR7924h22mJGlDVHBE11u3ywr9vTdzL/SJ5wbIbtsooB7NX1z3WvvYW/eHCtT3uyAOmytXt28I0hF3g3doCmNDrQSHQ9UM9JcRNxpBpT91lVGnpWRzfyRMm8ugwtBVKBHheJxtWOSMsk5HGerPiZv4SSu7/1P3cdu2Km7L44+KgfLBPEDchGscNosKK41zyq0GbVkPJn7Nn76w7ggzY1pxU8ta0JDxTbjLl3p4jHOhauJImLQMvPYH/dFO+UQf0hh/jSW9obHcTcmBp8aqsuq5m34rWeJIgbLeXu/GSDgslrKU49l+YeDkoHGKlmXTCdfp5hvCqGvempVaol1S2wuRNMam3+Td9Pohox3K2zaos6cywMj1CMWQemFQ7HG8VAbQTsbIwog+lBfQrmPEq0bHoJEXH5xeZdFuCUcpHyhHWUya0apEVKufTFpQvwZlEOHQQoQgu+URGuK8hwiBLiKg/u1Dp4qkMfJDijqeDeqA40RREHiO48VvyOt0AymBUfQ6QBSUgYNDv4dAneIYlcHDeb6hySwvMazUbGoNVWJ1varWVI3RmmqN4bQiQ/8Sc+L5iFDoR6DOVgVRYliZF0/flUGAMnqRT5E0z5aB42FCp0Ec7UNoP2nr6Se0rDAO6DgPLK1YIAzqz7YRpV7gkiKxOIDY2ngJ0oo8QN2Be4JOZWCjxLNQgQeErc5AOVRHDkLEmXPtquhZaVG4TRhcjtgihBxTQ1dMtepcCbIoX0G7tr6qImgjuVZDkiSCohyXyS3ufFFIut6EqjpPcxWpY2We5pXaXG3I8mbvPojhogCEkf1U5TW0dnE0CXco+AruPqTVFar2zIRt5OvEhSnv24zXFpjeM9yLskD9zSe31EK7wOPZ7tIYcRNQdKuI808x1GufyyGAxVnw8dff/7r7+f58+/bj2/Or+/PtD/fn2+/vz7e/3J9vf7w/3/50f353d9l/d/fqw/u7D+//+PDnb5d7BbvH1hVxbUShtyegDjQTcuFcGXLLQ5Iqy6XqKYqhKIWon1r9NLmXyZjrN75eVToclQRhQcOou1jgdcQuBX1YgrvqZNNq2qI9Wx+H/wYC6sC0+5m21Gm0ddx2KdPSeCYsR0qyMK0pSbOKWDPxntRsZuUKDhx2sQa3RDYd2CXaUh64tlFKpr6PghFlVDM1ZnZ/oA2vi2gXyT0PFouH5UDt+b3DTaeX3YQod5TBJuUYdZ5maBiTiTuM3P1gMHRpoyEfo3To6sPmxFOdbszKQm9o9bpULmVS0o263Kq/Hm1c9+IpD562f3xLvMdpvwjU8dCDNT827z9a/GlSmFP5GcKj1X9Bjepso0abQarZGMWDZhUaY5aVOMmeD1Td9KMBI4yyBVrM5jUGnAoLiPaQOiH2QR3AwMahZ4My2ENClU/D/rl/1GSpDPxciaIxhfTJI4BSfF2LB6e/Acnw3ajFCAAA",
// add your Session Id 
PREFIX: process.env.PREFIX || ";",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2250554432235",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "♨️𝕄ℝ 𝕂𝕀𝕐𝕆𝕋𝔸𝕂𝔸 ᴸᴰᵞ♨️",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ B.M.B-XMD ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qnvl6h.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "𝕠𝕟 𝕟𝕖 𝕡𝕖𝕦𝕥 𝕡𝕒𝕤 𝕔𝕠𝕞𝕡𝕣𝕖𝕟𝕕𝕣𝕖 𝕢𝕦𝕖𝕝𝕢𝕦'𝕦𝕟 𝕢𝕦𝕚 𝕤𝕠𝕦𝕗𝕗𝕣𝕖 𝕤𝕒𝕟𝕤 𝕒𝕧𝕠𝕚𝕣 𝕗𝕒𝕚𝕥 𝕤𝕠𝕚-𝕞𝕖𝕞𝕖 𝕝'𝕖𝕩𝕡𝕖𝕣𝕚𝕖𝕟𝕔𝕖 𝕕𝕖 𝕝𝕒 𝕤𝕠𝕦𝕗𝕗𝕣𝕒𝕟𝕔𝕖 
𝔹𝕪 𝕃𝔻𝕐 ✍️",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by 𝙱.𝙼.𝙱-𝚇𝙼𝙳 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
