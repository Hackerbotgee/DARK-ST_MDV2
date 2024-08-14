
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "trur";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/994a791a5a601fe82d480.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
 Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUx6ZU1yOXJaTmlzVjErbUpRRHJXRFFRR1hvUUJqOFI0OXVKSzJQaldVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFFUQ0RtVlQwME93eEpkbVlzTG1Gc3QwcHlERnE4S0t4L3B4ZUlNN01raz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RVU0NDVLekVFZFJRYWhzS2R4a0xkb3Jibmk1a2drd3c2REtXMmprd0ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlWUJkRmtNSGhjRDcyTG44Tmx6VHVxRnp5MlZaNENsSUxINGVQRWlQTUVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVHeWpRSmVHMWZKVnkvVGxRamxaVEpWZlNkY3FYeWFIek1MUnRrVXYvMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpSRkZLT1krZXZ6QjdROGtUVXlNYXY4UXFGbzFCdjJkOWhHVE9UbExjaEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJ2ekZlamRGTEwwM3MxV2FxbmJUQmtHVXozSFR3NlA5WXZFUVViZkFsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0t0RlhLaWdyOTl4a0oyTmcwbjU0RnFyS05qSFlWSUY2RmFFOXZXanMxWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8xY0o0Wm5QVWJxdHlHUHp6VU1YeE9McVYvbU53Z1lQVjB3TytCMXcySnZaNTRtYS9ITFhRUEdRQUV3MW9DRmtuNnh6ekl1MDZIRVlOdDZZbG1hZEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJnKzhjVXNMTENPWTN1TVJnbHhyZGsrYml1NDdXMTlnK0RKU080UUFjZjFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTbFV2UW1nb1EyZTZqNm9wM0l1czh3IiwicGhvbmVJZCI6Ijc4YWUwNGY2LWFiMTgtNGI2ZS1iMjk3LWZjNmE3NWZkNjBhOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiNkt6MXRRVkFWVnZXSVBnQUJaWXBsK1BaVGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1RHeXVTcEhsUEszRkxyWnM1L2YzYjgwZFlFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJRVFhXUkpSIiwibWUiOnsiaWQiOiI1MDk0MzgwODIwNzo0N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTVEVWwrZNUl9MSVQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lXWXJPd0hFTlRpOUxVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ink3RXdLSDM0KzQ3N1FKQVJBcG9TTVhQbjk1WUtwQ2hXdUZZUlA0TW0vR1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitqTEd0VEJwOXhhcXlpOFAxUWJoNXlmeGovWkh6eEJaeEtCMU5iRzk2TGVYM3NJeUhxN3prNXpuYVNRZ0pnQkNUZnZNRW5MaE5MVVNQUEwxTHdUU0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJNG5aYVRmNVVmYVZWYjZlT3RHdjJ2Vk1OZlg2Vjg4cXZXc3QrRUl2NVRDMkRiMHpXd1VvTDFsMEwvNmVpcElLcWpDRmVnS3RYNXFaa3Y0Rkp5WVhBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQzODA4MjA3OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN1eE1DaDkrUHVPKzBDUUVRS2FFakZ6NS9lV0NxUW9WcmhXRVQrREp2eGsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM2NzQ5NzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTXFVIn0=



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "DRK-ST-MD ",
  packname: process.env.PACK_NAME || "𝙎-𝙏𝞢𝞜",
  botname: process.env.BOT_NAME || "DRK-ST-MD",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
