<template>
    <div>
        <a-space :size="12" direction="vertical">
            <a-popover title="Title" v-model="visible" trigger="hover">
                <template slot="content">
                <p>Content</p>
                <p>Content</p>
                </template>
                <a-button type="primary">
                Hover me
                </a-button>
            </a-popover>
            <a-popover title="Title" trigger="focus">
                <template slot="content">
                <p>Content</p>
                <p>Content</p>
                </template>
                <a-button type="primary">
                Focus me
                </a-button>
            </a-popover>
            <a-popover title="Title" trigger="click">
                <template slot="content">
                <p>Content</p>
                <p>Content</p>
                </template>
                <a-button type="primary">
                Click me
                </a-button>
            </a-popover>
        </a-space>
    </div>
  </template>

  <script>
    export default {
        name: 'Index',
        data() {
            return {
                visible: false
            }
        }
    }
  </script>
  