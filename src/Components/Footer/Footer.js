import React from 'react';
import Foote from 'rc-footer';

import 'rc-footer/assets/index.css'; 
function Footer() {
    return (
        <Foote //style={{"position":"relative","bottom":"0px","left":"0","right":"0px"}}
    columns={[
      {
        // icon: (
        //   <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
        // ),
        title: "Codeblood",
        url: 'https://www.google.com',
        description: 'An online Ide',
        openExternal: true,
      },
    ]}
    bottom="Made with ❤️ by Sajal Agrawal"
  />
    )
}

export default Footer
