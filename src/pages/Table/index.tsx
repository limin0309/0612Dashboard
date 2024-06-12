import services from '@/services/demo';
import { Line } from '@ant-design/plots';
import {
  ActionType,
  PageContainer,
  ProCard,
  ProDescriptionsItemProps,
  ProList,
  ProTable,
} from '@ant-design/pro-components';
import dayjs from 'dayjs';

import img1 from '@assets/img/img1.png';
import { Col, DatePicker, Divider, Radio, Row, Tabs } from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

const defaultData = [
  {
    id: '1',
    name: 'asdfghjklkjhgfdsfgh',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    id: '2',
    name: 'dgfhgjhklm,mnbvcnvbmn,m.,nmbvcbvnbm',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    id: '3',
    name: 'fhgjklkhgdgfhgjhkjlkjhjghfghjk',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    id: '4',
    name: 'fhgjhkkjhgfdgfhgjhkjljhgfgdfhgjh',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    id: '5',
    name: 'fhgjkjlk;kkhjghfgdfhgjhkjljhgfhgjh',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    id: '6',
    name: 'ertyuiuo;lklnkbjvhcgdtyuhijklm',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    id: '7',
    name: 'fgjhkjlkjkhjghfgdgfhgjhkjljkhjghfdg',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    id: '8',
    name: 'gfhgjhkjlkjhjghfdgfhgjhkjlkjkhjghg',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    id: '9',
    name: 'gjhkjklkfghjkjhgfghjk',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    id: '10',
    name: 'ertyuyiojkmnbvhcgxfcghvbjknml,mnbt',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
];

type DataItem = (typeof defaultData)[number];

const { queryUserList, queryChartsList, queryDashboardData } =
  services.UserController;

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const [dataSource, setDataSource] = useState<DataItem[]>(defaultData);
  const [chartsData, setChartsData] = useState([]); // 折线图表数据
  // const [chartsData, setChartsData] = useState([]);// 折线图表数据

  const columns: ProDescriptionsItemProps<API.UserInfo>[] = [
    {
      title: '时间',
      dataIndex: 'time',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '名称为必填项',
          },
        ],
      },
    },
    {
      title: '异常类型',
      dataIndex: 'exceptionType',
      valueType: 'text',
    },
    {
      title: '异常项',
      dataIndex: 'exceptions',
      valueType: 'text',
    },
    {
      title: '异常描述',
      dataIndex: 'exceptionDescription',
      valueType: 'text',
    },
    {
      title: '异常等级',
      dataIndex: 'exceptionLeveling',
      valueType: 'text',
    },

    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => (
        <>
          <a>诊断</a>
        </>
      ),
    },
  ];

  const asyncLineFetch = async () => {
    const { data } = await queryChartsList({});

    console.log(data, '165');
    setChartsData(data.list);
  };
  const asyncDataFetch = async () => {
    const { data } = await queryDashboardData({});

    console.log(data, '172');
    // setChartsData(data.list);
  };

  const operations = (
    <div>
      <Radio.Group
        value={'1hour'}
        style={{ marginBottom: 16, marginRight: 16 }}
      >
        <Radio.Button value="1hour">1小时</Radio.Button>
        <Radio.Button value="today">今日</Radio.Button>
        <Radio.Button value="week">本周</Radio.Button>
      </Radio.Group>
      <RangePicker
        defaultValue={[
          dayjs('2015-10-10', dateFormat),
          dayjs('2015-10-10', dateFormat),
        ]}
      />
    </div>
  );

  const items = [
    {
      label: `健康分`,
      key: 1,
    },
    {
      label: `告警数量`,
      key: 2,
    },
  ];

  useEffect(() => {
    asyncLineFetch();
    asyncDataFetch();
  }, []);

  const config = {
    winth: 2000,
    height: 400,
    title: '健康分趋势',
    // autoFit: true,
    data: chartsData,
    xField: 'date',
    yField: 'value',
    colorField: 'type',
    axis: {
      y: {
        labelFormatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    scale: { color: { range: ['#30BF78', '#F4664A', '#FAAD14'] } },
    style: {
      lineWidth: 2,
      // lineDash: (chartsData) => {
      //   if (chartsData[0].type === 'register') return [4, 4];
      // },
      // opacity: (chartsData) => {
      //   if (chartsData[0].type !== 'register') return 0.5;
      // },
    },
  };
  // const config1 = {
  //   winth: 100,
  //   height: 40,
  //   data: [
  //     { year: '1991', value: 3 },
  //     { year: '1992', value: 4 },
  //     { year: '1993', value: 3.5 },
  //     { year: '1994', value: 7 },
  //     { year: '1995', value: 5 },
  //     { year: '1996', value: 9 },
  //   ],
  //   xField: 'year',
  //   yField: 'value',
  //   style: {
  //     // 图例面积颜色及透明度
  //     fill: '#9864e7',
  //     //  fillOpacity: 0.2
  //   },
  // };

  const asd = {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    marginRight: '10px',
  };

  return (
    <PageContainer
      header={{
        title: '节点健康度',
        ghost: true,
        breadcrumb: {
          items: [
            {
              path: '',
              title: '监控中心',
            },
            {
              path: '',
              title: '健康分',
            },
            {
              path: '',
              title: '节点健康度',
            },
          ],
        },
      }}
    >
      <Row
        style={{
          margin: '20px 0',
          height: '150px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Col span={4}>
          <ProCard style={asd}>
            <div className={styles.dashboardCard}>
              <div>
                <span style={{ fontSize: '22px' }}>健康分</span>
              </div>
              <div style={{ color: '#d38461', fontSize: '30px' }}>96</div>
            </div>
          </ProCard>
        </Col>
        <Col span={8}>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={11}>
              <ProCard style={{ height: '75px' }}>
                <div className={styles.dashboardCard}>
                  <div>
                    <span style={{ fontSize: '13px' }}>饱和度健康分</span>
                  </div>
                  <div style={{ color: '#9bbe64', fontSize: '20px' }}>100</div>
                </div>
              </ProCard>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <ProCard style={{ height: '75px' }}>
                <div className={styles.dashboardCard}>
                  <div>
                    <span style={{ fontSize: '13px' }}>延迟健康分</span>
                  </div>
                  <div style={{ color: '#d38461', fontSize: '20px' }}>88</div>
                </div>
              </ProCard>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <ProCard style={{ height: '75px' }}>
                <div className={styles.dashboardCard}>
                  <div>
                    <span style={{ fontSize: '13px' }}>负数健康分</span>
                  </div>
                  <div style={{ color: '#9bbe64', fontSize: '20px' }}>100</div>
                </div>
              </ProCard>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <ProCard style={{ height: '75px' }}>
                <div className={styles.dashboardCard}>
                  <div>
                    <span style={{ fontSize: '13px' }}>错误健康分</span>
                  </div>
                  <div style={{ color: '#9bbe64', fontSize: '20px' }}>100</div>
                </div>
              </ProCard>
            </Col>
          </Row>
        </Col>
        <Col span={3} className={styles.minCard}>
          <ProCard style={{ ...asd, padding: '10px' }}>
            <h3>CPU</h3>
            <div style={{ fontSize: '12px', display: 'flex' }}>
              <div>
                <p className={styles.miniFont}>CPU核数</p>
                <p>
                  <span className={styles.fontStyle}>8</span>
                </p>
              </div>
              <Divider type="vertical" className={styles.divider} />
              <div>
                <p className={styles.miniFont}>CPU利用率</p>
                <p>
                  <span className={styles.fontStyle}>2.3%</span>
                </p>
              </div>
            </div>
            <img src={img1} className={styles.imgS}></img>

            {/* <Area {...config1} /> */}
          </ProCard>
        </Col>
        <Col span={3} className={styles.minCard}>
          <ProCard style={{ ...asd, padding: '10px' }}>
            <h3>内存</h3>
            <div style={{ fontSize: '12px', display: 'flex' }}>
              <div>
                <p className={styles.miniFont}>内存总量</p>
                <p>
                  <span className={styles.fontStyle}>15G</span>
                </p>
              </div>
              <Divider type="vertical" className={styles.divider} />
              <div>
                <p className={styles.miniFont}>剩余可用内存</p>
                <p>
                  <span className={styles.fontStyle}>3G</span>
                </p>
              </div>
            </div>
            <img src={img1} className={styles.imgS}></img>
          </ProCard>
        </Col>
        <Col span={3} className={styles.minCard}>
          <ProCard style={{ ...asd, padding: '10px' }}>
            <h3>磁盘</h3>
            <div style={{ fontSize: '12px', display: 'flex' }}>
              <div>
                <p className={styles.miniFont}>磁盘空间</p>
                <p>
                  <span className={styles.fontStyle}>20T</span>
                </p>
              </div>
              <Divider type="vertical" className={styles.divider} />
              <div>
                <p className={styles.miniFont}>剩余可用空间</p>
                <p>
                  <span className={styles.fontStyle}>14T</span>
                </p>
              </div>
            </div>
            <img src={img1} className={styles.imgS}></img>
          </ProCard>
        </Col>
      </Row>
      <Row style={{ marginBottom: '20px' }}>
        <ProCard>
          <div>
            <Tabs tabBarExtraContent={operations} items={items} />
          </div>
          <div>
            <Line {...config} />
          </div>
        </ProCard>
      </Row>
      <Row>
        <Col span={17}>
          <ProTable<API.UserInfo>
            headerTitle="异常项列表"
            actionRef={actionRef}
            rowKey="id"
            search={false}
            request={async (params, sorter, filter) => {
              const { data, success } = await queryUserList({
                ...params,
                // FIXME: remove @ts-ignore
                // @ts-ignore
                sorter,
                filter,
              });
              return {
                data: data?.list || [],
                success,
              };
            }}
            columns={columns}
          />
        </Col>
        <Col span={6} style={{ marginLeft: 20 }}>
          <ProList<DataItem>
            rowKey="id"
            headerTitle={
              <span className={styles.topHeader}>Top 10 异常POD</span>
            }
            rowClassName="sfg"
            dataSource={dataSource}
            showActions="hover" // 9bb6c6
            editable={{
              onSave: async (key, record, originRow) => {
                console.log(key, record, originRow);
                return true;
              },
            }}
            onDataSourceChange={setDataSource}
            metas={{
              title: {
                dataIndex: 'name',
              },
              avatar: {
                dataIndex: 'image',
                editable: false,
              },
              actions: {
                render: (text, row) => <span>{row.id}</span>,
              },
            }}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default TableList;
