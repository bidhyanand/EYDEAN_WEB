import { Input } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  input: {
    color: "black",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#DEE0EA",
    },
  },
});

const General = () => {
  const classes = useStyles();

  return (
    <div className="flex flex-col gap-12 pt-16 text-black-200">
      <p className="font-black text-2xl sm:text-4xl lg:text-4xl 2xl:text-4xl w-4/5 sm:w-4/5 lg:w-4/5 2xl:w-3/5 ">
        Let us know how can we help
      </p>
      <p className="text-black text-xl font-medium">Your good name?</p>
      <Input
        placeholder="Full Name"
        className="font-semibold text-xl text-black-200"
        inputProps={{ className: classes.input }}
      />
      <Input
        placeholder="Email id"
        className="font-semibold text-xl text-black-200"
        inputProps={{ className: classes.input }}
      />
      <Input
        placeholder="Phone Number"
        className="font-semibold text-xl text-black-200"
        inputProps={{ className: classes.input }}
      />
      <Input
        placeholder="How can we help you?"
        className="font-semibold text-xl text-black-200"
        inputProps={{ className: classes.input }}
      />
      <p className="text-black text-xl font-bold flex gap-5 cursor-pointer items-center justify-center lg:justify-start sm:justify-start 2xl:justify-start">
        Send Enquiry
        <FiArrowUpRight fontSize={"35px"} />
      </p>
    </div>
  );
};

export default General;
