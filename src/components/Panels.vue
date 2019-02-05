<template>
  <div>
    <div class="nav">
        <div class="link" v-if="canIGoBack()">
            <button @click="navigateBack()">&#60; back</button>
        </div>
    </div>
    <div class="sidebar-content">
        <transition :name="transition">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
  </div>
</template>

<script>

export default {
    data () {
        return {
            slideable: 'slide-right',
            transition: 'slide-left'
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
        '$route' (to, from) { //change router transition based on going back or forward
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
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
.nav {
    display: flex;
    padding: 1em;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 15px #00000026;
}
.sidebar-content {
    padding: 2em 1em;
}
.nav h2{
    text-align: center;
}
.link {
    display: flex;
}
.link button{
    margin-right: 20px;
    font-size: 20px;
    background-color: transparent;
    outline: none;
    border: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
