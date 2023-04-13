const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  client.embed(
    {
      title: `📘・Owner information`,
      desc: `____________________________`,
      thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
      fields: [
        {
          name: "👑┆Owner name",
          value: `Patrick`,
          inline: true,
        },
        {
          name: "🏷┆Discord tag",
          value: `GhostOfToyman#4544`,
          inline: true,
        },
        {
          name: "🏢┆Organization",
          value: `Localized Extraterrestrials`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
