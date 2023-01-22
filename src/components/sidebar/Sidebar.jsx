import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h34 className="sidebarTitle">Dashboard</h34>
          <ul className="sidebarList">
            <Link to="/" className="link">  
                <li className="sidebarListItem active">
              <LineStyleIcon className="sidebaricon"></LineStyleIcon>
              Home
            </li>
            </Link>

            <li className="sidebarListItem">
              <TimelineIcon className="sidebaricon"></TimelineIcon>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebaricon"></TrendingUpIcon>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h34 className="sidebarTitle">Quick Menu</h34>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Person2OutlinedIcon className="sidebaricon"></Person2OutlinedIcon>
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Inventory2OutlinedIcon className="sidebaricon"></Inventory2OutlinedIcon>
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <PaidOutlinedIcon className="sidebaricon"></PaidOutlinedIcon>
              Transactions
            </li>
            <li className="sidebarListItem">
              <AssessmentOutlinedIcon className="sidebaricon"></AssessmentOutlinedIcon>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h34 className="sidebarTitle">Notifications</h34>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineOutlinedIcon className="sidebaricon"></MailOutlineOutlinedIcon>
              Mail
            </li>
            <li className="sidebarListItem">
              <ChatOutlinedIcon className="sidebaricon"></ChatOutlinedIcon>
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineOutlinedIcon className="sidebaricon"></ChatBubbleOutlineOutlinedIcon>
              Message
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h34 className="sidebarTitle">Staff</h34>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyleIcon className="sidebaricon"></LineStyleIcon>
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebaricon"></TimelineIcon>
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebaricon"></ReportIcon>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
