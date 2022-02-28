import { Layout, PageHeader, Menu, Breadcrumb, Col, Row } from 'antd';
import Link from 'next/link'

const { Header, Footer, Sider, Content } = Layout;

export default function HeaderContentFooter(props){
    return(
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
         <Row justify='space-between'>
          <Col>
              <h3 style={{color: "white"}}><Link href="/">PERSONALTUTOR</Link></h3>
          </Col>  
          <Col>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]}>
                <Menu.Item key="1">
                    <Link href="/about">about</Link>
                </Menu.Item>
                <Menu.Item key="2">
                <Link href="/login">login</Link>
                </Menu.Item>
                <Menu.Item key="3">
                <Link href="/signup">signup</Link>
                </Menu.Item>
                <Menu.Item key="4">
                <Link href="/">home</Link>
                </Menu.Item>
            </Menu>
          </Col>
          </Row> 
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Keystone ©2022 created by dpwanjala</Footer>
      </Layout>
    );
}