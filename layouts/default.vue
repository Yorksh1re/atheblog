<template>
  <v-app>
    <v-navigation-drawer :clipped="true" v-model="drawer" app bottom floating>
      <v-list shaped>
        <template v-for="(item, index) in this.$store.state.menu.menu">
          <v-divider
            style="margin:8px 0;"
            :key="item.path"
            v-if="index !== 0"
          ></v-divider>
          <v-list-group
            :key="item.path"
            :prepend-icon="`iconfont icon-${item.icon}`"
            v-if="item.children"
            :value="item.children.length > 0"
          >
            <template v-slot:activator>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </template>
            <v-list-item
              v-for="sub in item.children"
              :key="sub.path"
              :to="sub.path"
              router
              nuxt
              exact
            >
              <v-list-item-icon>
                <i :class="`iconfont icon-${sub.icon}`"></i>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="sub.name" />
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            :key="item.path"
            v-else
            :to="item.path"
            router
            nuxt
            exact
          >
            <v-list-item-icon>
              <i :class="`iconfont icon-${item.icon}`"></i>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name" />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left app color="#fff" class="app-bar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-container fluid>
        <v-row align="center" justify="space-between">
          <v-col xs="4" sm="4" md="4" lg="4" xl="4"
            ><v-toolbar-title
              v-text="title"
              style="font-weight:bold;font-size:24px"
          /></v-col>
          <v-col xs="8" sm="6" md="4" lg="4" xl="4">
            <v-autocomplete
              label="搜索文章"
              no-data-text="暂无信息"
              auto-select-first
              background-color
              cache-items
              clearable
              hide-details
              hide-no-data
              dense
              prefix
              rounded
              :error-count="0"
              :full-width="false"
              outlined
            >
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>

    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: null,
      title: "阿泽博客"
    };
  },
  created() {}
};
</script>

<style lang="scss">
@import "../assets/css/iconfont/iconfont.scss";

.app-bar {
  border-bottom: 1px rgba(0, 0, 0, 0.12) solid !important;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1) !important;
}

// .header {
//   border-bottom: 1px rgba(0, 0, 0, 0.12) solid;
// }
</style>
