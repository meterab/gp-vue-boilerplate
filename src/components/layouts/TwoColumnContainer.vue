<template>
  <gp-layout-default-container
    class="gp-layout-two-column-container"
    :class="styleClasses"
    :visible="options.visible"
  >
    <template v-slot:container>
      <div class="lost-flex-container">
        <div>
          <slot name="left" />
        </div>
        <div>
          <slot name="right" />
        </div>
      </div>
    </template>
  </gp-layout-default-container>
</template>

<script>

import gpLayoutDefaultContainer from '@/components/layouts/DefaultContainer';

export default {

  components: { gpLayoutDefaultContainer },

  props: {

    options: {
      type: Object,
      default () {
        return {
          mirror: false
        };
      }
    }

  },

  computed: {
    styleClasses () {
      return {
        'column-align--left': !this.options.mirror,
        'column-align--right': this.options.mirror
      };
    }
  }

};
</script>

<style lang="postcss">
.gp-layout-two-column-container {
  & .lost-flex-container {
    align-items: center;

    @media (--xs-max) {
      flex-direction: column;
    }

    & > div {
      lost-column: 12/12;

      @media (--sm) {
        lost-column: 6/12;
      }
    }
  }

  &.column-align--left {
    & .lost-flex-container {
      & > div {
        &:first-child {
          order: 0;
        }

        &:last-child {
          order: 1;
        }
      }
    }
  }

  &.column-align--right {
    & .lost-flex-container {
      /* stylelint-disable-next-line no-descending-specificity */
      & > div {
        &:first-child {
          order: 1;
        }

        &:last-child {
          order: 0;
        }
      }
    }
  }
}
</style>
