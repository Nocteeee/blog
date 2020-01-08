import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="/advert.jpg"  /></div>
            <div className="author-introduction">
                专注于WEB和移动前端开发。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                    <a href='https://github.com/nocteeee' target="_Blank"><Avatar size={28} icon="github" className="account"  /></a>
                {/*<Avatar size={28} icon="qq"  className="account" />*/}
                {/*<Avatar size={28} icon="wechat"  className="account"  />*/}
                {/*<Avatar size={28} icon="weibo"  className="account"  />*/}

            </div>
        </div>
    )

}

export default Author
