const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "237654042303" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237654042303";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,237654042303";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,237654042303";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,237654042303";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_24_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc2LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NixcbiAgICAgICAgMTIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0LFxuICAgICAgICA2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODksXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICA2OSxcbiAgICAgICAgOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAzNyxcbiAgICAgICAgNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMixcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiKytLZFdEcnF2a2dZRHV1dlNCTExDa0hjaTF2bWh4Q3pNTmdsWVpXZGRJZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2NTQwNDIzMDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk4MUREMUI4N0I2REU5Q0FGRjBGOEEyNTMwMTFEMTVCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDUzOTQ2OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYN01mdU9mdVJWQ3c1TWg5ZXllM1JnXCIsXG4gIFwicGhvbmVJZFwiOiBcImFjNGYyNzhhLTNlNmYtNDdjOS05NWU1LTc4YjZiYmJlYWVkY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICA2LFxuICAgICAgMTc1LFxuICAgICAgNTQsXG4gICAgICAxNjAsXG4gICAgICAxMzksXG4gICAgICAxNzgsXG4gICAgICAxMSxcbiAgICAgIDYxLFxuICAgICAgODIsXG4gICAgICAxMTcsXG4gICAgICAxNDcsXG4gICAgICA5NyxcbiAgICAgIDQwLFxuICAgICAgNixcbiAgICAgIDEwOCxcbiAgICAgIDIyMyxcbiAgICAgIDYxLFxuICAgICAgMixcbiAgICAgIDE2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDY0LFxuICAgICAgMTExLFxuICAgICAgMzEsXG4gICAgICAxNTQsXG4gICAgICAxNzIsXG4gICAgICAxOCxcbiAgICAgIDIwNCxcbiAgICAgIDEwMixcbiAgICAgIDE2MCxcbiAgICAgIDUsXG4gICAgICA0NixcbiAgICAgIDEzMixcbiAgICAgIDg4LFxuICAgICAgMTk0LFxuICAgICAgMCxcbiAgICAgIDUxLFxuICAgICAgMTcsXG4gICAgICA0NSxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUOTlOOVY2UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjU0MDQyMzAzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTT1NcIixcbiAgICBcImxpZFwiOiBcIjIwNzgzODI5OTMxNjI5MDo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BTcStiTUJFTVRmbDdrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3ZqUXdid1lhQ1Y3amJOYUpBNzBQUllUYzdDeUtGL1IrRkpER2wrNVhuaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1amFlK2RnRU9vTVQ2dWZhYk1ZTHMzTEZDYXhUdDNyUEhoU1QxOElsWEJTb25UMzAzVndvckdEZ2huVHBESzZvV2w5VG5GR2oycUM3QWVIdFU0SjVEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3RVZQbnUyT1AvZGJDYytkc0ZTZUkwd3IvRnBpcUZpay9iNHZBYVFmeC93Tkd0WHUwQ2J3bWxuSnFobjFjalJPR0d0dGtqazNFU09jaElPaTh5bzlDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTQwNDIzMDM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDUzOTQ2MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVAveFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUC94Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Mr_Joker",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Mr_Joker",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
