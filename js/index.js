// 模型一各省份效率得分柱状图
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));

  // 数据
  var dataAll = {
    2013: [1.032392, 0.938487, 0.987131, 0.909404, 1.039921, 1.132836, 1.049728, 0.901108, 0.898068, 1.046973],
    2014: [1.032270, 0.941317, 0.979779, 0.902666, 1.039429, 1.134667, 1.050748, 0.922163, 0.891288, 1.046650],
    2015: [1.039179, 0.938663, 1.026310, 0.897545, 1.048650, 1.136859, 1.053322, 0.952719, 0.894269, 1.037180],
    2016: [1.035670, 0.937319, 1.025413, 0.895851, 1.045035, 1.151042, 1.064138, 0.957709, 0.888217, 1.025547],
    2017: [1.032040, 0.924245, 0.988160, 0.905779, 1.035639, 1.165410, 1.060209, 0.965510, 0.887667, 1.029981],
    2018: [1.035160, 0.919416, 0.982243, 0.911251, 1.040850, 1.170410, 1.063990, 0.968219, 0.880650, 1.025874],
    2019: [1.028270, 0.923317, 0.978789, 0.906161, 1.034550, 1.165910, 1.058740, 0.970119, 0.879950, 1.027774],
    2020: [1.031170, 0.928217, 0.976239, 0.912671, 1.037850, 1.169810, 1.061440, 0.971919, 0.882350, 1.029674],
    2021: [1.034170, 0.933117, 0.973689, 0.918471, 1.041150, 1.173710, 1.064140, 0.973719, 0.884750, 1.031574],
    2022: [1.037070, 0.938017, 0.971139, 0.924271, 1.044450, 1.177610, 1.066840, 0.975519, 0.887150, 1.033474]
  };

  var provinces = [
    "山东省", "山西省", "江苏省", "河北省", "河南省", "浙江省", "福建省", "贵州省", "青海省", "黑龙江省"
  ];

  // 指定配置和数据
  var option = {
    baseOption: {
      timeline: {
        axisType: 'category',
        autoPlay: true,
        playInterval: 2000, // 播放间隔时间，单位ms
        data: Object.keys(dataAll),
        currentIndex: 0,
        label: {
          textStyle: {
            color: '#fff' // 年份文本颜色为白色
          },
          formatter: function (value) {
            return value + '年';
          }
        },

        
        controlStyle: {
          showPrevBtn: false,
          showNextBtn: false,
          showPlayBtn: false,
          position: 'top' // 控制按钮位置在顶部
        },
        top: "5%", // 调整为适当的值，使进度条紧贴下边沿
        bottom: "80%", // 调整为适当的值，减少数字和进度条之间的间距

      },
      color: ["#2f89cf"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      grid: {
        left: "0%",
        top: "40px", // 调整 grid 顶部空间给控制按钮
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: provinces,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "效率得分值",
          type: "bar",
          barWidth: "35%",
          data: dataAll[Object.keys(dataAll)[0]], // 默认显示第一个年份的数据
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    },
    options: []
  };

  // 构建每个年份的 option
  Object.keys(dataAll).forEach(function (year) {
    option.options.push({
      series: [
        {
          data: dataAll[year]
        }
      ]
    });
  });

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 模型三各省份的农业科技进步率折线图
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('lineChart'));

  // 准备数据
  var data = {
      year: [
          2013, 2014, 2015, 2016, 2017
      ],
      values: {
          "山西省": [0.076376, 0.026662, 0.031598, 0.021840, 0.008968],
          "浙江省": [0.051213, 0.028544, 0.041338, 0.042273, 0.042626],
          "福建省": [0.037127, 0.008010, 0.019509, 0.073066, 0.120174],
          "贵州省": [0.023969, 0.012292, -0.036114, 0.095952, 0.020474],
          "河北省": [0.039275, 0.017523, -0.007422, 0.023036, 0.110334],
          "河南省": [0.030815, 0.009674, 0.005597, 0.031546, 0.037899],
          "黑龙江省": [0.083415, 0.045293, 0.039691, 0.178058, -0.141670],
          "江苏省": [0.028106, 0.016127, 0.045966, 0.035082, 0.000890],
          "青海省": [0.081866, 0.031327, -0.033469, 0.016422, 0.049528],
          "山东省": [0.000464, 0.008899, 0.012710, 0.046136, 0.058967]
      }
  };

  // 配置和数据
  var option = {
      color: ["#00f2f1", "#ed3f35", "#00aaff", "#ffaa00", "#ff00aa", "#aa00ff", "#aaff00", "#00ffaa", "#aa5500", "#5500aa"],
      tooltip: {
          trigger: "axis"
      },
      legend: {
          right: "10%",
          textStyle: {
              color: "#4c9bfd"
          },
          data: Object.keys(data.values)
      },
      grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true,
          borderColor: "#012f4a",
          containLabel: true
      },
      xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.year,
          axisTick: {
              show: false
          },
          axisLabel: {
              color: "rgba(255,255,255,.7)"
          },
          axisLine: {
              show: false
          }
      },
      yAxis: {
          type: "value",
          axisTick: {
              show: false
          },
          axisLabel: {
              color: "rgba(255,255,255,.7)"
          },
          splitLine: {
              lineStyle: {
                  color: "#012f4a"
              }
          }
      },
      series: Object.keys(data.values).map(function(province) {
          return {
              name: province,
              type: "line",
              smooth: true,
              data: data.values[province]
          };
      })
  };

  // 把配置和数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
      myChart.resize();
  });
})();


