$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Start Time Audit
var timeAudit = function (taskEl) {
    // get time
    var hour = taskEl.attr("id");
    var time = moment(hour, "HH a");

    taskEl.removeClass("past present future");

    if (moment().hour() === time.hour()) {
        taskEl.addClass("present");
    }
    else if (moment().isBefore(time)) {
        taskEl.addClass("future");
    }
    else {
        taskEl.addClass("past");
    }
}

$(".description").each(function () {
    timeAudit($(this));
})

setInterval(function(){
    if (moment().minutes() === 0) {
        $(".description").each(function () {
            timeAudit($(this));
        })
    }
}, (1000*60))
// End Time Audit

