//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "923356191137";
global.owner = process.env.OWNER_NUMBER || "923356191137";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlCSldBNnE0dGowa3h4c3JvankwRS9WSjkwVkNvNnU1M0p3bTNtNG0xbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialBMNkdaUWNweEZEMHBoUDlhYkFNRjI4MzdwUjlhQVFnQTQ0bzdmckt6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDS0pVY3FVclpNZFpwYVp5dHN1WFdmV1NTUjNBS3gvK1NNTGc1alVqMjNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsMCtxazdScGdzOFJzbmxRUXdBdlBNbFBpNjljb09hSHNDTXlXVFNnclFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLQ2hLai85eStYRm1jZjNLSDV6UE1Yeit6N1VTOXl0UUpHOCtpandWa2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InppYmMrS2N6ektkVEVTNEV2NFUxS2dkZm91Y3BndURlWW9aV045Tlp0RUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZKWlR5akFVQjFhV3FYejhiellsSERvS0pPTk1lU3MzUUk1Z3Boc0gyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3ozeUx3cnBZUlpTK2hjbjRGbjM1dk9kU2E0NHo3VHVuZEY0YW9KcUp6WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdPK0hDSGVaMjZlQzVnMkJCVlViQWl0K3BLYlArTEZHN1QwT2FBS2xGYkRsOGpiOVZTWVlVMGJEbDM5d1BzNXhOSmxiR3dYdnpweXA5OUp1Z1hkdGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6IlNQNmVFcENGVEhGaU1jT2g0RWo3aWR1QUpYYWJDSjRRQ2E4Mm1SQTBDb009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzU2MTkxMTM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM0NjczREE5Q0JCMkQ2RTYyMkVFNTY1QzFCOEIyOURFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjUxODIxNDN9XSwibmV4dFByZUtleUlkIjozMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjMtVF8zVjRaUkZDV19QZEpIU1prSUEiLCJwaG9uZUlkIjoiNzM1NzFmMzEtNTAwZi00M2IxLTk1OTUtMDY4M2RlMDI3ZDBkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVYYlF6OUdBNmdWa1F3WXV1QlBYczhOY1NGUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSFpLTzN1ZnJKME5EcktxalJTaEZXeng1MGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUw5VkJZRVMiLCJtZSI6eyJpZCI6IjkyMzM1NjE5MTEzNzo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfkb9IQUNLRVIg8J+mhSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1RaaE9JR0VLM2gwTFlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiamFkRk8yclNFVjUvZmRsRnkvYTJwbTBRRWlDTEd3bjBRWjJSeXRsN2FGRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaEJHTllNOXZpMmtMT2xFWXZHUEtiQVBZUGFQYnlPUkVMcHF0aXV2OG54RFpYT3VsZ0RtbXZnVUdHOHhJYktwdTU1Y3RXSjZjbldxV01KTjQ3ckxjQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjBCamhFUnFISXRWS3J2ZWYxMTJxRkwwVENBZk1kZ3dQYmJuV2Q0QVQ2bDg5bG5wa09aSmM2bWIrVFFYdWlXWEFRY0RNSVZEaWFiZW9WTGhibzZBT2dnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzU2MTkxMTM3OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTJuUlR0cTBoRmVmMzNaUmN2MnRxWnRFQklnaXhzSjlFR2RrY3JaZTJoUiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTE4MjEzOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFITFcifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
