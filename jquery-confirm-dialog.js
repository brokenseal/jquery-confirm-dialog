/*
    Very simple confirm dialog using a modal dialog box from jquery ui
    
    Author: Davide Callegari - http://www.brokenseal.it/
    Home page: http://github.com/brokenseal/jquery-confirm-dialog/
    
    License: MIT
*/

;(function($){
    var
        mandatoryOptions= {
            modal: true
            ,buttons: {}
        }
        ,defaultOptions= {
            title: 'Confirm action'
            ,confirmText: 'Confirm'
            ,cancelText: 'Cancel'
            ,cancelCallback: null
        }
    ;
    
    // the main plugin function
    $.fn.confirm= function(options, callback){
        var
            newDialog
        ;
        
        // merge provided options with mandatory options
        options= $.fn.extend(options, mandatoryOptions);
        
        // merge provided options with default options
        options= $.fn.extend(defaultOptions, options);
        
        // build up the cancel
        options.buttons[options.confirmText]= function(){
            callback.apply(this, [options].concat(arguments));
            newDialog.dialog("close");
        };
        // and confirm buttons
        options.buttons[options.cancelText]= function(){
            if(options.cancelCallback) {
                options.cancelCallback.apply(this, [options].concat(arguments));
            }
            newDialog.dialog("close");
        };
        
        // create the dialog
        newDialog= this.dialog(options);
        
        return newDialog;
    };
})(jQuery);