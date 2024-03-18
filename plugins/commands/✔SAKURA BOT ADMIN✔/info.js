import { createReadStream } from "node:fs";
import { join } from "node:path"

const config = {
  name: "info",
  description: "",
  usage: "",
  cooldown: 3,
  permissions: [2],
};

let i = "🎭Sakura Beta War Erro🎭\n🎭adm: Trần Khánh Duy\n🎭Thêm Lệnh By Kduy\n🎭thắc mắc vui lòng liên hệ adm để biết thêm\n🎭Lưu ý Bot Đang Ở Dạng Beta sẽ có lỗi!\n💞Kduy Yêu Tất Cả Các Em💞";

async function onCall({ message }) {
  message.send({
    body: i,
    attachment: createReadStream(join(global.assetsPath, `aetlh.png`))

  })
}

export {
  config,
  onCall
}