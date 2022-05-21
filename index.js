const CLIENT_ID = '977651970217214032';
const GUILD_ID = '299521894124879872';
const axios = require('axios');
require('dotenv').config();
const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {

    if (msg.author.username == 'ZioPeraBot') return;

    if (msg.content.toLocaleLowerCase().replace(' ', '') == 'ziopera') {
        msg.reply('Zio pesca');
    }
    if (msg.content.toLocaleLowerCase().replace(' ', '') == 'ziopesca') {
        msg.reply('Zio mela');
    }
    if (msg.content.toLocaleLowerCase().replace(' ', '') == 'ziomela') {
        msg.reply('Zio pera');
    }
    if (msg.content.toLocaleLowerCase() == 'insulta tinti' || msg.content.toLocaleLowerCase() == 'tinti di merda') {
        msg.reply('tinti di merda');
    }
    if (msg.content.toLocaleLowerCase() == 'porco') {
        msg.reply('dio');
    }
    if (msg.content.toLocaleLowerCase() == 'porca') {
        msg.reply('madonna');
    }
    if (msg.content.toLocaleLowerCase() == 'dio') {
        msg.reply('mmerda');
    }
    if (msg.content.toLocaleLowerCase().startsWith('cici')) {
        msg.reply('leu');
    }
    if (msg.content.toLocaleLowerCase() == 'chi fuma?') {
        msg.reply('wiz');
    }

    if (msg.content.toLocaleLowerCase() == 'zp bestemmia') {
        fs.readFile('bestemmie.json', (err, data) => {
            if (err) throw err;
            let bestemmie = JSON.parse(data);
            let pick = bestemmie[Math.floor(Math.random() * bestemmie.length)];
            msg.reply(pick.bestemmia);
        });
    }

    if (msg.content.toLocaleLowerCase() == 'zp bestemmia seria') {
        fs.readFile('bestemmie.json', (err, data) => {
            if (err) throw err;
            let bestemmie = JSON.parse(data);
            let pick1 = bestemmie[Math.floor(Math.random() * bestemmie.length)];
            let pick2 = bestemmie[Math.floor(Math.random() * bestemmie.length)];
            let pick3 = bestemmie[Math.floor(Math.random() * bestemmie.length)];
            let pick4 = bestemmie[Math.floor(Math.random() * bestemmie.length)];
            let pick5 = bestemmie[Math.floor(Math.random() * bestemmie.length)];
            let pick6 = bestemmie[Math.floor(Math.random() * bestemmie.length)];
            let pick7 = bestemmie[Math.floor(Math.random() * bestemmie.length)];
            let pick8 = bestemmie[Math.floor(Math.random() * bestemmie.length)];
            msg.reply(pick1.bestemmia + " " +
                pick2.bestemmia + " " +
                pick3.bestemmia + " " +
                pick4.bestemmia + " " +
                pick5.bestemmia + " " +
                pick6.bestemmia + " " +
                pick7.bestemmia + " " +
                pick8.bestemmia);
        });
    }

})
client.login(process.env.DISCORD_TOKEN);