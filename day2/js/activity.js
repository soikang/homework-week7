$(document).ready(function () {
    // Get a reference to the table
    var table = document.getElementById("activityTable");

    // Get a reference to the "Select" button
    var selectButton = $("#selectButton");

    // Set the initial state of the button to disabled
    selectButton.prop("disabled", true);

    // Attach a click event handler to all table cells in the tbody
    $('td').click(function () {
        // Check if the cell contains the text "Not Available"
        if (($(this).text().trim() !== "Not Available") && !$(this).is('#unselectable')) {
            // Toggle the 'highlighted' class on the clicked cell
            $(this).toggleClass('highlighted');

            // Get the content of the selected cell
            var content = $(this).text().trim();

            // Get the corresponding cliff site name from the header row
            var columnIndex = $(this).index();
            var cliffSite = $('th').eq(columnIndex).text();

            // Check if there are any highlighted cells
            var anyHighlighted = $('.highlighted').length > 0;

            // Enable or disable the "Select" button based on the selection state
            selectButton.prop("disabled", !anyHighlighted);

            // Check if the 'displaySelected' box is visible
            if ($("#displaySelected").css("visibility") === "hidden") {
                // If not visible, make it visible
                $("#displaySelected").css("visibility", "visible");
                $("#displaySelected").css("margin-top", "2em"); // Add spaces above display box
            }

            if ($(this).hasClass("highlighted")) {
                $("#displaySelected").css("visibility", "visible"); // make display box visible
                $("#displaySelected").css("margin-top", "2em"); // add spaces above display box

                // Display the activity and cliff site
                $("#result").append("<p>" + content + " at " + cliffSite + "</p>"); // add child element with contents of cell
            } else { // if selected cell doesn't have class
                // Remove child element
                $('#result p:contains(' + content + ')').remove();

                // Check if there are any child elements within parent
                if ($('#result').has('p').length === false) {
                    // Make display box hidden
                    $('#displaySelected').css("visibility", "hidden");
                    // Remove spaces above display box
                    $('#displaySelected').css("margin-top", "0");
                }
            }
        }
    });
});

