import { Avatar, Space, Table, Typography, Popconfirm, message } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import axios from 'axios';
import { getAnnonce } from "../../API";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAnnonce()
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const deleteAnnonce = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/annonce/${id}`)
      .then(() => {
        message.success("Annonce deleted successfully");
        // After deletion, fetch the updated data
        getAnnonce().then((res) => {
          setData(res);
        });
      })
      .catch((error) => {
        console.error("Error deleting annonce:", error);
        message.error("Failed to delete annonce");
      });
  };

  const columns = [
    {
      title: "Photo",
      dataIndex: "images",
      render: (images) => <Avatar src={images} />,
    },
    {
      title: "Titre",
      dataIndex: "titre",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Surface",
      dataIndex: "surface",
    },
    {
      title: "Prix",
      dataIndex: "prix",
    },
    {
      title: "Statut",
      dataIndex: "statut",
    },
    {
      title: "Adresse",
      dataIndex: "adresse",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this annonce?"
          onConfirm={() => deleteAnnonce(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined style={{ color: 'red' }} />
        </Popconfirm>
      ),
    },
  ];

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Annonces</Typography.Title>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </Space>
  );
}

export default Inventory;
