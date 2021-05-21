import * as React from "react";
import { Button } from "@material-ui/core";
import { Application } from "./template";

const App: React.FC = () => {
  const appProps = { appName: "My App" };
  return (
    <Application {...appProps}>
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
    </Application>
  );
};

export default App;
