import { CopyOutlined } from '@ant-design/icons';
import { Button, Input, Modal, message } from 'antd';
import React from 'react';

const ShareModal = ({ visible, onClose, shareLink }) => {
  
  const handleCopy = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        message.success('Link copied to clipboard!');
      })
      .catch((err) => {
        message.error('Failed to copy link');
      });
  };

  return (
    <Modal title={shareLink[0]} visible={visible} footer={null} onCancel={onClose}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Input value={shareLink[1]} readOnly />
        <Button icon={<CopyOutlined />} onClick={() => handleCopy(shareLink[1])}>
        </Button>
      </div>
    </Modal>
  );
};

export default ShareModal;
