<template>
    <div>

        <div class="row" id="form-content">
            <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3">

                <form @submit.prevent="doRegister">
                    <div class="card border-primary">
                        <div class="card-header text-center bg-primary text-white">
                            <h3 class="card-title">Register form</h3>
                        </div>
                        <div class="card-body">

                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" v-model="user.name" placeholder="Name">
                            </div>

                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" v-model="user.email" placeholder="Email">
                            </div>

                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" v-model="user.password" placeholder="Password">
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <router-link class="btn btn-secondary" :to="{name: 'login'}">Login</router-link>
                                    </div>
                                    <div class="col-sm-6">
                                        <button class="btn btn-primary btn-block" type="submit">Register</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'LoginForm',
        data: () => ({
            user: { email: '', password: '' }
        }),

        mounted() { },

        methods: {

            doLogin () 
            {
                this.$http.post(`${window.basePath}/auth/login`, this.user)
                    .then(response => {
                        this.$auth.setToken(response.data.token)
                        this.$router.push({ path: '/' })
                    })
                    .catch(err => {
                        alert('Error on create user')
                    })
            },

            doRegister () 
            {
                this.$http.post(`${window.basePath}/auth/register`, this.user)
                .then(response => {
                    this.doLogin()
                })
                .catch(err => {
                    alert('verify your credentials')
                })
            }

        }
    }
</script>

<style scoped>
    #form-content {
        margin-top: 100px;
    }
</style>