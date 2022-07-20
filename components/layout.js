import { baseURL } from "../lib/constants";
import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "./header"; 
import HeroSliderPage from "./hero-slider-page";
import HeroSliderMain from "./hero-slider-main";
import { useRouter } from "next/router"; 
// import HeroSliderFramer from "./hero-slider-framer";

export default function Layout({ children }) {
  const router = useRouter();
  const rootPath = `${baseURL}`;
  const tourPath = `/tours/[slug]`;
  const isRootPath = router.route === rootPath;
  const isTourPath = router.route === tourPath;
 
  let header;

  if (isRootPath) {
    header = (
      <> 
        <HeroSliderMain /> 
      </>
    );
  } 
  else if (isTourPath)  {
    header = (
      <> 
      </>
    );
  } else {
    header = (
      <> 
        <HeroSliderPage />
      </>
    );
  }
  return (
    <>
      <div data-is-root-path={isRootPath}>
        {/* <Meta /> */}
        <Alert />
        <Header />
        <header>{header}</header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
