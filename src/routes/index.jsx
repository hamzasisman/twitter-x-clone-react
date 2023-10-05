import { createBrowserRouter } from "react-router-dom";
import Explore from "~/pages/Explore";
import Home from "~/pages/Home";
import PageNotFound from "~/pages/PageNotFound";
import Notification from "~/pages/Notification";
import MainLayout from "~/layout/main";

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "explore",
                    element: <Explore />
                },
                {
                    path: "notification",
                    element: <Notification />
                },
                {
                    path: "*",
                    element: <PageNotFound />
                }
            ]
        },

    ]
)

export default routes