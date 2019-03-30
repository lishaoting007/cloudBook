<template>
  <div class="container">
    <ul class="titles">
      <li class="titleItem" v-for="(item, index) in titleData" :key="index">
        <router-link :to="{name:'article',params:{id: item._id}}">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "titles",
  data() {
    return {
      titleData: [],
      bookData:[]
    };
  },
  methods: {
    getTitle() {
      const id = this.$route.params.id;
      this.$axios.get(this.$api.getTitle + id).then(res => {
        this.titleData = res.data;
      });
    },
    getBookData() {
      const id = this.$route.params.id;
      this.$axios.get(this.$api.getBook + id).then(res => {
          this.bookData =res.data
        document.title = this.bookData.title +"--"+"目录"
      });
    },
  },
  created() {
    this.getTitle();
    this.getBookData();
  }
};
</script>

<style scoped lang="scss">
@import "@/globalCss/px2-rem.scss";

.titles {
  padding-top: p2r(26);
  .titleItem {
    border-bottom: 1px solid #939393;
    line-height: p2r(70);
    height: p2r(70);
    padding:p2r(10)  p2r(40) 0 p2r(40);

    a {
      font-size: p2r(30);
      display: block;
    }
  }
}
</style>