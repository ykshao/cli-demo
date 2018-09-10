import docConfig from './doc.config';
import DemoList from './components/DemoList';
import componentDocs from './docs-entry';
import componentDemos from './demo-entry';
import './utils/iframe-router';

const registerRoute = (isDemo) => {
  const route = [{
    path: '*',
    redirect: to => `/`
  }];

  if (isDemo) {
    route.push({
      path: `/`,
      component: DemoList
    });
  } else {
    route.push({
      path: `/`,
      redirect: `/intro`
    });
  }

  const navs = docConfig.nav || [];
  navs.forEach(nav => {
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(page => addRoute(page));
      });
    } else {
      addRoute(nav);
    }
  });

  function addRoute(page) {
    let { path } = page;
    if (path) {
      path = path.replace('/', '');

      const component = isDemo ? componentDemos[path] : componentDocs[`${path}`];

      if (!component) {
        return;
      }

      route.push({
        name: path,
        component,
        path: `/${path}`,
        meta: {
          path,
          name: page.title
        }
      });
    }
  }

  return route;
};

export default registerRoute;
