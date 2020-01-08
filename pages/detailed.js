import React, {useState} from 'react'
import Head from 'next/head'
import {Row, Col ,Affix, Icon ,Breadcrumb  } from 'antd'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'
import servicePath from "../config/apiUrl";

import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import axios from 'axios';



const Detailed = (data) => {

    const renderer = new marked.Renderer();

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });

    let html = marked(data.article_content);
    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <Header/>
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>{data.typeName}</Breadcrumb.Item>
                                <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <div className="detailed-title">
                                {data.title}
                            </div>

                            <div className="list-icon center">
                                <span><Icon type="calendar"/> {data.addTime}</span>
                                <span><Icon type="folder"/> {data.typeName}</span>
                                <span><Icon type="fire"/> {data.view_count}人</span>
                            </div>

                        </div>
                        <div className="detailed-nav comm-box" dangerouslySetInnerHTML = {{__html:html}}>
                            {/*<div className="nav-title">文章目录</div>*/}

                        </div>
                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    {/*<Advert/>*/}
                    {/*<Affix offsetTop={5}>*/}
                    {/*    <div className="detailed-nav comm-box">*/}
                    {/*        <div className="nav-title">文章目录</div>*/}
                    {/*        <MarkNav*/}
                    {/*            className="article-menu"*/}
                    {/*            source={data.article_content}*/}
                    {/*            ordered={false}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</Affix>*/}
                </Col>
            </Row>
            <Footer/>

        </>
    )
};

Detailed.getInitialProps = async(context)=>{
    let id = context.query.id;
    const promise = new Promise((resolve)=>{
        axios.get(servicePath.getArticleById+id).then(
            (res)=>{
                resolve(res.data.data[0])
            }
        )
    })

    return await promise
}

export default Detailed
