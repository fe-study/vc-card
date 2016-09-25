<template>
    <div class="vc-card-component" :class="{ 'no-border': !bordered }">
        <slot name="content">
            <div v-if="title" class="vc-card-header">
                <div class="title">{{ title }}</div>
            </div>
            <div class="vc-card-body" :class="bodyClass">
                <slot>{{ content }}</slot>
            </div>
        </slot>
    </div>
</template>

<style lang="less">
@border-color: #e9e9e9;
.vc-card-component {
    border: 1px solid @border-color;
    border-radius: 4px;
    display: inline-block;
    width: 100%;
    position: relative;
    margin: 0 0 16px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    background-color: #fff;

    &.no-border {
        border-color: transparent;
    }

    &:hover {
        box-shadow: 0 0 6px rgba(0,0,0,.15);
        position: relative;
        z-index: 10;
        background: #fff;
    }

    .vc-card-header {
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #e9e9e9;
        padding: 0 24px;
    }
    .vc-card-body {
        padding: 24px;
    }
}
</style>

<script>
export default {
    name: 'vc-card-component',
    props: {
        title: String,
        content: String,
        bordered: {
            type: Boolean,
            default: true
        },
        bodyClass: String
    }
}
</script>
