<template>
  <gp-layout-default-container
    class="gp-organism-stage-picture"
    v-bind="options"
  >
    <template slot="background">
      <gp-atom-picture
        v-if="picture"
        v-bind="picture"
      />
    </template>
  </gp-layout-default-container>
</template>

<script>
import gpLayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import gpAtomPicture from '@/components/atoms/PictureStatic';

export default {
  components: {
    gpLayoutDefaultContainer,
    gpAtomPicture
  },

  props: {

    options: {
      type: Object,
      default () {
        return {};
      }
    },

    picture: {
      type: Object,
      required: false,
      default () {
        return {
          sources: [
            // { 'media': 'default', 'src': 'img/sample-a-16-9/retina/824x464.jpg' },
            // { 'media': 'xs', 'src': 'img/sample-a-16-9/retina/1536x864.jpg' },
            // { 'media': 'sm', 'src': 'img/sample-a-16-9/retina/1984x1116.jpg' },
            // { 'media': 'md', 'src': 'img/sample-a-16-9/retina/2400x1350.jpg' },
            // { 'media': 'lg', 'src': 'img/sample-a-16-9/retina/3200x1800.jpg' },
            // { 'media': 'xl', 'src': 'img/sample-a-16-9/retina/3840x2160.jpg' }
            { 'media': 'default', 'srcset': 'img/sample-a-16-9/412x232.jpg' },
            { 'media': 'xs', 'srcset': 'img/sample-a-16-9/768x432.jpg' },
            { 'media': 'sm', 'srcset': 'img/sample-a-16-9/992x558.jpg' },
            { 'media': 'md', 'srcset': 'img/sample-a-16-9/1200x675.jpg' },
            { 'media': 'lg', 'srcset': 'img/sample-a-16-9/1600x900.jpg' },
            { 'media': 'xl', 'srcset': 'img/sample-a-16-9/1920x1080.jpg' },
          ]
        };
      }
    }

  }
};
</script>

<style lang="postcss">
.gp-organism-stage-picture {
  position: relative;
  width: 100%;

  & picture {
    position: relative;
    display: block;

    &::before {
      display: block;
      width: 100%;
      padding-top: calc(9 / 16 * 100%);
      content: "";
    }

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}
</style>
