# 说明

* 为了做到能按需引用组件样式，单个组件样式也需要引用custom.less这样的通用样式

# 规范

- 主要：“ds-组件-**”
- 一般最外层包裹为：“ds-组件-wrapper”
- 如果组件有按类型区分：primary、dashed、text、info、success、warning、error
    - “ds-组件-primary”
- 按状态：selected、disabled、checked
- 按方向：horizontal
- 按风格：dark、light
- 有多个子类，使用item：“ds-组件-menu-item”
- 待续...