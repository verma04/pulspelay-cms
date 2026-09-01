import { Detector } from "react-detect-offline";
import { motion } from "framer-motion";

import { Section } from "./Style";

const App = () => (
  <div>
    {/* <div className="flex" >
    <Offline><h2>You Are Offlline</h2>
    
    <div className='logo' > <h3>Try Again</h3> </div>
    
    </Offline>
    </div> */}
    <Detector
      render={({ online }) => (
        <Section>
          {(() => {
            if (online) {
              return <div style={{ display: "none" }}>someCase</div>;
            } else {
              return <div className="flex"></div>;
            }
          })()}
          {/* <div className={online ? "normal" : "warning"}>
      You are currently {online ? "online" : "offline"}
    </div> */}
        </Section>
      )}
    />
  </div>
);

export default App;
