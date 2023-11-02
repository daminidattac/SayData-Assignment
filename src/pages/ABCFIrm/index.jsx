import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";
import ABCFIrmBoxinputstyle from "components/ABCFIrmBoxinputstyle";

import { CloseSVG } from "../../assets/images";

const ABCFIrmPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img className="h-5 w-5" src="images/img_iconhome.svg" alt="iconhome" />
      ),
      label: "Home",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconfolder.svg"
          alt="iconfolder"
        />
      ),
      label: "All Files",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconbookmark.svg"
          alt="iconbookmark"
        />
      ),
      label: "Saved",
    },
    {
      icon: (
        <Img
          className="h-5 mb-0.5 w-5"
          src="images/img_iconshare.svg"
          alt="iconshare"
        />
      ),
      label: "Integrations",
    },
    {
      icon: (
        <Img className="h-5 w-5" src="images/img_iconbin.svg" alt="iconbin" />
      ),
      label: "Trash",
    },
    {
      icon: (
        <Img
          className="h-5 mb-0.5 w-5"
          src="images/img_iconsettings.svg"
          alt="iconsettings"
        />
      ),
      label: "Settings",
    },
    {
      icon: (
        <Img
          className="h-5 mb-0.5 w-5"
          src="images/img_iconquestioncircle.svg"
          alt="iconquestioncir"
        />
      ),
      label: "Help and Support",
    },
  ];
  const [inputframevalue, setInputframevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-gothampro sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[272px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
        >
          <Text
            className="mb-[970px] ml-12 mr-[123px] mt-[30px] text-2xl md:text-[22px] text-blue-900 sm:text-xl w-auto"
            size="txtGothamProBold24"
          >
            abc firm
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: "11px 11px 11px 15px",
                gap: "12px",
                marginTop: "3px",
                color: "#344054",
                fontSize: "14px",
                borderColor: "transparent",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "4px",
                [`&:hover, &.ps-active`]: {
                  color: "#101828",
                  fontWeight: "500 !important",
                  borderColor: "#e0edffff",
                  backgroundColor: "#e0edffff !important",
                },
              },
            }}
            className="flex flex-col font-inter items-center justify-start mb-[621px] mt-[94px] sm:px-5 px-8 w-[77%]"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
          {!collapsed && (
            <div className="bg-blue-50 flex flex-col font-inter gap-4 items-center justify-center mb-6 mt-[820px] mx-auto p-4 rounded-lg w-56">
              <Img
                className="h-6 w-6"
                src="images/img_iconrocketalt.svg"
                alt="iconrocketalt"
              />
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <Text
                    className="text-center text-gray-900 text-sm w-auto"
                    size="txtInterSemiBold14"
                  >
                    Upgrade Account
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-center text-xs w-full"
                    size="txtInterRegular12"
                  >
                    Access to Unlimited Transcription
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold text-base text-center w-full"
                  shape="round"
                  color="blue_900"
                  size="sm"
                  variant="fill"
                >
                  Upgrade{" "}
                </Button>
              </div>
            </div>
          )}
        </Sidebar>
        <div className="bg-gray-50 flex flex-1 flex-col font-inter gap-[22px] items-center justify-start pb-[102px] md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-center max-w-[1168px] sm:px-5 px-9 w-full">
            <div className="flex flex-col items-center justify-center py-3 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <ABCFIrmBoxinputstyle className="flex md:flex-1 flex-col gap-10 items-center justify-center w-auto md:w-full" />
                <div className="flex flex-row gap-3 items-center justify-end w-auto">
                  <Button
                    className="flex h-10 items-center justify-center w-10"
                    shape="circle"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-5"
                      src="images/img_iconbell.svg"
                      alt="iconbell"
                    />
                  </Button>
                  <div className="flex flex-col items-center justify-end w-10">
                    <div className="flex flex-col h-10 items-center justify-start w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_image.png"
                        alt="image_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[41px] items-center justify-start w-[94%] md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1096px] w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.48px] w-auto"
                  size="txtInterSemiBold24"
                >
                  Welcome Shakirat
                </Text>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterRegular16"
                >
                  Upload your audio and Video to covert to text
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[163px] text-base text-center"
                shape="round"
                color="blue_900"
                size="md"
                variant="fill"
              >
                Transcribe File
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1096px] w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[12px] w-full">
                <Button
                  className="border border-indigo-50 border-solid flex h-10 items-center justify-center w-10"
                  shape="circle"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    src="images/img_iconfolder.svg"
                    alt="iconfolder"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-center w-full">
                  <div className="flex flex-col items-end justify-center w-full">
                    <Text
                      className="text-blue_gray-800 text-xl tracking-[-0.40px] w-auto"
                      size="txtInterSemiBold20"
                    >
                      100
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-700 text-sm w-full"
                    size="txtInterRegular14Bluegray700"
                  >
                    Uploaded Files
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[12px] w-full">
                <Button
                  className="border border-indigo-50 border-solid flex h-10 items-center justify-center w-10"
                  shape="circle"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    src="images/img_icontext.svg"
                    alt="icontext"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-center w-full">
                  <div className="flex flex-col items-end justify-center w-full">
                    <Text
                      className="text-blue_gray-800 text-xl tracking-[-0.40px]"
                      size="txtInterSemiBold20"
                    >
                      50
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-700 text-sm w-full"
                    size="txtInterRegular14Bluegray700"
                  >
                    Transcribed
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[12px] w-full">
                <Button
                  className="border border-indigo-50 border-solid flex h-10 items-center justify-center w-10"
                  shape="circle"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    src="images/img_iconbookmark.svg"
                    alt="iconbookmark"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-center w-full">
                  <div className="flex flex-col items-end justify-center w-full">
                    <Text
                      className="text-blue_gray-800 text-xl tracking-[-0.40px]"
                      size="txtInterSemiBold20"
                    >
                      20
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-700 text-sm w-full"
                    size="txtInterRegular14Bluegray700"
                  >
                    Saved
                  </Text>
                </div>
              </div>
            </List>
            <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-col gap-6 items-start justify-start max-w-[1096px] p-6 sm:px-5 rounded-[12px] w-full">
              <Text
                className="text-black-900 text-lg tracking-[-0.36px] w-auto"
                size="txtInterSemiBold18"
              >
                Recent Files
              </Text>
              <Img
                className="h-px w-full"
                src="images/img_dividers.svg"
                alt="dividers"
              />
              <List
                className="flex flex-col gap-2 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-blue-50_01 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                  <Img
                    className="h-full max-h-12 sm:w-[] md:w-[]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Name
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Type
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Duration
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Date Created
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Last Updated
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Action
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 outline outline-gray-200 w-full">
                  <Img
                    className="h-full max-h-12 sm:w-[] md:w-[]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Peng Meeting
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Audio
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      20:
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Tofunmi
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-12 md:h-auto items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Table cell
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 outline outline-gray-200 w-full">
                  <Img
                    className="h-full max-h-12 sm:w-[] md:w-[]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Tofunmi Idowu
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      SML10025
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      1/5/2023
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Constance
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-12 md:h-auto items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Table cell
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 outline outline-gray-200 w-full">
                  <Img
                    className="h-full max-h-12 sm:w-[] md:w-[]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Naomi Igimoh
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      SML10025
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      25/4/2023
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Shakirat
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-12 md:h-auto items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Table cell
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 outline outline-gray-200 w-full">
                  <Img
                    className="h-full max-h-12 sm:w-[] md:w-[]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Edu Hermanns
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      SML10025
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      20/4/2023
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Tofunmi
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-12 md:h-auto items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Table cell
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 outline outline-gray-200 w-full">
                  <Img
                    className="h-full max-h-12 sm:w-[] md:w-[]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Timmy Adubi
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      SML10025
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      20/4/2023
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Tofunmi
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-12 md:h-auto items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Table cell
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 outline outline-gray-200 w-full">
                  <Img
                    className="h-full max-h-12 sm:w-[] md:w-[]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Alex Oyebade
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      SML10025
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      20/4/2023
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Shakirat
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-12 md:h-auto items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Table cell
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                  <Img
                    className="h-full max-h-12 sm:w-[] md:w-[]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Ekene Smart
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      SML10025
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      20/4/2023
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Shakirat
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-12 md:h-auto items-center justify-start px-4 py-3.5 w-full">
                    <Text
                      className="text-gray-800_01 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Gray80001"
                    >
                      Table cell
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ABCFIrmPage;
