$(document).ready(function () {
  $(".topNav").click(function () {
    var $clicked = $(this);
    $(".topNav").each(function () {
      var $menu = $(this);
      console.log($menu.is($clicked));
      if (!$menu.is($clicked)) {
        $($menu.attr("data-item")).hide();
      } else {
        $($clicked.attr("data-item")).show();
      }
    });
    //$($clicked.attr("data-item")).toggle();
  });
});
