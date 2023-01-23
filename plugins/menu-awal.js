import fs from 'fs'

let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `Hai..ini dari fread chicken _*TAQI TAQI*_ ada yg bisa saya bantu.silahkan tekan menu di bawah ini untuk kamu pilih menunya.\n${cmenua}`,wm + '\n\n' + botdate, thumb, [['「𝘿𝘼𝙁𝙏𝘼𝙍 𝙈𝙀𝙉𝙐」','.store']], m, {
 contextInfo: { externalAdReply :{
                        mediaUrl: 'sig',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'TAQI TAQI',          previewType: 0,
                        thumbnail: fs.readFileSync('./img/thumbnail.jpg'),
                        sourceUrl: sig
                      }}
})
}



handler.help = ['menu', 'help', '?']
handler.command = /^(menu|help)$/i
export default handler
