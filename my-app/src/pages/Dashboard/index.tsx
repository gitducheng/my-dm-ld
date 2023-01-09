import React from 'react'
import { Button, Layout, Space } from '@arco-design/web-react'

const Header = Layout.Header
const Footer = Layout.Footer
const Content = Layout.Content

const Dashboard: React.FC = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>
        <Space size='small'>
          <Button type='outline'>首页</Button>
          <Button type='outline'>伙伴</Button>
          <Button type='outline'>家园</Button>
        </Space>
      </Footer>
    </Layout>
  )
}

export default Dashboard
