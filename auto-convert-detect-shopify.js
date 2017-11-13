<script>
jQuery.ajax( {
  url: '//freegeoip.net/json/',
  type: 'POST',
  dataType: 'jsonp',
  success: function(location) {
    // If the visitor is browsing from Canada.
    if (location.country_code === 'IN') {
      // Tell him about the Canadian store.
       $('[name=currencies]').val('INR').change();
    }
    else if(location.country_code === 'CA'){
     $('[name=currencies]').val('CAD').change();
    }
  }
} );
</script>
