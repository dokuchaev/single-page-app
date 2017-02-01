import React from "react";
import {render} from "react-dom";
import ReactHighcharts from 'react-highcharts';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {TabMain} from "./components/TabMain";
import {TabTable} from "./components/TabTable";
import mainData from './data/main.json';
import tableData from './data/table.json';
import widgetData from './data/widget.json';
require("./css/style.css");

class App extends React.Component {

    render() {
        var TabMainData = {
                data: mainData
            },
            TabTableData = {
                data: tableData
            }
        return (
            <div className="app-wrapper">
                <h1>Single Page App</h1>
                <Tabs onSelect={this.handleSelect} selectedIndex={0}>
                    <TabList>
                        <Tab>Main</Tab>
                        <Tab>Widget</Tab>
                        <Tab>Table</Tab>
                        <Tab>Report</Tab>
                    </TabList>

                    <TabPanel>
                        <TabMain title={""} text={""} TabMainData={mainData}/>
                    </TabPanel>
                    <TabPanel>
                        <ReactHighcharts config={config}></ReactHighcharts>
                    </TabPanel>
                    <TabPanel>
                        <TabTable TabTableData={tableData}/>
                    </TabPanel>
                    <TabPanel>
                        <ReactHighcharts config={config}></ReactHighcharts>
                        <TabTable TabTableData={tableData}/>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

const config = {

    /* HighchartsConfig */
    title: "",
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
        shared: true,
        title: "12"
    },
    series: widgetData
};
render(
    <App/>, window.document.getElementById("app"));
