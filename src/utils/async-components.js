
import {
  // hydrateWhenIdle,
  hydrateWhenVisible
} from 'vue-lazy-hydration';

export function getAsyncComponents (componentsData, initialVisibleComponents = 2) {
  return componentsData.map((item, index) => {
    let asyncLoad = () => import(`@/components/organisms/${item.component}`);
    item.data.options = item.data.options || {};
    if (index >= initialVisibleComponents) {
      return {
        asyncComponent: hydrateWhenVisible(
          asyncLoad,
          { observerOptions: { rootMargin: '100px' } }
        ),
        data: item.data
      };
    }
    item.data.options = Object.assign(item.data.options, {
      visible: true
    });
    return {
      asyncComponent: () => import(/* webpackMode: "eager" */`@/components/organisms/${item.component}`),
      data: item.data
    };
  });
}
