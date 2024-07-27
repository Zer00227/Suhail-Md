const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22780828646";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_51_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICA2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTE2LFxuICAgICAgICA5MixcbiAgICAgICAgMTgzLFxuICAgICAgICA0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU4LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDcyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM4LFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgzLFxuICAgICAgICA3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhBbDJtUUZBUnpwNjc3WDd0UmZ2NkJQSFNDdGwvc25TWEQyMTkvc25VSHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklIVUtPaTgxUWVPMGNsNFFKNlNZWmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjQ2MGM2ZDgtM2YyZS00YThiLWFmMzktYTNmY2EwOTllMzEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NixcbiAgICAgIDU1LFxuICAgICAgMTQ4LFxuICAgICAgNjAsXG4gICAgICAxNzgsXG4gICAgICAyNTEsXG4gICAgICAxNjgsXG4gICAgICAxODYsXG4gICAgICAyNTIsXG4gICAgICA1MCxcbiAgICAgIDE1NCxcbiAgICAgIDIxMCxcbiAgICAgIDQzLFxuICAgICAgMTE0LFxuICAgICAgMTU4LFxuICAgICAgNCxcbiAgICAgIDIwNixcbiAgICAgIDE0LFxuICAgICAgMTYzLFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICA1MCxcbiAgICAgIDIzNyxcbiAgICAgIDEwMixcbiAgICAgIDgyLFxuICAgICAgMTk5LFxuICAgICAgMTM1LFxuICAgICAgMTQ3LFxuICAgICAgMTA5LFxuICAgICAgMjQ4LFxuICAgICAgMjMyLFxuICAgICAgMyxcbiAgICAgIDgsXG4gICAgICAxNyxcbiAgICAgIDIwNixcbiAgICAgIDE0NCxcbiAgICAgIDUsXG4gICAgICAyMDksXG4gICAgICAxNDgsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNYTVJEWVNMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjc4MDgyODY0NjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI2NzU3NzcyNTAxMTk3OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A2NmtNY0dFUDNza0xVR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiem9obXV5UzBrTWJIaG5vZDlkR2NpRWU1bzFOZ0xCdCtKSmFtaUZnYy9nMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoeU1sT0VRRFVtQlVCeHRWL3RTMnFNdGYvV2VuTzZnNCtsYkdTTVNYWjV4OXdKTExZb084REl6V3Z4Rm5GeUQ4U0s2eUtuYklJZEpQclV6MHJ4K3JCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWRWFIaU9SVUJZL1VzNjdxcmxqK1VxcjJQZmZrdmc4YlUwWnNRZ0FzNzVoSXpVaVh0cFM1MzIwL2lPYVJmanBJUU9veTFuaWhrNlRmRkxSMlI3SFhEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjc4MDgyODY0NjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwMzc4OTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "&",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "۞𝑍ᴇʀ⭕✞︎𝐴𝐷𝐴♏'𝑆۞",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "۞𝑍ᴇʀ⭕✞︎𝐴𝐷𝐴♏'𝑆۞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
