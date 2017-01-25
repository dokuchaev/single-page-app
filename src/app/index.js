import React from "react";
import {render} from "react-dom";
import ReactHighcharts from 'react-highcharts';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {TabOne} from "./components/TabOne";
import {TabTable} from "./components/TabTable";
require ("./css/style.css");

class App extends React.Component {
    render() {
        var tab1 = {
                "title": "Yep",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laboriosam voluptate perferendis quaerat nam iusto fuga eligendi tenetur omnis, est sequi delectus, officiis, ex laborum assumenda dolorem maxime fugiat reiciendis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laboriosam voluptate perferendis quaerat nam iusto fuga eligendi tenetur omnis, est sequi delectus, officiis, ex laborum assumenda dolorem maxime fugiat reiciendis!"
            },
            TableData = [
                {
                    "rank": 41032,
                    "backlinks_num": 3971886,
                    "domains_num": 28513,
                    "last_seen": 1432740046,
                    "external_link_num": 160,
                    "internal_link_num": 274,
                    "source_url": "http://www.ebay.com/",
                    "source_title": "Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay"
                }, {
                    "rank": 22393,
                    "backlinks_num": 391045,
                    "domains_num": 316,
                    "last_seen": 1471935176,
                    "external_link_num": 8,
                    "internal_link_num": 475,
                    "source_url": "http://deals.ebay.com/",
                    "source_title": "eBay Daily Deals: Best Deals of the Day - Plus Free Shipping!"
                }, {
                    "rank": 16780,
                    "backlinks_num": 319002,
                    "domains_num": 286,
                    "last_seen": 1475181228,
                    "external_link_num": 43,
                    "internal_link_num": 91,
                    "source_url": "http://pages.ebay.com/help/policies/privacy-policy.html",
                    "source_title": "Privacy Policy"
                }, {
                    "rank": 21993,
                    "backlinks_num": 298895,
                    "domains_num": 262,
                    "last_seen": 1475789513,
                    "external_link_num": 4,
                    "internal_link_num": 113,
                    "source_url": "http://pages.ebay.com/help/policies/user-agreement.html",
                    "source_title": "eBay User Agreement"
                }, {
                    "rank": 16673,
                    "backlinks_num": 296101,
                    "domains_num": 230,
                    "last_seen": 1473680363,
                    "external_link_num": 140,
                    "internal_link_num": 72,
                    "source_url": "http://pages.ebay.com/sitemap.html",
                    "source_title": "eBay Sitemap"
                }, {
                    "rank": 17938,
                    "backlinks_num": 294377,
                    "domains_num": 280,
                    "last_seen": 1473645524,
                    "external_link_num": 2,
                    "internal_link_num": 44,
                    "source_url": "http://resolutioncenter.ebay.com/",
                    "source_title": "Resolution Center - eBay"
                }, {
                    "rank": 16291,
                    "backlinks_num": 294020,
                    "domains_num": 206,
                    "last_seen": 1422953905,
                    "external_link_num": 31,
                    "internal_link_num": 26,
                    "source_url": "http://pages.ebay.com/securitycenter/index.html",
                    "source_title": "eBay Security Center: Welcome"
                }
            ];

        return (
            <div className="app-wrapper">
              <h1>Single Page App</h1>
                <Tabs onSelect={this.handleSelect} selectedIndex={0}>

                    <TabList>
                        <Tab>Main</Tab>
                        <Tab>Table</Tab>
                        <Tab>Chart</Tab>
                        <Tab>Report</Tab>
                    </TabList>

                    <TabPanel>
                        <TabOne title={""} text={""} tab1={tab1}/>
                    </TabPanel>
                    <TabPanel>
                        <TabTable TableData={TableData}/>
                    </TabPanel>
                    <TabPanel>
                        <ReactHighcharts config={config}></ReactHighcharts>
                    </TabPanel>
                    <TabPanel>
                      <ReactHighcharts config={config}></ReactHighcharts>
                      <TabTable TableData={TableData}/>

                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

const config = {
    /* HighchartsConfig */

    xAxis: {
        categories: [
            '21Jul',
            '28Jul',
            '4Aug',
            '11Aug',
            '25Aug',
            '1Sep',
            '08Sep'
        ],
        crosshair: true
    },

    tooltip: {
        shared: true
    },
    series: [
        {
            "name": "ebay.com",
            "data": [
                100,
                200,
                300,
                400,
                500,
                500,
                600
            ],
            type: 'spline'
        }, {
            "name": "amazon.com",
            "data": [
                600,
                500,
                500,
                400,
                300,
                200,
                100
            ],
            type: 'spline',
            color: "#ffc107"
        }

    ]
};
render(<App/>, window.document.getElementById("app"));
