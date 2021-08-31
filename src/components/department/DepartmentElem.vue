<template>
  <div class="thumbnail thumbnail-ordered">
    <div class="thumbnail-header group-10">
      <div class="thumbnail-number h3">{{title}}</div>
    </div><a class="thumbnail-media" :href="pageLink"><img :src="imageLink" alt="" style="width: 432px !important; height: 324px !important;"/></a>
    <div class="thumbnail-body">
      <div class="thumbnail-text">{{description}}</div>
      <a class="link thumbnail-link text-small" :href="pageLink">Mehr lesen</a>
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