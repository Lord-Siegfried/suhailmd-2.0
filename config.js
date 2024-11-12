const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "postgresql://diamonddatabase_user:hQrI5Xc0tBvdifOK9JWqKo4INMa98KLs@dpg-cs8cd6tsvqrc73bo7hug-a.oregon-postgres.render.com/diamonddatabase"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/DYz0k1m.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237697706009";




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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_59_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAzNyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTExLFxuICAgICAgICA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMSxcbiAgICAgICAgNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVWdnVrdDlObEdjU0E2aEVPRUZIY3BBeDdnOGtPU0tocTIrRHNrMnovL009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl83aUFuZDB4U2dTLWNPU3kySWpId2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDY5Mjg3MzgtNDJkNy00NjI3LThkYmEtYjU5ZjFmMTdlOTk1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDIxNCxcbiAgICAgIDIxMCxcbiAgICAgIDE5NixcbiAgICAgIDEzMSxcbiAgICAgIDkzLFxuICAgICAgNDMsXG4gICAgICAxOTUsXG4gICAgICAxMyxcbiAgICAgIDEwMCxcbiAgICAgIDU1LFxuICAgICAgMTcsXG4gICAgICAyNCxcbiAgICAgIDIwMyxcbiAgICAgIDE3LFxuICAgICAgMTIxLFxuICAgICAgMTY5LFxuICAgICAgMjA2LFxuICAgICAgMTI0LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICA4NSxcbiAgICAgIDc3LFxuICAgICAgNzMsXG4gICAgICAyMzQsXG4gICAgICA4NCxcbiAgICAgIDExLFxuICAgICAgMTI0LFxuICAgICAgNDUsXG4gICAgICAyNTAsXG4gICAgICAzNyxcbiAgICAgIDEyLFxuICAgICAgMjQ1LFxuICAgICAgMTMzLFxuICAgICAgMTU2LFxuICAgICAgMTQ0LFxuICAgICAgNDIsXG4gICAgICAyMDUsXG4gICAgICAyMzEsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEV1lRTEEzUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3Njk3NzA2MDA5OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTE9SRCBOWSBIQURFUyAyMVwiLFxuICAgIFwibGlkXCI6IFwiODk4MDgzMTk4MjgwODQ6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlhybStzQ0VKK2x5N2tHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnVkIwVUNLYUNyenAza0JscGhmdjJiajRKemtyVVdUaEg1Zmw5VW03RmdZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVVWm9FamlGbmdSSEFzOHFoeTRTTE94d2ZnTTB3MmNrS1NZYkkzTHVJUUk5WDlhVlJtM2ZuYXRPM1N0UXpweG1XQnVhY3NnV1dYbmh1bzVTQVpuNkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBSRzVLMGh3U0lFZmliYytiNG03QjZDVlJNR29WcDRRalVJZHhvVXNpcmFDbTRDblVWTXJlN0loTXNDeUJVKzVCVlRremRnWHlpMWZDNWFRcWdvbkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5NzcwNjAwOToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTM4Mzk3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5Fd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkV3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwic05GNFJzNThFdkhoaWpoRWpEVkZES3phOUd0RmQ3TnkzelZyNS90Z2lWdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NjE3MjIyNjEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDRdfSxcInRpbWVzdGFtcFwiOlwiMTczMTM4MzkzMTY3NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🩸LORD💎HADES 🩸",
  botname : process.env.BOT_NAME  || "_*🩸𝗗𝗜𝗔𝗠𝗢𝗡𝗗💎𝗠𝗗🩸*_",
  ownername:process.env.OWNER_NAME|| "🩸LORD💎HADES 🩸",


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
