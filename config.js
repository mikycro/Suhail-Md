const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ MIKY_CROWN²²¹-ᴍᴅ" 


global.devs = "233241583373" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233241583373";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_10_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM2LFxuICAgICAgICA3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM4LFxuICAgICAgICA3MixcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYyLFxuICAgICAgICA4NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTksXG4gICAgICAgIDcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMixcbiAgICAgICAgOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICA0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTM4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY4LFxuICAgICAgICA5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvQ2xmVmQ1anpVQnhya0NhVzFzd0EzOWJhVUtWNll4Mi9SdWtRKzNnYTRFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnelBEUTcyUlJ1eVV3WlUtS2xLMWRBXCIsXG4gIFwicGhvbmVJZFwiOiBcImExNzVkOTkyLTI2YjItNDBiOC1hMzA2LTFmODFkNDc4M2M3N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDY1LFxuICAgICAgMjUzLFxuICAgICAgNjYsXG4gICAgICA5NyxcbiAgICAgIDEzLFxuICAgICAgMTIzLFxuICAgICAgNjEsXG4gICAgICA4MSxcbiAgICAgIDE3NixcbiAgICAgIDgxLFxuICAgICAgMTc4LFxuICAgICAgMTczLFxuICAgICAgMTA3LFxuICAgICAgODAsXG4gICAgICAxOSxcbiAgICAgIDI1MixcbiAgICAgIDEyMSxcbiAgICAgIDIwLFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAxNjMsXG4gICAgICAxODEsXG4gICAgICAxNyxcbiAgICAgIDg1LFxuICAgICAgMTEyLFxuICAgICAgMTIzLFxuICAgICAgMTMzLFxuICAgICAgMTQwLFxuICAgICAgMTYyLFxuICAgICAgMTQ4LFxuICAgICAgMTI4LFxuICAgICAgOTUsXG4gICAgICAyNSxcbiAgICAgIDEwMixcbiAgICAgIDM3LFxuICAgICAgMzEsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCNUwySlI5NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQxNTgzMzczOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2ODk2MDEyOTEzMDUwNToxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcnJ1TXdERVBTL29yVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVxM0czVU5qSmV2bXBWaXNJRDlYdmlUeGtHU3RhV25kZHUwOGxxdEhZRlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYm03QTgzOWFQUk53UnRxa3h0QkltQlBhK2lINmxFMS9CdU1QZGZwQk5GdkFzaXZUWnZpamlUOWtEbmFoaEF3TnhlYkhuVE5MV3lNTThBRkZEKzVkQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicFdnTy81RGE5aEZNajBZUFVRM242MW5EbWc4aGVoTVl6ZDRFSHZnRUYwZkFCa2RZL3NCMUlFRkhXN0dEbVErRUZZTjJaMlI2dGE5QUlkL3hyR0taQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQxNTgzMzczOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjMyNzAzMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Miky_Crown-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MIKY_CROWN²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "MIKY_CROWN",
  botname : process.env.BOT_NAME  || "MIKY_CROWN-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MIKY_CROWN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Miky_Crown"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
