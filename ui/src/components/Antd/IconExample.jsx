import React from 'react'
import { CameraOutlined } from '@ant-design/icons/lib/icons'

import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Typography } from 'antd';

const { Title } = Typography;

export default function IconExample() {
  return (    
  <>
  <CameraOutlined />
    <Tooltip title="search">
      <Button size='large' type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <br />
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="dashed" icon={<SearchOutlined />}>
      Search
    </Button>
    <Button icon={<SearchOutlined />} href="https://www.google.com" />
    <br />
    <br />
    
    

  </>
  );
}