//雷达图
(function() {
  var myChart = echarts.init(document.querySelector(".radar .chart"));

  var data = {
    "2013~2014": [0.979437926, 0.995056013, 0.989918476, 0.995739353, 0.996013022, 0.995508209, 0.997063518, 0.992058653, 0.994694484, 0.995396865],
    "2014~2015": [0.997280193, 0.986584054, 0.993080453, 0.995359911, 0.99955252, 0.991990888, 1.000101995, 0.99488396, 0.9873975, 0.983019495],
    "2015~2016": [0.990704904, 0.991157275, 0.99152312, 0.986030169, 0.994328567, 0.994462665, 0.99812154, 0.985908519, 0.996832819, 0.98324737],
    "2016~2017": [0.99688682, 0.990433247, 1.002405965, 0.990008792, 0.998570981, 1.000472193, 0.994490739, 0.98599756, 0.997706968, 0.997450188],
    "2017~2018": [1.003039376, 0.99003023, 0.994563228, 0.995677923, 0.997742683, 1.003526987, 1.002178826, 0.98519343, 0.996082227, 0.997500371],
    "2018~2019": [0.993194725, 0.989542344, 0.997383833, 0.999419913, 0.986286092, 0.998603552, 1.002462702, 0.990401899, 1.0012486, 0.995733846],
    "2019~2020": [0.994376049, 0.994185372, 1.003432842, 1.002119626, 0.99635801, 1.00139082, 0.996817941, 0.993187077, 1.005866038, 1.006994476],
    "2020~2021": [0.998170888, 0.962502085, 1.004119348, 0.999760577, 1.002834912, 0.990351202, 0.998034235, 1.006822027, 0.998256688, 1.006517517],
    "2021~2022": [1.004859508, 0.963324196, 1.004239404, 0.99514121, 0.995639448, 0.995441477, 0.99865417, 0.99393747, 0.996628683, 0.996995227],
    "2022~2023": [1.023804879, 0.983131476, 0.986023748, 0.996062141, 0.978753607, 0.995217674, 0.993489328, 0.9763135, 0.98911204, 0.99190103]
  };

  var provinces = ["福建", "贵州", "河北", "河南", "黑龙江", "江苏", "浙江", "青海", "山东", "山西"];

  var years = Object.keys(data);

  var option = {
    baseOption: {
      timeline: {
        axisType: 'category',
        autoPlay: true,
        playInterval: 2000,
        controlStyle: {
          show: false // 不显示播放按钮
        },
        top: "90%", // 调整为适当的值，使进度条紧贴下边沿
        bottom: "5%", // 调整为适当的值，减少数字和进度条之间的间距
        data: years,
        label: {
          formatter: function(value, index) {
            // 只显示第一个和最后一个标签
            if (index === 0 || index === years.length - 1) {
              return value;
            } else {
              return '';
            }
          },
          textStyle: {
            color: '#fff' // 设置年份颜色为白色
          }
        }
      },
      tooltip: {
        trigger: "item",
        formatter: function(params) {
          return params.seriesName + "<br/>" + params.name + ": " + params.value;
        }
      },
      radar: {
        indicator: provinces.map(function(item) {
          return { name: item };
        })
      },
      series: [
        {
          name: "省份分布",
          type: "radar",
          data: []
        }
      ]
    },
    options: years.map(function(year) {
      return {
        series: [
          {
            data: [
              {
                value: data[year],
                name: "省份分布"
              }
            ]
          }
        ]
      };
    })
  };

  myChart.setOption(option);

  // 窗口大小变化时重绘图表
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


//条形图动画：模型四
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  // 数据集
  var dataMap = {
    '2013': [1.000309054, 0.987051822, 0.994117534, 0.982599327, 1.001306268, 1.012931561, 1.002591968, 0.981295385, 0.980813505, 1.002232318],
    '2014': [1.000292874, 0.987475583, 0.993078284, 0.981541483, 1.001241461, 1.013148932, 1.002724914, 0.984575108, 0.979731272, 1.002190068],
    '2015': [1.001208451, 0.987078244, 0.999496947, 0.980730527, 1.002451439, 1.013408711, 1.003059531, 0.989166414, 0.980208489, 1.000944312],
    '2016': [1.000744327, 0.986876426, 0.999376563, 0.98046082, 1.001978549, 1.015074799, 1.004454695, 0.989898377, 0.979237562, 0.999394567],
    '2017': [1.000262204, 0.984894131, 0.994262166, 0.982031556, 1.000740277, 1.016737981, 1.003949788, 0.991032834, 0.979148884, 0.999987749],
    '2018': [1.000493855, 0.98357533, 0.986188075, 0.980782645, 1.00065671, 1.018399376, 1.004933232, 0.992222956, 0.979241753, 1.000299564],
    '2019': [1.000124897, 0.98454833, 0.984952663, 0.98005681, 1.000786875, 1.018109775, 1.005222571, 0.991466347, 0.978793075, 0.999997471],
    '2020': [1.000699083, 0.986880359, 0.98822725, 0.981837608, 1.00127161, 1.016395774, 1.005308186, 0.988711718, 0.979502006, 1.000356377],
    '2021': [1.001541458, 0.988805561, 0.985709537, 0.981672268, 1.002327909, 1.013048413, 1.007652201, 0.991476045, 0.979936321, 1.000705823],
    '2022': [1.001365281, 0.989095632, 0.986373449, 0.982720273, 1.002068497, 1.013932066, 1.007003819, 0.99212511, 0.977932769, 1.000525824]
  };

  var years = Object.keys(dataMap);
  var provinces = ["山东省", "山西省", "江苏省", "河北省", "河南省", "浙江省", "福建省", "贵州省", "青海省", "黑龙江省"];

  var option = {
    baseOption: {
      timeline: {
        axisType: 'category',
        autoPlay: true,
        playInterval: 2000,
        controlStyle: {
          show: false // 不显示播放按钮
        },
        top: "90%", // 调整为适当的值，使进度条紧贴下边沿
        bottom: "3%", // 调整为适当的值，减少数字和进度条之间的间距
        data: years,
        label: {
          formatter: function(s) {
            return (new Date(s)).getFullYear();
          },
          textStyle: {
            color: '#fff' // 设置年份颜色为白色
          }
        }
      },
      title: {
        subtext: '数据来源：模型四'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        x: 'right',
        data: provinces
      },
      calculable: true,
      grid: {
        top: "10%",
        left: "22%",
        bottom: "10%"
      },
      xAxis: [
        {
          type: 'value',
          name: '值',
          max: 1.02,
          min: 0.97,
          interval: 0.01,
          show: false // 不显示 x 轴
        }
      ],
      yAxis: [
        {
          type: 'category',
          inverse: true,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { textStyle: { color: '#fff' } },
          data: provinces
        }
      ],
      series: [
        {
          name: '条',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          },
          itemStyle: {
            normal: {
              barBorderRadius: 10,
              color: function(params) {
                var colorList = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6', '#00ccff', '#cc33ff', '#ffcc00', '#66cc00', '#ff9966'];
                return colorList[params.dataIndex % colorList.length];
              }
            }
          },
          data: []
        }
      ]
    },
    options: []
  };

  for (var i = 0; i < years.length; i++) {
    option.options.push({
      series: [
        {
          data: dataMap[years[i]]
        }
      ]
    });
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


// 折线图
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
        data: [
          "2023",
          "2024",
          "2025",
          "2026",
          "2027",
          "2028",
          "2029",
          "2030",
          "2031",
          "2032"
        ]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        interval: 0.005, // 调整这里的值来减少纵坐标显示的数字
        min: 0.97, // 设置最小值
        max: 1.02,  // 设置最大值

      }
    ]
    
    ,
    series: [
      {
        name: "山东省",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          1.000880837,
          1.000888705,
          1.000830293,
          1.000757456,
          1.000739217,
          1.000718117,
          1.000702381,
          1.000694275,
          1.000687838,
          1.000683546
        ]
      },
      {
        name: "山西省",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          0.986673832,
          0.986596167,
          0.986318767,
          0.985990584,
          0.985886753,
          0.985788345,
          0.985716939,
          0.985677958,
          0.98564893,
          0.985629678
        ]
      },
      {
        name: "江苏省",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#ff6600",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(255, 102, 0, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(255, 102, 0, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#ff6600",
            borderColor: "rgba(255, 102, 0, .1)",
            borderWidth: 12
          }
        },
        data: [
          0.987006009,
          0.986998498,
          0.987086117,
          0.987188816,
          0.9872123,
          0.987239659,
          0.987258673,
          0.987267554,
          0.987274528,
          0.987278879
        ]
      },
      {
        name: "河北省",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#ff33cc",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(255, 51, 204, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(255, 51, 204, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#ff33cc",
            borderColor: "rgba(255, 51, 204, .1)",
            borderWidth: 12
          }
        },
        data: [
          0.98120147,
          0.981163204,
          0.981099665,
          0.980984747,
          0.980967343,
          0.980951965,
          0.980940521,
          0.980937064,
          0.980934739,
          0.980933428
        ]
      },
      {
        name: "河南省",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#9933ff",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(153, 51, 255, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(153, 51, 255, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#9933ff",
            borderColor: "rgba(153, 51, 255, .1)",
            borderWidth: 12
          }
        },
        data: [
          1.001329303,
          1.000597596,
          1.000619888,
          1.001364708,
          1.002075672,
          1.002119184,
          1.001344562,
          1.000591636,
          1.00061667,
          1.001353741
        ]
      },
      {
        name: "浙江省",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#ff9966",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(255, 153, 102, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(255, 153, 102, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#ff9966",
            borderColor: "rgba(255, 153, 102, .1)",
            borderWidth: 12
          }
        },
        data: [
          1.015587926,
          1.016619802,
          1.016686201,
          1.015927434,
          1.01540947,
          1.015396833,
          1.015742183,
          1.015986681,
          1.015993118,
          1.015838981
        ]
      },
      {
        name: "福建省",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00ccff",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 204, 255, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 204, 255, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00ccff",
            borderColor: "rgba(0, 204, 255, .1)",
            borderWidth: 12
          }
        },
        data: [
          1.006941438,
          1.007361293,
          1.007416487,
          1.007477403,
          1.007644773,
          1.00771153,
          1.00778985,
          1.007878304,
          1.007938266,
          1.007999182
        ]
      },
      {
        name: "贵州省",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#cc33ff",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(204, 51, 255, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(204, 51, 255, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#cc33ff",
            borderColor: "rgba(204, 51, 255, .1)",
            borderWidth: 12
          }
        },
        data: [
          0.991984129,
          0.992714822,
          0.993176699,
          0.993445098,
          0.993892729,
          0.994209409,
          0.994483173,
          0.994782329,
          0.995022714,
          0.995245099
        ]
      },
      {
        name: "青海省",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#ffcc00",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(255, 204, 0, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(255, 204, 0, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#ffcc00",
            borderColor: "rgba(255, 204, 0, .1)",
            borderWidth: 12
          }
        },
        data: [
          0.979100406,
          0.979001284,
          0.978913724,
          0.979018092,
          0.978996813,
          0.978994668,
          0.979008496,
          0.979005516,
          0.979006767,
          0.979008734
        ]
      },
      {
        name: "黑龙江省",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#66cc00",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(102, 204, 0, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(102, 204, 0, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#66cc00",
            borderColor: "rgba(102, 204, 0, .1)",
            borderWidth: 12
          }
        },
        data: [
          1.000193715,
          1.000176907,
          1.000169516,
          1.000168085,
          1.000167847,
          1.000167727,
          1.000167727,
          1.000167727,
          1.000167727,
          1.000167727
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


// 饼形图-模型一得分效率省份分布
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));

  // 数据处理，使用第二个模块的数据
  var data = [
    { value: 1.032392, name: "山东省" },
    { value: 0.938487, name: "山西省" },
    { value: 0.987131, name: "江苏省" },
    { value: 0.909404, name: "河北省" },
    { value: 1.039921, name: "河南省" },
    { value: 1.132836, name: "浙江省" },
    { value: 1.049728, name: "福建省" },
    { value: 0.901108, name: "贵州省" },
    { value: 0.898068, name: "青海省" },
    { value: 1.046973, name: "黑龙江省" }
  ];

  // 配置项
  var option = {
    legend: {
      top: "90%",
      itemWidth: 12, // 图例宽度
      itemHeight: 12, // 图例高度
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "6"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: [
      "#135D66", // LightPink
      "#1679AB", // PeachPuff
      "#615EFC", // Lavender
      "#7E8EF1", // LemonChiffon
      "#57A6A1", // Thistle
      "#577B8D", // MistyRose
      "#AD88C6", // Khaki
      "#E1AFD1", // LightCyan
      "#FFB1B1", // Wheat
      "#FFCBCB"  // LightGreen
    ],
    series: [
      {
        name: "省份分布",
        type: "pie",
        radius: ["10%", "70%"], // 玫瑰图的半径范围
        center: ["50%", "42%"], // 调整饼图的位置
        roseType: "radius", // 玫瑰图类型
        data: data,
        label: {
          fontSize: 10,
          color: 'rgba(255,255,255,.5)'
        },
        labelLine: {
          length: 10,
          length2: 10
        }
      }
    ]
  };

  // 配置项和数据给实例化对象
  myChart.setOption(option);

  // 浏览器缩放时图表等比例缩放
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();



