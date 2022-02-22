import '../styles/globals.css'
import MouseContextProvider from "../utils/mouse-context";
import Mouse from "../comp/Mouse";

function MyApp({ Component, pageProps,children }) {
  return <MouseContextProvider>
  <Mouse/>
  {children}
  <Component {...pageProps} />
  </MouseContextProvider>
}

export default MyApp
