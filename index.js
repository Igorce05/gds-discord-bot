const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NzczNTM1OTI4NjkzNjg2Mjgz.X6KpeQ.0G4_Z8o_KOGqW5FsoFzlqSWIVXU";
const ascii = require("ascii-art");

bot.on("ready", () =>{
    console.log("Der Bot ist Online!\n⚙Gaming-BoT⚙#0407");
    
    //ctrl + C in Terminal um Neustarten
    
    //wechselnder Status

    let statuse = [
        "dsc.gg/gamingds| g!help ",
        `auf ${bot.guilds.cache.size} Servern`, 
        `${bot.guilds.cache.size} User`
        ]
    
        let number = 0;
        
        setInterval(()=>{
            let rstatus = statuse[number];
    
            bot.user.setActivity(rstatus);
        },5000)
})


bot.on("message", function(message){
    

    if(message.content === "g!help"){

        let server = {
            logo: message.guild.iconURL(),
        }

        let embed = new Discord.MessageEmbed()
        .setAuthor("Feedback [Klicken sie hier]", "https://cdn.discordapp.com/avatars/773535928693686283/16e641163a7d205eac7e7c95713cc3a2.png?size=256", "https://forms.gle/Tcepcimm6uSGVaCL9")
        .setTitle("__⚙Gaming-BoT⚙ Commands__")
        .addField("*__Prefix__*:", "g!")
        .addField("__Hilfe__:", "```g!help```")
        .addField("__Userinfo__:", "```g!userinfo```")
        .addField("__Bot einzuladen__:", "```g!invite```")
        .addField("__Sende Commandlist__", "```g!send-commands```")
        .addField("__Commands mit höhere Rechte__", "```g!moderator-commandlist```")
        .addField("__Feedback-Link__", "```g!feedback```")
        .addField("__Support zu diesen Bot__:", "👾🇩🇪|GamingDsBots|🇨🇭 -D.Server\n[[Klicken sie Hier]](https://discord.gg/QsPmU7Q8BN)")
        .setColor("#122963")
        .setFooter("Server: "+message.guild.name, server.logo)
        .setThumbnail("https://cdn.discordapp.com/attachments/818578951618035741/835396069940002846/Ds_GIF-downsized_large.gif")
        
        message.channel.send(embed);
    }

    //moderator commandlist

    if(message.content === "g!moderator-commandlist"){
        
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Du hast keine rechte Dafür");
        
        let server = {
            logo: message.guild.iconURL(),
        }

        let embed = new Discord.MessageEmbed()
        .setAuthor("Feedback [Klicken sie hier]", "https://cdn.discordapp.com/avatars/773535928693686283/16e641163a7d205eac7e7c95713cc3a2.png?size=256", "https://forms.gle/Tcepcimm6uSGVaCL9")
        .setTitle("__⚙Gaming-BoT⚙ Commands__")
        .addField("__Nachrichten Löschen🗑️__:", "```g!clear „Anzahl“```")
        .addField("__Regelcommandslist__:", "```g!rules-list```")
        .addField("__Sende Commandlist__", "```g!send-commands-m```")
        .addField("__Kicken/Bannen Commandlist__:", "```g!Kick/Ban-commands```")
        .addField("__Support zu diesen Bot__:", "👾🇩🇪|GamingDsBots|🇨🇭 -D.Server [[Klicken sie Hier]](https://discord.gg/QsPmU7Q8BN)")
        .setColor("#b82b2b")
        .setFooter("Server: "+message.guild.name, server.logo)
        .setThumbnail("https://cdn.discordapp.com/attachments/818578951618035741/835396069940002846/Ds_GIF-downsized_large.gif")
        
        message.channel.send(embed);

        
    }

    //commandlist

    if(message.content === "g!feedback"){

        let server = {
            logo: message.guild.iconURL(),
        }

        let embed = new Discord.MessageEmbed()

        .setTitle("__Feedback__")
        .setColor("#122963")
        .setDescription("Füllen sie Bitte das Formular aus (Feedbackformular)\nhttps://forms.gle/Tcepcimm6uSGVaCL9")
        .setImage("https://www.leforumpedagogique.org/wp-content/uploads/2020/03/Google-Forms-logo1-835x300.png")
        .setFooter("Server: "+message.guild.name, server.logo)
        .setThumbnail("https://cdn.discordapp.com/attachments/818578951618035741/835396069940002846/Ds_GIF-downsized_large.gif")

        message.channel.send(embed);
    }
    //kick /ban command list

    if(message.content === "g!Kick/Ban-commands"){

        let server = {
            logo: message.guild.iconURL(),
        }
        
        let embed = new Discord.MessageEmbed()
        
        .setAuthor("Feedback [Klicken sie hier]", "https://cdn.discordapp.com/avatars/773535928693686283/16e641163a7d205eac7e7c95713cc3a2.png?size=256", "https://forms.gle/Tcepcimm6uSGVaCL9")
        .setTitle("__BAN/KICK COMMAND-LIST__")
        .setColor("YELLOW")
        .addField("__Kicken__:", "```g!kick @user „Grund“```")
        .addField("__Bannen__:", "```g!ban @user „Grund“```")
        .setFooter("Server: "+message.guild.name, server.logo)

        message.channel.send(embed);
    }

    //sendlist (für (everyone))

    if(message.content === "g!send-commands"){

        let server = {
            logo: message.guild.iconURL(),
        }
        
        let embed = new Discord.MessageEmbed()

        .setAuthor("Feedback [Klicken sie hier]", "https://cdn.discordapp.com/avatars/773535928693686283/16e641163a7d205eac7e7c95713cc3a2.png?size=256", "https://forms.gle/Tcepcimm6uSGVaCL9")
        .setTitle("__Send Commands__")
        .setColor("GREEN")
        .addField("__ASCII-TEXT__:", "```g!ascii-message „TEXT“```")
        .setFooter("Server: "+message.guild.name, server.logo)

        message.channel.send(embed);
    }

        //sendlist (für (moderator))

        if(message.content === "g!send-commands-m"){

            let server = {
                logo: message.guild.iconURL(),
            }
            
            let embed = new Discord.MessageEmbed()
    
            .setAuthor("Feedback [Klicken sie hier]", "https://cdn.discordapp.com/avatars/773535928693686283/16e641163a7d205eac7e7c95713cc3a2.png?size=256", "https://forms.gle/Tcepcimm6uSGVaCL9")
            .setTitle("__Send Commands__")
            .setColor("GREEN")
            .addField("__Warnen__:", "```g!warn @user „Grund“```")
            .addField("__Eigene Einbettungstext__:", "```g!send-embedmessage „TITEL“ „TEXT“```")
            .addField("__ASCII-TEXT__:", "```g!ascii-message „TEXT“```")
            .setFooter("Server: "+message.guild.name, server.logo)
    
            message.channel.send(embed);

            if(!title) return message.channel.send("Du kannst keine Nachrichte ohne Titel senden!😎😅").then(msg=>msg.delete({timeout: 10000}))
        }

        //rules commands

        if(message.content === "g!rules-list"){
        
            let server = {
                logo: message.guild.iconURL(),
            }
            
            let embed = new Discord.MessageEmbed()
            .setAuthor("Feedback [Klicken sie hier]", "https://cdn.discordapp.com/avatars/773535928693686283/16e641163a7d205eac7e7c95713cc3a2.png?size=256", "https://forms.gle/Tcepcimm6uSGVaCL9")
            .setTitle("__Regel-list-Commands__")
            .setColor("RED")
            .addField("__Regel-Vorlage__:", "```g!rules-v```")
            .addField("__Einladungs-Regel-Vorlage__:", "```g!rules-v-i```")
            .addField("__Einladungen senden__:", "```g!send-invite https://discord.gg/link```")
            .setThumbnail("https://cdn.discordapp.com/attachments/818578951618035741/835396069940002846/Ds_GIF-downsized_large.gif")
            .setFooter("Server: "+message.guild.name, server.logo)
    
            message.channel.send(embed);
        }

    //user-info

    if(message.content === "g!userinfo"){
        if(!message.guild) return;

        let server = {
            logo: message.guild.iconURL(),
            name: message.guild.name,
            createdAt: message.guild.createdAt,
            id: message.guild.id,
            region: message.guild.region,
            verified: message.guild.verified,
            members: message.guild.memberCount
        }

        let embed = new Discord.MessageEmbed()
        .setAuthor("𝕀𝕘𝕠𝕣𝕔𝕖𝟘𝟝#1665", "https://cdn.discordapp.com/avatars/620256465763958785/37e83d6e0ca34f79c2f931f0e671bcc4.png?size=256", "https://www.youtube.com/channel/UCFqVF5oKOglOfMaZPgdoo0Q")
        .setTitle("__Userinfo__")
        .setColor("#122963")
        .setThumbnail(message.author.displayAvatarURL())
        .addField("Name:", server.name, true)
        .addField("Id:", server.id, true)
        .addField("Region:", server.region, true)
        .addField("Verified:", server.verified, true)
        .addField("Mitglieder:", server.members, true)
        .addField("Erstellt am:", server.createdAt, true)

        message.channel.send(embed);  
    }
    
    //delet Message

    if(message.content.startsWith("g!clear")){
        let messages = message.content.split(" ").slice(1).join("");
        message.delete();
        if(isNaN(messages)) return message.reply("Du hast keine Zahl eingegeben!( => 1️⃣2️⃣3️⃣ ...) Sondern Buchstaben/Zeichen!").then(msg=>msg.delete({timeout: "15000"}));
        message.channel.bulkDelete(messages);
        message.channel.send("Habe " + messages + " (die) Nachrichten gelöscht. 😎🗑️").then(msg=>msg.delete({timeout: "10000"}));

        if(!message.member.hasPermission("MESA")) return message.reply("Du hast keine rechte Dafür");
    }
    
    //bot inviting
    
    if(message.content === "g!invite"){
        let embed = new Discord.MessageEmbed()
        .setAuthor("𝕀𝕘𝕠𝕣𝕔𝕖𝟘𝟝#1665", "https://cdn.discordapp.com/avatars/620256465763958785/37e83d6e0ca34f79c2f931f0e671bcc4.png?size=256", "https://www.youtube.com/channel/UCFqVF5oKOglOfMaZPgdoo0Q")
        .setTitle("__Bot Invite__")
        .setColor("#122963")
        .setDescription("__**Info**__\nWenn sie diesen Bot zu ihren Server hinzufügen wollt Klicken sie auf den Blauen [Klicken sie hier]")
        .addField("Bot Einladungslink:", "[[Klicken sie hier]](https://discord.com/oauth2/authorize?client_id=773535928693686283&permissions=8&scope=bot)")
        .setThumbnail("https://cdn.discordapp.com/attachments/818578951618035741/835396069940002846/Ds_GIF-downsized_large.gif")
        .setFooter("Server: "+message.guild.name, "https://cdn.discordapp.com/attachments/790967613270392862/821764920109826100/Ds_GIF-downsized_large.gif")
    
        message.channel.send(embed);
    }

    //social media

    if(message.content === "g!social-media"){
        let embed = new Discord.MessageEmbed()
        .setAuthor("𝕀𝕘𝕠𝕣𝕔𝕖𝟘𝟝#1665", "https://cdn.discordapp.com/avatars/620256465763958785/37e83d6e0ca34f79c2f931f0e671bcc4.png?size=256", "https://www.youtube.com/channel/UCFqVF5oKOglOfMaZPgdoo0Q")
        .setTitle("__Social Media__")
        .setColor("#122963")
        .setDescription("YouTube <:YouTube:832640541497360384> [[Klicken sie hier]](https://www.youtube.com/channel/UCFqVF5oKOglOfMaZPgdoo0Q)\nInstagramm <:Instagram:832639919851044865> [[Klicken sie hier]](https://www.instagram.com/gamingds2021/)\nTwitter <:Twitter:832645974081142844> [[Klicken sie hier]](https://twitter.com/GAMINGDS1)\nFacebook <:facebook:832648078388494367> [[Klicken sie hier]](https://www.facebook.com/gamingds.ds/)")
        .setThumbnail("https://cdn.discordapp.com/attachments/818578951618035741/835396069940002846/Ds_GIF-downsized_large.gif")
        .setFooter("Server: "+message.guild.name, "https://cdn.discordapp.com/attachments/790967613270392862/821764920109826100/Ds_GIF-downsized_large.gif")
    
        message.channel.send(embed);
    }

    //warn system

    if(message.content.startsWith("g!warn")){
        let user = message.mentions.users.first();
        let grund = message.content.split(" ").slice(2).join(" ");

        if(!user) return message.channel.send("Du hast einen User zu erwähnen vergessen! (User erwähnen = @user#1467 => @user)😎😅").then(msg=>msg.delete({timeout: 10000}))
        if(!grund) return message.channel.send("Du hast einen Grund zu erwähnen vergessen! (Grund erwähnen => )😎😅").then(msg=>msg.delete({timeout: 10000}))

        let embed = new Discord.MessageEmbed()
        .setTitle("__Verwarnung!__")
        .setDescription(`Wahrnung <@!${user.id}>, du würdest verwarnt!⛔🤬\nGrund: ${grund}`)
        .setColor("#122963")
        .setThumbnail("https://cdn.discordapp.com/attachments/818578951618035741/835396069940002846/Ds_GIF-downsized_large.gif")
        .setFooter("Server: "+message.guild.name, "https://cdn.discordapp.com/attachments/790967613270392862/821764920109826100/Ds_GIF-downsized_large.gif")

        message.channel.send(embed).then(msg=>msg.delete({timeout: 86400000}));

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Du hast keine rechte Dafür");
    }

    //own embed massage

    if(message.content.startsWith("g!send-embedmessage")){
        let title = message.content.split(" ").slice(1).join(" ");
        let description = message.content.split(" ").slice(2);
        //(Das kommt erst später als funktion! )let thumbnail = message.content.split ...usw.

        if(!title) return message.channel.send("Du kannst keine Nachrichte ohne Titel senden!😎😅").then(msg=>msg.delete({timeout: 10000}))
        if(!description) return message.channel.send("Du kannst keine leere Nachricht senden!😎😅").then(msg=>msg.delete({timeout: 10000}))
        
        let embed = new Discord.MessageEmbed()
        .setTitle(`__${title}__`)
        .setDescription(`${description}`)
        .setColor("#122963")
        .setThumbnail("https://cdn.discordapp.com/attachments/818578951618035741/835396069940002846/Ds_GIF-downsized_large.gif")
        .setFooter("Server: "+message.guild.name, "https://cdn.discordapp.com/attachments/790967613270392862/821764920109826100/Ds_GIF-downsized_large.gif")

        message.channel.send(embed);

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Du hast keine rechte Dafür");
    }

    //kick befehl

    if(message.content.startsWith("g!kick")){
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Du hast keine Rechte dafür!🚨").then(msg=>msg.delete({timeout: 10000}))

        let user = message.mentions.members.first();
        let grund = message.content.split(" ").slice(2).join(" ");

        if(!user) return message.reply("Du hast ein User vergessen zu erwähnen!😎😅").then(msg=>msg.delete({timeout: 10000}));

        message.guild.member(user).kick({reason:`${grund}`}).catch(err=>{
            if(err){
                message.channel.send("Der Nutzer konnte nicht gekickt werden, weil der Benutzer Adminstratorrechte hat oder dieser Server dem Benutzer gehört!😎"+err);
            }else{
                let embed = new Discord.MessageEmbed()

                .setTitle(`__Jemand wurde gekickt!__`)
                .setDescription(`User: ${user.id} wurde gekickt!\nGrund: ${grund}`)
                .setColor("#122963")
                .setThumbnail("https://cdn.discordapp.com/attachments/818578951618035741/835396069940002846/Ds_GIF-downsized_large.gif")
                .setFooter("Server: "+message.guild.name, "https://cdn.discordapp.com/attachments/790967613270392862/821764920109826100/Ds_GIF-downsized_large.gif")

                message.channel.send(embed);

                
            }
            
        })
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Du hast keine rechte Dafür");
    }

    //ban befehl

    if(message.content.startsWith("g!ban")){
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Du hast keine Rechte dafür!🚨").then(msg=>msg.delete({timeout: 10000}))
 
            let user = message.mentions.members.first();
            let grund = message.content.split(" ").slice(2).join(" ");
 
        if(!user) return message.reply("Du hast ein User vergessen zu erwähnen!😎😅").then(msg=>msg.delete({timeout: 10000}));

        let embed = new Discord.MessageEmbed()
 
                 .setTitle(`__Jemand wurde gebannt!__`)
                 .setDescription(`User: ${user.id} wurde gebannt!\nGrund: ${grund}`)
                 .setColor("#122963")
                 .setThumbnail("https://cdn.discordapp.com/attachments/818578951618035741/835396069940002846/Ds_GIF-downsized_large.gif")
                 .setFooter("Server: "+message.guild.name, "https://cdn.discordapp.com/attachments/790967613270392862/821764920109826100/Ds_GIF-downsized_large.gif")
 
                 message.channel.send(embed);
 
         message.guild.member(user).ban({reason:`${grund}`}).catch(err=>{
             if(err){
                 message.channel.send("Der Nutzer konnte nicht gebannt werden, weil der Benutzer Adminstratorrechte hat oder dieser Server dem Benutzer gehört!😎"+err);
             }
        })
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Du hast keine rechte Dafür");
    }
    
    //ascii message
    
    if(message.content.startsWith("g!ascii-message")){
        let content = message.content.split(" ").slice(1).join("");

        if(!content) return message.reply("Du hast den Text vergessen ein zu geben.").then(msg=>msg.delete({timeout: 10000}));

        ascii.font(content, "Doom", function(err, result){
            if(err){
                return message.channel.send("Error: "+err);
            }
            message.channel.send(result,{
                code: "md"
            })
        })
    }

    //direct message to user

    if(message.content.startsWith("g!send-direct")){

        let directmessage = message.content.split(" ")

        let server = {
            logo: message.guild.iconURL(),
        }
        
        let embed = new Discord.MessageEmbed()
 
                 .setTitle("Direct nachricht von: "+message.guild.name)
                 .setDescription(`${directmessage}`)
                 .setColor("#122963")
                 .setFooter("Server: "+message.guild.name, server.logo)
        
        
        bot.users.cache.get("760168276713144321").send(embed);

        if(!directmessage) return message.reply("Du kannst keine Leere nachricht versenden!😎😅").then(msg=>msg.delete({timeout: 10000}));
    }

    //react message embed

    if(message.content.startsWith("g!react")){}
    
    //direct message on member

    if(message.content.startsWith("g!direct-message")){}


    //regeln vorlage
    if(message.content === "g!rules-v"){
        
        let server = {
            logo: message.guild.iconURL(),
        }

    let embed = new Discord.MessageEmbed()
        .setTitle("__𝓡𝓮𝓰𝓮𝓵𝔀𝓮𝓻𝓴__")
        .setColor("RED")
        .addField("__§1.1 Namensgebung__:", "```Nicknames dürfen keine beleidigenden oder anderen verbotenen oder geschützen Namen oder Namensteile enthalten.```")
        .addField("__§1.2 Avatar__", "```Avatare dürfen keine pornographischen, rassistischen oder beleidigenden Inhalte beinhalten.```")
        .addField("__§2.1 Umgangston__", "```Der Umgang mit anderen Discord Benutzern sollte stets freundlich sein. Verbale Angriffe gegen andere User sind strengstens untersagt.```")
        .addField("__§2.2 Gespräche aufnehmen__", "```Das Mitschneiden von Gesprächen ist auf dem gesamten Server nur nach Absprache mit den anwesenden Benutzern des entsprechenden Channels erlaubt. Willigt ein User nicht der Aufnahme ein, ist die Aufnahme des Gesprächs verboten.```")
        .addField("__§2.3 Abwesenheit__", "```Bei längerer Abwesenheit wird der Benutzer gebeten in den entsprechnden AFK-Channel zu gehen.```")
        .addField("__§3.1 Kicken/Bannen__", "```Ein Kick oder Bann ist zu keinem Zeitpunkt unbegründet, sondern soll zum Nachdenken der eigenen Verhaltensweise anregen. Unangebrachte Kicks/Banns müssen den zuständigen Admins gemeldet werden.```")
        .addField("__§3.2 Discord Rechte__", "```Discord Rechte werden nicht wahllos vergeben, sondern dienen immer einem bestimmten Grund. Bei Bedarf von Rechten kann sich an den zuständigen Admin gewandt werden.```")
        .addField("__§3.3 Weisungsrecht__", "```Server Admins, Moderatoren oder anderweitig befugte Admins haben volles Weisungsrecht. Das Verweigern einer bestimmten Anweisung kann zu einem Kick oder Bann führen.```")
        .addField("__§4.1 Werbung__", "```Jegliche Art von Werbung ist auf diesem Server untersagt. Ggf. kann sich an einen zuständigen Admin gewandt werden, um über eine Möglichkeit zur Werbung zu verhandeln.```")
        .addField("__§4.2 Datenschutz__", "```Private Daten wie Telefonnummern, Adressen, Passwörter und ähnlichem dürfen nicht öffentlich ausgetauscht werden.```")
        .addField("__§5.1 Eigene Musik/Töne__", "```Das Einspielen von eigener Musik, oder das Übetragen von anderen nicht erwünschten Tönen ist untersagt.```")
        .addField("__§5.2 Bots (insb. Musik-Bots)__", "```Es dürfen keine Bots mit dem Discord Server verbunden werden. Bots dürfen nur in ausgewiesenen Channels verbunden werden und auch nur dann, wenn kein weiterer Bot in dem Channel aktiv ist.```")
        .addField("__§6.1 Meldepflicht__", "```Es sind alle Benutzer angehalten, die Discord-Server Regeln zu beachten. Sollte ein Regelverstoß von einem Benutzer erkannt werden, ist dieser umgehend einem Admin zu melden.```")
        .addField("__§ 6.2 Hackerangriffe__", "```Jeder Angriff gegen diesen Server ist strafbar. Dies betrifft vor allem das Flooding mit diversen Programmen und DOS-Attacken.```")
        .setThumbnail("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX8329869.jpg")
        .setFooter("Server: "+message.guild.name, server.logo)

        message.channel.send(embed);
    }
    
    //inviterules

    if(message.content === "g!rules-v-i"){
        
        let server = {
            logo: message.guild.iconURL(),
        }

        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .addField("__§ 6.3 Einladungslink__:", "```Man darf keine Einladungslink erstellen und weitergeben, ausser dieser link ist der offzielle Link vom dieser Discord-Server!```")
        .setThumbnail("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX8329869.jpg")
        .setFooter("Server: "+message.guild.name, server.logo)

        message.channel.send(embed);
    }
})


bot.login(token)