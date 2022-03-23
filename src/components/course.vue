<template>
<div class="common-layout">
  <button @click="getdata()"></button>
   <el-container>
      <el-header height = "60px">
		  <el-col :span="1"><el-button type="primary" icon="el-icon-arrow-left">返回</el-button></el-col>
		  <div>课程名称</div>
	  </el-header>
      <el-container>
        <el-aside width="1000px">
			      <video    :preload="preload"
			              :poster="videoImg" :height="height" :width="width" align="center" :controls="controls"  :autoplay="autoplay">
			        <source :src="videoSrc" type="video/mp4">
			      </video>
	
		</el-aside>
        <el-main>
			<el-container>
			    <el-header height = "140px">
					 <el-row :gutter="30">
					   <el-col :span="8"><el-button icon="el-icon-search" circle></el-button></el-col>
					   <el-col :span="8"><el-button type="primary" icon="el-icon-edit" circle></el-button></el-col>
					   <el-col :span="8"><el-button type="success" icon="el-icon-check" circle></el-button></el-col>
					   <el-col :span="8"><el-button type="info" icon="el-icon-message" circle></el-button></el-col>
					   <el-col :span="8"><el-button type="warning" icon="el-icon-star-off" circle></el-button></el-col>
					   <el-col :span="8"><el-button type="danger" icon="el-icon-delete" circle></el-button></el-col>
					 </el-row>
				</el-header>
				
			    <el-main>
					<el-input
					  placeholder="输入关键字进行过滤"
					  v-model="filterText">
					</el-input>
					<el-tree
					  class="filter-tree"
					  :data="data"
					  :props="defaultProps"
					  default-expand-all
					  :filter-node-method="filterNode"
					  ref="tree">
					</el-tree>
				</el-main>
			  </el-container>
		</el-main>
      </el-container>
    </el-container>

</div>
</template>

<script>
	
  export default {
    name: 'Video',
	watch: {
	        filterText(val) {
	          this.$refs.tree.filter(val);
	        }
	      },
		  methods: {
		  		getdata(){
		  			var data = [];
		  			let that = this;
		  			this.axios
		  			.get("http://121.5.175.203:8080/api/Catalog")
		  			.then((response) => {
		  			 	data = response.data
		  				console.log(data.length)
		  				for(let i=0;i<data.length;i++){
		  					console.log(data.length)
		  					var chi = []
		  					for(let j=0;j<data[i].courseName.length;j++){
		  						var entity1 = {"id" : 50,"label" :data[i].courseName[j].name}
		  						chi.push(entity1)
		  					}
		  					var entity = {"id" : 25+i,"label" : data[i].subjectName,"children":chi}
		  					this.data.push(entity)
		  				}
		  			})
		  			 .catch(Error);
		  			 console.log(data.length)
		  		},
		          filterNode(value, data) {
		            if (!value) return true;
		            return data.label.indexOf(value) !== -1;
		          }
		        },
    // data () {
    //   return {
    //     videoSrc: '/Users/admin/Desktop/屏幕录制2021-05-30 13.40.31.mp4',
    //     videoImg: '/Users/admin/Desktop/Simulator Screen Shot - iPhone 11 - 2021-06-07 at 16.39.43.png',
    //     playStatus: '',
    //     muteStatus: '',
    //     isMute: true,
    //     isPlay: true,
    //     width: '900', // 设置视频播放器的显示宽度（以像素为单位）
    //     height: '500', // 设置视频播放器的显示高度（以像素为单位）
    //     preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
    //     controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
    //     autoplay: ''
    //   }
    // }
  
    // 自动播放属性,muted:静音播放
    // autoplay: 'muted',
  data() {
          return {
			      videoSrc: '/Users/admin/Desktop/屏幕录制2021-05-30 13.40.31.mp4',
			      videoImg: '/Users/admin/Desktop/Simulator Screen Shot - iPhone 11 - 2021-06-07 at 16.39.43.png',
			      playStatus: '',
			      muteStatus: '',
			      isMute: true,
			      isPlay: true,
			      width: '900', // 设置视频播放器的显示宽度（以像素为单位）
			      height: '500', // 设置视频播放器的显示高度（以像素为单位）
			      preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
			      controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
			      autoplay: '',
            filterText: '',
            data: [{
              id: 1,
              label: '一级 1',
              children: [{
                id: 4,
                label: '二级 1-1',
              },
  			{
  				id:11,
  				label:'二级1-2'
  			}]
            }, {
              id: 2,
              label: '一级 2',
              children: [{
                id: 5,
                label: '二级 2-1'
              }, {
                id: 6,
                label: '二级 2-2'
              }]
            }, {
              id: 3,
              label: '一级 3',
              children: [{
                id: 7,
                label: '二级 3-1'
              }, {
                id: 8,
                label: '二级 3-2'
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        }
  };

</script>

<style>
	#app {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	  }
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
	line-height: 100vh;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  

</style>