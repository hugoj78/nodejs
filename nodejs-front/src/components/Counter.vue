<template>
  <div class="counter">
    <div class="container">
        <div class="row">
          <div>
            <p class="count"> {{ count }} </p>
            <p class="msg"> {{ msg }} </p>
          </div>
        </div>
    </div>
</div>
</template>

<script>

export default{
  name: 'Counter',
  props: {
    msg: String,
    count: Number
  }
}
</script>

<style lang="css" scoped>

.count
{
    font-size: 18px;
    background-color: #00b3e7;
    border-radius: 50%;
    position: relative;
    color: #ffffff;
    text-align: center;
    line-height: 92px;
    width: 92px;
    height: 92px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    display: inline-block;
}

.msg
{
    font-size: 24px;
    color: #000000;
    line-height: 34px;
}
</style>
