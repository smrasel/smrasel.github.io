

function closePopup() {
  $.magnificPopup.close();
}



function toggleHandler(_0x403dx2) {
    _0x403dx2['addEventListener']('click', function(_0x403dx2) {
        _0x403dx2['preventDefault'](), this['classList']['contains']('active') === !0 ? this['classList']['remove']('active') : this['classList']['add']('active')
    })
}

$('a.open_close')['on']('click', function() {
    $('.main-menu')['toggleClass']('show'), 
    $('.layer')['toggleClass']('layer-is-visible')
}), $('a.show-submenu')['on']('click', function() {
    $(this)['next']()['toggleClass']('show_normal')
}), $('a.show-submenu-mega')['on']('click', function() {
    $(this)['next']()['toggleClass']('show_mega')
}), $(window)['width']() <= 600 && $('a.open_close')['on']('click', function() {
    $('.cmn-toggle-switch')['removeClass']('active')
});


for (var toggles = document['querySelectorAll']('.cmn-toggle-switch'), i = toggles['length'] - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle)
};

if ('undefined' == typeof jQuery) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}; + function(_0x403dx6) {
    'use strict';
    var _0x403dx7 = _0x403dx6['fn']['jquery']['split'](' ')[0]['split']('.');
    if (_0x403dx7[0] < 2 && _0x403dx7[1] < 9 || 1 == _0x403dx7[0] && 9 == _0x403dx7[1] && _0x403dx7[2] < 1 || _0x403dx7[0] > 3) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
    }
}(jQuery), + function(_0x403dx6) {
    'use strict';


    

    $('.login').magnificPopup({
        type:'inline',
        midClick: true,
        enableEscapeKey: true,
        showCloseBtn: false
    });

    $('.signUp').magnificPopup({
        type:'inline',
        midClick: true,
        enableEscapeKey: true,
        showCloseBtn: false
    });






    

    var _0x403dx2 = '.dropdown-backdrop',
    _0x403dxa = '[data-toggle="dropdown"]',
    _0x403dxb = function(_0x403dx7) {
        _0x403dx6(_0x403dx7)['on']('click.bs.dropdown', this['toggle'])
    };
    _0x403dxb['VERSION'] = '3.3.7', _0x403dxb['prototype']['toggle'] = function(_0x403dx9) {
        var _0x403dx2 = _0x403dx6(this);
        if (!_0x403dx2['is']('.disabled, :disabled')) {
            var _0x403dxa = _0x403dx7(_0x403dx2),
            _0x403dxb = _0x403dxa['hasClass']('open');
            if (_0x403dx8(), !_0x403dxb) {
                'ontouchstart' in document['documentElement'] && !_0x403dxa['closest']('.navbar-nav')['length'] && _0x403dx6(document['createElement']('div'))['addClass']('dropdown-backdrop')['insertAfter'](_0x403dx6(this))['on']('click', _0x403dx8);
                var _0x403dxc = {
                    relatedTarget: this
                };
                if (_0x403dxa['trigger'](_0x403dx9 = _0x403dx6.Event('show.bs.dropdown', _0x403dxc)), _0x403dx9['isDefaultPrevented']()) {
                    return
                };
                _0x403dx2['trigger']('focus')['attr']('aria-expanded', 'true'), _0x403dxa['toggleClass']('open')['trigger'](_0x403dx6.Event('shown.bs.dropdown', _0x403dxc))
            };
            return !1
        }
    };
    var _0x403dxc = _0x403dx6['fn']['dropdown'];
    _0x403dx6['fn']['dropdown'] = _0x403dx9, _0x403dx6['fn']['dropdown']['Constructor'] = _0x403dxb, _0x403dx6['fn']['dropdown']['noConflict'] = function() {
        return _0x403dx6['fn']['dropdown'] = _0x403dxc, this
    }, _0x403dx6(document)['on']('click.bs.dropdown.data-api', _0x403dx8)['on']('click.bs.dropdown.data-api', '.dropdown form', function(_0x403dx6) {
        _0x403dx6['stopPropagation']()
    })['on']('click.bs.dropdown.data-api', _0x403dxa, _0x403dxb['prototype']['toggle'])['on']('keydown.bs.dropdown.data-api', _0x403dxa, _0x403dxb['prototype']['keydown'])['on']('keydown.bs.dropdown.data-api', '.dropdown-menu', _0x403dxb['prototype']['keydown'])
}(jQuery);


! function(_0x403dx6) {
    'function' == typeof define && define['amd'] ? define(['jquery'], _0x403dx6) : _0x403dx6('object' == typeof exports ? require('jquery') : window['jQuery'] || window['Zepto'])
}(function(_0x403dx6) {
    var _0x403dx7, _0x403dx8, _0x403dx9, _0x403dx2, _0x403dxa, _0x403dxb, _0x403dxc = 'Close',
    i = 'BeforeClose',
    _0x403dxd = 'AfterClose',
    _0x403dxe = 'BeforeAppend',
    _0x403dxf = 'MarkupParse',
    _0x403dx10 = 'Open',
    _0x403dx11 = 'Change',
    _0x403dx12 = 'mfp',
    _0x403dx13 = '.' + _0x403dx12,
    _0x403dx14 = 'mfp-ready',
    _0x403dx17 = 'mfp-removing',
    _0x403dx16 = 'mfp-prevent-close',
    _0x403dx15 = function() {},
    _0x403dx18 = !!window['jQuery'],
    _0x403dx19 = _0x403dx6(window),

    _0x403dx1b = function(_0x403dx7, _0x403dx8, _0x403dx9, _0x403dx2) {
        var _0x403dxa = document['createElement']('div');
        return _0x403dxa['className'] = 'mfp-' + _0x403dx7, _0x403dx9 && (_0x403dxa['innerHTML'] = _0x403dx9), _0x403dx2 ? _0x403dx8 && _0x403dx8['appendChild'](_0x403dxa) : (_0x403dxa = _0x403dx6(_0x403dxa), _0x403dx8 && _0x403dxa['appendTo'](_0x403dx8)), _0x403dxa
    },
    _0x403dx1c = function(_0x403dx8, _0x403dx9) {
        _0x403dx7['ev']['triggerHandler'](_0x403dx12 + _0x403dx8, _0x403dx9), _0x403dx7['st']['callbacks'] && (_0x403dx8 = _0x403dx8['charAt'](0)['toLowerCase']() + _0x403dx8['slice'](1), _0x403dx7['st']['callbacks'][_0x403dx8] && _0x403dx7['st']['callbacks'][_0x403dx8]['apply'](_0x403dx7, _0x403dx6['isArray'](_0x403dx9) ? _0x403dx9 : [_0x403dx9]))
    },
    _0x403dx1d = function(_0x403dx8) {
        return _0x403dx8 === _0x403dxb && _0x403dx7['currTemplate']['closeBtn'] || (_0x403dx7['currTemplate']['closeBtn'] = _0x403dx6(_0x403dx7['st']['closeMarkup']['replace']('%title%', _0x403dx7['st']['tClose'])), _0x403dxb = _0x403dx8), _0x403dx7['currTemplate']['closeBtn']
    },
    
    _0x403dx1f = function() {
        var _0x403dx6 = document['createElement']('p')['style'],
        _0x403dx7 = ['ms', 'O', 'Moz', 'Webkit'];
        if (void(0) !== _0x403dx6['transition']) {
            return !0
        };
        for (; _0x403dx7['length'];) {
            if (_0x403dx7['pop']() + 'Transition' in _0x403dx6) {
                return !0
            }
        };
        return !1
    };


});
















