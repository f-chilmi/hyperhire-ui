'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';

import { Logo, LogoWhite } from '@/app/assets/logo';
import { Dropdown } from '../molecules';
import { OptionType } from '../molecules/Dropdown';
import { Button } from '../atoms';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    type: 'dropdown',
    text: '채용',
    options: [
      { label: '해외 개발자 원격 채용', action: () => {} },
      { label: '외국인 원격 채용 (비개발 직군)', action: () => {} },
      { label: 'divider', action: () => {} },
      { label: '한국어 가능 외국인 채용', action: () => {} },
    ] as OptionType[],
  },
  {
    type: 'text',
    text: '해외 개발자 활용 서비스',
  },
  { type: 'flex', text: '' },
  {
    type: 'default',
    text: '문의하기',
  },
];

function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 2, padding: 2 }}>
      <Image src={Logo} alt="Logo " width={114} height={21} />
      <Divider />
      <List>
        {navItems.map((item, index) => {
          if (item.type === 'dropdown') {
            return (
              <Dropdown
                className="text-[#343741] "
                classNameOption="text-[#343741]"
                buttonText={item.text}
                options={item.options!}
                key={index}
              />
            );
          }
          return (
            <Button key={index} variant={item.type} className="text-[#343741] ">
              {item.text}
            </Button>
          );
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar
        component="nav"
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Toolbar className="container">
          <div className="h-[21px] object-cover grow ">
            <Image src={LogoWhite} alt="Logo" objectFit="cover" />
          </div>

          <Button variant="text" onClick={handleDrawerToggle} className="sm:hidden">
            _
          </Button>
          <Box sx={{ display: { xs: 'none', sm: 'flex', flexGrow: 1 } }}>
            {navItems.map((item, index) => {
              if (item.type === 'flex') return <div key={index} className="h-full grow"></div>;
              if (item.type === 'dropdown') {
                return <Dropdown key={index} buttonText={item.text} options={item.options!} />;
              }
              return (
                <Button key={index} variant={item.type}>
                  {item.text}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
      </nav>
    </>
    // <nav className="flex justify-between items-center h-[60px] container">
    //   <Image src={LogoWhite} alt="Logo" objectFit="cover" className="h-[21px] object-cover" />

    //   <div className="w-auto h-5"></div>
    //   <div className="flex">
    //     <Button id="popover-button" variant="text" onClick={handleClick} endIcon={<CaretDown fill="text-white" />}>
    //       채용
    //     </Button>
    //     <Menu
    //       id="basic-menu"
    //       anchorEl={anchorEl}
    //       open={open}
    //       onClose={handleClose}
    //       className="shadow-xs"
    //       MenuListProps={{
    //         'aria-labelledby': 'basic-button',
    //       }}>
    //       <p className="px-4 py-1 text-lg font-[700]">채용</p>
    //       <MenuItem onClick={handleClose}>해외 개발자 원격 채용</MenuItem>
    //       <MenuItem onClick={handleClose}>외국인 원격 채용 (비개발 직군)</MenuItem>
    //       <Divider />
    //       <MenuItem onClick={handleClose}>한국어 가능 외국인 채용</MenuItem>
    //     </Menu>

    //     <Button variant="text">해외 개발자 활용 서비스</Button>
    //   </div>
    //   <div className="w-auto h-5"></div>

    //   <Button>문의하기</Button>
    // </nav>
  );
}

export default Navbar;
