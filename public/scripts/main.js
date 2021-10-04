var rhit = rhit || {};

rhit.main = function () {
    let isjp = false;
    $('[lang="jp"]').hide();
    $('#change-lang').click(function() {
        $('[lang="en"]').toggle();
        $('[lang="jp"]').toggle();
        isjp = !isjp;
        $('#change-lang').html(isjp?"English":"日本語");
      });
};

rhit.main();
