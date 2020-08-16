var form = document.getElementById('contact-form');

$('#header').on('click touchstart', 'input', function () {

    if ($('input').prop('checked')===true) {
        form.src="https://docs.google.com/forms/d/e/1FAIpQLSd1aw-wwrCCtB2U_lXXyKWf-dwnH9F_ykNN2ceZaFAJDQeVNg/viewform?embedded=true";
    }
    else {
        form.src="https://docs.google.com/forms/d/e/1FAIpQLSfwScvZ1BXj5xnUogc-uRMRYzPED4OTQmml3YqgGCBNpsxYFw/viewform?embedded=true"    }

});