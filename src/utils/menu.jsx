import {
  UserOutlined,
  CloudOutlined,
  SettingOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

// Sidebar menus

export const categories = [
  {
    key: 1,
    icon: <CloudOutlined />,
    label: "HOME",
    path: "/home",
  },
  {
    key: 2,
    icon: <UserOutlined />,
    label: "USER",
    path: "/user",
  },
  {
    key: 3,
    icon: <PaperClipOutlined />,
    label: "REPORT",
    path: "/report",
  },
  {
    key: 4,
    icon: <SettingOutlined />,
    label: "SETTINGS",
    path: "/settings",
  },
];
