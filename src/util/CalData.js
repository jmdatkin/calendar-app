//This guy stores all calendar data
//CalView is only a view for this data

var CalData = (function() {

    function Day(y,m,d) {
        // if (typeof d === typeof Date) {
        //     this.month = d.getMonth();
        //     this.day = d.getDate();
        //     this.year = d.getYear();
        //     this.dateObj = d;
        // }
        // else {
        this.month = m || 0;
        this.day = d || 1;
        this.year = y || 99;
        this.dateObject = new Date(y,m,d);
        // }
        

        this.getDay = () => {
            return this.dateObject.getDate();
        }

        this.format = () => {
            return this.dateObject.toDateString();
            //return `${this.dateObj.getDate()} ${this.dateObj.getMonth()+1} ${this.dateObj.getFullYear()}`;
        };
    }

    
    var today = new Day(99,0,0);

    function Week(start) {
        this.days = [];
        for (var i=0; i<7; i++) {
            // this.days.push(new Day(
            //     start.dateObj.getDate()+i,
            //     start.dateObj.getMonth(),
            //     start.dateObj.getYear()));
                this.days.push(new Day(
                    start.dateObject.getYear(),
                    start.dateObject.getMonth(),
                    start.dateObject.getDate()+i));
        }
    }

    var weeks = [];

    for (var i=0; i<8; i++) {
        weeks.push(new Week(today));
    }


    return {
        get weeks() {
            return weeks;
        },
        get viewPivot() {
            return weeks[2];
        },
        get activePivot() {
            return weeks[4];
        }
    };
})();

export default CalData;