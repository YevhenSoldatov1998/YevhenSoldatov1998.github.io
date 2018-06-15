$(document).ready(function() {
  $("#CountDownTimer").attr('data-date', '2018-05-25')
  $("#CountDownTimer").TimeCircles({
      "animation": "smooth",
      "circle_bg_color": "#c6cacf",
      "time": {
          "Days": {
              "text": "Days",
              "color": "#ffcc4c",
              "show": true
          },
          "Hours": {
              "text": "Hours",
              "color": "#ef7701",
              "show": true
          },
          "Minutes": {
              "text": "Minutes",
              "color": "#4bc1ef",
              "show": true
          },
          "Seconds": {
              "text": "Seconds",
              "color": "#1d4777",
              "show": true
          }
      }
  });
})
