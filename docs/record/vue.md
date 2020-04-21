<!-- ## vue 源码学习记录 -->

## 1.变化侦测
#### 数据驱动视图
1. Object的变化监测
  - `object.definProperty`方法 进行数据变化的侦测
  - 侦测到的数据通过依赖找到视图，并更新(在getter中收集依赖，在setter中更新依赖)

3. Array的变化监测