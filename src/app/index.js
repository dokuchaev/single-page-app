import React from "react";
import {render} from "react-dom";
import ReactHighcharts from 'react-highcharts';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {TabOne} from "./components/TabOne";
import {TabTable} from "./components/TabTable";
import tabOneData from './data/tabOne.json';
import tableData from './data/table.json';
import chartData from './data/chart.json';
require("./css/style.css");

class App extends React.Component {

    render() {

        var tab1 = {
                data: tabOneData
            },
            TableData = {
                data: tableData
            }
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
                        <TabOne title={""} text={""} tab1={tabOneData}/>
                    </TabPanel>
                    <TabPanel>
                        <TabTable TableData={tableData}/>
                    </TabPanel>
                    <TabPanel>
                        <ReactHighcharts config={config}></ReactHighcharts>
                    </TabPanel>

                    <TabPanel>
                        <ReactHighcharts config={config}></ReactHighcharts>
                        <TabTable TableData={tableData}/>
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
    series: chartData
};
render(
    <App/>, window.document.getElementById("app"));
