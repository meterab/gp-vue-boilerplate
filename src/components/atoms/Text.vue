<template>
  <p>
    <slot />
  </p>
</template>

<script>
export default {

};
</script>

<style lang="postcss">
p {
  font-family: serif;
  font-weight: 400;
}

/* .font_raleway .visible p {

} */

.font_raleway_400 .visible p {
  font-family: "Raleway", serif;
}
</style>
