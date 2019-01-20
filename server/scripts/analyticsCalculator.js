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
        sellers = Object.keys(sellers).map(s => { return { seller: s, count: sellers[s] } })


        sellers.sort(function (a, b) {
            return b.count - a.count;
        });

        return sellers.splice(0, 3)
    }
    getSalesByCountry() {
        const countrys = {}
        this.data.forEach(c => {
            // console.log(c.country)
            if (countrys[c.country])
            {
                countrys[c.country]++
            } else
            {
                countrys[c.country] = 1
            }
        })
        return Object.keys(countrys).map(c => { return { name: c, count: countrys[c] } })
    }
    getHottestCountry() {
        const countrys = this.getSalesByCountry()
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
            const firstContact = moment(c.firstContact)//.format("MM-DD-YYYY")
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

    is(something) {
        const clients = this.data
        return clients.filter(c => c[something]).length
    }

    getAnalytics() {
        const analytics = {}
        analytics.hottestCountry = this.getHottestCountry()
        analytics.topSellers = this.getTopSellers()
        analytics.newClients = this.getNewClients()
        analytics.emailSent = this.is("emailType")//this.getNullEmailTypeClients()
        analytics.outStandingClients = this.is("sold") //this.getOutStandingClients()
        analytics.salesByCountry = this.getSalesByCountry()
        analytics.past30Sales = this.getPast30Sales()
        analytics.clientAcquisition = this.getClientAcquisition()
        return analytics
    }
}

module.exports = AnalyticsCalculator