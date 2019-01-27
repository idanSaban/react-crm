const moment = require('moment')

class AnalyticsCalculator {
    constructor(data) {
        this.data = data
    }

    getTopSellers() {
        let sellers = {}
        this.data.forEach(c => {
            if (c.sold)
            {
                if (sellers[c.owner])
                {
                    sellers[c.owner]++
                } else
                {
                    sellers[c.owner] = 1
                }

            }
        })
        sellers = Object.keys(sellers).map(s => { return { seller: s.split(" ")[0], count: sellers[s] } })


        sellers.sort(function (a, b) {
            return b.count - a.count;
        });

        return sellers.splice(0, 3)
    }
    getSalesBy(key) {
        const output = {}
        this.data.forEach(c => {
            // console.log(c.country)
            if (output[c[key]])
            {
                output[c[key]]++
            } else
            {
                output[c[key]] = 1
            }
        })
        return Object.keys(output).map(c => { return { name: c, count: output[c] } })
    }
    getHottestCountry() {
        const countrys = this.getSalesBy("country")
        let hottest = {
            country: "",
            count: 0
        }
        for (let i of countrys)
        {
            if (i.count > hottest.count)
            {
                hottest.country = i.name
                hottest.count = i.count
            }
        }
        return hottest.country
    }

    getNewClients() {
        const newClients = this.data
        const monthTest = c => moment(c.firstContact).month() === moment().month()
        const yearTest = c => moment(c.firstContact).year() === moment().year()
        return newClients.filter(c => monthTest(c) && yearTest(c)).length
    }

    getPast30Sales() {
        const today = moment()
        const clients = this.data
        const dates = {}
        clients.forEach(c => {
            const firstContact = moment(c.firstContact).format("MM-DD-YYYY")
            if (today.diff(firstContact, 'days') < 31)
            {
                if (dates[firstContact])
                {
                    dates[firstContact]++
                } else
                {
                    dates[firstContact] = 1
                }
            }
        })
        return Object.keys(dates).map(d => {
            return {
                date: d, count: dates[d]
            }
        })
            .sort((a, b) => {
                return moment(a.date) - moment(b.date);
            })
            .map(d => {
                return {
                    date: d.date = moment(d.date).format("Do MMM "),
                    count: d.count
                }
            });
    }

    getClientAcquisition() {
        const today = moment()
        const clients = this.data
        const clientAcquisition = [{ name: "Past Month", count: 0 }, { name: "Past 1-6 Months", count: 0 }, { name: "Past 6-12 Months", count: 0 }]
        clients.forEach(c => {
            const diff = today.diff(c.firstContact, 'month')
            if (diff <= 1)
            {
                clientAcquisition[0].count++

            } else if (diff > 1 && diff <= 6)
            {
                clientAcquisition[1].count++
            } else if (diff > 6 && diff <= 12)
            {
                clientAcquisition[2].count++
            }
        })
        return clientAcquisition
    }
    getSalesByMonths() {
        const output = {}
        this.data.forEach(c => {
            const date = moment(c.firstContact).format("M")
            if (output[date])
            {
                output[date]++
            } else
            {
                output[date] = 1
            }
        })
        console.log('​AnalyticsCalculator -> getSalesByMonths -> output', output)
        return Object.keys(output).map(c => { return { name: moment(c).format("MMM"), count: output[c] } })


    }

    getAnalytics() {
        const analytics = {}
        analytics.hottestCountry = this.getHottestCountry()
        analytics.topSellers = this.getTopSellers()
        analytics.newClients = this.getNewClients()
        analytics.emailSent = this.data.filter(c => c["emailType"] != null).length//this.getNullEmailTypeClients()
        analytics.outStandingClients = this.data.filter(c => !c["sold"]).length //this.getOutStandingClients()
        analytics.salesBy = {
            country: this.getSalesBy("country"),
            owner: this.getSalesBy("owner"),
            emailType: this.getSalesBy("emailType"),
            month: this.getSalesByMonths()
        }
        analytics.past30Sales = this.getPast30Sales()
        analytics.clientAcquisition = this.getClientAcquisition()
        return analytics
    }
}

module.exports = AnalyticsCalculator