<script>
import ModuleLocales from '@/extends/ModuleLocales';

export default {
  extends: ModuleLocales,
  mounted () {
    const test = '123';

    //https://github.com/webpack/webpack/issues/4772

    // import(/* webpackMode: "eager" */`imports-loader?config=>${JSON.stringify(size)}!@/test/123`)

    // const r = require.context(`${CLIENT_APP_PATH}`, false);
    // r.keys().forEach(key => console.log(key));
    // var t = './123';
    // console.log('HURRA', r(t));

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
