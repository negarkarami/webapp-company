import './Menu.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from "@mui/material/Grid";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from "@mui/material/Button";


const Menu = () => {
    return(
            <div className="wrapper-menu">
                <div className="wrapper-menu-mob">
                        <AppBar position="static" style={{backgroundColor: '#fff', boxShadow: "none",}}>
                            <Toolbar>
                        <span className="box-menu-icon">
                            <MenuIcon style={{color: '#adb5bd', fontSize: "2.3rem"}}/>
                        </span>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                </Typography>
                                <div>
                                    <h1 className="logo-text">Elomoas</h1>
                                    <p className="text">یادگیری آنلاین درس</p>
                                </div>
                            </Toolbar>
                        </AppBar>
                </div>
                <div className="wrapper-menu-desk">
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <header className="header-desktop box-mode">
                                <Grid container spacing={2}>
                                    <Grid item md={9}>
                                        <nav className="menu">
                                            <ul className="items">
                                                <li className="item">
                                                    <a className="link" href="#">
                                                        صفحه اصلی
                                                        <KeyboardArrowDownIcon className="icon-menu" fontSize=""/>
                                                    </a>
                                                    <div className="sub-menu">
                                                        <ul className="items">
                                                            <li className="item">
                                                                <a className="link" href="#">ویدیو</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">عکس</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">پروفایل</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">رزومه</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">پشتیبانی</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="item">
                                                    <a className="link" href="#">
                                                        تصاویر
                                                        <KeyboardArrowDownIcon className="icon-menu" fontSize=""/>
                                                    </a>
                                                    <div className="sub-menu">
                                                        <ul className="items">
                                                            <li className="item">
                                                                <a className="link" href="#">ویدیو</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">عکس</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">پروفایل</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">رزومه</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">پشتیبانی</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="item">
                                                    <a className="link" href="#">
                                                        درباره ما
                                                        <KeyboardArrowDownIcon className="icon-menu" fontSize=""/>
                                                    </a>
                                                    <div className="sub-menu">
                                                        <ul className="items">
                                                            <li className="item">
                                                                <a className="link" href="#">ویدیو</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">عکس</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">پروفایل</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">رزومه</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">پشتیبانی</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="item">
                                                    <a className="link" href="#">
                                                        مخاطبین
                                                        <KeyboardArrowDownIcon className="icon-menu" fontSize=""/>
                                                    </a>
                                                    <div className="sub-menu">
                                                        <ul className="items">
                                                            <li className="item">
                                                                <a className="link" href="#">ایمیل</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#">شماره تماس</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link" href="#"> شماره تلفن</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="item">
                                                    <a className="link" href="#">
                                                        ورود
                                                        <KeyboardArrowDownIcon className="icon-menu" fontSize=""/>
                                                    </a>
                                                    <div className="sub-menu">
                                                        <ul className="items">
                                                            <li className="item">
                                                                <a className="link">ایمیل من</a>
                                                            </li>
                                                            <li className="item">
                                                                <a className="link">تلفن شرکت</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </nav>
                                    </Grid>
                                    <Grid item md={3}>
                                        <div className="btn-log-reg">
                                            <Button style={{fontSize: '0.8rem', padding: '15px 38px', borderRadius: '35px', marginLeft:"-80px" }}   variant="contained" color="primary" >ثبت نام</Button>
                                            <Button style={{fontSize: '0.8rem', padding: '15px 38px', borderRadius: '35px', backgroundColor: '#343a40', }}   variant="contained" color="primary" >ورود</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </header>
                        </Grid>
                    </Grid>
                </div>
            </div>

    )

}

export default Menu

