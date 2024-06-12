const users = [
  {
    id: 1,
    time: '2024-06-12 09:00:00',
    exceptionType: '延迟异常',
    exceptions: '内存回收延迟',
    exceptionDescription: '节点发生直接内存回收，xxx',
    exceptionLeveling: '严重异常',
  },
  {
    id: 2,
    time: '2024-06-12 09:00:01',
    exceptionType: '延迟异常',
    exceptions: '内存回收延迟',
    exceptionDescription: '节点发生直接内存回收，xxx',
    exceptionLeveling: '严重异常',
  },
  {
    id: 3,
    time: '2024-06-12 09:00:02',
    exceptionType: '延迟异常',
    exceptions: '内存回收延迟',
    exceptionDescription: '节点发生直接内存回收，xxx',
    exceptionLeveling: '严重异常',
  },
  {
    id: 4,
    time: '2024-06-12 09:00:03',
    exceptionType: '延迟异常',
    exceptions: '内存回收延迟',
    exceptionDescription: '节点发生直接内存回收，xxx',
    exceptionLeveling: '严重异常',
  },
  {
    id: 5,
    time: '2024-06-12 09:00:04',
    exceptionType: '延迟异常',
    exceptions: '内存回收延迟',
    exceptionDescription: '节点发生直接内存回收，xxx',
    exceptionLeveling: '严重异常',
  },
];

