import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Layout from "./layout/layout";
import AppRoutes from "./routes";
import store, { persistor } from "./redux/store";
import { SWRConfig } from "swr";

function App() {
  return (
    <SWRConfig value={{ revalidateOnMount: true, dedupingInterval: 60000 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <AppRoutes />
          </Layout>
        </PersistGate>
      </Provider>
    </SWRConfig>
  );
}

export default App;
