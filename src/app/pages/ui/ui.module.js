/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('DevopsDash.pages.ui', [
    'DevopsDash.pages.ui.typography',
    'DevopsDash.pages.ui.buttons',
    'DevopsDash.pages.ui.icons',
    'DevopsDash.pages.ui.modals',
    'DevopsDash.pages.ui.grid',
    'DevopsDash.pages.ui.alerts',
    'DevopsDash.pages.ui.progressBars',
    'DevopsDash.pages.ui.notifications',
    'DevopsDash.pages.ui.tabs',
    'DevopsDash.pages.ui.slider',
    'DevopsDash.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
