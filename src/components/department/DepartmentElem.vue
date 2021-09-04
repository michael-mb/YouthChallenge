<template>
  <div class="thumbnail thumbnail-ordered">
    <div class="thumbnail-header group-10">
      <div class="thumbnail-number h3">{{title}}</div>
    </div><router-link class="thumbnail-media" :to="pageLink"><img :src="imageLink" alt="" style="width: 432px !important; height: 324px !important;"/></router-link>
    <div class="thumbnail-body">
      <div class="thumbnail-text">{{description}}</div>
      <router-link class="link thumbnail-link text-small" :to="pageLink">Mehr lesen</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DepartmentElem",
  props: {
    title : String,
    pageLink: String,
    imageLink: String,
    description: String,
  }
}
</script>

<style scoped>

</style>