import React from "react";
import "./Slider.css";
import TwitterIcon from "@ant-design/icons/TwitterOutlined";
import SidebarOption from "./SidebarOptions";
import HomeIcon from "@ant-design/icons/HomeOutlined";
import SearchIcon from "@ant-design/icons/SearchOutlined";
import NotificationsNoneIcon from "@ant-design/icons/NotificationOutlined";
import MailOutlineIcon from "@ant-design/icons/MailOutlined";
import ListAltIcon from "@ant-design/icons/OrderedListOutlined";
import MoreHorizIcon from "@ant-design/icons/MoreOutlined";
import { Button, Layout, Menu } from "antd";

function Sidebar() {
    const {  Sider } = Layout;

    return (
        <div className="sidebar">
            
            <Sider
                style={{
                    overflow: 'hidden',
                    height: '100vh',
                    position: 'fixed',
                  
                }}
                breakpoint="lg"
                collapsedWidth="60"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                <TwitterIcon className="sidebar__twitterIcon" />
                 
                 
                    <SidebarOption active Icon={HomeIcon} text="Home" />
                    <SidebarOption Icon={SearchIcon} text="Explore" />
                    <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
                    <SidebarOption Icon={MailOutlineIcon} text="Messages" />

                    <SidebarOption Icon={ListAltIcon} text="Lists" />

                    <SidebarOption Icon={MoreHorizIcon} text="More" />
                    {/* Button -> Tweet */}
                    <Button variant="outlined" className="sidebar__tweet" fullWidth>
                        Tweet
                     </Button>
                </Menu>
            </Sider>


        </div>
    )
}

export default Sidebar




// <Layout>
// {/* twitter slider options  */}
//   <Sider
//       className="slider"
//       width={400}
//       breakpoint="lg"
//       collapsedWidth="3"
//       onBreakpoint={broken => {
//           console.log(broken);
//       }}
//       onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//       }}
//   >

//       <Menu theme="light" mode="inline"
//           className="menu-slider"
//           defaultSelectedKeys={['4']}>

//           {/* twiiter icon */}
//           <div className="twitter-icon-header">
//               <TwitterOutlined className="twitter-icon" />
//           </div>
//           <Menu.Item key="1" icon={<HomeOutlined />}>
//               Home
//         </Menu.Item>
//           <Menu.Item key="2" icon={<MessageOutlined />}>
//               Messages
//            </Menu.Item>
//           <Menu.Item key="3" icon={<UnorderedListOutlined />}>
//               Lists
//          </Menu.Item>
//           <Menu.Item key="4" icon={<UserOutlined />}>
//               Profile
//            </Menu.Item>
//           <Menu.Item>
//               <Button type="primary">
//                   Tweet
//                </Button>
//           </Menu.Item>
//       </Menu>
//   </Sider>
// </Layout>