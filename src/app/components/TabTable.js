import React from "react";
import Timestamp from 'react-timestamp';
import FontAwesome from 'react-fontawesome';
var NumberFormat = require('react-number-format');


export class TabTable extends React.Component {

    render() {

        console.log("TabTable", this.props.TabTableData);
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title and URL</th>
                            <th>Domains</th>
                            <th>External Links</th>
                            <th>Internal Links</th>
                            <th>Last Seen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.TabTableData.map((link, index) => <tr key={index}>
                            <td>
                              <p>{link.source_title}</p>
                              <a href={link.source_url} target="_blank">{link.source_url}<FontAwesome name='external-link' /></a>
                            </td>
                            <td className="center"><NumberFormat value={link.domains_num} className="f__color" displayType={'text'} thousandSeparator={true} /></td>
                            <td>{link.external_link_num}</td>
                            <td>{link.internal_link_num}</td>
                            <td><Timestamp time={link.last_seen} format='date'/></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
