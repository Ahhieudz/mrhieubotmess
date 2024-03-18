const config = {
    name: "restart",
    aliases: ["rs", "rest", "reboot"],
    permissions: [2],
    isAbsolute: true
}

async function onCall({ message, getLang }) {
    await message.reply("⚡Chào Cậu Chủ Kduy Bot Đang Rs✅\n🌠Sắp xong rồi vui lòng đợi trong giây lát🌠");
    global.restart();
}

export default {
    config,
    onCall
}
