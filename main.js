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

    $(".cats__table-mobile-header-item").on("click", function (e) {
        e.preventDefault();

        $(".cats__table-mobile-header-item").each(function () {
            $(this).removeClass("cats__table-mobile-header-item--active");
        });

        $(this).addClass("cats__table-mobile-header-item--active");

        let navId = $(this).attr("data-id");

        $(".cats__table-mobile-group").each(function () {
            $(this).removeClass("cats__table-mobile-group--active");
            let tabId = $(this).attr("data-id");

            if (tabId == navId) {
                $(this).addClass("cats__table-mobile-group--active");
            }
        });
    });
});
