/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('DevopsDash.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper) {

      $scope.transparent = baConfig.theme.blur;
      var dashboardColors = baConfig.colors;
      $scope.doughnutData = {
          labels: [
              'Other',
              'Search engines',
              'Referral Traffic',
              'Direct Traffic',
              'Ad Campaigns'
          ],
          datasets: [
              {
                  data: [2000, 1500, 1000, 1200, 400],
                  backgroundColor: [
                      dashboardColors.andRed,
                      dashboardColors.andBlue,
                      dashboardColors.andYellow,
                      dashboardColors.andGreen,
                      dashboardColors.andPurple,

                  ],
                  hoverBackgroundColor: [
                      colorHelper.shade(dashboardColors.andRed, 15),
                      colorHelper.shade(dashboardColors.andBlue, 15),
                      colorHelper.shade(dashboardColors.andYellow, 15),
                      colorHelper.shade(dashboardColors.andGreen, 15),
                      colorHelper.shade(dashboardColors.andPurple, 15),
                  ],
                  percentage: [87, 22, 70, 38, 17]
              }]
      };

      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myDoughnut = new Chart(ctx, {
          type: 'doughnut',
          data: $scope.doughnutData,
          options: {
              cutoutPercentage: 64,
              responsive: true,
              elements: {
                  arc: {
                      borderWidth: 0
                  }
              }
          }
      });
  }
})();