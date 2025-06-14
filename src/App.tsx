import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Doperaider } from "./screens/Doperaider";
import { DoperaiderMap } from "./screens/DoperaiderMap";
import { DoperaiderMapScreen } from "./screens/DoperaiderMapScreen";
import { DoperaiderMarket } from "./screens/DoperaiderMarket";
import { DoperaiderMarketScreen } from "./screens/DoperaiderMarketScreen";
import { DoperaiderScreen } from "./screens/DoperaiderScreen";
import { DoperaiderYou } from "./screens/DoperaiderYou";
import { DoperaiderYouScreen } from "./screens/DoperaiderYouScreen";
import { DoperaiderYouWrapper } from "./screens/DoperaiderYouWrapper";
import { Screen9 } from "./screens/Screen9";
import { DoperaiderIntro } from "./screens/DoperaiderIntro";
import { DoperaiderRaid } from "./screens/DoperaiderRaid/DoperaiderRaid";
import { DoperaiderRaidScreen } from "./screens/DoperaiderRaidScreen";
import { Screen8 } from "./screens/Screen8";
import { DoperaiderRaidWrapper } from "./screens/DoperaiderRaidWrapper";
import { DoperaiderAirdrop } from "./screens/DoperaiderAirdrop";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <DoperaiderMap />,
  },
  {
    path: "/",
    element: <DoperaiderIntro />,
  },
  {
    path: "/doperaider-u8212-map",
    element: <DoperaiderMap />,
  },
  {
    path: "/doperaider-u8212-map-u8211-chinatown-selected",
    element: <DoperaiderMapScreen />,
  },
  {
    path: "/doperaider-u8212-market-u8212-trade-popup",
    element: <DoperaiderMarket />,
  },
  {
    path: "/doperaider-u8212-production-u8212-weed-active",
    element: <Doperaider />,
  },
  {
    path: "/doperaider-u8212-production",
    element: <DoperaiderScreen />,
  },
  {
    path: "/doperaider-u8212-market",
    element: <DoperaiderMarketScreen />,
  },
  {
    path: "/doperaider-u8212-you-u8212-trophies",
    element: <DoperaiderYou />,
  },
  {
    path: "/doperaider-u8212-you-u8212-inventory",
    element: <DoperaiderYouScreen />,
  },
  {
    path: "/doperaider-u8212-you-u8212-upgrades",
    element: <DoperaiderYouWrapper />,
  },
  {
    path: "/doperaider-u8212-you-u8212-upgrades2",
    element: <Screen9 />,
  },
  {
    path: "/doperaider-u8212-raid",
    element: <Screen9 />,
  },
  {
    path: "/doperaider-u8212-raid-u8212-active-raid",
    element: <DoperaiderRaidScreen />,
  },
  {
    path: "/doperaider-u8212-raid-u8212-active-raid-u8212-win",
    element: <DoperaiderRaid />,
  },
  {
    path: "/doperaider-u8212-raid-u8212-selected-player",
    element: <Screen8 />,
  },
  {
    path: "/doperaider-u8212-raid-u8212-selected-player-u8212-protected",
    element: <DoperaiderRaidWrapper />,
  },
  {
    path: "/doperaider-u8212-airdrop",
    element: <DoperaiderAirdrop />,
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
