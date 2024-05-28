import Footer from "./Footer";
import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import ItemList from "./ItemList";
import SideBar from "./SideBar";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
          <Header />
          <ItemList />
          <SideBar />
      </main>
      <Footer />
    </>
  );
}

export default App;
