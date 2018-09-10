<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-cell-group>
        <tk-field v-model="value" placeholder="请输入用户名" />
      </tk-cell-group>
    </demo-block>

    <demo-block title="自定义类型">
      <tk-cell-group>
        <tk-field
          v-model="username"
          label="用户名"
          placeholder="请输入用户名"
          clearable
          icon="question"
          required
          @click-icon="$toast('question')"
        />

        <tk-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </tk-cell-group>
    </demo-block>

    <demo-block title="禁用输入框">
      <tk-cell-group>
        <tk-field
          value="输入框已禁用"
          label="用户名"
          left-icon="contact"
          disabled
        />
      </tk-cell-group>
    </demo-block>

    <demo-block title="错误提示">
      <tk-cell-group>
        <tk-field
          v-model="username2"
          label="用户名"
          placeholder="请输入用户名"
          error
        />
        <tk-field
          v-model="phone"
          label="手机号"
          placeholder="请输入手机号"
          error-message="手机号码格式错误"
        />
      </tk-cell-group>
    </demo-block>

    <demo-block title="高度自适应">
      <tk-cell-group>
        <tk-field
          v-model="message"
          label="留言"
          type="textarea"
          placeholder="请输入留言"
          rows="1"
          autosize
        />
      </tk-cell-group>
    </demo-block>

    <demo-block title="插入按钮">
      <tk-cell-group>
        <tk-field
          center
          clearable
          v-model="sms"
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <tk-button slot="button" size="small" type="primary">发送验证码</tk-button>
        </tk-field>
      </tk-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      sms: '',
      value: '',
      password: '',
      username: '',
      username2: '',
      message: '',
      phone: '1365577'
    };
  }
};
</script>

<style lang="postcss">
.demo-field {
  padding-bottom: 30px;

  .tk-field__icon {
    color: #38f;
  }
}
</style>
