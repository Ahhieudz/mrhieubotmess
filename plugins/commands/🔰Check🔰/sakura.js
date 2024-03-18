const config = {
  name: "sakura",
  aliases: ["upt2"],
  credits: "XaviaTeam",
};

async function onCall({ message }) {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);

  try {
    const replyMessage = await message.reply(`
  𝐵𝑜𝑡 ℎ𝑎𝑠 𝑏𝑒𝑒𝑛 𝑤𝑜𝑟𝑘𝑖𝑛𝑔 𝑓𝑜𝑟
${hours} ℎ𝑜𝑢𝑟 ${minutes} 𝑚𝑖𝑛𝑢𝑡𝑒 ${seconds} 𝑠𝑒𝑐𝑜𝑛𝑑.


❯ 𝑇𝑜𝑡𝑎𝑙 𝑢𝑠𝑒𝑟𝑠: 99%
❯𝑇𝑜𝑡𝑎𝑙 𝑇ℎ𝑟𝑒𝑎𝑑𝑠: 100%
❯𝐶𝑝𝑢 𝑢𝑠𝑎𝑔𝑒: 100%
❯𝑅𝐴𝑀 𝑢𝑠𝑎𝑔𝑒: 100%
❯𝑃𝑖𝑛𝑔: 98%

=== 𝑇ℎ𝑖𝑠 𝑏𝑜𝑡 𝑤𝑎𝑟  𝑏𝑦 𝐧𝐠𝐭𝐡𝐚𝐧𝐡 𝐜𝐮𝐭𝐢  === SAKURA BETA ERRO : 🎭Admin Trần Khánh Duy🎭`);
    console.log(replyMessage);
  } catch (error) {
    console.error(error);
  }
}

export default {
  config,
  onCall,
};
