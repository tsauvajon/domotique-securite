import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ZoomInPaper from '../../ZoomInPaper';

class Planning extends React.Component {
  constructor() {
    super();
    this.state = {
      jour: false,
    };
  }
  render() {
    return (
      <ZoomInPaper>
        <List className="listJour">
          <Subheader>Choisissez un jour de livraison</Subheader>
          <ListItem>
            <Paper zDepth={1}>
              <table className="table">
                  <tr>
                    <th></th>
                    <th><input type="radio" name="jour" value="Lundi" />Lundi</th>
                    <th><input type="radio" name="jour" value="Mardi" />Mardi</th>
                    <th><input type="radio" name="jour" value="Mercredi" />Mercredi</th>
                    <th><input type="radio" name="jour" value="Jeudi" />Jeudi</th>
                    <th><input type="radio" name="jour" value="Vendredi" />Vendredi</th>
                    <th><input type="radio" name="jour" value="Samedi" />Samedi</th>
                  </tr>
                  <tr>
                    <td>Matin</td>
                    <td id='Lundi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                      <select>
                        <option selected>8H</option>
                        <option>9H</option>
                        <option>10H</option>
                        <option>11H</option>
                        <option>12H</option>
                      </select>
                      <select>
                        <option selected>9H</option>
                        <option>10H</option>
                        <option>11H</option>
                        <option>12H</option>
                      </select>
                    </td>
                    <td>
                      <td id='Mardi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                        <select>
                          <option selected>8H</option>
                          <option>9H</option>
                          <option>10H</option>
                          <option>11H</option>
                          <option>12H</option>
                        </select>
                        <select>
                          <option selected>9H</option>
                          <option>10H</option>
                          <option>11H</option>
                          <option>12H</option>
                        </select>
                      </td>
                    </td>
                    <td>
                      <td id='Mercredi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                        <select>
                          <option selected>8H</option>
                          <option>9H</option>
                          <option>10H</option>
                          <option>11H</option>
                          <option>12H</option>
                        </select>
                        <select>
                          <option selected>9H</option>
                          <option>10H</option>
                          <option>11H</option>
                          <option>12H</option>
                        </select>
                      </td>
                    </td>
                    <td>
                      <td id='Jeudi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                        <select>
                          <option selected>8H</option>
                          <option>9H</option>
                          <option>10H</option>
                          <option>11H</option>
                          <option>12H</option>
                        </select>
                        <select>
                          <option selected>9H</option>
                          <option>10H</option>
                          <option>11H</option>
                          <option>12H</option>
                        </select>
                      </td>
                    </td>
                    <td>
                      <td id='Vendredi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                        <select>
                          <option selected>8H</option>
                          <option>9H</option>
                          <option>10H</option>
                          <option>11H</option>
                          <option>12H</option>
                        </select>
                        <select>
                          <option selected>9H</option>
                          <option>10H</option>
                          <option>11H</option>
                          <option>12H</option>
                        </select>
                      </td>
                    </td>
                    <td>
                      <td id='Samedi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                        <select>
                          <option selected>8H</option>
                          <option>9H</option>
                          <option>10H</option>
                          <option>11H</option>
                          <option>12H</option>
                        </select>
                        <select>
                          <option selected>9H</option>
                          <option>10H</option>
                          <option>11H</option>
                          <option>12H</option>
                        </select>
                      </td>
                    </td>
                  </tr>
                  <tr>
                    <td>Après-midi</td>
                      <td>
                        <td id='Lundi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                          <select>
                            <option selected>14H</option>
                            <option>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                          <select>
                            <option selected>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                        </td>
                      </td>
                      <td>
                        <td id='Mardi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                          <select>
                            <option selected>14H</option>
                            <option>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                          <select>
                            <option selected>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                        </td>
                      </td>
                      <td>
                        <td id='Mercredi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                          <select>
                            <option selected>14H</option>
                            <option>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                          <select>
                            <option selected>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                        </td>
                      </td>
                      <td>
                        <td id='Jeudi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                          <select>
                            <option selected>14H</option>
                            <option>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                          <select>
                            <option selected>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                        </td>
                      </td>
                      <td>
                        <td id='Vendredi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                          <select>
                            <option selected>14H</option>
                            <option>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                          <select>
                            <option selected>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                        </td>
                      </td>
                      <td>
                        <td id='Samedi' style={{ visibility: this.state.jour ? 'visible' : 'hidden' }}>
                          <select>
                            <option selected>14H</option>
                            <option>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                          <select>
                            <option selected>15H</option>
                            <option>16H</option>
                            <option>17H</option>
                            <option>18H</option>
                            <option>19H</option>
                          </select>
                        </td>
                      </td>
                  </tr>
              </table>
            </Paper>
          </ListItem>
        </List>
      </ZoomInPaper>
    );
  }
}
export default Planning;
