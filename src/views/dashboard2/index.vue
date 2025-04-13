<template>
<div :class="className" :style="{height:height,width:width}" />
  
  
  
</template>

<script>
import { testGet } from '@/api/user'
import * as echarts from 'echarts/core';
import PanelGroup from './components/PanelGroup'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

// var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
// var option;


export default {
    props: {
        className: {
        type: String,
        default: 'chart'
        },
        width: {
        type: String,
        default: '100%'
        },
        height: {
        type: String,
        default: '350px'
        }
    },
    
    data(){
        return {
            cacheItems: 0,
            cacheFilled: 0,
            cacheCapacity: 0
        }
    },
    
    watch: {
        options: {
            handler(options) {
            this.chart.setOption(this.options)
            },
            deep: true
        },
    },
    mounted() {
        this.initCharts();
    },
    methods: {
        initCharts() {
            this.chart = echarts.init(this.$el);
            this.setOptions();
        },
        
        setOptions() {
            this.chart.setOption({
                title: {
                    text: 'Stacked Line'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                    saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            })
        },
    }
}
</script>