import * as React from "react";
import { Button } from "@material-ui/core";
import { ApplicationTemplate } from "./template";

const App: React.FC = () => {
  return (
    <ApplicationTemplate appName="My App">
      <div>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>
    </ApplicationTemplate>
  );
};

export default App;
