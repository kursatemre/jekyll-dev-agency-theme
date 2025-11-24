import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import { ServiceDetail } from "../pages/ServiceDetail";
import { Blog } from "../pages/Blog";
import { BlogDetail } from "../pages/BlogDetail";
import { Portfolio } from "../pages/Portfolio";
import { CaseStudyDetail } from "../pages/CaseStudyDetail";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "hizmetler", Component: Services },
      { path: "hizmetler/:slug", Component: ServiceDetail },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogDetail },
      { path: "portfolyo", Component: Portfolio },
      { path: "portfolyo/:slug", Component: CaseStudyDetail },
      { path: "iletisim", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
