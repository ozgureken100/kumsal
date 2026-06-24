import { HomePage } from "./pages/HomePage";
import { LocalPage } from "./pages/LocalPage";
import { localPages } from "./data/siteData";

export default function App() {
  const path = window.location.pathname;
  const localPage = localPages[path];

  if (localPage) {
    return <LocalPage page={localPage} />;
  }

  return <HomePage />;
}
