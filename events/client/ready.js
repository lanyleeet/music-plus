const { white, green } = require('chalk');
const Premium = require('../../settings/models/Premium.js')

module.exports = async (client) => {
    await client.manager.init(client.user.id);

    console.log(white('[') + green('INFO') + white('] ') + green(`${client.user.tag} (${client.user.id})`) + white(` is Ready!`));

    const users = await Premium.find();
    for (let user of users) {
      client.premiums.set(user.Id, user);
    }

    const activities = [
        `${client.prefix}help`,
        `${client.prefix}play <пісня>`,
        `Слава Україні!`,
        `Зроблено xLanyleeet'ом.`
    ]

    setInterval(() => {
        client.user.setActivity(`${activities[Math.floor(Math.random() * activities.length)]}`, { type: 1 });
    }, 10000);
};
