<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-steps :active="active">
        <tk-step>买家下单</tk-step>
        <tk-step>商家接单</tk-step>
        <tk-step>买家提货</tk-step>
        <tk-step>交易完成</tk-step>
      </tk-steps>

      <tk-button @click="nextStep">下一步</tk-button>
    </demo-block>

    <demo-block title="描述信息">
      <tk-steps
        :active="active"
        icon="logistics"
        icon-class="steps-success"
        title="标题"
        description="描述信息"
      >
        <tk-step>买家下单</tk-step>
        <tk-step>商家接单</tk-step>
        <tk-step>买家提货</tk-step>
        <tk-step>交易完成</tk-step>
      </tk-steps>
    </demo-block>

    <demo-block title="竖向步骤条">
      <tk-steps direction="vertical" :active="0" active-color="#f60">
        <tk-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </tk-step>
        <tk-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </tk-step>
        <tk-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </tk-step>
      </tk-steps>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    };
  },

  methods: {
    nextStep() {
      this.active = ++this.active % 4;
    }
  }
};
</script>

<style lang="postcss">
.demo-steps {
  .steps-success,
  .tk-icon-location {
    color: #06bf04;
  }

  .tk-button {
    margin: 15px 0 0 15px;
  }

  .tk-steps__message + p {
    margin-bottom: 10px;
  }

  p,
  h3 {
    margin: 0;
    font-size: inherit;
    font-weight: normal;
  }
}
</style>
