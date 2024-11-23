import { Link } from "react-router-dom";
import logo from '../../assets/images/Dashboard Logo.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
//import { MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";

import { IoMenu } from "react-icons/io5";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { useContext, useState } from "react";
import { IoShieldHalfSharp } from "react-icons/io5";
import { Divider } from "@mui/material";
import { MyContext } from "../../App";
import UserAvatarImgComponent from "../userAvatarImg";

const Header = () => {

    const [anchorE1, setAnchorE1] = useState(null);
    const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
    const openMyAcc = Boolean(anchorE1);
    const openNotifications = Boolean(isOpennotificationDrop);


    const context = useContext(MyContext)

    const handleOpenMyAccDrop = (event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleCloseMyAccDrop = () => {
        setAnchorE1(null);
    };

    const handleOpenotificationsDrop = () => {
        setisOpennotificationDrop(true);
    };

    const handleClosenotificationsDrop = () => {
        setisOpennotificationDrop(false);
    };

    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo Wrapper */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} alt="logo" />
                                <span className="ms-2">Ecom</span>
                            </Link>
                        </div>

                        {
                            context.windowWidth>992 && 
                            <div className="col-sm-3 d-flex align-items-center part2 res-hide">
                            <Button className="rounded-circle me-3" onClick={() =>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar===false ? <MdMenuOpen /> :
                                    <MdOutlineMenu/>
                                }
                            </Button>
                            <SearchBox />
                        </div>
                        }

                        

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle me-3" onClick={()=>context.setThemeMode(!context.themeMode)}>
                                <MdOutlineLightMode />
                            </Button>
                            
                            

                            <div className="dropdownWrapper position-relative">
                                <Button className="rounded-circle me-3" 
                                    onClick={handleOpenotificationsDrop}>
                                    <FaRegBell />
                                </Button>

                                <Button className="rounded-circle me-3" 
                                    onClick={()=>context.openNav()}>
                                    <IoMenu />
                                </Button>

                                <Menu
                                    anchorEl={isOpennotificationDrop}
                                    className="notifications dropdown_list"
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleClosenotificationsDrop}
                                    onClick={handleClosenotificationsDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <div className="head ps-3 pb-0">
                                        <h4>Orders</h4>
                                    </div>

                                    <Divider className="mb-1" />

                                    <div className="scroll">
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <UserAvatarImgComponent img={'https://mironcoder-hotash.netlify.app/images/avatar/01.webp'}/>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Ilya</b>
                                                            added to this favorite list 
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="profil" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Ilya</b>
                                                            added to this favorite list 
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="profil" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Ilya</b>
                                                            added to this favorite list 
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="profil" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Ilya</b>
                                                            added to this favorite list 
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="profil" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Ilya</b>
                                                            added to this favorite list 
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="profil" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Ilya</b>
                                                            added to this favorite list 
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="profil" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Ilya</b>
                                                            added to this favorite list 
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>

                                    <div className="ps-3 pe-3 w-100 pt-2 pb-1">
                                    <Button className="btn-blue w-100">View all notifications</Button>
                                    </div>
                                </Menu>
                            </div>

                            {
                                context.isLogin!== true ?  
                                <Link to={'/login'}><Button className="btn-blue btn-lg 
                                btn-round">Sign In</Button></Link>
                                : 
                                <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="profil" />
                                        </span>
                                    </div>

                                    <div className="userInfo res-hide">
                                        <h4>Ilya</h4>
                                        <p className="mb-0">@mironder</p>
                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={anchorE1}
                                    id="account-menu"
                                    open={openMyAcc}
                                    onClose={handleCloseMyAccDrop}
                                    onClick={handleCloseMyAccDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleOpenMyAccDrop}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        My Account
                                    </MenuItem>
                                    <MenuItem onClick={handleOpenMyAccDrop}>
                                        <ListItemIcon>
                                            <IoShieldHalfSharp />
                                        </ListItemIcon>
                                        Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleOpenMyAccDrop}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                            }

                            
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;