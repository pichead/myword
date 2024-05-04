const timestampNow = () => {
  return Math.floor(Date.now() / 1000);
};

const hourDiff = (startHour: string, endHour: string) => {
  const startTimeObj = new Date(`2000-01-01T${startHour}`);
  const endTimeObj = new Date(`2000-01-01T${endHour}`);

  const timeDiff: number = endTimeObj.getTime() - startTimeObj.getTime();

  const hoursDiff: number = timeDiff / (1000 * 60 * 60);

  return hoursDiff;
};


const unixToThaiDateTime = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp); // มักจะเป็นมิลลิวินาที ทำการคูณด้วย 1000 เพื่อให้เป็นวินาที
  const thaiMonths = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hours = ('0' + date.getHours()).slice(-2); // เพิ่ม leading zero ถ้าจำนวนเป็นเลขเดียว
  const minutes = ('0' + date.getMinutes()).slice(-2);

  const thaiMonth = thaiMonths[monthIndex];

  return `${day} ${thaiMonth} ${year + 543} ${hours}:${minutes}`;
}

export { timestampNow, hourDiff ,unixToThaiDateTime};
