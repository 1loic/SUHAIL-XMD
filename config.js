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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_12_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNyxcbiAgICAgICAgNCxcbiAgICAgICAgOCxcbiAgICAgICAgODUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICAzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDkzLFxuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU3LFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMyLFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9QUElrK0RaSjQ0ZXZPRlRlNmtubkxVakpOcWZpYmp3aWdjRURNV2VsbDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3NjU0MDQyMzAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFOERDMDMwNDNERUI5MzlFNEZGODEwOTY2MTAwNEUyMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA4NzM1MjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2NTQwNDIzMDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlFQUZEMjcxOERDRUNBNEI1MzYyOTg3NTNCMUQ4QjI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDg3MzUyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxWG9JanF6R1JRV2Qyd1p4di1Ud2V3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjg4ZWMzM2MxLWU4YzgtNDNjMS1iYmIyLTc1YTZmNDY5ZjMyNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgMjA4LFxuICAgICAgMTc5LFxuICAgICAgMjE2LFxuICAgICAgODcsXG4gICAgICAxMjQsXG4gICAgICAwLFxuICAgICAgMTk4LFxuICAgICAgMzQsXG4gICAgICAxMjgsXG4gICAgICAyMyxcbiAgICAgIDIyMixcbiAgICAgIDczLFxuICAgICAgMTQ4LFxuICAgICAgOTAsXG4gICAgICA4OCxcbiAgICAgIDYxLFxuICAgICAgMTk1LFxuICAgICAgOTksXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICAyMDQsXG4gICAgICAxMjAsXG4gICAgICAxMTcsXG4gICAgICA4MSxcbiAgICAgIDI3LFxuICAgICAgMjQ5LFxuICAgICAgMjA0LFxuICAgICAgMTU1LFxuICAgICAgMjE5LFxuICAgICAgMTU4LFxuICAgICAgMTcyLFxuICAgICAgMjUsXG4gICAgICA4NSxcbiAgICAgIDE4MyxcbiAgICAgIDEzOCxcbiAgICAgIDE2NCxcbiAgICAgIDI0MSxcbiAgICAgIDE5OSxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYS1NIWkVTTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjU0MDQyMzAzOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU09TXCIsXG4gICAgXCJsaWRcIjogXCIyMDc4MzgyOTkzMTYyOTA6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGFxK2JNQkVLcVJyTGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvdmpRd2J3WWFDVjdqYk5hSkE3MFBSWVRjN0N5S0YvUitGSkRHbCs1WG5rPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVHeGNhb0JJWXcxUnZ0YlZ3UDNjMWxycE9YRVBLd1V4Wk5jczZzeDlOTHE2NjZTVTFyWmMwdGNscHp5Q0QycW05c3ZRQm4xSG02MTNaVU1yQ2M0T0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5TcnU1NTVUclY3djd4VXJBdHEwWjFYbWsvbmFUT3dRM2RHVHZIbU1acU50ZGdLOTBMMGUzM3VJd3FxNXh3c2hneHNlVXJEaVltUFA5TFpGazZSYWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1NDA0MjMwMzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDg3MzUxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU56d1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnp3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUhTNjFFZDR3REE4YzlMQ05NOWtrNFpGZlk0VXpScXlKSnpTSTgydTJpQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzczNzgxNjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDg3MzUyMTM2OVwifSIKfQ=="  // PUT your SESSION_ID 


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
