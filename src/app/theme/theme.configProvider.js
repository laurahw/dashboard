/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  var basic = {
    default: '#ffffff',
    defaultText: '#666666',
    border: '#dddddd',
    borderDark: '#aaaaaa',
  };

  // main functional color scheme
  // var colorScheme = {
  //   primary: '#209e91',
  //   info: '#2dacd1',
  //   success: '#90b900',
  //   warning: '#dfb81c',
  //   andRed: '#e85656',
  // };

  var colorScheme = {
    andRed: '#FF323C',
    andYellow: '#FFC800',
    andGreen: '#5AC328',
    andBlue: '#2897FF',
    andPurple: '#A050FF',
    andPink: '#FF6ECF',
    andCharcoal: '#323232',
  };

  // dashboard colors for charts
  var dashboardColors = {
    red0: '#7F0007',
    red1: '#B20009',
    red2: '#CC000A',
    red3: '#FF323C',
    red4: '#FF999E',

  };

  angular.module('DevopsDash.theme')
    .provider('baConfig', configProvider);

  /** @ngInject */
  function configProvider(colorHelper) {
    var conf = {
      theme: {
        blur: false,
      },
      colors: {
        default: basic.default,
        defaultText: basic.defaultText,
        border: basic.border,
        borderDark: basic.borderDark,



        primary: colorScheme.andRed,
        info: colorScheme.andBlue,
        success: colorScheme.andGreen,
        warning: colorScheme.andYellow,
        andRed: colorScheme.andRed,

          andRed: colorScheme.andRed,
          andBlue: colorScheme.andBlue,
          andGreen: colorScheme.andGreen,
          andYellow: colorScheme.andYellow,
          andPurple: colorScheme.andPurple,
          andPink: colorScheme.andPink,

        primaryLight: colorHelper.tint(colorScheme.andRed, 30),
        infoLight: colorHelper.tint(colorScheme.andBlue, 30),
        successLight: colorHelper.tint(colorScheme.andGreen, 30),
        warningLight: colorHelper.tint(colorScheme.andYellow, 30),
        andRedLight: colorHelper.tint(colorScheme.andRed, 30),

        primaryDark: colorHelper.shade(colorScheme.andRed, 15),
        infoDark: colorHelper.shade(colorScheme.andBlue, 15),
        successDark: colorHelper.shade(colorScheme.andGreen, 15),
        warningDark: colorHelper.shade(colorScheme.andYellow, 15),
        andRedDark: colorHelper.shade(colorScheme.andRed, 15),

      }
    };

    conf.changeTheme = function(theme) {
      angular.merge(conf.theme, theme)
    };

    conf.changeColors = function(colors) {
      angular.merge(conf.colors, colors)
    };

    conf.$get = function () {
      delete conf.$get;
      return conf;
    };
    return conf;
  }
})();
