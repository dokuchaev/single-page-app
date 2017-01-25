import React from "react";
import Timestamp from 'react-timestamp';

export class TabTable extends React.Component {

    render() {
        console.log("TabTable", this.props.TableData);
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
                        {this.props.TableData.map((link, index) => <tr key={index}>
                            <td>{link.source_title}&nbsp;
                                <a href={link.source_url}>
                                     {link.source_url}</a>
                            </td>
                            <td>{link.domains_num}</td>
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
