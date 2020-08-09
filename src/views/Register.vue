<template>
    <article class="register">
        <section>
          <div class="register__back-button"> 
            <a @click.prevent="back"> Back </a>
          </div>
        <h1>Registre-se</h1>
    <form class="form-group">
        <div class="inputs">
            <input class="inputs__inputText" type="text" required v-model="userInfo.name"/>
            <label class="inputs__floatinglabel">Nome</label>
        </div>
        <div class="inputs">
            <input class="inputs__inputText" type="text" required v-model="userInfo.sobrenome"/>
            <label class="inputs__floatinglabel">Sobrenome</label>
        </div>
        <div class="inputs">
            <input class="inputs__inputText" type="email" required v-model="userInfo.email" />
            <label class="inputs__floatinglabel">Email</label>
        </div>
        <div class="inputs">
            <input class="inputs__inputText" type="text" required v-model="userInfo.username"/>
            <label class="inputs__floatinglabel">Nome de usuário</label>
        </div>
        <div class="inputs">
            <input class="inputs__inputText" type="text" required v-model="userInfo.cpf" />
            <label class="inputs__floatinglabel">CPF</label>
        </div>
        <div class="inputs">
            <input class="inputs__inputText" type="text" required v-model="userInfo.tel" />
            <label class="inputs__floatinglabel">Telefone</label>
        </div>
        <div class="inputs">
            <input class="inputs__inputText" type="text" required v-model="userInfo.password" />
            <label class="inputs__floatinglabel">Senha</label>
        </div>                                  
        <button class="btn-primary" @click="submitForm(userInfo)" :disabled="!valid">Criar uma conta</button>
    </form>        
    </section>
    </article>
</template>

<script>
export default {
  name: 'Register',
  components: {
  },
    data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
      back() {
            this.$router.push({name: 'login'})
      }
  }
}
</script>

<style lang="sass" scoped>
@import '../styles/register/register'
</style>
