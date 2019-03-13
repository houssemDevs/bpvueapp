import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface IState {
  title: string;
}

const state: IState = {
  title: 'Welcome to VueJS',
};

export default new Vuex.Store({ state });
