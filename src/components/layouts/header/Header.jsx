import axios from 'axios';

import { useRecoilState } from 'recoil';
import { walletKey } from '@stores/wallet/wallet';
import Caver from 'caver-js';

import { browserName, browserVersion } from 'react-device-detect';

/* import { Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; */

import CreateBtn from '../../btns/CreateBtn';

console.log(`${browserName} ${browserVersion}`);

export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export default function Header() {
  const [walletState, setWalletState] = useRecoilState(walletKey);

  const onSignOut = () => {
    setWalletState(null);
    //localStorage.removeItem('walletKey');
    //window.location.reload();
  };

  //Kaikas
  const caver = new Caver(window.klaytn);

  const handleOpenKaikas = async () => {
    /* if (isMobile()) {
      connectMobile();
      return;
    } */

    if (window.klaytn) {
      const accounts = await window.klaytn.enable();
      const account = accounts[0];

      //접속
      alert('카이카스를 연결하겠습니다.');

      //사용자 계정에 접근하기
      window.klaytn.on('accountsChanged', function (accounts) {
        //console.log(window.klaytn.selectedAddress);
        setWalletState(window.klaytn.selectedAddress);
      });

      //사용자 네크워크 정보 가져오기
      window.klaytn.on('networkChanged', function () {
        //console.log(window.klaytn.networkVersion);
      });
      setWalletState(window.klaytn.selectedAddress);
    }

    if (!window.klaytn) {
      alert('클레이튼 지갑을 설치해주세요.');
      window.open(
        'https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi',
        '_blank'
      );
    }
  };

  //Metamask
  const handleOpenMetamask = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.enable();
      const account = accounts[0];

      //접속
      alert('메타마스크를 연결하겠습니다.');

      //사용자 계정에 접근하기
      window.ethereum.on('accountsChanged', function (accounts) {
        //console.log(window.ethereum.selectedAddress);
        setWalletState(window.ethereum.selectedAddress);
      });

      //사용자 네크워크 정보 가져오기
      window.ethereum.on('networkChanged', function () {
        //console.log(window.ethereum.networkVersion);
      });
      setWalletState(window.ethereum.selectedAddress);
    }

    if (!window.klaytn) {
      alert('메타마스크 지갑을 설치해주세요.');
      window.open(
        'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
        '_blank'
      );
    }
  };

  //Mobile
  const connectMobile = async () => {
    //const isSafariMobile = 'Mobile Safari' === browserName;
    //const isChrome = 'Chrome' === browserName;

    //
    try {
      const body = {
        type: 'auth',
        bapp: {
          name: 'test app',
          callback: {
            success: 'https://www.google.com/search?q=success',
            fail: 'https://www.google.com/search?q=fail',
          },
        },
      };
      const result = await axios.post(
        'https://api.kaikas.io/api/v1/k/prepare',
        body
      );
      //console.log(result.data);
      const { request_key } = result.data;

      //console.log(request_key);
      await axios.post(
        `https://klipwallet.com/?target=/a2a?request_key=${request_key}`
      );
      //console.log(sendRequestKey);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header className='headerCotainer'>
        <div>
          <div>Logo</div>
          {walletState ? (
            <div>
              <p>{walletState}</p>
              <p>
                <CreateBtn
                  text={'Logout'}
                  onClick={onSignOut}
                  className='noticeUpdateBtn'
                />
              </p>
            </div>
          ) : (
            <>
              <div>
                <p>Web</p>
                <div>
                  <CreateBtn
                    text={'kaikas 연결'}
                    onClick={handleOpenKaikas}
                    className='noticeUpdateBtn'
                  />
                </div>
                <div>
                  <CreateBtn
                    text={'metamask 연결'}
                    onClick={handleOpenMetamask}
                    className='noticeUpdateBtn'
                  />
                </div>
              </div>
              {/* Mobile */}
              <div>
                <p>Mobile</p>
                <div>
                  <CreateBtn
                    text={'kaikas 연결'}
                    onClick={connectMobile}
                    className='noticeUpdateBtn'
                  />
                </div>
                {/*  <div>
                  <CreateBtn
                    text={'metamask 연결'}
                    onClick={handleOpenMetamask}
                    className='noticeUpdateBtn'
                  />
                </div> */}
              </div>
            </>
          )}
        </div>
      </header>
    </>

    /* <>
        <AppBar position='fixed' open={open}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{
                marginRight: 8,
              }}
            >
              {open === true ? (
                <ChevronLeftIcon />
              ) : (
                <MenuIcon sx={{ marginLeft: ' 80px' }} />
              )}
            </IconButton>
            <span className='stLogoImg'></span>
            <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
              Admin Template
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <div
              onMouseLeave={() => {
                setIsHover(false);
              }}
              onMouseOver={() => {
                setIsHover(true);
              }}
            >
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                color='inherit'
              >
                <AccountCircle />
              </IconButton>

              {authenticated && isHover && (
                <div className='openHeaderLists'>
                  <li className='openHeaderList'>My account</li>
                  <li className='openHeaderList' onClick={handleCloseLogout}>
                    Logout
                  </li>
                </div>
              )}

              {!authenticated && isHover && (
                <div className='openHeaderLists'>
                  <li
                    className='openHeaderList'
                    onClick={() => {
                      navigate('./login');
                    }}
                  >
                    Login
                  </li>
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar> 
    </> */
  );
}
