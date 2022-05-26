import ContentTpyesListComponent from './contentType';
import { AppRoutingPath } from "@app/const";

const ContentTypesRoutes = () => {
  const routes = [
    {
      path:AppRoutingPath.CONTENT_TYPE_LIST,
      element: <ContentTpyesListComponent />,
    }
  ];
  return routes;
};

export default ContentTypesRoutes;
