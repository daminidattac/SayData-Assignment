import React from "react";

import { Img, Input } from "components";

import { CloseSVG } from "../../assets/images";

const ABCFIrmBoxinputstyle = (props) => {
  const [inputframevalue, setInputframevalue] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Input
              name="inputframe"
              placeholder="Search here..."
              value={inputframevalue}
              onChange={(e) => setInputframevalue(e)}
              className="!placeholder:text-blue_gray-500 !text-blue_gray-500 font-inter p-0 text-left text-sm w-full"
              wrapClassName="flex rounded-md w-full"
              prefix={
                <Img
                  className="cursor-pointer h-5 mr-2 my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#667185"
                  className="cursor-pointer h-5 my-auto"
                  onClick={() => setInputframevalue("")}
                  style={{
                    visibility:
                      inputframevalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
              shape="round"
              color="gray_50"
              size="xs"
              variant="fill"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

ABCFIrmBoxinputstyle.defaultProps = {};

export default ABCFIrmBoxinputstyle;
