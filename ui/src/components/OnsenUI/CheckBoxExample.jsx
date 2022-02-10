import React from 'react';
import { Checkbox, List, ListItem } from 'react-onsenui';

export default function CheckBoxExample() {
  return (
    <List>
    <ListItem tappable>
      <label className="left">
        <ons-checkbox input-id="check-1" checked="true"></ons-checkbox>
      </label>
      <label for="check-1" className="center">
        Apple
      </label>
    </ListItem>
    <ons-list-item tappable>
      <label className="left">
        <ons-checkbox input-id="check-2"></ons-checkbox>
      </label>
      <label for="check-2" className="center">
        Banana
      </label>
    </ons-list-item>
  </List>
  );
}
