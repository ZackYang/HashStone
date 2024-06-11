import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from 'react-icons/hi';
import { MdSpaceDashboard } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiDiscussFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";

import { Sidebar } from 'flowbite-react';

function SideNav({
  className,
  ...props
}) {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={MdSpaceDashboard}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Profile
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={MdWork}>
            Jobs
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={MdPayments}>
            Payments
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={RiDiscussFill}>
            Community
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={IoMdSettings}>
            Settings
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={RiLogoutBoxFill}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar >
  );
}

export default SideNav;