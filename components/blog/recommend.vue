<template>
  <v-container class="blog-layout" fluid>
    <v-row class="items flex-xl-column">
      <v-col class="title">与自己和解</v-col>
      <v-col
        ><v-img
          fit="contain"
          style="width:100;height:100%;"
          src="https://t7.baidu.com/it/u=3422659475,4175282295&fm=193"
        ></v-img
      ></v-col>
      <v-col
        >我们生活在这个世界上，不同的环境铸就了不同的人。但我们每个人与这个世界交手多年，我们是否光彩依旧？这取决于我们自己。</v-col
      >
      <v-col>发布于2年前</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  //   props: "data",
  data() {
    return {
      data: [
        {
          title: "hello world",
          content: "hello!"
        },
        {
          title: "hello world",
          content: "hello!"
        },
        {
          title: "hello world",
          content: "hello!"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.blog-layout {
  width: 100%;
  display: flex;
  flex-direction: column;

  .items {
    .title {
      color: #2f2f2f;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }
    .title:hover {
      text-decoration: underline;
    }

    .abstract {
      margin-top: 8px;
      line-height: 24px;
      font-size: 13px;
      color: #999;
    }
    .info {
      display: flex;
      align-items: center;
      margin-top: 8px;
      font-size: 13px;
      color: #999;

      .icon {
        width: 2em;
        height: 2em;
      }
      > * {
        display: flex;
        align-items: center;
      }
    }
    .info > *:not(:last-child) {
      margin-right: 10px;
    }

    .blog-img {
      width: 220px;
      height: 110px;
      margin-left: 20px;
      border-radius: 4px;
      overflow: hidden;
    }
  }

  .items:not(:last-child) {
    margin-bottom: 10px;
  }

  > :not(:last-child) {
    border-bottom: 1px #eee solid;
  }
}
</style>
