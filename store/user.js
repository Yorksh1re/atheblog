export const state = () => ({
  user: {
    uid: "",
    nickName: ""
  },
  isLogin: false
});

export const mutations = {
  login(state, user) {
    state.user = user;
  },
  logout(state, user) {
    state.user = {
      uid: "",
      nickName: ""
    };
  }
};
