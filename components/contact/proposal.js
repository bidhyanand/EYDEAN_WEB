import { Button, Input, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { MdAttachFile } from "react-icons/md";

const useStyles = makeStyles({
  input: {
    color: "black",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#DEE0EA",
    },
  },
});
const Proposal = () => {
  const classes = useStyles();
  const [option, setOption] = useState();
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div className="flex flex-col gap-12 pt-16 text-black-200">
      <p className="font-black text-2xl sm:text-4xl lg:text-4xl 2xl:text-4xl w-4/5 sm:w-4/5 lg:w-full 2xl:w-4/5">
        Let’s craft your next business challenge today
      </p>
      <p className="text-gray-200 text-xl font-medium">
        01. Select your Industry
      </p>
      <Select
        className="font-semibold text-xl cursor-pointer text-black-200"
        variant="standard"
        cursor="pointer"
        value={option}
        onChange={handleChange}
        sx={{ bgcolor: "white" }}
      >
        <MenuItem value={10} sx={{ bgcolor: "white" }}>
          Automotive
        </MenuItem>
        <MenuItem value={20} sx={{ bgcolor: "white" }}>
          Music
        </MenuItem>
        <MenuItem value={30} sx={{ bgcolor: "white" }}>
          Business
        </MenuItem>
      </Select>
      <p className="text-gray-200 text-xl font-medium">
        02. Tell us about your company
      </p>
      <Input
        placeholder="Name of Company"
        className="font-semibold text-xl cursor-pointer text-black-200"
        inputProps={{ className: classes.input }}
      />
      <Input
        placeholder="Link to Website"
        className="font-semibold text-xl cursor-pointer text-black-200"
        inputProps={{ className: classes.input }}
      />
      <p className="text-base font-medium">
        If you have a requirement brief or document
      </p>
      <div className="flex items-center gap-5">
        <Button
          variant="outlined"
          component="label"
          className="flex gap-1 w-full bg-white border-2 border-black-200 rounded-xl text-black-200 h-16"
        >
          <MdAttachFile fontSize={"25px"} />
          Attach your Document
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <p className="w-4/5">Not more than 5MB</p>
      </div>
      <Input
        placeholder="Describe Your Project"
        className="font-semibold text-xl cursor-pointer text-black-200"
        inputProps={{ className: classes.input }}
      />
      <p className="text-gray-200 text-xl font-medium">
        03. Let us know how we can reach out
      </p>
      <Input
        placeholder="Your good name?"
        className="font-semibold text-xl cursor-pointer text-black-200"
        inputProps={{ className: classes.input }}
      />
      <Input
        placeholder="Email id"
        className="font-semibold text-xl cursor-pointer text-black-200"
        inputProps={{ className: classes.input }}
      />
      <Input
        placeholder="Phone Number"
        className="font-semibold text-xl cursor-pointer text-black-200"
        inputProps={{ className: classes.input }}
      />
      <p className="text-gray-200 text-xl font-medium">
        How did you hear about us?
      </p>
      <Input
        placeholder="eg. Google"
        className="font-semibold text-xl cursor-pointer text-black-200"
        inputProps={{ className: classes.input }}
      />
      <p className="text-black text-xl font-bold flex gap-5 cursor-pointer items-center justify-center lg:justify-start sm:justify-start 2xl:justify-start">
        Send Request
        <FiArrowUpRight fontSize={"35px"} />
      </p>
    </div>
  );
};

export default Proposal;
