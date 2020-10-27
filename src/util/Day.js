function Day(m,d,y) {
    this.date = new Date();
    this.date.setMonth(m-1,d);
    // this.date.setDate(d);
    this.date.setFullYear(y);

    this.format = () => {
        return this.date.toDateString();
    }

    this.getDay = () => {
        return this.date.getDate();
    }
}

function Week() {

}

export default Day;