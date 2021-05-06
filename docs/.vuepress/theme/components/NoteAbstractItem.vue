<template>
  <div
    class="abstract-item"
    @click="$router.push(item.path)"
    :class="index % 2 == 0 ? 'draw' : 'draw meet'"
  >
    <div class="img-cover draw">
      <img :src="item.frontmatter.img || '/img/blog_img.jpg'" />
    </div>
    <div class="text">
      <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
      <div class="title">
        <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
        <router-link :to="item.path">{{ item.title }}</router-link>
      </div>
      <div class="abstract" v-html="item.excerpt"></div>
      <PageInfo :pageInfo="item" :currentTag="currentTag"> </PageInfo>
    </div>
  </div>
</template>

<script>
import { RecoIcon } from "@vuepress-reco/core/lib/components";
import PageInfo from "./PageInfo";
export default {
  components: { PageInfo, RecoIcon },
  props: ["index", "item", "currentPage", "currentTag"],
};
</script>

<style lang="stylus" scoped>
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  display flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  &::before, &::after
    box-sizing inherit
    content ''
    position absolute
    border 2px solid transparent
    width 0
    height 0
  &.draw
    &::before
      top 0
      left 0
    &::after
      bottom 0
      right 0
    &:hover::before, &:hover::after
      width 100%
      height 100%
    &:hover::before
      border-top-color $accentColor
      border-right-color $accentColor
      transition width .25s ease-out,height .25s ease-out .25s
    &:hover::after
      border-bottom-color $accentColor
      border-left-color $accentColor
      transition border-color 0s ease-out .5s,width .25s ease-out .5s,height .25s ease-out .75s
    &.meet
      &::after
        top 0
        left 0
      &:hover::after
        transition height .25s ease-out,width .25s ease-out .25s
  > * {
    pointer-events: auto;
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
    .img-cover img
      transform: scale(1);
  .img-cover
    width: 100%;
    flex: 1;
    transition: 1s ease-out;
    border-radius: .5rem;
    overflow: hidden;
    height: 200px;
    position: relative;
    img
      width: 100%;
      height: 100%;
      transition: transform .5s;
      transform: scale(1.1);
  .text
    margin: 0 1rem;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    display: flex;
    transition: all .3s;
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    // &:after
    //   content: "";
    //   position: absolute;
    //   width: 100%;
    //   height: 2px;
    //   bottom: 0;
    //   left: 0;
    //   background-color: $accentColor;
    //   visibility: hidden;
    //   -webkit-transform: scaleX(0);
    //   transform: scaleX(0);
    //   transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
