<template>
  <el-container style="height: 100vh">
    <el-aside style="width: auto;">
      <SideBar></SideBar>
    </el-aside>
    <el-container>
      <el-header style="padding: 0px;">
        <HeadBar></HeadBar>
      </el-header>
      <TagBar></TagBar>
      <el-main>
        <div id="container">
          <div class="col1">
            <div v-for="item in list1" :id="item.nodeId" name="cell" :key="item.nodeId">{{item.name}}</div>
          </div>
          <div class="col2">
            <div v-for="item in list2" :id="item.nodeId" name="cell" :key="item.nodeId">{{item.name}}</div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import TagBar from '@/components/TagBar.vue'

export default {
  components: {
    SideBar,
    HeadBar,
    TagBar,
  },
  data() {
    return {
      jsPlumb: null,
      list1: [{ name: 'XX', nodeId: 'x' }, { name: 'YY', nodeId: 'y' }, { name: 'ZZ', nodeId: 'z' }],
      list2: [{ name: 'AA', nodeId: 'a' }, { name: 'BB', nodeId: 'b' }, { name: 'CC', nodeId: 'c' }],
      connlist: [{ sourceNodeId: 'x', targetNodeId: 'a' }, { sourceNodeId: 'y', targetNodeId: 'b' }, { sourceNodeId: 'z', targetNodeId: 'c' }]
    }
  },
  created() {
    this.jsPlumb = this.$jsPlumb.getInstance({
      Container: "container",   //选择器id
      EndpointStyle: { radius: 4, fill: "#409EFF" },  //端点样式
      PaintStyle: { stroke: '#409EFF', strokeWidth: 2 },// 绘画样式
      HoverPaintStyle: { stroke: '#67C23A' }, // 悬停样式
      EndpointHoverStyle: { fill: '#409EFF', radius: 6 }, // 端点悬停样式
      ConnectionOverlays: [['Arrow', { width: 12, length: 12, location: 1 }],], //箭头样式
      Connector: ["Flowchart", { gap: 5, cornerRadius: 5, alwaysRespectStubs: true }],     //要使用的默认连接器的类型：折线，流程等
      DrapOptions: { cursor: "crosshair", zIndex: 2000 },
      isSource: true, // 是否可以拖动（作为连线起点）
      isTarget: true, // 是否可以放置（连线终点）
      maxConnections: -1, // 设置连接点最多可以连接几条线
    });
  },
  mounted() {
    let ins = this.jsPlumb
    ins.getAllConnections();
    ins.batch(() => {
      this.initAll();
      this.connectionAll();
    });
    this.switchContainer(true, true, false);
  },
  methods: {
    initAll() {
      let rl = this.list1;
      for (let i = 0; i < rl.length; i++) {
        this.init(rl[i].nodeId)
      }
      let rl2 = this.list2;
      for (let i = 0; i < rl2.length; i++) {
        this.init(rl2[i].nodeId)
      }
    },
    // 初始化规则使其可以连线、拖拽
    init(id) {
      let ins = this.jsPlumb,
        elem = document.getElementById(id);
      ins.makeSource(elem, {
        anchor: ["Perimeter", { anchorCount: 200, shape: "Rectangle" }],
        allowLoopback: false,
        maxConnections: 1
      });
      ins.makeTarget(elem, {
        anchor: ["Perimeter", { anchorCount: 200, shape: "Rectangle" }],
        allowLoopback: false,
        maxConnections: 1
      });
      ins.draggable(elem, {
        containment: true
      });
    },
    connectionAll() {
      let ins = this.jsPlumb;
      ins.ready(() => {
        for (let i = 0; i < this.connlist.length; i++) {
          let conn = this.connlist[i],
            connection = ins.connect({
              source: conn.sourceNodeId,
              target: conn.targetNodeId
            });
          connection.setPaintStyle({ stroke: "#409EFF", strokeWidth: 2 })
        }
      })
    },
    switchContainer(target, source, draggable) {
      let elem = document.getElementsByName("cell"),
        ins = this.jsPlumb;
      ins.setSourceEnabled(elem, source);
      ins.setTargetEnabled(elem, target);
      ins.setDraggable(elem, draggable);
    },
  }
}
</script>

<style>
#container {
  margin: 50px;
  position: relative;
  background: #efefef;
  width: 400px;
  height: 400px;
}
.col2,
.col1 {
  float: left;
}
.col1 {
  margin-left: 40px;
}
.col2 {
  margin-left: 150px;
}
#container > div > div {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background: lightcyan;
  margin-top: 40px;
}
</style>