<template>
    <a-table :columns="columns" :data-source="data" bordered>
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="nameIcon"><a-icon type="smile-o" /> Name</span>
      <span slot="ageIocn"><a-icon type="question" /> Age</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </span>
    </a-table>
  </template>
  <script>
  const columns = [
    {
      dataIndex: 'name',
      key: 'name',
      slots: { title: 'nameIcon' },
      scopedSlots: { customRender: 'name' },
    },
    {
    //   title: 'Age',
      dataIndex: 'age',
      key: 'age',
      slots: { title: 'ageIocn' },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      scopedSlots: { customRender: 'tags' },
    },
    {
      title: 'Action',
      key: 'action',
      scopedSlots: { customRender: 'action' },
    },
    {
      title: 'Detail',
      key: 'detail',
      dataIndex: 'detail',
      ellipsis: true,
    }
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      detail: '测试数据类容，无实际意义，数据长度超出显示...'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
      detail: '测试数据类容，无实际意义，数据长度超出显示...'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      detail: '测试数据类容，无实际意义，数据长度超出显示...'
    },
  ];
  
  export default {
    data() {
      return {
        data,
        columns,
      };
    },
  };
  </script>
  