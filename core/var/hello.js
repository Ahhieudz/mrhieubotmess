
import moment from 'moment-timezone';
import gradient from 'gradient-string';

const prd_Hello = () => {
  const currentTime = moment().tz('Asia/Ho_Chi_Minh');

  const currentHour = currentTime.format('HH');
  const currentMinute = currentTime.format('mm');
  const currentSecond = currentTime.format('ss');
  const dayOfWeek = currentTime.format('dddd');
  const date = currentTime.format('DD/MM/YYYY');

  // Tạo chuỗi thông điệp và làm đẹp nó bằng gradient-string
  const prd_Message= gradient.rainbow(`◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆\n[ Sakura - Time ] -> Hiện tại bây giờ là ${currentHour}:${currentMinute}:${currentSecond} | ${dayOfWeek} || ${date}\n`) +
    gradient.fruit('[ Sakura - Bot ] -> Chào Các Con Đú Ngày Mới Vui Vẻ\n◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆');

  return prd_Message;
};

export default prd_Hello;


