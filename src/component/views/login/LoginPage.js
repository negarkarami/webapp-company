import './LoginPage.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {FormControlLabel} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {CheckBox, CheckBoxOutlineBlank} from "@mui/icons-material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from "@mui/material/InputAdornment";
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import Menu from "../menu/Menu";


const LoginPage = ()=> {
    return(
        <div className="wrapper">
            <Grid container spacing={2}>
                <Grid item xs={12} >
                        <Box p={2}>
                            <Box p={1}>
                                <h1 className="title">
                                   ورود به
                                    <br/>
                                    حساب شما
                                </h1>
                            </Box>
                            <Box p={1}>
                                <TextField id="outlined-basic" label="آدرس ایمیل خود را وارد کنید" variant="outlined" type="email" fullWidth m="5"
                                           InputProps={{
                                               startAdornment: (
                                                   <InputAdornment position="start">
                                                       <EmailIcon style={{color: '#adb5bd'}}/>
                                                   </InputAdornment>
                                               ),
                                           }}
                                />
                            </Box>
                            <Box p={1}>
                                <TextField id="outlined-password-input" label="رمز عبور خود را وارد کنید" type="password"  fullWidth
                                           InputProps={{
                                               startAdornment: (
                                                   <InputAdornment position="start">
                                                       <HttpsIcon style={{color: '#adb5bd'}}/>
                                                   </InputAdornment>
                                               ),
                                           }}
                                />
                            </Box>
                            <Grid container spacing={2}>
                                <Grid item xs={5} >
                                    <Box p={1} >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    icon={<CheckBoxOutlineBlank fontSize="small"/>
                                                    }
                                                    checkedIcon={<CheckBox/>}
                                                />
                                            }
                                            label={"یادآوری رمز عبور"}
                                            style={{color: '#adb5bd', width: "150px", }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={7} >
                                    <Box p={1} >
                                        <p className="text">
                                            <span className="forget-pass">رمز عبور خود را فراموش کرده اید</span>
                                        </p>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box p={1}>
                                <Button style={{padding: '17px', backgroundColor: '#343a40', textTransform: 'capitalize', fontSize: '15px'}}  variant="contained"  fullWidth>ورود</Button>
                            </Box>

                            <Box p={1}>
                                <p className="register">حساب کاربری ندارید؟ <a className="ling-register" href='src/component/views/login/LoginPage#'>ثبت نام</a></p>
                            </Box>

                            <Box p={1}>
                                <p className="title-gf">یا با حساب اجتماعی خود وارد شوید</p>
                            </Box>

                            <Box p={1}>
                                <Button style={{padding: '17px',  textTransform: 'capitalize',fontSize: '15px' }}   variant="contained" color="primary" fullWidth>ورود با گوگل</Button>
                            </Box>
                            <Box p={1}>
                                <Button style={{padding: '17px',  backgroundColor: '#3b5999',  textTransform: 'capitalize',fontSize: '15px'}}  variant="contained" color="primary" fullWidth>ورود با فیسبوک</Button>
                            </Box>
                        </Box>
                </Grid>
            </Grid>
        </div>
        )
}

export default LoginPage