import cron from "node-cron";

// learn more about cron time here:
// https://www.npmjs.com/package/node-cron?activeTab=readme
const jobs = [
    {
        time: "0 22 * * *", // every day at 22:00 (10 PM)
        message: () => "🌠Helo Đêm Vui Vẻ 10H Mẹ Rồi🌠\n🌠Chúc Các Bbi Ngủ Ngon Bot Ngủ Đây🍭🌠🌠",
    },
    {
        time: "21 22 * * *", // every day at 22:21 (10:21 PM)
        message: () => "🌠Helo Đêm Vui Vẻ 10H21 Mẹ Rồi🌠\n🌠Chúc Các Bbi Ngủ Ngon Bot Ngủ Đây🍭🌠🌠",
        targetIDs: ["61554916150369"], // list of ids that bot will send to, remove this to send to all group
    },
];

export default function autoSend() {
    const timezone = global.config?.timezone || "Asia/Ho_Chi_Minh";
    if (!timezone) return;

    for (const job of jobs) {
        cron.schedule(
            job.time,
            () => {
                let i = 0;
                for (const tid of job.targetIDs ||
                    Array.from(global.data.threads.keys()) ||
                    []) {
                    setTimeout(async () => {
                        try {
                            const msg = await job.message();
                            await global.api.sendMessage(
                                typeof msg == "string"
                                    ? {
                                          body: job.message(),
                                      }
                                    : msg,
                                tid
                            );
                        } catch (e) {
														console.error(e);
												}
                    }, i++ * 300);
                }
            },
            {
                timezone: timezone,
            }
        );
    }
}