const charts = [
  {
    date: '10:00',
    type: '饱和度健康分',
    value: 46,
  },
  {
    date: '10:00',
    type: '负数健康分',
    value: 22,
  },
  {
    date: '10:00',
    type: '延迟健康分',
    value: 18,
  },
  {
    date: '10:00',
    type: '错误健康分',
    value: 22,
  },
  {
    date: '10:00',
    type: '健康分',
    value: 18,
  },
  {
    date: '10:30',
    type: '饱和度健康分',
    value: 46,
  },
  {
    date: '10:30',
    type: '负数健康分',
    value: 22,
  },
  {
    date: '10:30',
    type: '延迟健康分',
    value: 11,
  },
  {
    date: '10:30',
    type: '错误健康分',
    value: 20,
  },
  {
    date: '10:30',
    type: '健康分',
    value: 11,
  },
  {
    date: '11:00',
    type: '饱和度健康分',
    value: 23,
  },
  {
    date: '11:00',
    type: '负数健康分',
    value: 45,
  },
  {
    date: '11:00',
    type: '延迟健康分',
    value: 75,
  },
  {
    date: '11:00',
    type: '错误健康分',
    value: 34,
  },
  {
    date: '11:00',
    type: '健康分',
    value: 12,
  },
  {
    date: '11:30',
    type: '饱和度健康分',
    value: 10,
  },
  {
    date: '11:30',
    type: '负数健康分',
    value: 20,
  },
  {
    date: '11:30',
    type: '延迟健康分',
    value: 30,
  },
  {
    date: '11:30',
    type: '错误健康分',
    value: 34,
  },
  {
    date: '11:30',
    type: '健康分',
    value: 14,
  },
  {
    date: '12:00',
    type: '饱和度健康分',
    value: 46,
  },
  {
    date: '12:00',
    type: '负数健康分',
    value: 22,
  },
  {
    date: '12:00',
    type: '延迟健康分',
    value: 18,
  },
  {
    date: '12:00',
    type: '错误健康分',
    value: 22,
  },
  {
    date: '12:00',
    type: '健康分',
    value: 18,
  },
  {
    date: '12:30',
    type: '饱和度健康分',
    value: 46,
  },
  {
    date: '12:30',
    type: '负数健康分',
    value: 22,
  },
  {
    date: '12:30',
    type: '延迟健康分',
    value: 11,
  },
  {
    date: '12:30',
    type: '错误健康分',
    value: 20,
  },
  {
    date: '12:30',
    type: '健康分',
    value: 11,
  },
  {
    date: '13:00',
    type: '饱和度健康分',
    value: 23,
  },
  {
    date: '13:00',
    type: '负数健康分',
    value: 45,
  },
  {
    date: '13:00',
    type: '延迟健康分',
    value: 75,
  },
  {
    date: '13:00',
    type: '错误健康分',
    value: 34,
  },
  {
    date: '13:00',
    type: '健康分',
    value: 12,
  },
  {
    date: '13:30',
    type: '饱和度健康分',
    value: 10,
  },
  {
    date: '13:30',
    type: '负数健康分',
    value: 20,
  },
  {
    date: '13:30',
    type: '延迟健康分',
    value: 30,
  },
  {
    date: '13:30',
    type: '错误健康分',
    value: 34,
  },
  {
    date: '13:30',
    type: '健康分',
    value: 14,
  },
  {
    date: '14:00',
    type: '饱和度健康分',
    value: 46,
  },
  {
    date: '14:00',
    type: '负数健康分',
    value: 22,
  },
  {
    date: '14:00',
    type: '延迟健康分',
    value: 18,
  },
  {
    date: '14:00',
    type: '错误健康分',
    value: 22,
  },
  {
    date: '14:00',
    type: '健康分',
    value: 18,
  },
  {
    date: '14:30',
    type: '饱和度健康分',
    value: 46,
  },
  {
    date: '14:30',
    type: '负数健康分',
    value: 22,
  },
  {
    date: '14:30',
    type: '延迟健康分',
    value: 11,
  },
  {
    date: '14:30',
    type: '错误健康分',
    value: 20,
  },
  {
    date: '14:30',
    type: '健康分',
    value: 11,
  },
  {
    date: '15:00',
    type: '饱和度健康分',
    value: 23,
  },
  {
    date: '15:00',
    type: '负数健康分',
    value: 45,
  },
  {
    date: '15:00',
    type: '延迟健康分',
    value: 75,
  },
  {
    date: '15:00',
    type: '错误健康分',
    value: 34,
  },
  {
    date: '15:00',
    type: '健康分',
    value: 12,
  },
  {
    date: '15:30',
    type: '饱和度健康分',
    value: 10,
  },
  {
    date: '15:30',
    type: '负数健康分',
    value: 20,
  },
  {
    date: '15:30',
    type: '延迟健康分',
    value: 30,
  },
  {
    date: '15:30',
    type: '错误健康分',
    value: 34,
  },
  {
    date: '15:30',
    type: '健康分',
    value: 14,
  },
  {
    date: '16:00',
    type: '饱和度健康分',
    value: 46,
  },
  {
    date: '16:00',
    type: '负数健康分',
    value: 22,
  },
  {
    date: '16:00',
    type: '延迟健康分',
    value: 18,
  },
  {
    date: '16:00',
    type: '错误健康分',
    value: 22,
  },
  {
    date: '16:00',
    type: '健康分',
    value: 18,
  },
  {
    date: '16:30',
    type: '饱和度健康分',
    value: 46,
  },
  {
    date: '16:30',
    type: '负数健康分',
    value: 22,
  },
  {
    date: '16:30',
    type: '延迟健康分',
    value: 11,
  },
  {
    date: '16:30',
    type: '错误健康分',
    value: 20,
  },
  {
    date: '16:30',
    type: '健康分',
    value: 11,
  },
  {
    date: '17:00',
    type: '饱和度健康分',
    value: 23,
  },
  {
    date: '17:00',
    type: '负数健康分',
    value: 45,
  },
  {
    date: '17:00',
    type: '延迟健康分',
    value: 75,
  },
  {
    date: '17:00',
    type: '错误健康分',
    value: 34,
  },
  {
    date: '17:00',
    type: '健康分',
    value: 12,
  },
  {
    date: '17:30',
    type: '饱和度健康分',
    value: 10,
  },
  {
    date: '17:30',
    type: '负数健康分',
    value: 20,
  },
  {
    date: '17:30',
    type: '延迟健康分',
    value: 30,
  },
  {
    date: '17:30',
    type: '错误健康分',
    value: 34,
  },
  {
    date: '17:30',
    type: '健康分',
    value: 14,
  },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'GET /api/v1/queryLineChatsList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: charts },
      errorCode: 0,
    });
  },
  'GET /api/v1/queryDashboardData': (req: any, res: any) => {
    res.json({
      success: true,
      data: {
        healthPoints: 96, // 健康分
        saturatedHealthPoints: 100, // 饱和健康分
        negativeHealthPoints: 100, // 负数健康分
        delayHealthPoints: 88, // 延迟好健康分
        wrongHealthPoints: 100, // 错误健康分
        cpu: 2,
        list: charts,
      },
      errorCode: 0,
    });
  },
};
