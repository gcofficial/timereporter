<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app{
  background: #fafafa;
  width: 100%;
  height: 100%;
}

.or-links{
  text-align: center;
  margin: 0;
  padding: 0;
}

.or-links li{
  display: inline-block;
}

.or-links li:first-child{
  margin-right: 5px;
}

.or-links li:first-child:after{
  content: ' |';
  color: rgba(0, 0, 0, 0.1);
}

.field label{
  line-height: 26px;
}

.ui.vertical.menu .item>i.icon{
  font-family: ElegantIcons;
  font-weight: 700;
  float: none;
  margin:  0;
}
</style>
