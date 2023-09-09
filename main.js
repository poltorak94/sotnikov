$(document).ready(function () {
    const selectType = $(".selectType");
    const selectDoctor = $(".selectDoctor");

    if (selectType && selectDoctor) {
        $(".selectType").select2({
            minimumResultsForSearch: -1,
        });

        $(".selectDoctor").select2({
            minimumResultsForSearch: -1,
        });
    }

    $(".cats__branches-item").on("click", function (e) {
        e.preventDefault();
        let container = $(this).closest(".cats__branches");
        container
            .find(".cats__branches-item")
            .addClass("cats__branches-item--disabled");
        $(this).removeClass("cats__branches-item--disabled");

        container.find(".cats__filter-container").show();
    });

    $(".cats__filter-btn").on("click", function (e) {
        e.preventDefault();
        $(".cats__table-container").show();
    });
});
