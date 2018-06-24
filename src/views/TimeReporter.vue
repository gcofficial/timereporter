<template>
  <div id="TimeReporter">
    <sui-sidebar class="visible" transition="uncover" direction="left">
      <div class="card">
        <div class="left">
          <img src="../assets/img/eugen.png" alt="Eugen">
        </div>
        <div class="right">
          <b>Ievgenii Guriev</b>
          <small>JavaScript Developer</small>
        </div>
      </div>
      <div class="separator"></div>
      <sui-menu-item link icon="icon_house_alt" active> Home</sui-menu-item>
      <sui-menu-item link icon="icon_cog"> Settings</sui-menu-item>
      <sui-menu-item link icon="arrow_carrot-left"> Log out</sui-menu-item>
    </sui-sidebar>
    <sui-sidebar-pusher>
      <h1>Hello! There will be time report UI!</h1>
    </sui-sidebar-pusher>
  </div>
</template>

<script>
export default {
  name: 'TimeReporter'
}
</script>


<style scoped>
  .sidebar.ui.vertical.menu{
    background: #f4f6f9;
    box-shadow: none;
  }

  .card{
    display: flex;
    margin: 20px;
  }

  .card .left{
    width: 50px;
    margin-right: 10px;
  }
  .card .left img{
    width: 100%;
    border-radius: 4px;
  }
  .card small{
    display: block;
  }
  .separator{
    height: 1px;
    width: 100%;
    background: rgba(98, 98, 98, 0.2);
    margin-bottom: 20px;
  }

  .ui.vertical.sidebar.menu>.item::before{
    display: none;
  }
  
  .ui.vertical.sidebar.menu>.item.active,
  .ui.vertical.sidebar.menu>.item:hover{
    background: #fff;
  }
</style>