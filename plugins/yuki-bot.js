import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, command, text }) => {
  let name = await conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/0d6f3275784da5e3912f6.jpg" )
await conn.sendButton(m.chat, `Iya kak ${cmenut}${name}${cmenuh} Saya *${await conn.getName(conn.user.jid)}* ..ini dari fread chicken taqi taqi ada yg bisa saya bantu.silahkan tekan menu di bawah ini untuk kamu pilih menunya.\n`,wm + '\n\n' + botdate, thumbs, [['「MENU」','.store']], m,)
}
handler.customPrefix = /^(Hallo|halo|Halo|hallo|hi|helo|hai|hi|Hai|Helo|Hello|p|sigit|git|beli|mas|kak|order|pe|tuku|bang|mass|ass|a|s|d|q|we)$/i
handler.command = new RegExp

export default handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🎑"
    if (time >= 4) {
        res = "Good Morning 🌅"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Evening 🌃" 
    }
    return res
}
