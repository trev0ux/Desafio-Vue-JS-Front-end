<template>
    <section class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="login-panel bg-white text-left">
                    <div class="alert alert-primary" role="alert" :style="{opacity: isAlertShow ? 1 : 0}">
                        Login successfully. <small>waiting for redirect.</small>
                        <loader-component width="30"></loader-component>
                    </div>
                    <h1 class="display-3 font-weight-bold">Login</h1>
                    <p class="font-weight-bold">Welcome back</p>
                    <br>
                    <form action="">
                        <div class="form-group">
                            <label class="input-label">Email</label>
                            <input type="email" class="form-control" v-model="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label class="input-label">Password</label>
                            <input type="password" v-model="password" class="form-control" placeholder="Password">
                        </div>
                        <br>
                        <div class="form-group d-flex justify-content-center">
                            <button class="btn btn-primary w-25" id="login" @click.prevent="login" v-if="!isLoggingIn">Login</button>
                            <button class="btn btn-primary w-25" disabled @click.prevent="login" v-if="isLoggingIn"><loader-component width="30"></loader-component></button>
                        </div>
                        <div class="form-group d-flex justify-content-center">
                            <button class="btn btn-secondary w-25" id="login" @click.prevent="register">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import LoaderComponent from '../components/LoadingComponent'
import { setTimeout } from 'timers';

export default {
    components: { LoaderComponent },
    data() {
        return {
            email:null,
            password:null,
            isLoggingIn: false,
            isAlertShow: false
        }
    },
    methods: {
        login() {
            this.isLoggingIn = true
            setTimeout(() => {
                this.isLoggingIn = false
                this.isAlertShow = true
                setTimeout(() => this.redirect(), 1000)
            }, 1000)
            this.$store.dispatch('login',{email:this.email,password:this.password}).then(()=>{
            this.$router.push('/'); })
        },
        redirect() {
            this.$router.push({name: 'my-account'})
        },
        register() {
            this.$router.push({name: 'register'})
        }
    }
}
</script>

<style lang="scss">
.widget {
    margin: 0;
    height: unset;
}
.login-panel {
    position: relative;
    padding: 200px 0;
    .alert {
        opacity: 0;
        position: absolute;
        width: 100%;
        top: 100px;
        transition: all .5s;
        &.alert-primary {
            background-color: #007BFF;
            color: #fff;
            font-size: 18px;
            border: none;
        }
        .widget {
            position: absolute;
            right: 5px;
            top: 0;
            margin: 10px;
        }
    }
}
</style>