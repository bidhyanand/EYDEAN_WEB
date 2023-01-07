import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Proposal from "./proposal";
import { useState } from "react";
import General from "./general";

const ContactTab = () => {
  const [value, setValue] = useState(true);
  return (
    <Box>
      <AppBar position="static" className="bg-gray-400 rounded-xl">
        <Tabs
          value={value}
          indicatorColor="none"
          textColor="gray"
          className="text-black-200 h-20 items-center"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            label="General Enquiry"
            className={`${value === true ? "text-white bg-black-200" : ""} 
            text-base font-bold  hover:bg-black-200 hover:text-white h-20 rounded-xl`}
            onClick={() => setValue(true)}
          />
          <Tab
            label="Request a Proposal"
            className={`${value === false ? "text-white bg-black-200" : ""} 
            text-base font-bold  hover:bg-black-200 hover:text-white h-20 rounded-xl`}
            onClick={() => setValue(false)}
          />
        </Tabs>
      </AppBar>
      <div>
        {value === true ? (
          <div>
            <General />
          </div>
        ) : (
          <div>
            <Proposal />
          </div>
        )}
      </div>
    </Box>
  );
};

export default ContactTab;
