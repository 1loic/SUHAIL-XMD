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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_25_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEzLFxuICAgICAgICA0NixcbiAgICAgICAgMTkwLFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA3NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDkzLFxuICAgICAgICA0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk1LFxuICAgICAgICA0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJmNEZacjdIZTRRVkQvM2xFWVhHbUQyODdEOTNnWHUvYnhKSzhCQ0d0M1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImotNEdxMFgtU1V5VE1ZZW9iOGJUM3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTZkZDJmNmEtM2RhMS00YzA5LWIyZDMtYTgxOGZhYTQ4Y2JiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDI0MSxcbiAgICAgIDIyLFxuICAgICAgMTcwLFxuICAgICAgOTQsXG4gICAgICAxMTcsXG4gICAgICAyNTIsXG4gICAgICAyMTcsXG4gICAgICAxNzksXG4gICAgICAxNzQsXG4gICAgICA2NixcbiAgICAgIDI0MSxcbiAgICAgIDYxLFxuICAgICAgNTksXG4gICAgICAxNDcsXG4gICAgICA3LFxuICAgICAgMTksXG4gICAgICAyMTYsXG4gICAgICAxNTgsXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAxMzMsXG4gICAgICAyMDMsXG4gICAgICAxOTYsXG4gICAgICAxMjAsXG4gICAgICAyMTQsXG4gICAgICA2MyxcbiAgICAgIDEyOCxcbiAgICAgIDkxLFxuICAgICAgMjE1LFxuICAgICAgMTUzLFxuICAgICAgMjQ3LFxuICAgICAgMjMyLFxuICAgICAgNjAsXG4gICAgICAyMjksXG4gICAgICAxMTgsXG4gICAgICAyMzYsXG4gICAgICAxMDgsXG4gICAgICAxNTUsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0dUTkxNQzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1NDA0MjMwMzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNPU1wiLFxuICAgIFwibGlkXCI6IFwiMjA3ODM4Mjk5MzE2MjkwOjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t6MHhva0ZFT2FjdkxrR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNndoWFE0NUdMNnk3bVFwb0FUN2FwWVJYZitjdHpzZllFRzVNcUtUa1JBVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMTXp0S0ZGMVJSMmNpVEF3MU1ZODFMZCtiN3Rid1Z5SjVsdVlSRHk3S09yWXJnaEdYK0JreC9tTFA5Y1VDM2d3UjRUb1NjZGdJMkozNVJaSXRtbVNDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXRnh4YUQ3V3p1dU1LVEpFSDFrMGhzWC90MWt5QWcwOU1OZjJ2Wjd6K29QSThZR3UzeFpqSUhyd3dTMlVMRkZhckdNMnJDV3U0VGFSSGJyNHFTUGVoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTQwNDIzMDM6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTM3MTMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDhhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMOGEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4dGNNM3RZWFBjeTNXMXp6T3hPYW1kYzBXa2JDTVJ6N3FsaGllaVNjZjRNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNjIyMTM0MjAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzMxMTI3MzIyMDU1XCJ9Igp9"  // PUT your SESSION_ID 


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
