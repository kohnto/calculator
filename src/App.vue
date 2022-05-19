<template>
  <div>
    
    <calc-row v-for="row in this.calc.views" :key="row.id" calc_row=row></calc-row>
  </div>
</template>


<script>
export default {
  
   props:[
        
    ],
  data() {
    return {
        calc: {
  "widget": "LinearLayout",
  "id": "calculator_main",
  "properties": [
    {
      "name": "background-color",
      "value": "#457b9d"
    }
  ],
  "actions": [],
  "views": [
    {
      "widget": "RowBlock",
      "id": "calc_row_block",
      "properties": [],
      "actions": [],
      "views": [
        {
          "widget": "TextBlock",
          "id": "calc_title",
          "properties": [
            {
              "name": "text",
              "value": "calc"
            },
            {
              "name": "color",
              "value": "#ffffff"
            }
          ],
          "actions": [],
          "views": []
        }
      ]
    },
    {
      "widget": "RowBlock",
      "id": "calc_row_block",
      "properties": [],
      "actions": [],
      "views": [
        {
          "widget": "TextBlock",
          "id": "calc_amount",
          "properties": [
            {
              "name": "amount",
              "value": "0"
            },
            {
              "name": "color",
              "value": "#ffffff"
            },
            {
              "name": "background-color",
              "value": "#1d3557"
            },
            {
              "name": "margin-top",
              "value": "8px"
            },
            {
              "name": "margin-bottom",
              "value": "8px"
            }
          ],
          "actions": [],
          "views": []
        }
      ]
    },
    {
      "widget": "RowBlock",
      "id": "calc_row_block",
      "properties": [],
      "actions": [],
      "views": [
        {
          "widget": "GridBlock",
          "id": "calc_row_grid_block",
          "properties": [],
          "actions": [],
          "views": [
            {
              "widget": "RowBlock",
              "id": "calc_row_block",
              "properties": [],
              "actions": [],
              "views": [
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "7"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "number",
                    "value": 7
                  }],
                  "views": []
                },
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "8"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "number",
                    "value": 8
                  }],
                  "views": []
                },
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "9"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "number",
                    "value": 9
                  }],
                  "views": []
                },
                {
                    "widget": "ButtonBlock",
                    "id": "calc_button_block",
                    "properties": [
                      {
                        "name": "text",
                        "value": "DEL"
                      },
                      {
                        "name": "color",
                        "value": "#1d3557"
                      },
                      {
                        "name": "background-color",
                        "value": "#ffffff"
                      }
                    ],
                    "actions": [{
                      "type": "action",
                      "value": "del"
                    }],
                    "views": []
                  }
              ]
            },
            {
              "widget": "RowBlock",
              "id": "calc_row_block",
              "properties": [],
              "actions": [],
              "views": [
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "4"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "number",
                    "value": 4
                  }],
                  "views": []
                },
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "5"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "number",
                    "value": 5
                  }],
                  "views": []
                },
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "6"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "number",
                    "value": 6
                  }],
                  "views": []
                },
                {
                    "widget": "ButtonBlock",
                    "id": "calc_button_block",
                    "properties": [
                      {
                        "name": "text",
                        "value": "+"
                      },
                      {
                        "name": "color",
                        "value": "#1d3557"
                      },
                      {
                        "name": "background-color",
                        "value": "#ffffff"
                      }
                    ],
                    "actions": [{
                      "type": "action",
                      "value": "plus"
                    }],
                    "views": []
                  }
              ]
            },
            {
              "widget": "RowBlock",
              "id": "calc_row_block",
              "properties": [],
              "actions": [],
              "views": [
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "1"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "number",
                    "value": 1
                  }],
                  "views": []
                },
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "2"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "number",
                    "value": 2
                  }],
                  "views": []
                },
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "3"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "number",
                    "value": 3
                  }],
                  "views": []
                },
                {
                    "widget": "ButtonBlock",
                    "id": "calc_button_block",
                    "properties": [
                      {
                        "name": "text",
                        "value": "-"
                      },
                      {
                        "name": "color",
                        "value": "#1d3557"
                      },
                      {
                        "name": "background-color",
                        "value": "#ffffff"
                      }
                    ],
                    "actions": [{
                      "type": "action",
                      "value": "sub"
                    }],
                    "views": []
                  }
              ]
            },
            {
              "widget": "RowBlock",
              "id": "calc_row_block",
              "properties": [],
              "actions": [],
              "views": [
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "."
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "char",
                    "value": "."
                  }],
                  "views": []
                },
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "0"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "number",
                    "value": 0
                  }],
                  "views": []
                },
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "/"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "action",
                    "value": "div"
                  }],
                  "views": []
                },
                {
                    "widget": "ButtonBlock",
                    "id": "calc_button_block",
                    "properties": [
                      {
                        "name": "text",
                        "value": "x"
                      },
                      {
                        "name": "color",
                        "value": "#1d3557"
                      },
                      {
                        "name": "background-color",
                        "value": "#ffffff"
                      }
                    ],
                    "actions": [{
                      "type": "action",
                      "value": "mul"
                    }],
                    "views": []
                  }
              ]
            },
            {
              "widget": "RowBlock",
              "id": "calc_row_block",
              "properties": [],
              "actions": [],
              "views": [
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "RESET"
                    },
                    {
                      "name": "color",
                      "value": "#1d3557"
                    },
                    {
                      "name": "background-color",
                      "value": "#ffffff"
                    }
                  ],
                  "actions": [{
                    "type": "action",
                    "value": "reset"
                  }],
                  "views": []
                },
                {
                  "widget": "ButtonBlock",
                  "id": "calc_button_block",
                  "properties": [
                    {
                      "name": "text",
                      "value": "="
                    },
                    {
                      "name": "color",
                      "value": "#ffffff"
                    },
                    {
                      "name": "background-color",
                      "value": "#e63946"
                    }
                  ],
                  "actions": [{
                    "type": "action",
                    "value": "sum"
                  }],
                  "views": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

    }
    }
}
</script>

<style>

</style>

