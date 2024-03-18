const config = {
  name: "Sakura2",
  aliases: ["upt"],
  permissions: [2],
  credits: ""
};

async function onCall({ message }) {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);

  try {
    const replyMessage = await message.reply(`==🔰SAKURA BETA BOT🔰==\n🍭Chào Sakura bot chúc bạn một ngày tốt lành🐳\n☡Sakura bot by anh bảo dz mọi thắc mắc vui lòng liên hệ adm✅\n🌀Thuê Bot Mượn Bot Liên Hệ fb hoặc zl\n🌠Zalo adm:0327003411\n🔰Bot Đã Hoạt Động Được
${hours} giờ: ${minutes} phút: ${seconds} giây  
`);
    console.log(replyMessage);
  } catch (error) {
    console.error(error);
  }
}

export default {
  config,
  onCall,
};