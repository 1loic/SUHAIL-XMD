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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,237654042303";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "237654042303";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_39_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDU0LFxuICAgICAgICA3MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgODIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyLFxuICAgICAgICAxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICA3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2LFxuICAgICAgICA0LFxuICAgICAgICAxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MSxcbiAgICAgICAgODksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMNWdCS1hQTTdKS0FTSStLMmNjemZzbGptTVFzQXY2Yyt1Ri9XazVrWnFvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY1NDA0MjMwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODkzRUMzNjFGNEVGQzA2ODZFRTQ5NjU2OTI3RTUzODBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMDE0NzU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3NjU0MDQyMzAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRjBBRDM2NDA0MjczMUE2MTNBRTE5QkI4RDFDRkM0RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzAwMTQ3NTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2NTQwNDIzMDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg0RTE3NTM1Q0FEMjIwMDg0QUE3MTREMDIxRTA5RUQyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDAxNDc1OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY1NDA0MjMwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkExQkNERTNGMDE3M0Q1REI0RUZCNDM3Mjk0MENBMjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMDE0NzU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdLU1lvMFZOUmEyWXpFaFpSVlRFaWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWMyNTg1YTUtZTUzYS00MWZmLTg2NzktYzg5MTVjNmYyMTRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgNzUsXG4gICAgICAyMzksXG4gICAgICA3OCxcbiAgICAgIDE0NixcbiAgICAgIDY4LFxuICAgICAgMTM1LFxuICAgICAgMTk5LFxuICAgICAgMjEyLFxuICAgICAgMTA2LFxuICAgICAgMjQ3LFxuICAgICAgNTYsXG4gICAgICAyMjcsXG4gICAgICA4NixcbiAgICAgIDkzLFxuICAgICAgOTcsXG4gICAgICAxNTQsXG4gICAgICAyNDcsXG4gICAgICAyMCxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMTA4LFxuICAgICAgOCxcbiAgICAgIDMzLFxuICAgICAgMTUyLFxuICAgICAgMTIyLFxuICAgICAgMTg0LFxuICAgICAgMjI1LFxuICAgICAgMTk0LFxuICAgICAgOTEsXG4gICAgICA5MixcbiAgICAgIDIwNCxcbiAgICAgIDMxLFxuICAgICAgMTkwLFxuICAgICAgNTcsXG4gICAgICA0NyxcbiAgICAgIDgsXG4gICAgICAxNDgsXG4gICAgICAyOCxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4RkZTNUxWWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjU0MDQyMzAzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTT1NcIixcbiAgICBcImxpZFwiOiBcIjIwNzgzODI5OTMxNjI5MDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BPcStiTUJFSi9jOTdnR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3ZqUXdid1lhQ1Y3amJOYUpBNzBQUllUYzdDeUtGL1IrRkpER2wrNVhuaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVMVR0b2NGcFlxeFB3dTRtVGhod0RLdlZ6R2wyWmVxanp3ZHQ2WnBJSmNyeDdiMzZ1Y2NKc2ZBVGF0M3NhYUlWKzJOTHVSbHNkVDhTcTdnQlRGZzlCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5dUNvYVkxODN5bDhvd3ljanA3MEFuak1zclpqQUJZNXk1YkY5YVQrSG1zN29pdVFEUUtYdmIwQVEwUlFZbjJHL0sxWDA2Z3dKLzZRZmE1UnIzQURCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTQwNDIzMDM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDAxNDc1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVAvd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUC93Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
