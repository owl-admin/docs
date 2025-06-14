import React from 'react';

const PayImage = () => {
  const getBaseUrl = () => {
    const isGithubIo = window.location.hostname.includes('github.io');
    return isGithubIo ? '/docs' : '';
  };

  const imageUrl = `${getBaseUrl()}/pay.jpg`;

  return <img src={imageUrl} width="500" alt="支付二维码" />;
};

export default PayImage; 