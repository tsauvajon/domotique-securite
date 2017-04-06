import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import ZoomInPaper from '../../ZoomInPaper';

const days = [
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
  'Dimanche',
];

class PlanningNew extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ZoomInPaper className="push-planning">
        <List>
          <ListItem>
            <table>
              <tbody>
                <tr>
                  <td />
                  <td>
                    Matin
                  </td>
                  <td>
                    Après-midi
                  </td>
                </tr>
              </tbody>
            </table>
          </ListItem>
          {
            days.map(day => (
              <ListItem key={day}>
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: '150px' }}>
                        {day}
                      </td>
                      <td>
                        <Toggle defaultToggled disabled={day === 'Dimanche'} />
                      </td>
                      <td>
                        <Toggle defaultToggled disabled={day === 'Dimanche'} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ListItem>
            ))
          }
        </List>
      </ZoomInPaper>
    );
  }
}

export default PlanningNew;
