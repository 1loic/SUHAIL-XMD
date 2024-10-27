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


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_36_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODksXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNixcbiAgICAgICAgNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDUxLFxuICAgICAgICA3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0LFxuICAgICAgICA5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDY3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU5LFxuICAgICAgICA3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgODksXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MixcbiAgICAgICAgMTUxLFxuICAgICAgICA4MyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MixcbiAgICAgICAgMTk2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY0LFxuICAgICAgICA4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg3LFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI3LFxuICAgICAgICAzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInpWRWcrZmt1bzF2UWVqSE5YTW1PU2lPQmMyVEtUT3BpMUdiZE5SNlVhMTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNLYXd5UC1iU0xDdGtKZ0x4cnQ1SWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2NkZDEzNzAtNjBiNi00ODk2LTgxMzgtNjk5OGVlNDg1NjVjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDEzMSxcbiAgICAgIDM4LFxuICAgICAgMTc1LFxuICAgICAgMTAwLFxuICAgICAgMjIwLFxuICAgICAgMjU0LFxuICAgICAgMTAyLFxuICAgICAgMTc0LFxuICAgICAgMTEyLFxuICAgICAgMTA3LFxuICAgICAgNzgsXG4gICAgICAxODksXG4gICAgICAxNzksXG4gICAgICAyNDUsXG4gICAgICAyMDcsXG4gICAgICAyNTQsXG4gICAgICAzNCxcbiAgICAgIDI0OCxcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAxNzksXG4gICAgICAyMTQsXG4gICAgICAxMDAsXG4gICAgICAxNyxcbiAgICAgIDE4NyxcbiAgICAgIDMzLFxuICAgICAgMjEzLFxuICAgICAgMTkzLFxuICAgICAgMTE1LFxuICAgICAgNjgsXG4gICAgICAxNDEsXG4gICAgICAxMjgsXG4gICAgICA4MSxcbiAgICAgIDE4NCxcbiAgICAgIDE1NCxcbiAgICAgIDI5LFxuICAgICAgNyxcbiAgICAgIDY1LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI2TFc3WFZYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2MjA3NDY2OTc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNvc1wiLFxuICAgIFwibGlkXCI6IFwiMjQ2NzY3OTMzMjMxMjY1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEtxK2JNQkVPcVY5cmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2U3BMa1lKUjlpTXFGWjVUVzZkRU0rb0pLKzQ1Z3haQnRwQy96WTU0U21rPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJ6dis2YXVJY0srYUI5alVJMFh4aStXM081SGlGemJDcVdwWDhXZGJSQTREc21hL0NOTkZVNWdSYTNyZ05mMlIxYW5lVy9wR1VQR0FsRXFoL3Bxa0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJKUVNFSEhPTWdUcUhneDRKbUtaTlgxY3lQTkdXSGJWZUtxMWMwbFNqQ3hZMVU0SWpBcDIrNHpTMFBtc0VZZ0hhME54K3B6MG1Kci95aWtHTnp3RUNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzYyMDc0NjY5NzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTk4OTM2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUEzZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTNlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT09tRzB0dEVRVTMxVExLUnY4WGIrc3Yvb3d3QzNma1MxUFJwS0o0YUF1TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzczNzgxNjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTk4OTM2ODMyNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
