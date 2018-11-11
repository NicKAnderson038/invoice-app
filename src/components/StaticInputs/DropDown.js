import React from "react";
import { CardText } from "material-ui/Card";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const styles = {
  customWidth: {
    width: 150
  }
};
const dropDown = () => {
  const select = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5
  };

  return (
    <div>
      <CardText>
        <SelectField value={1}>
          <MenuItem value={1} primaryText="Catagory" />
          <MenuItem value={2} primaryText="Nights" />
          <MenuItem value={3} primaryText="Days" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
      </CardText>
    </div>
  );
};

export default dropDown;
