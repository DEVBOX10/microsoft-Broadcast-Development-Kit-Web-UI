import React from 'react';
import { useSelector } from 'react-redux';
import IAppState from '../../services/store/IAppState';

const Footer: React.FC = () => {
  const { initialized, app } = useSelector((state: IAppState) => state.config);

  const versionString = initialized ? app?.buildNumber ?? '' : '';
  return <div id="Footer">Teams TX {versionString}</div>;
};

export default Footer;