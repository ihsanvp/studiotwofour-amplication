import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { BannerClientList } from "./bannerClient/BannerClientList";
import { BannerClientCreate } from "./bannerClient/BannerClientCreate";
import { BannerClientEdit } from "./bannerClient/BannerClientEdit";
import { BannerClientShow } from "./bannerClient/BannerClientShow";
import { BannerCampaignList } from "./bannerCampaign/BannerCampaignList";
import { BannerCampaignCreate } from "./bannerCampaign/BannerCampaignCreate";
import { BannerCampaignEdit } from "./bannerCampaign/BannerCampaignEdit";
import { BannerCampaignShow } from "./bannerCampaign/BannerCampaignShow";
import { BannerList } from "./banner/BannerList";
import { BannerCreate } from "./banner/BannerCreate";
import { BannerEdit } from "./banner/BannerEdit";
import { BannerShow } from "./banner/BannerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Studiotwofour"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
        <Resource
          name="BannerClient"
          list={BannerClientList}
          edit={BannerClientEdit}
          create={BannerClientCreate}
          show={BannerClientShow}
        />
        <Resource
          name="BannerCampaign"
          list={BannerCampaignList}
          edit={BannerCampaignEdit}
          create={BannerCampaignCreate}
          show={BannerCampaignShow}
        />
        <Resource
          name="Banner"
          list={BannerList}
          edit={BannerEdit}
          create={BannerCreate}
          show={BannerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
