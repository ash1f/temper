<template>
  <div id="app">
    <div class="header"> 
    </div>
    <div class="main">
        <div class="content">
        </div>
        <div class="sidebar">
            <router-view/>
        </div>
    </div>
  </div>
</template>


<style>
body {
  margin: 0;
  overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
}
.header {
    height: 100px;
    background-color: #f1f1f1;
}
.main {
    overflow: hidden;
    display: flex;
    align-items: stretch;
    height: calc(100vh - 100px)
}
.content {
    flex: 2;
    align-items: center;
    background-color: #e8e8e8;
}
.sidebar {
    flex: 1;
}
@media screen and (max-width: 768px) {
    .main {
        flex-direction: column;
    }
}
</style>
