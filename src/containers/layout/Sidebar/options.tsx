import {
  AppstoreOutlined,
  UserOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { FormattedMessage } from "react-intl";
import { AiOutlineAudit } from "react-icons/ai";
import { RiShipLine, RiRoadMapLine, RiUserSettingsFill } from "react-icons/ri";
import { TbBuildingEstate } from "react-icons/tb";
import { FaBoxOpen, FaCodeBranch, FaListUl, FaUser } from "react-icons/fa6";
import { MdAssignmentAdd, MdCollectionsBookmark, MdMeetingRoom, MdPolicy, MdWork } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import { PiSlideshowFill } from "react-icons/pi";
import { MdContactPhone } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoBagRemoveSharp } from "react-icons/io5";
import { FaRocket, FaPlay } from 'react-icons/fa';
import { FaBuilding, FaBriefcase } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import { FaBolt, FaFire } from 'react-icons/fa';
import { FaFlag, FaCrown } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";
import { FaEye, FaGlasses } from 'react-icons/fa';
import { CgSearchFound } from "react-icons/cg";
import { FaHammer, FaSyncAlt } from 'react-icons/fa';
import { GrUserWorker } from "react-icons/gr";
import { FaDiagramProject } from "react-icons/fa6";

import {
  MdOutlineLocalFireDepartment,
  MdOutlineCastForEducation,
  MdOutlineWorkOutline,
  MdLocationCity,
  MdOutlineImportExport,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { getPermissions } from "utlis/library/helpers/permissions";
import {  FaFileImport, FaQuestionCircle, FaShieldAlt, FaShoppingBag, FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaAllergies } from "react-icons/fa";
import { GiButterflyKnife } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import { GiMaterialsScience } from "react-icons/gi";
import { IoMdAddCircle } from "react-icons/io";

import { SiMaterialformkdocs } from "react-icons/si";


// Registrations



interface MenuItem {
  key: string;
  to?: string;
  icon?: any;
  label: any;
  onClick?: () => void;
  hidden?: boolean;
  disabled?: boolean;
  children?: MenuItem[];
}
const getMenuItems: (profile) => MenuItem[] = (profile) =>{ 
  return [
  {
    key: "",
    to: "",
    label: <FormattedMessage id="statistics" />,
    icon: <LineChartOutlined className="!text-xl" />,
    disabled: false,
  },
  {
    key: "settings",
    to: "/dashboard/settings",
    label: <FormattedMessage id="settings" />,
    icon: <IoIosSettings   className="!text-xl" />,
    disabled: false,
    hidden: false,
  },
  {
    key: "users",
    to: "/dashboard/users",
    label: <FormattedMessage id="users" />,
    icon: <FaUser    className="!text-xl" />,
    disabled: false,
    hidden: false,
    
  },
  {
    key: "contractors",
    to: "/dashboard/contractors",
    label: <FormattedMessage id="contractors" />,
    icon: <GrUserWorker   className="!text-xl" />,
    disabled: false,
    hidden: false,
    
  },
  {
    key: "project-types",
    to: "/dashboard/project-types",
    label: <FormattedMessage id="project-types" />,
    icon: <FaDiagramProject   className="!text-xl" />,
    disabled: false,
    hidden: false,
    
  },
  {
    key: "room-zones",
    to: "/dashboard/room-zones",
    label: <FormattedMessage id="room-zones" />,
    icon: <MdMeetingRoom   className="!text-xl" />,
    disabled: false,
    hidden: false,
    
  },
  {
    key: "materials",
    to: "/dashboard/materials",
    label: <FormattedMessage id="materials" />,
    icon: <GiMaterialsScience   className="!text-xl" />,
    disabled: false,
    hidden: false,
    
  },
  {
    key: "additions",
    to: "/dashboard/additions",
    label: <FormattedMessage id="additions" />,
    icon: <IoMdAddCircle   className="!text-xl" />,
    disabled: false,
    hidden: false,
    
  },
  
  
  

  // {
  //   key: "offers-group",
  //   label: <FormattedMessage id={"offers"} />,
  //   icon: <IoMdSettings className="!text-xl" />,
  //   disabled: false,
  //   children: [
  //     {
  //       key: "offers",
  //       to: "offers",
  //       label: <FormattedMessage id="offers" />,
  //       icon: <MdPolicy className="!text-xl" />,
  //       disabled: false,
  //       hidden: false,
  //     },
  //     {
  //       key: "voucher",
  //       to: `voucher`,
  //       label: <FormattedMessage id="voucher" />,
  //       icon: <AppstoreOutlined />,
  //       disabled: false,
  //       // hidden: !getPermissions("permissions", "Get", profile),
  //     },
  //   ],
  // },
]};
export default getMenuItems;

