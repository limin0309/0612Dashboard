import services from '@/services/demo';
import {
  ActionType,
  PageContainer,
  ProDescriptions,
  ProDescriptionsItemProps,
  ProList,
  ProTable,
} from '@ant-design/pro-components';

import { Col, Drawer, Row, message } from 'antd';
import React, { useRef, useState } from 'react';
import CreateForm from './components/CreateForm';
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

const { addUser, queryUserList, modifyUser } = services.UserController;

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.UserInfo) => {
  const hide = message.loading('正在添加');
  try {
    await addUser({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

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
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef<ActionType>();
  const [row, setRow] = useState<API.UserInfo>();
  const [dataSource, setDataSource] = useState<DataItem[]>(defaultData);

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

  return (
    <PageContainer
      header={{
        title: 'CRUD 示例',
      }}
    >
      <Row>
        <Col span={17}>
          <ProTable<API.UserInfo>
            headerTitle="异常项列表"
            actionRef={actionRef}
            rowKey="id"
            search={{
              labelWidth: 120,
            }}
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

      <CreateForm
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
      >
        <ProTable<API.UserInfo, API.UserInfo>
          onSubmit={async (value) => {
            const success = await handleAdd(value);
            if (success) {
              handleModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="id"
          type="form"
          columns={columns}
        />
      </CreateForm>
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
