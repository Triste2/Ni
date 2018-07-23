const Discord = require('discord.js');
const client = new Discord.Client();

 
 
 
 
 
 
const adminprefix = ".";
const devs = ['413685264565927967'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'sgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'sname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'savatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});




 
 // مانع النشر
 
 client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** ممنوع النشر ي حلو  **`)
    }
});


 

 
 // الإنفايت

   client.on('message', message => {
	   var prefix ='.';
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} عدد دعواتكك هي  ${inviteCount}`);
});
  }
});
  

  // البنق


  client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('.ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**الوقت المستغرق:**',msg + " ms 📶 ")
                        .addField('**مقبس الويب:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });


					
					
					// مسح الشات
					
client.on("message", message => {
    var prefix = ".";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "NiceLife ©"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
					
					
					
					
client.on('message',function(message) {
	var prefix ='.';
    let muteRole = message.guild.roles.find(r => r.name === "Muted");
    let muteId = message.mentions.users.first();
    let messageArray = message.content.split(" ");
    let muteReason = messageArray[3];
    let Swearing = '1h';
    let Advertising = '4h';
    let Spam = '2h';
   if(message.content.startsWith(prefix + "mute")) {
       if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(" م عندك الرتبة المطلوبة ");
       if(!muteId) return message.channel.send(" لازم تمنشن عضو  ");
       if(muteId === message.author) return message.channel.send(' م تقدر تعطي نفسك ميوت ');
       if(muteId === client.user) return message.channel.send(' م تقدر تعطيني ميوت ');
       message.guild.channels.forEach((channel, id) => {
      message.channel.overwritePermissions(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.channel.send(`
    \`\`\`ml
" قم بأختيار رقم السبب "
1 : السب و الشتم
2 : النشر
3 : السبام
\`\`\`
__امامك 20 ثانية للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 20000,
    errors: ['time'],
  })
  .then((collected) => {
      message.guild.member(muteId).addRole(muteRole)
      .then(() => { setTimeout(() => {
           message.guild.member(muteId).removeRole(muteRole);
       }, mmss(Swearing));
       message.channel.send(`**تم!, تم اعطاء ميوت لـ${muteId} بسبب السب و الشم**`);
      });
    });

message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 20000,
    errors: ['time'],
  })
  .then((collected) => {
      message.guild.member(muteId).addRole(muteRole)
      .then(() => { setTimeout(() => {
           message.guild.member(muteId).removeRole(muteRole);
       }, mmss(Advertising));
       message.channel.send(`**تم اعطاء ميوت لـ${muteId} بسبب النشر**`);
      });
    });
message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 20000,
    errors: ['time'],
  })
  .then((collected) => {
      message.guild.member(muteId).addRole(muteRole)
      .then(() => { setTimeout(() => {
           message.guild.member(muteId).removeRole(muteRole);
       }, mmss(Spam));
       message.channel.send(`**تم اعطاء ميوت لـ${muteId} بسبب السبام**`);
      });
    });
   });
   }
});




					
					// فك الميوت
					
					client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === ".unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("** تم فك الميوت عن الشخص المحدد  .. **").catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("** تم فك الميوت عن الشخص المحدد .. **").catch(console.error);
    });
  }

};

});



// الأفتار

client.on('message', message => {
    if (message.content.startsWith(".avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});





// عدد الاعضاء


  client.on('message', message => {
   if (message.content === ".count") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`, true)
 
  message.channel.sendEmbed(embed);
    }
});



// السيرفر


client.on('message', message => {
if (message.content === ".server") {
if(!message.channel.guild) return;
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 سيـرفر ايــدي**", "**"+message.guild.id+"**",true)
.addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
.addField("**✅ الشــات الاســاســي**" , "**"+message.guild.DefaultChannel+"**" ,true)
.addField("**🌍 المـوقع**" , "**"+message.guild.region+"**",true)
.addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
.addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
.addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
.addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
.addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)

.addField("👥عدد الاعضــاء",`
**${message.guild.memberCount}**`)
.setThumbnail(message.guild.iconURL)
.setColor('RANDOM')
message.channel.sendEmbed(embed)

}
});






// كود الباند

  client.on('message', message => {
	  var prefix ='.';
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (message.content.startsWith(prefix + "ban")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});


// فك الباند عن الكل


client.on("message", message => {
	var prefix ='.';
    if (message.content.startsWith(prefix + "rbans")) {
        if( !msg.member.hasPermission( 'ADMINISTRATOR' ) ) return msg.reply(' م عندك البرمشن حق فك الباند');
        msg.guild.fetchBans().forEach(u=>msg.guild.unban(u));
        msg.reply(' تم فك الباند عن الجميع ');
    }
});


// تغيير التوبك 


   client.on("message", async message => {
	   var prefix = ".";
           let args = message.content.split(' ').slice(1)
if(message.content.startsWith(prefix + 'ctopic')) {
  if (!args) return message.reply("اكتب التوبك")
  message.channel.setTopic(`${args}`)
  .then(newChannel => message.channel.send(`تم تغيير التوبك الى ***${args}***`))
  .catch(console.error);
};
   });


// حذف الرومات والرتب
   
   
   client.on('message', omar => {
var prefix = ".";
if(omar.content.split(' ')[0] == prefix + 'drooms') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});
}
if(omar.content.split(' ')[0] == prefix + 'droles') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});
omar.reply("`**تم حذف كل الرتب بنجاح**`")
}
});


// معلومات البوت


client.on('message', message => {
    if(message.content === ".info") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**:globe_with_meridians: عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});



// سحب جميع الاعضاء لرومك الصوتي

client.on('message', message => {
	var prefix = ".";
if(message.content.startsWith(prefix + 'all')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)

 }
   });


 
// كود الرابط
 
    client.on('message', message => {
    if (!message.guild) return; 
    if (message.content.startsWith("رابط")) {

        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send(`** تم أرسال الرابط برسالة خاصة **`)

      message.author.send(`**هذا الرابط لشخص واحد و لمدة 24 ساعة **`)
	  }
});



client.login(process.env.BOT_TOKEN);
