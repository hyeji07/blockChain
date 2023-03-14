import ClickBtn from '@components/btns/ClickBtn';
import React from 'react';

const WalletModal = ({ onClose }) => {
  const handleOpenWallet = () => {
    window.open(
      'https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi',
      '_blank'
    );
  };
  return (
    <div className='mainModalContainer'>
      <h3 className='mainTitle'>클레이튼 지갑을 설치해주세요.</h3>

      <div className='noticeWriteBox'>
        <div className='noticeWriteCenterBox'>
          <div className='noticeWriteBtnBox'>
            <div>
              <ClickBtn
                text='지금 바로 설치하기'
                onClick={handleOpenWallet}
                className='classicBtn'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
