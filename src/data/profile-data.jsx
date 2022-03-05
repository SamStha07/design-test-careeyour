import { FaUserAlt } from 'react-icons/fa';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiTwotoneAccountBook } from 'react-icons/ai';
import { SiMinutemailer } from 'react-icons/si';
import { IoMdSettings } from 'react-icons/io';

export default [
  {
    id: 0,
    icon: <FaUserAlt />,
    title: 'profile',
    link: '/user/profile',
  },
  {
    id: 1,
    icon: <AiTwotoneAccountBook />,
    title: 'my resume',
    link: '/user/my-resume',
  },
  {
    id: 2,
    icon: <BsFillBookmarkFill />,
    title: 'my jobs',
    link: '/user/my-jobs',
  },
  {
    id: 3,
    icon: <SiMinutemailer />,
    title: 'email preference',
    link: '/user/email',
  },
  {
    id: 4,
    icon: <IoMdSettings />,
    title: 'settings',
    link: '/user/settings',
  },
];
