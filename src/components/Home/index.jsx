// Components
import {
    Header,
    Message,
    Icon,
    Segment,
    Dimmer,
    Loader,
} from 'semantic-ui-react';

// Styles
import styles from './index.module.less';

export function Loading() {
    return (
        <>
            <Segment style={{ height: 100 }}>
                <Dimmer active inverted>
                    <Loader indeterminate>正在加载 OIerDb...</Loader>
                </Dimmer>
            </Segment>
        </>
    );
}

export function ErrorWhenLoadingOIerDb() {
    return (
        <>
            <Message error>
                <Icon name="remove" />
                初始化 OIerDb 时出现了错误，请打开控制台以获取详细信息。
            </Message>
        </>
    );
}

export function NotSupportIndexedDB() {
    return (
        <>
            <Header as="h3" dividing>
                请更新浏览器
            </Header>
            <div>
                <Message error>
                    <Icon name="remove" />
                    您的浏览器不支持 <code>indexedDB</code>。
                </Message>
                <p>
                    推荐使用最新版的{' '}
                    <a href="https://www.google.cn/chrome/" target="_blank">
                        Google Chrome 浏览器
                    </a>{' '}
                    访问 OIerDb NG。
                </p>
            </div>
        </>
    );
}

// FAQ
export function FAQ() {
    return (
        <>
            <Header
                className={styles.header}
                block
                as="h4"
                content="关于"
                attached="top"
                icon="info"
            />
            <Segment attached="bottom">
                <h5>这是什么网站？</h5>
                <p>
                    这是一个信息学竞赛选手获奖记录并对学校进行排名的数据库。本网站名为「OIerDb」。数据库诞生在
                    2018 年 2 月，有时也会咕咕咕的更新。
                </p>
                <p>
                    OIerDb 原始数据不接受任何修改，除非是为了与 noi.cn
                    保持一致。但学校和人的合并、拼音生成等其他问题可以通过
                    GitHub 进行修改。
                </p>
                <h5>我能够做什么？</h5>
                <p>
                    你能够在这个网站上查询选手的获奖记录，目前可以通过姓名、姓名首字母缩写来进行查询。
                </p>
                <p>欢迎加入 OIerDb 用户 QQ 群：813305282。</p>
            </Segment>
        </>
    );
}
