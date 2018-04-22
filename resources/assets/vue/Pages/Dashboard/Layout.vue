<template>
    <div id="main-layout">
        
        <navbar />

        <div class="container">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import navbar from './Partials/Navbar'
    import { mapMutations } from 'vuex'

    export default {

        components : { navbar },

        data: () => ({
            drawer: true
        }),

        mounted () 
        {
            this.getUserInfo()
        },

        methods: {

            ...mapMutations([
                'SET_USER'
            ]),

            getUserInfo () 
            {
                let headers = { 'Authorization': this.$auth.getToken() }
                this.$http.get(`${window.basePath}/auth/user`, {headers})
                    .then(response => {
                        this.SET_USER(response.data)
                    })
                    .catch(err => {
                        alert('Error on get user data')
                    })
            },

            toggleDrawer () {
                this.drawer = !this.drawer
            }

        }
    }
</script>

<style scoped>
    #main-layout {
        padding-top: 70px;
    }
</style>