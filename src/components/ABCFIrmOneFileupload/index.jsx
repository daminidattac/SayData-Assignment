import React from "react";

import { Button, Img, Text } from "components";

const ABCFIrmOneFileupload = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Button
            className="flex h-12 items-center justify-center rounded-[24px] w-[49px]"
            color="blue_50"
            size="sm"
            variant="fill"
          >
            <Img
              className="h-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </Button>
          <div className="flex flex-col gap-0.5 items-center justify-start w-full">
            <div className="flex flex-row gap-1 items-center justify-center w-full">
              <div className="flex flex-col items-start justify-center rounded-md w-auto">
                <div className="flex flex-col items-center justify-center rounded-md w-auto">
                  <Text
                    className="text-blue-900 text-center text-sm w-auto"
                    size="txtInterSemiBold14Blue900"
                  >
                    {props?.uploadlabel}
                  </Text>
                </div>
              </div>
              <Text
                className="text-blue_gray-700 text-sm w-auto"
                size="txtInterRegular14Bluegray700"
              >
                {props?.uploadaction}
              </Text>
            </div>
            <Text
              className="leading-[145.00%] max-w-[668px] md:max-w-full text-blue_gray-300 text-center text-xs"
              size="txtInterRegular12Bluegray300"
            >
              {props?.uploaddescription}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ABCFIrmOneFileupload.defaultProps = {
  uploadlabel: "Click to upload",
  uploadaction: "or drag and drop",
  uploaddescription: (
    <>
      The maximum file size is 1GB for audio and 10GB for videos.
      <br />
      Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv, m4a, mov,
      wmv, wma
    </>
  ),
};

export default ABCFIrmOneFileupload;
