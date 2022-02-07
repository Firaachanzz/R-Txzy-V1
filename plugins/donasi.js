//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
┌〔 Donasi • Emoney 〕
├ GoPay: 081331222400 [ツˣᴿᶻズガx]
├ Dana: 082124245042 [ツˣᴿᶻズガx]
├ Pulsa: 083830815715 [ツˣᴿᶻズガx]
└────
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
