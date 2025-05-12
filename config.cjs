// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tpVURHdVl5L0tVOGlCazdkTGZQTFlvS0xWc1Z0NHR3WXFXdTlEekxIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2ZFREhsRE5La0Y2QzROY1FUOXhIZDU4UjV6QklMNTBlN0FNQmpPdVJRTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SmhCei8vTFdmcEZBNnhxaWQvd3FDa3BaVTNLcy9oam0wS3gyUGEyTm5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEVmlkcUREN0tHZUpMS2liMmt1dDRCUHoxeVUweUtpN1NLN2tqblRkenlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPOHlEOTFCc0N2WGlTSzBhRG5BMkZKVC9iaC9nNFFyMlFVaGF6U2NtRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhWLzlMWFNkaktXeUQ3bG9jblZ1a0p6RlhaWHJZdWpJN2pmVTBydTlxRlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0cyQTFQa3QwemhtNkFEc3o1UWdIRUp6R2J6UFpyeGdVeEhkUk01SXZYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianYrYUx1OWpjenc2TitZVThqb0swc0h0eEEySnY3Q1RoNXVSZHdtdzdSZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdsWDIrRUJUbW10bFpydjFBczhKUWd5MHI4NlFXYWJwekEydXF6Snd6dk5Yb0V1Q0FOQkJHNExKN0ptb1RvQmdDMjNLanhxUHVZbndBOE00Yi9xRkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiTllmVmVqbHF5aHNCWnJkd0ZLWkx3SHFZK1BMY1RxWEZSR1NLcjg5RWJYUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTYzMDY4NzBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E5RTMxMTkyQzRFNkQwQUQxOUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzA1ODI0Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLXZXNjIyZ0JRaVNJVnM4aDlMTFg5USIsInBob25lSWQiOiI3ODUzODY5My1kZjQ0LTQwMTItOGQyZC1kNjQ1NzQyNTc0MDYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFJ2RkxIMzhJbnFvS2Yxb20rRHNtNVpSazRvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFGZTlQT0ZrT3dFbkhxYVNVUjNDSGdvQ0RRcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQQVY1Q0hUVyIsIm1lIjp7ImlkIjoiMjYzNzE2MzA2ODcwOjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlczIFRIMyBCMyRUwrnCsyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFhFenQwR0VLZjhoOEVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiemxtdnFvbE43bWtnSVlBR1BDcVVBRXBHeHRmaHVvZXloYTVTL0x6Y2tTTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWG5WaGMwY0p3SWhxOEE3N2VHeVFHWTNDL3dHck9nRGkxQnVWd1RLV3pmcmJYY1llby9zSm1sZ0RTd1RBRUxYeUt6T04yODk0NE5UcUxMQitBNXROakE9PSIsImRldmljZVNpZ25hdHVyZSI6IkxySzNZb1JFV0FoUVRGMWVhYlo5STB0Yi9sUG5QYnNrTjNPNFJWRUsvekdNaGtXQ3M3eFFKVmg5ak1Xc1pVbHdsams4aE1LN0FBTHZ6dDA5VFVNRkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE2MzA2ODcwOjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmM1WnI2cUpUZTVwSUNHQUJqd3FsQUJLUnNiWDRicUhzb1d1VXZ5ODNKRWoifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDcwNTgyMjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRU1kIn0=
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "public",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "WE THE BEST",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "263716306870,
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
