<template>
  <div class="abstract-wrapper">
    <NoteAbstractItem
      v-for="(item, index) in currentPageData"
      :key="item.path"
      :item="item"
      :index="index + 1"
      :currentPage="currentPage"
      :currentTag="currentTag"
    />
  </div>
</template>

<script>
import NoteAbstractItem from "./NoteAbstractItem";

export default {
  components: { NoteAbstractItem },
  props: ["data", "currentPage", "currentTag"],
  computed: {
    currentPageData() {
      const start = (this.currentPage - 1) * this.$perPage;
      const end = this.currentPage * this.$perPage;
      return this.data.slice(start, end);
    },
  },
};
</script>

<style lang="stylus" scoped>
.abstract-wrapper
  width 100%
</style>
