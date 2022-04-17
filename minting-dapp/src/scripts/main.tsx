import '../styles/main.scss';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';

// you can remove this if you want the title to come up as your normal title 
if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<Dapp />, document.getElementById('minting-dapp'));
});
