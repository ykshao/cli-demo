<template>
  <demo-section>
    <demo-block title="Circular">
      <tk-loading color="black" />
      <tk-loading color="white" />
    </demo-block>

    <demo-block title="Spinner">
      <tk-loading type="spinner" color="black" />
      <tk-loading type="spinner" color="white" />
    </demo-block>
  </demo-section>
</template>

<style lang="postcss">
.demo-loading {
  .tk-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;
  }

  .tk-loading--white {
    padding: 10px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, .5);
  }
}
</style>
