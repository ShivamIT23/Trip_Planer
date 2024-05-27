import Footer from "./Footer";
import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import ItemList from "./ItemList";
import SideBar from "./SideBar";
import ItemsContextProvider from "../contexts/ItemsContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <SideBar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
