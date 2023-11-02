import React from "react";

import { Text } from "components";

const ABCFIrmOneRowouterrectangle = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-5 rounded w-5"></div>
        <div className="flex flex-1 flex-col items-start justify-start w-full">
          <Text
            className="text-base text-gray-900 w-full"
            size="txtInterMedium16"
          >
            {props?.controlbuttontext}
          </Text>
        </div>
      </div>
    </>
  );
};

ABCFIrmOneRowouterrectangle.defaultProps = {
  controlbuttontext: "Speaker identification",
};

export default ABCFIrmOneRowouterrectangle;
