//https://api.worldoftanks.eu/wgn/clans/info/?application_id=8309ea87a6d621f5933
//f703e0b8a48fe&clan_id=500076553

import React from "react";
import Axios from "axios";
import Config from "../../configuration/config";

export default class CommentList extends React.Component {
  state = {
    members: []
  };

  componentWillMount() {

    Axios
      .get(Config.webServices.clanWs, {
      params: {
        application_id: Config.webServices.applicationId,
        clan_id: '500076553'
      }
    })
      .then(response => {
        let members = response.data.data["500076553"].members;
        let memberArray = [];

        for (var i = 0; i < members.length; i++) {
          let memberDetail = {};
          memberDetail.account_name = members[i].account_name;
          memberDetail.role_i18n = members[i].role_i18n;
          memberDetail.account_id = members[i].account_id;

          Axios
            .get(Config.webServices.accountWs, {
            params: {
              application_id: Config.webServices.applicationId,
              account_id: memberDetail.account_id
            }
          })
            .then(response => {
              //console.log(response.data.data[memberDetail.account_id].global_rating);
              memberDetail.global_rating = response.data.data[memberDetail.account_id].global_rating;

              memberArray.push(memberDetail);
              
              if (memberArray != null) {
                this.setState({members: memberArray});
              }
            })
        }

      });
  }

  render() {
    const styles = {
      color: "#777"
    }

    return (
      <div style={styles}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Kullanıcı Adı</th>
              <th scope="col">Ünvan</th>
              <th scope="col">Kişisel Rating</th>
            </tr>
          </thead>
          <tbody>
            {this
              .state
              .members
              .map((member, index) => (
                <tr key={member.account_id}>
                  <td align="center">{index + 1}</td>
                  <td align="center">{member.account_name}</td>
                  <td align="center">{member.role_i18n}</td>
                  <td align="center">{member.global_rating}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
