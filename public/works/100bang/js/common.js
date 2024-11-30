$(function(){
    // nav
    $(".menu").on('click', function(){
        $(".gnb-cont").addClass("active");
        $(".gnb").append('<div class="transparency"></div>');
        $("body").css({overflow:'hidden'}).bind('touchmove', function(e){
            e.preventDefault()
        });
    });

    $(".btn-close").on('click', function(){
        $(".gnb-cont").removeClass("active");
        $(".transparency").remove();
        $("body").css({ overflow:'' }).unbind('touchmove');
    })

    $(document).on('click', '.transparency', function(){
        $(".gnb-cont").removeClass("active");
        $(".transparency").remove();
        $("body").css({ overflow:'' }).unbind('touchmove');
    });

    //search box 
    $(".search input").on("focus", function(){
        $(".search-box").slideDown(150)
    });
    $(".search input").on("blur", function(){
        $(".search-box").slideUp(150)
    });

    // estimate rank box
    $(".e-rank-box").each(function(){
        $(this).find("h2").on('click', function(){
            $(this).toggleClass("open")
        })
    })

    // detail box event
    $(".info-box").on("click", function(){
        $(this).toggleClass("on");
        if( $(".info-box").hasClass("on") ) {
            $(".detail-box").hide();
            $(".info-box").removeClass("on");
            $(this).addClass("on");
            $(this).siblings(".detail-box").show();
        }else {
            $(this).siblings(".detail-box").hide()
        }
    });

    // modal popup
    var modal = $('.modal'),
        left = ( $(window).scrollLeft() + ( $(window).width() - modal.outerWidth(true)) / 2 ),
        top = ( $(window).innerHeight() - modal.height()) / 2;

    modules = {
        $window: $(window),
        $html: $('html'),
        $body: $('body'),
        $container: $('#wrap'),

        init: function () {
            $(function () {
                modules.modals.init();
            });
        },
        show: function (id) {
            modules.modals.showId(id);
        },
        showModal: function (id) {
            modules.modals.openModal(null,id);
        },
        hideModal: function () {
            modules.modals.closeModal();
        },

        modals: {
            trigger: $('.modal-trigger'),
            triggerClick: $('.modal-trigger-click'),
            modal: $('.modal'),
            scrollTopPosition: null,

            init: function () {
                var self = this;

                if ((self.trigger.length > 0 || self.triggerClick.length > 0) && self.modal.length > 0) {
                    self.appendDiv();
                    self.triggers();
                }
            },
            appendDiv: function () {
                if (modules.$container.children('.modal-overlay').length == 0) {
                    modules.$container.append('<div class="modal-overlay"></div>');
                    this.closeEvent();
                }
            },
            closeEvent: function () {
                var self = this;
                $('.modal-overlay').on('click', function (e) {
                    e.preventDefault();
                    self.closeModal();
                });
                modules.$body.on('keydown', function(e){
                    if (e.keyCode === 27) {
                        self.closeModal();
                    }
                });
                this.modal.on('click', '.modal-close', function(e) {
                    e.preventDefault();
                    self.closeModal();
                });
            },
            triggers: function () {
                var self = this;

                self.trigger.on('click', function (e) {
                    e.preventDefault();

                    var $trigger = $(this);

                    self.openModal($trigger, $trigger.data('modalId'));
                });
            },
            showId: function ($trigger) {
                var self = this;
                self.openModal($trigger, $trigger.data('modalId'));
            },
            openModal: function (_trigger, _modalId) {
                var self = this,
                    scrollTopPosition = modules.$window.scrollTop(),
                    $targetModal = $('#' + _modalId);

                self.scrollTopPosition = scrollTopPosition;

                modules.$html
                    .addClass('modal-show')
                    .attr('data-modal-effect', $targetModal.data('modal-effect'));

                $targetModal.addClass('modal-show');

                modules.$container.scrollTop(scrollTopPosition);
            },
            closeModal: function () {
                var self = this;

                $('.modal-show').removeClass('modal-show');
                modules.$html
                    .removeClass('modal-show')
                    .removeAttr('data-modal-effect');

                modules.$window.scrollTop(self.scrollTopPosition);
            }
        }
    };
    modules.init();
    
});


