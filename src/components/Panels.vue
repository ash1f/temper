<template>
  <div>
    <div class="nav">
        <div class="link" v-if="canIGoBack()">
            <button @click="navigateBack()">back</button>
        </div>
    </div>
    <div class="sidebar-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
    data () {
        return {
            slideable: 'slide-right',
        }
    },
    methods: {
        navigateBack() { // method to go back to the previous panel
            const url = this.getBackUrl(this.$route.path)
            this.$router.push(url)
        },
        getBackUrl (url) { //get url by removing the value after last indexed trailing slash
            const path = url;
            const lastIndex = url.lastIndexOf('/')
            const newpath = path.substring(0, lastIndex)
            return newpath;
        },
        filterUrlArray(arr) { //trim splitted url array to remove pre and trailing slashes
            var filtered = arr.filter(function (val) {
                if(val){
                    return val;
                }
            });
            return filtered;
        },
        canIGoBack() { //if url length is acceptable will return true
            const url = this.filterUrlArray(this.$route.path.split('/'))
            if(url.length > 1){
                return true
            }
            return false;
        }
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}
</script>

<style>
.sidebar-title {
    font-size: 15px;
    color: black;
    font-weight: bold;
}
.sidebar {
    padding: 2em 1em;
}
.nav {
    display: flex;
}
.nav h2{
    text-align: center;
}
.link {
    display: flex;
}
.link button{
    margin-right: 20px;
}
</style>
