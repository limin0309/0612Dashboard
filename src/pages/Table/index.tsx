import services from '@/services/demo';
import { Line } from '@ant-design/plots';
import {
  ActionType,
  PageContainer,
  ProCard,
  ProDescriptions,
  ProDescriptionsItemProps,
  ProList,
  ProTable,
} from '@ant-design/pro-components';

import { Col, Drawer, Row, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import UpdateForm, { FormValueType } from './components/UpdateForm';

const defaultData = [
  {
    id: '1',
    name: '语雀的天空',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '2',
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '3',
    name: '蚂蚁金服体验科技',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '4',
    name: 'TechUI',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
];

type DataItem = (typeof defaultData)[number];

const { queryUserList, queryChartsList, queryDashboardData, modifyUser } =
  services.UserController;

/**
 * 更新节点
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('正在配置');
  try {
    await modifyUser(
      {
        userId: fields.id || '',
      },
      {
        time: fields.time || '',
        exceptionType: fields.exceptionType || '',
        email: fields.email || '',
      },
    );
    hide();

    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};

const TableList: React.FC<unknown> = () => {
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef<ActionType>();
  const [row, setRow] = useState<API.UserInfo>();
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
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            诊断
          </a>
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
            <h3>健康分</h3>
            <p>98</p>
          </ProCard>
        </Col>
        <Col span={8}>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={11}>
              <ProCard style={{ height: '75px' }}>
                <h3>饱和度健康分</h3>
                <p>100</p>
              </ProCard>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <ProCard style={{ height: '75px' }}>
                <h3>延迟健康分</h3>
                <p>88</p>
              </ProCard>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <ProCard style={{ height: '75px' }}>
                <h3>负数健康分</h3>
                <p>100</p>
              </ProCard>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <ProCard style={{ height: '75px' }}>
                <h3>错误健康分</h3>
                <p>100</p>
              </ProCard>
            </Col>
          </Row>
        </Col>
        <Col span={3}>
          <ProCard style={asd}>
            <h3>错误健康分</h3>
            <p>100</p>
            {/* <Area {...config1} /> */}
          </ProCard>
        </Col>
        <Col span={3}>
          <ProCard style={asd}> 5</ProCard>
        </Col>
        <Col span={3}>
          <ProCard style={asd}>6</ProCard>
        </Col>
      </Row>
      <Row style={{ marginBottom: '20px' }}>
        {/* <Area {...config1} /> */}
        <ProCard className="bgbox" layout="center">
          <Line {...config} />
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
            headerTitle="Top 10 异常POD"
            rowClassName="sfg"
            dataSource={dataSource}
            showActions="hover"
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
              // description: {
              //   dataIndex: 'desc',
              // },

              actions: {
                render: (text, row, index, action) => [
                  <a
                    onClick={() => {
                      action?.startEditable(row.id);
                    }}
                    key="link"
                  >
                    编辑
                  </a>,
                ],
              },
            }}
          />
        </Col>
      </Row>

      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}

      <Drawer
        width={600}
        open={!!row}
        onClose={() => {
          setRow(undefined);
        }}
        closable={false}
      >
        {row?.time && (
          <ProDescriptions<API.UserInfo>
            column={2}
            title={row?.time}
            request={async () => ({
              data: row || {},
            })}
            params={{
              id: row?.time,
            }}
            columns={columns}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
