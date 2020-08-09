import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    token: localStorage.getItem('token') || '',
    status:'',
    loader:false   
  },

  mutations:{
      authSuccess(state,token){
          state.token=token;
          state.status='success';
      },
      LOADER(state,payload){
        state.loader=payload;
      },
      
      authError(state){
          state.token='';
          state.status='error';
      },
  },

  actions: {
      login(context, payload) {
        return new Promise((resolve,reject)=>{
          axios.post('/login', payload)
            .then((response) => {
              let accessToken = response.data.auth.access_token;
              context.commit('authSuccess', accessToken)
              localStorage.setItem('token', accessToken);
              axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;

              resolve(response);

            })
            .catch((error) => {
              localStorage.removeItem('token');
              context.commit('authError')
              console.log(error);
              reject(error);
            })

        })
         
      },
     
      register(context, payload) {
        return new Promise((resolve,reject)=>{
          axios.post('/register', payload)
            .then((response) => {
              let accessToken = response.data.auth.access_token;
              context.commit('authSuccess', accessToken)
              localStorage.setItem('token', accessToken);
              axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
              resolve(response);

            })
            .catch((error) => {
              localStorage.removeItem('token');
              context.commit('authError')
              console.log(error);
              reject(error);
            })
        })         
      },
  },
})