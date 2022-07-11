import React from 'react'
import {useParams} from 'react-router-dom'
import { useGetCoinDetailQuery } from '../services/CryptoApi';
import {Menu,Image, Card ,Collapse, Dropdown} from 'antd'


function CoinsDetails() {
    const {id} =useParams();
    const {data, isFetching} = useGetCoinDetailQuery(id);
    console.log(data)
    if(isFetching)return <h1>Loading...</h1>
    const {Panel } = Collapse

    const userMenu = (
        <Menu>
          <Menu.Item key="1">Reddit Accounts in 2 days-  {data.community_data.reddit_accounts_active_48h}</Menu.Item>
          <Menu.Item key="2">Reddit Comments in 2 days-  {data.community_data.reddit_average_comments_48h}</Menu.Item>
          <Menu.Item key="3"><p>Reddit Posts in 2 days-  {data.community_data.reddit_average_posts_48h}</p></Menu.Item>
          <Menu.Item key="4"><p>Reddit Subscribers-  {data.community_data.reddit_subscribers}</p></Menu.Item>
          <Menu.Divider />
          <Menu.Item key="5"><p>Twitter Followers-  {data.community_data.twitter_followers}</p></Menu.Item>
        </Menu>)
    const devData = (
        <Menu>
          <Menu.Item key="1">Closed Issues-  {data.developer_data.closed_issues}</Menu.Item>
          <Menu.Item key="2">Commits in Last 4 weeks-  {data.developer_data.commit_count_4_weeks}</Menu.Item>
          <Menu.Item key="3"><p>Pull Req. Contributers-  {data.developer_data.pull_request_contributors}</p></Menu.Item>
          <Menu.Item key="4"><p>Pull Req. Merged-  {data.developer_data.pull_requests_merged}</p></Menu.Item>
          <Menu.Item key="5"><p>Stars-  {data.developer_data.stars}</p></Menu.Item>
        </Menu>)

  return (
    <section className='my-5'>
        <section className='w-11/12 m-auto lg:my-20'>
            <Card className='lg:text-xl' title={data.name} hoverable extra={<Image src={data.image.large} width={100} ></Image>}>
                <section className='grid sm:gap-5 lg:gap-10 grid-rows-auto grid-rows-auto lg:grid-cols-4'>
                <div>
                    <h1 className='sm:text-sm lg:text-base'>Community Score</h1>
                    <p>{data.community_score}/100</p>
                </div>
                <div>
                    <h1 className='sm:text-sm lg:text-base'>Developer Score</h1>
                    <p>{data.developer_score}/100</p>
                </div>
                <div>
                    <h1 className='sm:text-sm lg:text-base'>Public Interest</h1>
                    <p>{data.public_interest_score}%</p>
                </div>
                <div className='flex lg:flex-row place-items-start sm:flex-col sm:text-sm lg:text-base row-start-2'>
                    <h1>Community Data</h1>
                    <Dropdown.Button
                    className='dropdown-btn' overlay={userMenu}>

                    </Dropdown.Button>
                </div>
                <div className='flex col-start-2 lg:justify-start lg:flex-row sm:flex-col sm:text-sm lg:text-base'>
                    <h1>Developer Data</h1>
                    <Dropdown.Button className='dropdown-btn' overlay={devData}>
                    </Dropdown.Button>
                </div>
                <div>
                    <h1>Liquidity Score</h1>
                    <p>{data.liquidity_score}</p>
                </div>
                <div className='lg:col-span-2 sm:col-span-4 row-start-5 row-span-4'>
                    <h1>Links</h1>
                    <Collapse accordion className="site-collapse-custom-collapse" bordered={[false]}>
                        <Panel header='Blockchain Sites'className="site-collapse-custom-panel" key={data.links.blockchain_site.index}>
                            <ul className='flex flex-col'>
                            <a className='flex flex-col' href={data.links.blockchain_site[0]}>{data.links.blockchain_site[0]}</a>
                            <a className='flex flex-col' href={data.links.blockchain_site[1]}>{data.links.blockchain_site[1]}</a>
                            <a className='flex flex-col' href={data.links.blockchain_site[2]}>{data.links.blockchain_site[2]}</a>
                            <a className='flex flex-col' href={data.links.homepage}>{data.links.homepage}</a>
                            </ul>
                        </Panel>
                        <Panel header='Official Forum Url' className="site-collapse-custom-panel">
                            <a href={data.links.official_forum_url[0]}>{data.links.official_forum_url[0]}</a>
                        </Panel>
                        <Panel header='Github' className="site-collapse-custom-panel">
                            <ul className='flex flex-col'>
                            <a href={data.links.repos_url.github[0]}>{data.links.repos_url.github[0]}</a>
                            <a href={data.links.repos_url.github[1]}>{data.links.repos_url.github[1]}</a>
                            </ul>
                        </Panel>
                        <Panel header='Subreddit' className="site-collapse-custom-panel">
                            <a href={data.links.subreddit_url}>{data.links.subreddit_url}</a>
                        </Panel>
                        <Panel header='Twitter' className="site-collapse-custom-panel">
                            <p>{data.links.twitter_screen_name}</p>
                        </Panel>
                    </Collapse>
                </div>
                <div className='grid-start-4 col-span-4'>
                    <h1>Description of {data.name}</h1>
                    <p>{(data.description.en).slice(0,832)}</p>
                </div>
                </section>
            </Card>
        </section>
    </section>
  )
}

export default CoinsDetails