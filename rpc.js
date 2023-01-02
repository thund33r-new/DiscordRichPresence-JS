const { Client, SpotifyRPC, CustomStatus, RichPresence } = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js');
const client = new Client({ checkUpdate: false });

client.login(токен)
client.on('ready', () => {const r = new RichPresence(client)
    .setAssetsLargeImage("Ссылка на картинку") // Картинка
    .setAssetsLargeText('') // Текст при наводке
    .setType("STREAMING")
    .setURL("ссылка стрима")  
    .setApplicationId('айди приложения') // Можете даже не заполнять
    .addButton("название кнопки", "ссылка") // Кнопка
    .addButton("название кнопки2", "ссылка2") // Кнопка 2
    .setName("TWITCH") // Строка где "Стримит на <name>"
    .setDetails('') // Верхний текст.

client.user.setPresence({ activities: [r.toJSON()] })})