import { useState } from "react";
import { Box, Stack, AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

const Header = ({ openContact }) => {
  const [anchorEl, setAnchorEl] = useState(false); // State for hamburger menu
  const [verticalsOpen, setVerticalsOpen] = useState(false); // State for verticals dropdown

  const toggleMenu = (open) => {
    setAnchorEl(open); // Open or close the hamburger menu
  };

  return (
    <Stack className="bg-white py-4">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "white", boxShadow: "none" }}>
          <Toolbar className="flex justify-between sm:mx-20">
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center" }} component="a" href="/">
              <Image src="/logo-black.png" alt="logo" width={100} height={100} className="flex-grow-1" />
            </Box>

            {/* Desktop Menu */}
            <Box className="flex items-center text-black sm:hidden xs:hidden md:flex">
              <Link href="/" className="normal-case mr-8 text-lg">Home</Link>

              {/* Verticals Dropdown */}
              <Box
                className="relative"
                onMouseEnter={() => setVerticalsOpen(true)}
                onMouseLeave={() => setVerticalsOpen(false)}
              >
                <span className="normal-case mr-8 text-lg cursor-pointer">Verticals</span>
                <Box
                  className={`absolute bg-white shadow-md rounded-md p-2 z-10 ${
                    verticalsOpen ? "block" : "hidden"
                  }`}
                  style={{ top: "100%", left: 0 }}
                >
                  <Link href="https://realestate.gopolar.io/" className="block px-4 py-2 text-lg hover:bg-gray-100">
                    Real Estate
                  </Link>
                  <Link href="https://ecommerce.gopolar.io/" className="block px-4 py-2 text-lg hover:bg-gray-100">
                    Ecommerce
                  </Link>
                </Box>
              </Box>

              <Button
                color="inherit"
                className="rounded-lg text-white py-2 px-9 text-base normal-case"
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  background: "linear-gradient(to right, #211AEB, #7C36FE)",
                }}
                href="https://calendly.com/vidisha-gopolar/30min"
                target="blank"
              >
                Book a Call
              </Button>
            </Box>

            {/* Hamburger Menu Icon */}
            <IconButton
              size="large"
              color="black"
              aria-label="menu"
              className="sm:block md:hidden"
              sx={{ mr: 2 }}
              onClick={() => toggleMenu(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Drawer Menu */}
            <Drawer
              anchor="right"
              open={anchorEl}
              onClose={() => toggleMenu(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={() => toggleMenu(false)}
                onKeyDown={() => toggleMenu(false)}
              >
                <List>
                  <ListItem button>
                    <ListItemText>
                      <Link href="/" className="normal-case text-lg">
                        Home
                      </Link>
                    </ListItemText>
                  </ListItem>
                  {/* <ListItem button>
                    <ListItemText>
                      <Link href="/blogs" className="normal-case text-lg">
                        Blogs
                      </Link>
                    </ListItemText>
                  </ListItem> */}
                  <ListItem button>
                    <ListItemText>
                      <Link href="https://realestate.gopolar.io/" className="normal-case text-lg">
                        Real Estate
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem button>
                    <ListItemText>
                      <Link href="https://ecommerce.gopolar.io/" className="normal-case text-lg">
                        Ecommerce
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem button>
                    <Button
                      color="inherit"
                      className="rounded-lg text-white py-2 px-9 text-base normal-case"
                      sx={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        background: "linear-gradient(to right, #211AEB, #7C36FE)",
                      }}
                      href="https://calendly.com/vidisha-gopolar/30min"
                      target="blank"
                    >
                      Book a Call
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </Stack>
  );
};

export default Header;
