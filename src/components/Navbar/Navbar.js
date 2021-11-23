import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Row, Col, Layout, Menu } from "antd";
import "./Navbar.css";

const menu = require("../../config/menu.json");

const { SubMenu } = Menu;
const { Header } = Layout;

/* Menu Itmes Without Dropdown */
const single_menu_items = menu.items
  .filter((x) => x.list.length === 0)
  .map((y) => <Menu.Item key={y.url}>{y.display}</Menu.Item>);

/* Menu Items With Dropdown */
const mult_menu_items = menu.items
  .filter((x) => x.list.length > 0)
  .map((y) => (
    <SubMenu key={y.url} title={y.display}>
      {y.list.map((z) => (
        <Menu.Item key={z.url}>{z.display}</Menu.Item>
      ))}
    </SubMenu>
  ));

const NavBar = () => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    setActive(e.key);
    navigate(e.key);
  };

  return (
    <Row justify="center" className="text-center mb-5">
      <Col span={24}>
        <Header>
          <Menu
            mode="horizontal"
            selectedKeys={[active]}
            onClick={handleClick}
            theme="dark"
            overflowedIndicator={<MenuOutlined />}
          >
            {single_menu_items}
            {mult_menu_items}
          </Menu>
        </Header>
      </Col>
    </Row>
  );
};

export default NavBar;
