//https://api.worldoftanks.eu/wgn/clans/info/?application_id=8309ea87a6d621f5933f703e0b8a48fe&clan_id=500076553

import React from "react";
import Axios from "axios"; 

export default class CommentList extends React.Component {
  state = {
    members: []
  };


  componentDidMount() {
    Axios
      //.get("https://api.worldoftanks.eu/wot/account/tanks/?application_id=demo&account_id=513944695")
      .get("https://api.worldoftanks.eu/wgn/clans/info/?application_id=8309ea87a6d621f5933f703e0b8a48fe&clan_id=500076553")
      .then(response => {
          //let stringifiedResp = JSON.stringify(response.data);
          
        let members = response.data.data["500076553"].members;        
        if (members != null) {
          this.setState({members});
        }
      });
  }

  render() {
    const styles={
      color : "#777"
    }

    return (
      <div style={styles}>         
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Kullanıcı Adı</th>
              <th scope="col">Ünvan</th>              
            </tr>
          </thead>
          <tbody>
            {this.state.members.map((member, index) => (
              <tr>
                <td align="center">{index + 1}</td>
                <td align="center">{member.account_name}</td>
                <td align="center">{member.role_i18n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
