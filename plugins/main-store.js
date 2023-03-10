import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----PRICE
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)

//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let wibb = `${wktuwib}`

let info = 
`
Hai..ini dari fread chicken taqi taqi ada yg bisa saya bantu.silahkan tekan menu di bawah ini untuk kamu pilih menunya. :)
`
  /*  {title: "ð HEMAT", rowId: '.order *Paket:* HEMAT â¢ Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "ð NORMAL", rowId: '.order *Paket:* NORMAL â¢ Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "ð STANDAR", rowId: '.order *Paket:* STANDAR â¢ Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "ð PRO", rowId: '.order *Paket:* PRO â¢ Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "ð VIP", rowId: '.order *Paket:* VIP â¢ Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },*/
const sections = [{
title: `â¥ââ¢â¨ Menu TAQI TAQI â©â£ââ¤`,
rows: [
{title: "â£â¨ Ayam Chicken â©â¢",
rowId: '.store order',
description: 'PÊÉªá´á´ 1pcs/6 á´ ' },
{title: "â£â¨ Geprek â©â¢",
rowId: '.store order2',
description: 'PÊÉªá´á´  1pcs/12 á´' },
]},
]

const listMessage = {
  text: info,
  footer:  `SELAMAT DATANG DI TAQI TAQI ${name}\nð : ${week} ${weton} ${date}\nâ: ${wibb}`,
  title: 'â¬ ââââ¢â¨ *LIST MENU* â©â£âââ â¬',
  buttonText: "Click Here!",
  sections
}

let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'order': 
  let teks = `*${htki} ${command.toUpperCase()} ${htka}*\nð® : Chiken\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    
    m.reply('âï¸ Pesanan Ayam Chiken Telah terkirim ke Penjual!\n_*Menunggu confirmasi orderan Dari Owner...\nSilakan cantumkan alamat kamu atau sharelok pengatarannya.ð*_')
    break
      
  case 'order2': 
  let tex = `*${htki} ${command.toUpperCase()} ${htka}*\nð® : Geprek\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? tex + m.quoted.text : tex, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    

   m.reply('âï¸ Pesanan Ayam Geprek Telah terkirim ke Penjual!\n_*Menunggu confirmasi orderan Dari Owner...\nSilakan cantumkan alamat kamu atau sharelok pengatarannya.ð*_')
  break
  case 'aa': {
  m.reply('Êá´Êá´:á´ ')
  }
  break
  
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  }
  /* m.reply('âï¸ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')*/
}

handler.help = ['store']
handler.tags = ['main']
handler.command = /^(store)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? ð¥±"
  if (time >= 4) {
    res = "Pagi Lord ð"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak âï¸"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak ð"
  }
  if (time >= 18) {
    res = "Malam Kak ð"
  }
  return res
}