$(function () {
    $('#get-app-detail').click(function (e) {
        var data = {};
        data.appId = document.getElementById('app-id').value;
        e.preventDefault();
        console.log('Searching data for appId: "' + data.appId + '" ');

        /*$.ajax({
           dataType: 'jsonp',
           data: "data=yeah",						
           jsonp: 'callback',
           url: 'http://localhost:3000/endpoint?callback=?',						
           success: function(data) {
               console.log('success');
               console.log(JSON.stringify(data));
           }
       });*/

        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://localhost:8000/app-detail',
            success: function (res) {
                $('#app-id').val(res.data.appId);
                $('#app-name').val(res.data.title);
                $('#short-desc').val(res.short_description);
            }
        });
    });
});