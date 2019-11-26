<script>
import ModuleLocales from '@/extends/ModuleLocales';

export default {
  name: 'About',
  extends: ModuleLocales,
  nuxtI18n: {
    paths: {
      en: '/about',
      de: '/ueber-uns'
    }
  },
  mounted () {
    const test = 'abc';
    // import(/* webpackMode: "eager" */`imports-loader?config=>${JSON.stringify(size)}!@/test/123`)
    import(/* webpackMode: "eager" */`@/test/${test}`)
      .then((result) => {
        callComponents(result);
        return null;
      })
      .catch((e) => {
        throw e;
      });
  }
};

function callComponents (result) {
  result.default.components.forEach((item) => {
    console.log(item);
    item.component().then((result) => {
      result.default();
      return;
    }).catch((e) => console.log(e));
  });
}
</script>
