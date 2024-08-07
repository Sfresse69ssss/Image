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
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { FaceList } from "./face/FaceList";
import { FaceCreate } from "./face/FaceCreate";
import { FaceEdit } from "./face/FaceEdit";
import { FaceShow } from "./face/FaceShow";
import { BodyTypeList } from "./bodyType/BodyTypeList";
import { BodyTypeCreate } from "./bodyType/BodyTypeCreate";
import { BodyTypeEdit } from "./bodyType/BodyTypeEdit";
import { BodyTypeShow } from "./bodyType/BodyTypeShow";
import { FeaturesList } from "./features/FeaturesList";
import { FeaturesCreate } from "./features/FeaturesCreate";
import { FeaturesEdit } from "./features/FeaturesEdit";
import { FeaturesShow } from "./features/FeaturesShow";
import { HairColorList } from "./hairColor/HairColorList";
import { HairColorCreate } from "./hairColor/HairColorCreate";
import { HairColorEdit } from "./hairColor/HairColorEdit";
import { HairColorShow } from "./hairColor/HairColorShow";
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
        title={"ImageEditorService"}
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
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="Face"
          list={FaceList}
          edit={FaceEdit}
          create={FaceCreate}
          show={FaceShow}
        />
        <Resource
          name="BodyType"
          list={BodyTypeList}
          edit={BodyTypeEdit}
          create={BodyTypeCreate}
          show={BodyTypeShow}
        />
        <Resource
          name="Features"
          list={FeaturesList}
          edit={FeaturesEdit}
          create={FeaturesCreate}
          show={FeaturesShow}
        />
        <Resource
          name="HairColor"
          list={HairColorList}
          edit={HairColorEdit}
          create={HairColorCreate}
          show={HairColorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
