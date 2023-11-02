import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text } from "components";
import ABCFIrmOneFileupload from "components/ABCFIrmOneFileupload";
import ABCFIrmOneRowouterrectangle from "components/ABCFIrmOneRowouterrectangle";

const ABCFIrmOneModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[56%]"
      overlayClassName="bg-black-900_66 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-12 items-start justify-center max-w-[800px] md:px-5 px-[50px] py-10 rounded-[16px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                size="txtInterSemiBold24"
              >
                Transcribe File
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_iconmultiply.svg"
                alt="iconmultiply"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-center text-gray-900_01 text-sm w-auto"
                size="txtInterMedium14"
              >
                Transcription Language
              </Text>
              <Input
                name="frame1000007619"
                placeholder="Default"
                className="p-0 placeholder:text-blue_gray-300 text-center text-sm w-full"
                wrapClassName="flex w-full"
                suffix={
                  <Img
                    className="h-4 ml-[35px] my-px"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                shape="round"
                color="blue_gray_100"
                size="sm"
                variant="outline"
              ></Input>
            </div>
            <ABCFIrmOneFileupload className="bg-white-A700 border border-blue_gray-100_01 border-dashed flex flex-col gap-3 items-center justify-center px-4 py-10 rounded-lg w-full" />
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-center text-gray-900_01 text-sm w-auto"
                size="txtInterMedium14"
              >
                Import from Link
              </Text>
              <Input
                name="frame1000007619_One"
                placeholder="Paste a Drobpox, Google Drive or Youtube URL here"
                className="p-0 placeholder:text-blue_gray-300 text-center text-sm w-full"
                wrapClassName="w-full"
                shape="round"
                color="blue_gray_100"
                size="sm"
                variant="outline"
              ></Input>
            </div>
            <ABCFIrmOneRowouterrectangle className="flex md:flex-col flex-row gap-2 items-center justify-start w-full" />
          </div>
          <Button
            className="cursor-pointer font-semibold text-base text-center w-full"
            shape="round"
            color="blue_gray_100_01"
            size="md"
            variant="fill"
          >
            Transcribe File
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ABCFIrmOneModal;
