import React from 'react'
import '../static/style/components/header.css'

import {Row, Col, Menu, Icon} from 'antd'
import Link from 'next/link'

const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">
                    <a href="/">Nocteeee</a>
                </span>
            </Col>

            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                {/*<Menu mode="horizontal">*/}
                {/*    <Menu.Item key="home">*/}
                {/*        <Link href='/'>*/}
                {/*            <a><Icon type="home"/>首页</a>*/}
                {/*        </Link>*/}
                {/*    </Menu.Item>*/}
                {/*    /!*<Menu.Item key="video">*!/*/}
                {/*    /!*    <Icon type="youtube"/>*!/*/}
                {/*    /!*    视频*!/*/}
                {/*    /!*</Menu.Item>*!/*/}
                {/*</Menu>*/}
            </Col>
        </Row>
    </div>
);

export default Header
