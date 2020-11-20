const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
    
.setColor('BLACK')
.setAuthor(`${client.user.username} `, client.user.avatarURL)
.addField(`Kullanıcı Komutları`,
`\n

-**avatar** Etiketlediğiniz Kişinin Avatarını Gösterir!
-**sunucu-bilgi** Sunucunun İstatistiklerini Gösterir!
-**kullanıcı-bilgi** Etiketlediğiniz Kişinin Profilini Gösterir Veyada Kendi Profilnizi Gösterir!
-**ping** Botun Pingini Gösterir!
-**istatistik** Botun İstatistiğini Gösterir!


**Linkler**

Link Yok Şuanlık :D    
`)
    
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-kullanıcı','kullanıcı-yardım','yardımkullanıcı','kullanıcıyardım'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'matador',
  usage: 'kullanıcı'
};