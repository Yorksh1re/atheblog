<template>
  <v-container class="blog-layout pa-0" fluid>
    <v-row class="px-3">
      <v-col xs="12" sm="12" md="8" lg="8" xl="8">
        <!-- 轮播 -->
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide }} Slide</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <!-- 内容卡片 -->
        <v-card rounded="0">
          <!-- tabs -->
          <v-tabs v-model="state.tabIndex">
            <v-tab>
              推荐
            </v-tab>
            <v-tab>
              热门
            </v-tab>
            <v-tab>
              最新
            </v-tab>
            <v-tabs-items v-model="state.tabIndex">
              <v-tab-item>
                <recommend />
              </v-tab-item>
              <v-tab-item>
                <hot />
              </v-tab-item>
              <v-tab-item>
                <latest />
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </v-card>
      </v-col>
      <!-- 广告或其他内容 -->
      <v-col class="hidden-xs-only" xs="0" sm="0" md="4" lg="4" xl="4">
        <v-card>123 </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Recommend from "@/components/blog/recommend";
import Hot from "@/components/blog/hot";
import Latest from "@/components/blog/latest";

export default {
  data() {
    return {
      state: {
        tabIndex: 0
      },
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  },
  components: {
    Recommend,
    Hot,
    Latest
  }
};
</script>

<style lang="scss">
.blog-layout {
  background-color: #f6f6f6;
  min-height: 100%;
  width: 100%;
}
</style>
