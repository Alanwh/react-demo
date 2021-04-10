### react 学习

### 课程大类
* lesson1 ~ lesson52 react + react-router + redux
* lesson53 ~ lesson60 常见优化
* lesson61 ~ lesson112 demo 实现
* lesson113 ~ lesson128 新特性 hook
* lesson129 ~ lesson139 dva

### 元素渲染
### 组件
组件的后缀可以是js, 也可以是jsx
一个react 项目, 由成千上万的组件组成

### 事件处理
1. this 问题
2. 向事件处理函数传递参数

### state

### react 生命周期函数
componentWillMount
componentDidMount
shouldComponentUpdate
componentWillUpdate
componentDidUpdate
componentWillRevieceProps
componentWillUnmount

### setState 是同步还是异步
1. setState会引起重绘
2. 可控的情况下是异步，非可控是同步

### 组合和继澄
this.props.children
<compose><div>相当于vue里面的slot</div></compose>

### propTypes 验证
1. propTypeDemo.propTypes = { title: propTypes.String.isrequired}
1. propTypeDemo.defaultProps = { title: '默认title' }

### antd
lesson17 ~ lesson19

### fetch 
res.json()
qs.stringfy(json)

### 跨域
* 开发模式下: 1. package.json 配置 proxy  2. express mock + http-proxy-middleware + setupProxy.js
* 生产模式下: cors

### api 封装
lesson25

### react-router
Router
Route
Link
Switch
exact 精确匹配 + strict 严格模式
render
Navlink 选中添加active activeClassName activeStyle
/:id?/:name? props.match.params.id
new URLSearchParams(props.location.search).get('name') qs.parse(props.location.search)
state 隐形传递
redirect from to
props.history.push('/')
props.history.replace('/')
withRouter(Component)
Prompt 钩子函数组件 调用alert

### redux

### 优化
* 定时器,网络请求,绑定事件,在组件销毁前移除
* shouldComponentUpdate 优化子组件渲染
* pureComponent 数据钱比较
* fragment 与 <>
* context
* 高阶组件 1. 函数 2. 参数是组件 3. 返回值也是组件
* errorboundry  componentDidCatch
