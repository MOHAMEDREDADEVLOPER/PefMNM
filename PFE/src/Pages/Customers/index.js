import { Avatar, Space, Table, Typography, Button, Modal, Input,Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { getClient } from "../../API";
import axios from 'axios';
import { UserSwitchOutlined  ,LockOutlined } from '@ant-design/icons';

function Customers() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [recordId, setRecordId] = useState(null);
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    setLoading(true);
    getClient()
      .then((client) => {
        setData(client);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const changetoadmin = (id) => {
    const datas = {
      role: "Admin"
    };
    axios.put(`http://127.0.0.1:8000/api/admin/ChangerRole/${id}`, datas)
      .then((res) => {
        // Handle response if needed
      })
      .catch((error) => {
        // Handle error if needed
      });
  };

  const editpassword = () => {
    if (!recordId) return; 
    const datas = {
      motpasse: newPassword
    };
    axios.put(`http://127.0.0.1:8000/api/admin/ChangerPassword/${recordId}`, datas)
      .then((res) => {
        setVisible(false); 
      })
      .catch((error) => {
        // Handle error if needed
        console.error("Error changing password:", error);
      });
  };

  const columns = [
    {
      title: "Photo",
      dataIndex: "srcimg",
      render: (link) => <Avatar src={link} />
    },
    {
      title: "Nom",
      dataIndex: "nom"
    },
    {
      title: "Genre",
      dataIndex: "genre"
    },
    {
      title: "Age",
      dataIndex: "age"
    },
    {
      title: "telephone",
      dataIndex: "telephone"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "ville",
      dataIndex: "ville",
      render: (ville) => <span>{ville.nom}</span>
    },
    {
      title: "Role",
      dataIndex: "role"
    },
    {
      title: "Modifier Role",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to change role to admin?"
          onConfirm={() => changetoadmin(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link" icon={<UserSwitchOutlined />} />
        </Popconfirm>
      )
    },    
    {
      title: "Changer motpasse",
      render: (_, record) => (
        <Button
          type="primary"
          icon={<LockOutlined />} 
          onClick={() => {
            setVisible(true);
            setRecordId(record.id);
          }}
        >
          Change 
        </Button>
      )
    }
  ];

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Client</Typography.Title>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
      <Modal
        title="Changer Motpasse"
        visible={visible}
        onOk={editpassword}
        onCancel={() => setVisible(false)}
      >
        <Input.Password
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Modal>
    </Space>
  );
}

export default Customers;
