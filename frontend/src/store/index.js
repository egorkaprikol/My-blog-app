import { createStore } from 'vuex';
import { fetchArticles } from '@/api/articles';

const store = createStore({
  state: {
    articles: [],
    comments: [],
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    }
  },
  actions: {
    async fetchArticles({ commit }) {
      const response = await fetchArticles();
      if (response) {
        commit('SET_ARTICLES', response);
      }
    }
  }
});

export default store;