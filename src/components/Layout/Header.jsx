import { IconButton, Stack } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const Header = ({openContact}) => {
    const [anchorEl, setAnchorEl] = useState(false);
    return ( 
        <>
            <Stack className="bg-white py-4">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" sx={{ bgcolor: "white", boxShadow: "none" }}>
                        <Toolbar className="flex justify-between mx-20">
                            <Box sx={{ display: 'flex', alignItems: 'center' }} component="a" href="/">
                            <Image src="/logo-black.png" alt="logo" width={100} height={100} className="flex-grow-1" />
                            </Box>
                            <Box className="flex items-center text-black sm:hidden xs:hidden md:flex">
                                <Link href="/" className="normal-case mr-8 text-lg">Home</Link>
                                <Link href="/blogs" className="normal-case mr-8 text-lg">Blogs</Link>
                                <Button color="inherit" className="rounded-lg text-white py-2 px-9 text-base normal-case" sx={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    background: 'linear-gradient(to right, #211AEB, #7C36FE)',
                                }} href='https://teams.microsoft.com/l/meetup-join/19:meeting_YWI0MGU3YTYtNDczYy00YmJkLThiZWEtYzcwMzYzYWNiNTc3@thread.v2/0?context=%7B%22Tid%22:%227bad2f1c-3042-45ee-831d-d77ee748fc8c%22,%22Oid%22:%22d2a858af-fe8f-4a11-87f4-230ad82724f1%22%7D' target='blank'>Book a Call</Button>
                            </Box>
                            <IconButton
                                size="large"
                                color="black"
                                aria-label="menu"
                                className="sm:block md:hidden"
                                sx={{ mr: 2 }}
                                onClick={()=>{setAnchorEl(!anchorEl)}}>
                                <MenuIcon />
                            </IconButton>
                            {anchorEl && <Box className="hidden sm:flex md:hidden">
                                <Link href="/" className="normal-case mr-8 text-lg">Home</Link>
                                <Link href="/blogs" className="normal-case mr-8 text-lg">Blogs</Link>
                                <Button color="inherit" className="rounded-lg text-white py-2 px-9 text-base normal-case" sx={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    background: 'linear-gradient(to right, #211AEB, #7C36FE)',
                                }} href='https://teams.microsoft.com/l/meetup-join/19:meeting_YWI0MGU3YTYtNDczYy00YmJkLThiZWEtYzcwMzYzYWNiNTc3@thread.v2/0?context=%7B%22Tid%22:%227bad2f1c-3042-45ee-831d-d77ee748fc8c%22,%22Oid%22:%22d2a858af-fe8f-4a11-87f4-230ad82724f1%22%7D' target='blank'>Book a Call</Button>
                            </Box>}
                        </Toolbar>
                    </AppBar>
                </Box>  
            </Stack>
        </>
     );
}
 
export default Header;