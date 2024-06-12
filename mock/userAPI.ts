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
};
