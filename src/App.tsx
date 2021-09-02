
import TopBanner from "./components/TopBanner"
import NextThreeDays from "./components/NextThreeDays.tsx"
import "./stylesSCSS/App.scss"
import ParisWather from "./components/ParisWather"

function App() {
  return (
    <div className="ContainerApp">
      <TopBanner />
      <NextThreeDays />
      <ParisWather />
    </div>
  );
}

export default App;
