import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Business',
    path: '/Business',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Entertainment',
    path: '/Entertainment',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'General',
    path: '/General',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Health',
    path: '/Health',
    icon: <FaIcons.FaCartPlus />
    ,
    cName: 'nav-text'
  },
  {
    title: 'Science',
    path: '/Science',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Sports',
    path: '/Sports',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Technology',
    path: '/Technology',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },

];
