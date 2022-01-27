// Inspection Lead Creation Test Suite
import "/cypress/support/commands";
import {getRndNumber} from '../Random Number Generator/Random_Number_Generator'

describe('Lead Creation', function() {

    beforeEach( function () {
        cy
            .login("admin@dubizzle.com", "Super@321")

    })

    it('should Create a lead', function () {

        // Clicking Add Lead Button
        cy.get(':nth-child(3) > .sidebar-header').click()
        cy.get('.btn-primary > .text').click()

        //Generating Value for name and populating it
        cy
            .get(':nth-child(1) > .col-sm-9 > .form-control')
            .type("Test Lead " + getRndNumber(0o0, 99))

        //Generating Value for Phone and populating it
        cy
            .get(':nth-child(3) > .col-sm-9 > .form-control')
            .type('00971' + getRndNumber(0o00000, 999999))

        //Selecting City
        cy.get('#City').select('Dubai')

        //Selecting Lead Source
        const random_lead_source = getRndNumber(0, 10)
        cy
            .get(':nth-child(6) > .col-sm-9 > :nth-child(1) > .rbt > .rbt-input-hint-container > .rbt-input-main')
            .click()
        cy
            .get(`#rbt-menu-item-${random_lead_source} > .dropdown-item`)
            .click({force : true})

        //Filling Lead Type
        const random_lead_type = getRndNumber(2, 3)
        cy
            .get('.form-group-x > .col-sm-9 > :nth-child(1) > .rbt > .rbt-input-hint-container > .rbt-input-main')
            .click()
        cy
            .get(`#rbt-menu-item-${random_lead_type} > .dropdown-item > span`)
            .click()

        if(random_lead_type === 3)
        {
            cy.get('#string_type > .col-sm-9 > .form-control').type('test')
        }

        //Clicking Submit
        cy.get('.btn > span').click()


    });
})