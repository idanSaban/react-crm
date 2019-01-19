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
        // for (let i in sellers)
        // {
        //     sellersCounts.push({ seller: i, count: sellers[i] })
        // }

        sellers.sort(function (a, b) {
            return b.count - a.count;
        });

        return sellers.splice(0, 4)
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
        return analytics
    }
}

module.exports = AnalyticsCalculator