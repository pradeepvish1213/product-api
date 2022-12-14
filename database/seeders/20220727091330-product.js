'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('products', [
            {
                "id": 1,
                "name": "Kawasaki Ninja 650",
                "price": 10.5,
                "description": null,
                "isDeleted": 0,
                "productViewed": 0,
                "createdDate": "2022-07-07 00:00:00",
                "updatedDate": "2022-07-07 00:00:00",
                "deletedDate": null,
                "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
                "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            {
                "id": 2,
                "name": "Kawasaki Ninja 750",
                "price": 11.75,
                "description": null,
                "isDeleted": 0,
                "productViewed": 0,
                "createdDate": "2022-07-07 00:00:00",
                "updatedDate": "2022-07-07 00:00:00",
                "deletedDate": null,
                "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
                "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            {
                "id": 3,
                "name": "Kawasaki Ninja 850",
                "price": 12.33,
                "description": null,
                "isDeleted": 0,
                "productViewed": 0,
                "createdDate": "2022-07-07 00:00:00",
                "updatedDate": "2022-07-07 00:00:00",
                "deletedDate": null,
                "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
                "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            {
                "id": 4,
                "name": "Kawasaki Ninja 950",
                "price": 14.15,
                "description": null,
                "isDeleted": 0,
                "productViewed": 0,
                "createdDate": "2022-07-07 00:00:00",
                "updatedDate": "2022-07-07 00:00:00",
                "deletedDate": null,
                "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
                "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            {
                "id": 5,
                "name": "Kawasaki Ninja 1000",
                "price": 17.95,
                "description": null,
                "isDeleted": 0,
                "productViewed": 0,
                "createdDate": "2022-07-07 00:00:00",
                "updatedDate": "2022-07-07 00:00:00",
                "deletedDate": null,
                "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
                "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            {
                "id": 6,
                "name": "Kawasaki Ninja 12R",
                "price": 21.75,
                "description": null,
                "isDeleted": 0,
                "productViewed": 0,
                "createdDate": "2022-07-07 00:00:00",
                "updatedDate": "2022-07-07 00:00:00",
                "deletedDate": null,
                "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
                "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            {
                "id": 7,
                "name": "Kawasaki Ninja 14R",
                "price": 31,
                "description": null,
                "isDeleted": 0,
                "productViewed": 0,
                "createdDate": "2022-07-07 00:00:00",
                "updatedDate": "2022-07-07 00:00:00",
                "deletedDate": null,
                "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
                "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP'),
            }
        ])
    },

    async down(queryInterface) {
        return queryInterface.bulkDelete('products')
    }
};
