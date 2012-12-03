$("#searching-text").change(function() {
    alert("searching-text:  "+ $("#searching-text").val()); 
});

$(function() {
    // init plugin (with callback)
	alert('hello world!');
    $('.clearable').clearSearch({ callback: function() { console.log("cleared"); } } );

    // update value
    $('.clearable').val('sample value').change();
    
    // change width
    $('.clearable').width('200px').change();
});