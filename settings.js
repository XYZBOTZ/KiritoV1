const fs = require('fs')
const chalk = require('chalk')

// Untuk apikey open ai dapatkan di https://beta.openai.com/account/api-keys
// Bikin 2 apikey!, 1 taruk yang di pertama, 1 nya lagi taruk di bawah nya!!
global.keyopenai = 'ISI_APIKEY_OPENAI_KE_1'
global.keyopenai2 = 'ISI_APIKEY_OPENAI_KE_2'

global.Prefix = 'Multi'
global.meki = '6285862754807'
global.ownerNumber = '6285862754807'
global.owner2 = '+62 858-6275-4807'
global.botname = 'Tobot' 
global.ownername = 'Nopan'
global.owner = ['6285862754807'] 
global.pemilik = ['6285862754807'] 
global.premium = ['6285862754807'] 
global.packname = 'Kontol' 
global.author = 'Nopan' 
global.sessionName = 'session'
global.myemail = 'nopanmaker@gmail.com'
global.mygroupwa = 'https://chat.whatsapp.com/D7dW6tp7emp5piyJGRKWcH'
global.myinstagram = 'https://instagram.com/xyznopan'
global.prefa = ['#','!','/','']
global.mess = {
    success: 'Berhasil.',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    done: 'Done',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.donatm = `*── 「 DONATE 」 ──*

_Kalian Bisa Dukung Bot Lewat Donate Ke :_
 _》Dana : -_
 _》Gopay : -_
 _》Pulsa : - ( not detected )_
  
_Donate Kalian Sangat Berarti._

_Contact person Owner:_
_wa.me/0_`
global.sewam = `*── 「 SEWABOT 」 ──*

_Kalian Bisa Dukung Bot Lewat Donate Ke :_
 _》Dana : -_
 _》Gopay : -_
 _》Pulsa : - ( not detected )_
 
_Donate Kalian Sangat Berarti._

_Contact person Owner:_
_wa.me/0_`

global.fakeimage = fs.readFileSync("./media/fake.jpg")
global.thumb = fs.readFileSync('./media/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
